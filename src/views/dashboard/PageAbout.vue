<template>
	<BaseAppLayout>
		<template #sidebar>
			<DefaultSidebar>
				<!-- Start: Link Group -->
				<sidebar-link-group>
					<!--  -->
					<template #title>Pages</template>
					<!--  -->
					<sidebar-link :to="{ name: 'dashboard' }">
						<template #icon>
							<IconDashboard />
						</template>
						Dashboard
					</sidebar-link>

					<sidebar-link to="/about">
						<template #icon>
							<IconAbout />
						</template>
						About
					</sidebar-link>
					<!--  -->
				</sidebar-link-group>
				<!-- End: Link Group -->
			</DefaultSidebar>
		</template>
	</BaseAppLayout>
</template>

<script setup lang="ts">
import BaseAppLayout from "@/layout/BaseAppLayout.vue";
import DefaultSidebar from "@/layout/sidebars/DefaultSidebar.vue";
import SidebarLinkGroup from "@/components/sidebar/SidebarLinkGroup.vue";
import SidebarLink from "@/components/sidebar/SidebarLink.vue";
import IconDashboard from "@/assets/icons/sidebar/IconDashboard.vue";
import IconHome from "@/assets/icons/sidebar/IconHome.vue";
import IconAbout from "@/assets/icons/sidebar/IconAbout.vue";
</script>

<style></style>
