<template>
	<BaseAppLayout>
		<PageContainer class="mx-auto max-w-2xl" v-if="userToUpdate">
			<template #header> Manage User</template>

			<!-- Start: Form Fields -->
			<div class="mb-10">
				<FieldsRow class="grid-cols-2">
					<FieldGroup label="Username">
						<TextField v-model="userToUpdate.username" readonly />
						<LabelField>Username cannot be changed</LabelField>
					</FieldGroup>
				</FieldsRow>

				<FieldsRow class="grid-cols-2">
					<FieldGroup label="Full name">
						<TextField v-model="userToUpdate.full_name" :invalid="v.full_name.$error" />
						<LabelField v-if="v.full_name.$error" label-type="error" v-for="error in v.full_name.$errors">{{ error.$message }}</LabelField>
					</FieldGroup>

					<FieldGroup label="Email">
						<TextField v-model="userToUpdate.email" :invalid="v.email.$error" />
						<LabelField v-if="v.email.$error" label-type="error" v-for="error in v.email.$errors">{{ error.$message }}</LabelField>
					</FieldGroup>
				</FieldsRow>
			</div>
			<!-- End: Form Fields -->

			<FormFooter>
				<InputButton label="Update" variant="default" @click="onUpdate()"></InputButton>
				<InputButton label="Cancel" variant="ghost"></InputButton>
			</FormFooter>

			<div class="mt-5">
				<LabelField label-type="warning" lg>
					<IconInfo class="icon" />
					You will have to sign in again after updating user details.
				</LabelField>
			</div>

			<!-- End: content -->
		</PageContainer>
	</BaseAppLayout>
</template>

<script setup lang="ts">
import BaseAppLayout from "@/layout/BaseAppLayout.vue";
import { reactive } from "vue";
import { AuthService } from "@/services/auth_service";
import PageContainer from "@/components/containers/PageContainer.vue";
import InputText from "@/components/form/InputText.vue";
import FormFooter from "@/components/containers/FormFooter.vue";
import InputButton from "@/components/form/InputButton.vue";
import FieldsRow from "@/components/form/containers/FieldsRow.vue";
import FieldGroup from "@/components/form/containers/FieldGroup.vue";
import TextField from "@/components/form/fields/TextField.vue";
import LabelField from "@/components/form/fields/LabelField.vue";
import type { IUserPostData } from "@/_backend/req_res_interfaces/user/IUserPostData";
import { EnumUserRole } from "@/_backend/req_res_interfaces/user/EnumUserRole";
import { EnumUserStatus } from "@/_backend/req_res_interfaces/user/EnumUserStatus";
import useVuelidate from "@vuelidate/core";
import { required, email, helpers } from "@vuelidate/validators";
import { ApiUsers } from "@/_backend/api/ApiUsers";
import IconInfo from "@/assets/icons/IconInfo.vue";

/* -------------------------------------------------------------------------- */
/* region Data */

const userToUpdate: IUserPostData = reactive({
	id: 0,
	username: "",
	email: "",
	full_name: "",
	profile_pic: "",
	role: EnumUserRole.user,
	status: EnumUserStatus.active,
});

const rules = {
	full_name: {
		required: helpers.withMessage("Full name is required", required),
	},
	email: {
		required: helpers.withMessage("Email is required", required),
		email: email,
	},
};

const v = useVuelidate<IUserPostData>(rules, userToUpdate);

/* endregion */
/* --------- */

/* -------------------------------------------------------------------------- */
/* region Init User */

const user = AuthService.getUser();
if (user !== null) {
	userToUpdate.id = user.id;
	userToUpdate.username = user.username;
	userToUpdate.full_name = user.full_name;
	userToUpdate.email = user.email;
	userToUpdate.profile_pic = user.profile_pic;
	userToUpdate.role = user.role;
	userToUpdate.status = user.status;
}

/* endregion */
/* --------- */

/* -------------------------------------------------------------------------- */
/* region Update user */

const onUpdate = async () => {
	const validated = await v.value.$validate();
	if (!validated) return false;

	try {
		await ApiUsers.updateUser(userToUpdate);
	} catch (e) {}
};

/* endregion */
/* --------- */
</script>

<style scoped></style>
