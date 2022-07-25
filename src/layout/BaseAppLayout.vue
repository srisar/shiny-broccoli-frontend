<template>
	<slot name="sidebar">
		<DefaultSidebar />
	</slot>

	<!-- Start: Main Content -->
	<main class="" :class="storeLayout.getMainContentClasses">
		<nav class="flex h-20 items-center justify-start bg-blue-100 p-4">
			<div class="mr-5">
				<button
					class="flex h-[24px] w-[24px] items-center justify-center rounded-md bg-blue-100 hover:bg-blue-200"
					@click="storeLayout.toggleSidebar()"
				>
					<IconChevron :class="storeLayout.isSidebarVisible ? '' : 'rotate-180'" class="text-blue-800 transition-all" />
				</button>
			</div>

			<div class="flex-1">
				<slot name="navbar">
					<DefaultNavbar />
				</slot>
			</div>
		</nav>

		<div class="p-5">
			<slot></slot>
		</div>
	</main>
	<!-- End: Main Content -->

	<div
		class="sidebar_overlay bg-zinc-800/20 absolute top-0 left-0 z-40 h-full w-full lg:hidden"
		v-if="storeLayout.isSidebarVisible"
		@click="storeLayout.toggleSidebar()"
	></div>
</template>

<script setup lang="ts">
import { useStoreLayout } from "@/layout/layout_store";
import DefaultSidebar from "@/layout/sidebars/DefaultSidebar.vue";
import DefaultNavbar from "@/layout/navbar/DefaultNavbar.vue";
import IconChevron from "@/assets/icons/IconChevron.vue";

const storeLayout = useStoreLayout();
</script>

<style scoped></style>
