<template>
	<main class="h-screen w-full">
		<div class="container flex h-full items-center justify-center">
			<!--  -->
			<!-- Start: login form -->
			<div class="w-96 items-center justify-center rounded-md border border-blue-200 shadow-lg shadow-blue-500/50">
				<header class="mb-10 rounded-t bg-blue-800 p-5">
					<h1 class="mb-2 text-center text-4xl text-white">Shiny Broccoli</h1>
					<p class="text-indigo-200 text-center uppercase text-white">POS system</p>
				</header>

				<section class="p-5">
					<div class="input-group">
						<input-text label="Username" v-model="dataLogin.username" :invalid="vuelidate.username.$error" />
						<span v-if="vuelidate.username.$error">{{ vuelidate.username.$errors[0].$message }}</span>
					</div>

					<div class="input-group">
						<input-text input-type="password" label="Password" v-model="dataLogin.password" :invalid="vuelidate.password.$error" />
						<span v-if="vuelidate.password.$error">{{ vuelidate.password.$errors[0].$message }}</span>
					</div>
				</section>

				<div v-if="responseError.hasError" class="mb-1 text-center text-sm text-error">
					{{ responseError.message }}
				</div>

				<footer class="mb-5 flex justify-end gap-3 px-5">
					<input-button variant="secondary" class="w-full" label="Login" @click="handleLogin()" />
				</footer>
			</div>
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
import { required } from "@vuelidate/validators";

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
	username: { required },
	password: { required },
};

const vuelidate = useVuelidate(validationRules, dataLogin);

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

	const isFormValid = await vuelidate.value.$validate();

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
