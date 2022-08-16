<template>
	<BaseAppLayout>
		<div v-if="storeSuppliers.isSuppliersFetched" class="divide-y divide-primary-500 border border-t border-primary-500">
			<SupplierCard v-for="s in storeSuppliers.getSuppliers" :supplier="s" />
		</div>
	</BaseAppLayout>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from "vue";
import BaseAppLayout from "@/layout/BaseAppLayout.vue";
import { useStoreSuppliers } from "@/stores/suppliers/suppliers.store";
import { useRouter } from "vue-router";
import SupplierCard from "@/views/suppliers/all/components/SupplierCard.vue";

/* -------------------------------------------------------------------------- */
/* region Stores, Routes */

const router = useRouter();
const storeSuppliers = useStoreSuppliers();

/* endregion */
/* --------- */

/* -------------------------------------------------------------------------- */
/* region Init */

onMounted(async () => {
	try {
		await storeSuppliers.fetchSuppliers();
	} catch (e) {}
});

/* endregion */
/* --------- */
</script>

<style scoped></style>
