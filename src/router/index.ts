import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: () => import("@/views/Dashboard/PageDashboard.vue"),
		},
		{
			path: "/about",
			name: "about",
			component: () => import("@/views/Dashboard/PageAbout.vue"),
		},
	],
});

export default router;
