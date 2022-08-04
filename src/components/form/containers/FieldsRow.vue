<template>
	<div :class="computedClasses" class="mb-3 grid gap-3">
		<slot></slot>
	</div>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import { join } from "lodash";

/* -------------------------------------------------------------------------- */
/* region Props */

/* endregion */
/* --------- */

/* -------------------------------------------------------------------------- */
/* region Computed Classes */

const computedClasses = computed(() => {
	let classes: string[] = [];

	return join(classes, " ");
});

/* endregion */
/* --------- */
</script>

<style scoped></style>
