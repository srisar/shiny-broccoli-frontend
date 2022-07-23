<template>
	<!-- Start: Link Group -->
	<sidebar-link-group>
		<!--  -->
		<template #title>Pages</template>
		<!--  -->
		<sidebar-link to="/">
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

	<sidebar-link-group>
		<!--  -->
		<template #title>Stocks</template>
		<!--  -->
		<sidebar-link to="/">
			<template #icon>
				<icon-items />
			</template>
			List Items
		</sidebar-link>

		<sidebar-link to="/about">
			<template #icon>
				<icon-add />
			</template>
			Add New
		</sidebar-link>
		<!--  -->
	</sidebar-link-group>
</template>

<script setup lang="ts">
import IconHome from "@/assets/icons/sidebar/IconHome.vue";
import IconAbout from "@/assets/icons/sidebar/IconAbout.vue";
import SidebarLinkGroup from "@/components/sidebar/SidebarLinkGroup.vue";
import SidebarLink from "@/components/sidebar/SidebarLink.vue";
import IconItems from "@/assets/icons/sidebar/IconItems.vue";
import IconAdd from "@/assets/icons/sidebar/IconAdd.vue";
import IconDashboard from "@/assets/icons/sidebar/IconDashboard.vue";
</script>

<style scoped></style>
