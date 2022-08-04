<template>
	<Menu as="div" class="relative inline-block">
		<!-- Start: Menu Button -->
		<MenuButton class="btn default">More</MenuButton>
		<!-- End: Menu Button -->

		<!-- Start: Menu Items -->

		<DropdownTransition>
			<MenuItems
				class="divide-gray-100 ring-black absolute right-0 mt-2 w-56 origin-top-right divide-y rounded-md bg-white shadow-lg ring-1 ring-opacity-5 focus:outline-none"
			>
				<MenuItem v-slot="{ active }" v-for="item in menuItems" :disabled="item.disabled" :key="item.label">
					<router-link :to="item.to" :class="item.disabled ? 'opacity-75' : ''" class="menu-item"> {{ item.label }}</router-link>
				</MenuItem>
			</MenuItems>
		</DropdownTransition>

		<!-- End: Menu Items -->
	</Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import { defineProps } from "vue";
import DropdownTransition from "@/components/transitions/DropdownTransition.vue";

interface IMenuItem {
	label: string;
	to: string;
	disabled?: boolean;
}

interface Props {
	menuItems?: IMenuItem[];
}

const props = withDefaults(defineProps<Props>(), {
	menuItems: () => [
		{ label: "Item 1", to: "/" },
		{ label: "Item 2", to: "/about" },
		{ label: "Item 2", to: "/", disabled: true },
	],
});
</script>

<style scoped>
.menu-item {
	@apply m-1 flex rounded p-2 hover:bg-primary-800 hover:text-white;
}
</style>
