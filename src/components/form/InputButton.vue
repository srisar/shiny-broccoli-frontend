<template>
	<button class="btn" :class="variant">
		{{ label }}
	</button>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

interface Props {
	variant?: "default" | "secondary" | "ghost" | "link";
	label?: string;
}

withDefaults(defineProps<Props>(), {
	variant: "default",
	label: "Button text",
});
</script>

<style scoped></style>
