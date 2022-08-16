import { User } from "@/_backend/models/user";

export const userRoutes = [
	{
		path: "/user/:userId",
		name: "user/manage",
		component: () => import("@/views/users/current_user/PageManageCurrentUser.vue"),
		meta: {
			requiresAuth: true,
			accessList: User.ROLE_LIST_ALL,
		},
	},
];
