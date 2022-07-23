<template>
	<!-- Start: Sidebar -->
	<aside class="fixed z-50 flex h-full w-72 flex-col bg-zinc-700 shadow-md transition-all" :class="storeLayout.getSidebarClasses">
		<!-- Start: Sidebar Header -->
		<header class="h-20 w-full bg-white">
			<div class="flex h-full w-full items-center justify-center bg-zinc-800">
				<h1 class="text-2xl font-bold text-zinc-100">Shiny Broccoli</h1>
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

const appVersion = ref(AppInfo.appVersion);
</script>

<style scoped></style>
