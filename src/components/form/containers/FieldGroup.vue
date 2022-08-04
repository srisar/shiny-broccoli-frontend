<template>
	<div class="flex w-full flex-col gap-1 text-black-800">
		<div class="flex gap-1">
			<span>{{ label }}</span>
			<span v-if="required" class="text-error">*</span>
		</div>
		<slot></slot>
	</div>
</template>

<script setup lang="ts">
/* -------------------------------------------------------------------------- */
/* region Props, Emits */

import { computed } from "vue";
import { isEmpty, join, pull } from "lodash";

interface Props {
	label?: string;
	lg?: boolean;
	required?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	label: "Field name",
});

/* endregion */
/* --------- */
</script>

<style scoped></style>
