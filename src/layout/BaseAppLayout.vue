<template>
	<slot name="sidebar">
		<DefaultSidebar />
	</slot>

	<!-- Start: Main Content -->
	<main class="" :class="storeLayout.getMainContentClasses">
		<nav class="flex h-20 items-center justify-start bg-zinc-400 p-4">
			<div class="">
				<button class="flex h-[24px] w-[24px] items-center justify-center rounded-md bg-white" @click="storeLayout.toggleSidebar()">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-[16px] w-[16px] transition-all"
						:class="storeLayout.isSidebarVisible ? '' : 'rotate-180'"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
					</svg>
				</button>
			</div>
		</nav>

		<div class="p-5">
			<slot></slot>
		</div>
	</main>
	<!-- End: Main Content -->

	<div
		class="sidebar_overlay absolute top-0 left-0 z-40 h-full w-full bg-zinc-800/20 lg:hidden"
		v-if="storeLayout.isSidebarVisible"
		@click="storeLayout.toggleSidebar()"
	></div>
</template>

<script setup lang="ts">
import { useStoreLayout } from "@/layout/layout_store";
import DefaultSidebar from "@/layout/sidebars/DefaultSidebar.vue";

const storeLayout = useStoreLayout();
</script>

<style scoped></style>
