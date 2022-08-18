import { User } from "@/_backend/models/user";

export const suppliersRoutes = [
	{
		path: "/suppliers/all",
		name: "suppliers/all",
		component: () => import("@/views/suppliers/all/PageViewSuppliers.vue"),
		meta: {
			requiresAuth: true,
			accessList: User.ROLE_LIST_ADMIN_MANAGER,
		},
	},
	{
		path: "/suppliers/create",
		name: "suppliers/create",
		component: () => import("@/views/suppliers/create/PageCreateSupplier.vue"),
		meta: {
			requiresAuth: true,
			accessList: User.ROLE_LIST_ADMIN_MANAGER,
		},
	},
];
