import { User } from "@/_backend/models/user";

export const baseRoutes = [
	{
		path: "/",
		name: "dashboard",
		component: () => import("@/views/dashboard/PageDashboard.vue"),
		meta: {
			requiresAuth: true,
			accessList: User.ROLE_LIST_ALL,
		},
	},
	{
		path: "/about",
		name: "about",
		component: () => import("@/views/dashboard/PageAbout.vue"),
		meta: {
			requiresAuth: true,
			accessList: User.ROLE_LIST_ALL,
		},
	},
	{
		path: "/login",
		name: "auth/login",
		component: () => import("@/views/auth/PageLogin.vue"),
	},
	{
		path: "/logout",
		name: "auth/logout",
		component: () => import("@/views/auth/PageLogout.vue"),
	},
];
