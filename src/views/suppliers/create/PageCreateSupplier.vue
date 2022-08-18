<template>
	<BaseAppLayout>
		<PageContainer class="mx-auto max-w-2xl">
			<template #header> Add a supplier</template>

			<!-- Start: Add form -->
			<div>
				<FieldsRow class="grid-cols-1 lg:grid-cols-2 mb-3">
					<FieldGroup label="Supplier name">
						<TextField v-model="supplier.supplier_name" :invalid="v.supplier_name.$error" />
						<LabelField label-type="error" v-if="v.supplier_name.$error" v-for="error in v.supplier_name.$errors">{{ error.$message }}</LabelField>
					</FieldGroup>

					<FieldGroup label="Phone">
						<TextField v-model="supplier.phone" />
					</FieldGroup>
				</FieldsRow>

				<FieldsRow class="grid-cols-1 mb-3">
					<FieldGroup label="Address">
						<TextAreaField rows="3" v-model="supplier.address" />
					</FieldGroup>
				</FieldsRow>

				<FieldsRow class="grid-cols-1 lg:grid-cols-2">
					<FieldGroup label="Email">
						<TextField placeholder="john.doe@gmail.com" v-model="supplier.email" />
					</FieldGroup>
				</FieldsRow>
			</div>

			<FormFooter>
				<InputButton label="Save" variant="default" @click="handleSave()"></InputButton>
				<InputButton label="Cancel" variant="ghost"></InputButton>
			</FormFooter>

			<!-- End: Add form -->
		</PageContainer>
	</BaseAppLayout>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import BaseAppLayout from "@/layout/BaseAppLayout.vue";
import PageContainer from "@/components/containers/PageContainer.vue";
import FieldsRow from "@/components/form/containers/FieldsRow.vue";
import FieldGroup from "@/components/form/containers/FieldGroup.vue";
import TextField from "@/components/form/fields/TextField.vue";
import LabelField from "@/components/form/fields/LabelField.vue";
import TextAreaField from "@/components/form/fields/TextAreaField.vue";
import FormFooter from "@/components/containers/FormFooter.vue";
import InputButton from "@/components/form/InputButton.vue";
import type { SupplierPostData } from "@/_backend/models/suppliers/SupplierPostData";
import useVuelidate from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

/* -------------------------------------------------------------------------- */
/* region Data, Ui */

const supplier = reactive<SupplierPostData>({
	address: "",
	email: "",
	phone: "",
	supplier_name: "",
});

const rules = {
	supplier_name: { required },
	email: { required, email },
};

const v = useVuelidate<SupplierPostData>(rules, supplier);

/* endregion */
/* --------- */

/* -------------------------------------------------------------------------- */
/* region Save */

const handleSave = async () => {
	const validated = await v.value.$validate();
	if (!validated) {
		console.log("validation failed");
		return false;
	}

	try {
		console.log("saving...");
	} catch (e) {}
};

/* endregion */
/* --------- */
</script>

<style scoped></style>
