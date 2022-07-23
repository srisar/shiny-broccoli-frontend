<template>
	<div class="menu_section flex flex-col my-5">
		<header class="text-sm px-3 text-zinc-50 uppercase mb-1">
			<slot name="title"></slot>
		</header>

		<slot></slot>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
