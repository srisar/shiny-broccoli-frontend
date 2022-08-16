<template>
	<div class="bg-primary-100 px-10 py-5">
		<h2>{{ supplier.supplier_name }}</h2>
	</div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import type { SupplierGetData } from "@/_backend/models/suppliers/SupplierGetData";

interface Props {
	supplier: SupplierGetData;
}

const props = defineProps<Props>();
</script>

<style scoped></style>
