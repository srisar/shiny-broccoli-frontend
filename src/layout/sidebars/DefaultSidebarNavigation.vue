<template>
	<!-- Start: Link Group -->
	<sidebar-link-group>
		<!--  -->
		<template #title>Pages</template>
		<!--  -->
		<sidebar-link :to="{ name: 'dashboard' }">
			<template #icon>
				<icon-dashboard />
			</template>
			Dashboard
		</sidebar-link>

		<sidebar-link to="/about">
			<template #icon>
				<icon-about />
			</template>
			About
		</sidebar-link>
		<!--  -->
	</sidebar-link-group>
	<!-- End: Link Group -->

	<SidebarLinkGroup>
		<!--  -->
		<template #title>Suppliers</template>
		<!--  -->
		<SidebarLink :to="{ name: 'suppliers/all' }">
			<template #icon>
				<IconSuppliers />
			</template>
			All suppliers
		</SidebarLink>

		<sidebar-link to="/b">
			<template #icon>
				<icon-add />
			</template>
			Add New
		</sidebar-link>
		<!--  -->
	</SidebarLinkGroup>
</template>

<script setup lang="ts">
import IconAbout from "@/assets/icons/sidebar/IconAbout.vue";
import SidebarLinkGroup from "@/components/sidebar/SidebarLinkGroup.vue";
import SidebarLink from "@/components/sidebar/SidebarLink.vue";
import IconItems from "@/assets/icons/sidebar/IconItems.vue";
import IconAdd from "@/assets/icons/sidebar/IconAdd.vue";
import IconDashboard from "@/assets/icons/sidebar/IconDashboard.vue";
import IconSuppliers from "@/assets/icons/sidebar/IconSuppliers.vue";
</script>

<style scoped></style>
