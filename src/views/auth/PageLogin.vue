<template>
	<main class="h-screen w-full">
		<div class="container flex h-full items-center justify-center">
			<!--  -->
			<!-- Start: login form -->
			<form
				@submit.prevent="handleLogin()"
				class="w-96 items-center justify-center rounded-md border border-primary-200 shadow-lg shadow-primary-500/50"
			>
				<header class="mb-10 rounded-t bg-primary-800 p-5">
					<h1 class="mb-2 text-center text-4xl font-bold text-white">Shiny Broccoli</h1>
					<p class="text-indigo-200 text-center font-semibold uppercase text-white">POS system</p>
				</header>

				<section class="p-5">
					<FieldsRow>
						<FieldGroup label="Username">
							<TextField v-model="dataLogin.username" :invalid="v.username.$error" />
							<LabelField v-if="v.username.$error" label-type="error">{{ v.username.$errors[0].$message }}</LabelField>
						</FieldGroup>
					</FieldsRow>

					<FieldsRow>
						<FieldGroup>
							<TextField v-model="dataLogin.password" :invalid="v.password.$error" input-type="password" />
							<LabelField v-if="v.password.$error" label-type="error">{{ v.password.$errors[0].$message }}</LabelField>
						</FieldGroup>
					</FieldsRow>
				</section>

				<div v-if="responseError.hasError" class="mb-2 text-center text-sm text-error">
					{{ responseError.message }}
				</div>

				<footer class="mb-5 flex justify-end gap-3 px-5">
					<input-button variant="secondary" class="w-full" label="Login" @click="handleLogin()" />
				</footer>
			</form>
			<!-- End: login form -->
			<!--  -->
		</div>
	</main>
</template>

<script setup lang="ts">
import InputText from "@/components/form/InputText.vue";
import { reactive } from "vue";
import InputButton from "@/components/form/InputButton.vue";
import { AuthService } from "@/services/auth_service";
import { useRoute, useRouter } from "vue-router";

import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import FieldsRow from "@/components/form/containers/FieldsRow.vue";
import FieldGroup from "@/components/form/containers/FieldGroup.vue";
import TextField from "@/components/form/fields/TextField.vue";
import LabelField from "@/components/form/fields/LabelField.vue";

/* -------------------------------------------------------------------------- */
/* region Routes */

const route = useRoute();
const router = useRouter();

/* endregion */
/* --------- */

/* -------------------------------------------------------------------------- */
/* region Data */

const dataLogin = reactive({
	username: "",
	password: "",
});

const validationRules = {
	username: { required: helpers.withMessage("Username is required", required) },
	password: { required: helpers.withMessage("Password is required", required) },
};

const v = useVuelidate(validationRules, dataLogin);

const responseError = reactive({
	hasError: false,
	message: "",
});

/* endregion */
/* --------- */

/* -------------------------------------------------------------------------- */
/* region Authenticate */

const handleLogin = async () => {
	console.log("logging in...");

	const isFormValid = await v.value.$validate();

	if (!isFormValid) return false;

	try {
		await AuthService.login(dataLogin.username, dataLogin.password);

		redirectIfExist();
	} catch (e: any) {
		console.log(e.response);
		responseError.hasError = true;
		responseError.message = e.response.data.payload.error;
	}
};

/* endregion */
/* --------- */

/* -------------------------------------------------------------------------- */
/* region Redirect */

const redirectIfExist = () => {
	if ("redirect" in route.query) {
		router.push(route.query.redirect!.toString());
	} else {
		router.push("/");
	}
};

/* endregion */
/* --------- */
</script>

<style scoped></style>
