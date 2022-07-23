<template>
	<div class="menu_section my-5 flex flex-col">
		<header class="mb-1 px-3 text-sm uppercase text-zinc-50">
			<slot name="title"></slot>
		</header>

		<slot></slot>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
