<template>
	<div class="">
		<span class="inline-flex items-center gap-2 rounded-md px-2 py-1" :class="computedClasses">
			<slot></slot>
		</span>
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { join } from "lodash";

/* -------------------------------------------------------------------------- */
/* region Props */

interface Props {
	labelType?: "default" | "error" | "info" | "success" | "warning";
	lg?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	labelType: "default",
});

/* endregion */
/* --------- */

/* -------------------------------------------------------------------------- */
/* region Computed Classes */

const computedClasses = computed(() => {
	let classList: string[] = [];

	if (!props.lg) {
		classList.push("text-xs");
	} else {
		classList.push("");
	}

	switch (props.labelType) {
		case "success":
			classList.push("text-success bg-success/10 ");
			break;
		case "error":
			classList.push("text-error bg-error/10 ");
			break;
		case "info":
			classList.push("text-info bg-info/10 ");
			break;
		case "warning":
			classList.push("text-warning bg-warning/10 ");
			break;
		default:
			classList.push("bg-black-100 text-black-500");
	}

	return join(classList, " ");
});

/* endregion */
/* --------- */
</script>

<style scoped></style>
