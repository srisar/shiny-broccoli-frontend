<template>
	<div class="flex w-full">
		<!-- Start: left side -->
		<div class="flex-1"></div>
		<!-- End: left side -->

		<!-- Start: right side -->
		<div>
			<CurrentUser />
		</div>
		<!-- End: right side -->
	</div>
</template>

<script setup lang="ts">
import CurrentUser from "@/components/navbar/CurrentUser.vue";
</script>

<style scoped></style>
