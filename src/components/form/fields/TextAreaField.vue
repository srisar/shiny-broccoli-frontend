<template>
	<textarea class="mt-1 block w-full rounded-md" :class="computedClasses" :readonly="readonly" v-model="model"></textarea>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { isEmpty, join, pull } from "lodash";

/* -------------------------------------------------------------------------- */
/* region Props, Emits */

interface Props {
	label?: string;
	modelValue?: string;
	invalid?: boolean;
	readonly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	label: "Text Label",
	invalid: false,
	readonly: false,
});

const emits = defineEmits(["update:modelValue"]);

/* endregion */
/* --------- */

/* -------------------------------------------------------------------------- */
/* region Model Binding */

const model = computed({
	get() {
		return props.modelValue;
	},
	set(value) {
		emits("update:modelValue", value);
	},
});

/* endregion */
/* --------- */

/* -------------------------------------------------------------------------- */
/* region Applied Classes */

const computedClasses = computed(() => {
	let classList: string[] = [];

	if (props.readonly) {
		classList.push("focus:border-black-100 focus:outline-none focus:ring-0 border-black-100 cursor-default");
	} else {
		classList.push("shadow-sm focus:ring focus:ring-opacity-50");
	}

	if (props.invalid) {
		classList.push("focus:ring-error focus:border-error border-error bg-error/10");
	} else {
		classList.push("focus:ring-primary-200 focus:border-primary-500 border-black-200");
	}

	return join(classList, " ");
});

/* endregion */
/* --------- */
</script>

<style scoped></style>
