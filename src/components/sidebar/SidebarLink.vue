<template>
	<router-link
		:to="to"
		class="group mx-2 my-1 block flex items-center gap-2 rounded bg-zinc-200 px-2 py-3 font-bold uppercase text-zinc-700 transition-all hover:bg-zinc-300"
	>
		<div class="transition-all group-hover:text-amber-600">
			<slot name="icon"></slot>
		</div>
		<div class="transition-all group-hover:ml-2">
			<slot></slot>
		</div>
	</router-link>
</template>

<script setup lang="ts">
interface Props {
	to: any;
}

const props = withDefaults(defineProps<Props>(), {
	to: "/",
});
</script>

<style scoped></style>
