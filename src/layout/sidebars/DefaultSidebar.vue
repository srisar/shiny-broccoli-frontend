<template>
	<!-- Start: Sidebar -->
	<aside
		class="fixed z-50 flex h-full w-72 flex-col border-r border-r-black-200 bg-primary-900 text-white shadow-md transition-all"
		:class="storeLayout.getSidebarClasses"
	>
		<!-- Start: Sidebar Header -->
		<header class="h-20 w-full bg-primary-800">
			<div class="bg-zinc-800 flex h-full w-full items-center justify-center">
				<h1 class="h1 text-indigo-900 font-bold">Shiny Broccoli</h1>
			</div>
		</header>
		<!-- End: Sidebar Header -->

		<!-- Start: Menu -->
		<nav class="flex-1">
			<slot>
				<DefaultSidebarNavigation />
			</slot>
		</nav>
		<!-- End: Menu -->

		<footer class="py-2">
			<div class="text-center text-xs text-white">{{ appVersion }}</div>
		</footer>
	</aside>
	<!-- End: Sidebar -->
</template>

<script setup lang="ts">
import { useStoreLayout } from "@/layout/layout_store";
import DefaultSidebarNavigation from "@/layout/sidebars/DefaultSidebarNavigation.vue";
import { ref } from "vue";
import AppInfo from "@/utilities/AppInfo";

const storeLayout = useStoreLayout();

const appVersion = ref(AppInfo.getVersion());
</script>

<style scoped></style>
