<template>
	<Popover class="relative" v-if="data.user">
		<PopoverButton class="h2 h-[48px] w-[48px] rounded-full border-2 border-white bg-blue-800 text-white transition-all hover:bg-blue-700">
			{{ userInitials }}
		</PopoverButton>

		<DropdownTransition>
			<PopoverPanel class="dropdown-container right-0 mt-1 w-56 transition-all">
				<div class="my-3 flex flex-col">
					<!-- Start: Logged in user -->
					<RouterLink :to="generateUserRoute()" class="group flex w-full cursor-pointer items-center gap-3 p-3 transition-all hover:bg-blue-800">
						<aside
							class="flex h-[32px] w-[32px] items-center justify-center rounded-full bg-blue-800 text-white group-hover:bg-black-800 group-hover:text-white"
						>
							{{ userInitials }}
						</aside>
						<div>
							<h2 class="truncate text-black-700 group-hover:text-white">{{ data.user?.full_name }}</h2>
							<p class="text-sm text-black-400 group-hover:text-white">View Profile</p>
						</div>
					</RouterLink>
					<!-- End: Logged in user -->

					<!-- Start: Links -->
					<nav class="flex w-full flex-col gap-1">
						<RouterLink class="dropdown-link-item" to="/">
							<IconSettings class="h-6 w-6" />
							<div>Settings</div>
						</RouterLink>

						<RouterLink class="dropdown-link-item" :to="{ name: 'auth/logout' }">
							<IconLogout class="h-6 w-6" />
							<div>Logout</div>
						</RouterLink>
					</nav>
					<!-- End: Links -->
				</div>
			</PopoverPanel>
		</DropdownTransition>
	</Popover>
</template>

<script setup lang="ts">
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import DropdownTransition from "@/components/headless/DropdownTransition.vue";
import IconSettings from "@/assets/icons/IconSettings.vue";
import IconLogout from "@/assets/icons/IconLogout.vue";
import { AuthService } from "@/services/auth_service";
import { computed, reactive, ref } from "vue";
import type { Ref } from "vue";
import type { User } from "@/_backend/models/user";
import { split } from "lodash";

/* -------------------------------------------------------------------------- */
/* region User */

const data = reactive({
	user: AuthService.getUser(),
});

const userInitials = computed(() => {
	const names = split(data.user?.full_name, " ");
	if (names.length === 2) {
		return names[0][0] + names[1][0];
	} else {
		return names[0][0] + names[0][1];
	}
});

const generateUserRoute = () => {
	if (data.user) {
		return {
			name: "user/manage",
			params: {
				userId: data.user.id,
			},
		};
	}
	return "/";
};

/* endregion */
/* --------- */
</script>

<style scoped>
.dropdown-container {
	@apply absolute z-10 rounded border border-blue-200 bg-white shadow-lg transition-all;
}

.dropdown-link-item {
	@apply flex gap-2 px-5 py-2 uppercase transition-all hover:bg-blue-800 hover:text-white;
}
</style>
