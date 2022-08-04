<template>
	<base-app-layout>
		<!-- Start: Testing dropdown -->
		<div class="flex justify-center gap-3">
			<InputButton variant="secondary"> Hello button </InputButton>
			<InputButton variant="default"> <IconUserEdit class="h-5 w-5" /> Hello button </InputButton>
			<InputButton variant="ghost"> Hello button </InputButton>
			<InputButton variant="link"> Hello button </InputButton>
		</div>
		<!-- End: Testing dropdown -->
	</base-app-layout>
</template>

<script setup lang="ts">
import BaseAppLayout from "@/layout/BaseAppLayout.vue";
import DropdownMenu from "@/components/dropdowns/DropdownMenu.vue";
import InputButton from "@/components/form/InputButton.vue";
import IconHome from "@/assets/icons/sidebar/IconHome.vue";
import IconItems from "@/assets/icons/sidebar/IconItems.vue";
import IconUserEdit from "@/assets/icons/IconUserEdit.vue";
</script>

<style scoped></style>
