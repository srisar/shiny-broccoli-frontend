import { defineStore } from "pinia";

export const useStoreLayout = defineStore("Layout", {
	state: () => ({
		sidebarVisible: true,

		sidebarClasses: "",
		mainContentClasses: "",
	}),

	getters: {
		isSidebarVisible(state) {
			return state.sidebarVisible;
		},

		getSidebarClasses(state) {
			if (state.sidebarVisible) {
				return "w-72";
			} else {
				return "-translate-x-full";
			}
		},

		getMainContentClasses(state) {
			if (state.sidebarVisible) {
				return "lg:ml-72";
			} else {
				return "ml-0";
			}
		},
	},

	actions: {
		toggleSidebar() {
			this.sidebarVisible = !this.isSidebarVisible;
		},
	},
});
