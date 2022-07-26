<template>
	<div class="flex w-full flex-col">
		<label class="text-primary-content mb-1">{{ label }}</label>
		<input
			:type="inputType"
			v-model="value"
			class="mt-1 block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-50"
			:readonly="readonly"
			:class="classList"
		/>
	</div>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";
import { join } from "lodash";

interface Props {
	label?: string;
	modelValue?: string;
	inputType?: "text" | "number" | "email" | "password";
	invalid?: boolean;
	readonly?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
	label: "Text Label",
	inputType: "text",
	invalid: false,
	readonly: false,
});

const emits = defineEmits(["update:modelValue"]);

/* -------------------------------------------------------------------------- */
/* region Model Binding */

const value = computed({
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
/* region Variant Classes */

const classList = computed(() => {
	const classList: string[] = [];

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
