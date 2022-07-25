<template>
	<base-app-layout>
		<!-- Start: Testing dropdown -->
		<div class="flex justify-center">
			<dropdown-menu></dropdown-menu>
		</div>
		<!-- End: Testing dropdown -->
	</base-app-layout>
</template>

<script setup lang="ts">
import BaseAppLayout from "@/layout/BaseAppLayout.vue";
import DropdownMenu from "@/components/dropdowns/DropdownMenu.vue";
</script>

<style scoped></style>
