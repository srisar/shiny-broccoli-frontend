<template>
	<router-link
		:to="to"
		class="group mx-2 my-1 block flex h-[36px] items-center gap-4 rounded bg-primary-200 px-2 py-3 font-bold uppercase text-black-800 transition-all hover:bg-primary-100"
	>
		<div class="icon group-hover:text-amber-600 transition-all">
			<slot name="icon"></slot>
		</div>
		<div class="flex h-full items-center transition-all group-hover:ml-2">
			<slot></slot>
		</div>
	</router-link>
</template>

<script setup lang="ts">
interface Props {
	to?: string | object;
}

withDefaults(defineProps<Props>(), {
	to: "/",
});
</script>

<style scoped lang="scss">
.router-link-active {
	@apply bg-primary-100;
	.icon {
		@apply text-primary-900;
	}
}
</style>
