import { createRouter, createWebHashHistory } from "vue-router";
import { AuthService } from "@/services/auth_service";
import { baseRoutes } from "@/router/base.routes";
import { userRoutes } from "@/router/users/user.routes";
import { suppliersRoutes } from "@/router/suppliers/suppliers.routes";

/**
 * RouteMeta typings
 */
declare module "vue-router" {
	interface RouteMeta {
		requiresAuth: boolean;
		accessList: string[];
	}
}

/**
 * Routes list
 */
const routes = [...baseRoutes, ...userRoutes, ...suppliersRoutes];

/**
 * Router
 */
const router = createRouter({
	history: createWebHashHistory(import.meta.env.BASE_URL),
	routes: routes,
});

/**
 * Check before each route invoke to have auth access
 * if not, redirect to login page
 */
router.beforeEach(async (to) => {
	const isLoggedIn = await AuthService.isLoggedIn();

	if (to.meta.requiresAuth && !isLoggedIn) {
		console.log("Auth failed.");
		return {
			name: "auth/login",
			query: {
				redirect: to.fullPath,
			},
		};
	} else if (to.meta["requiresAuth"] && isLoggedIn) {
		const user = AuthService.getUser();

		if (user) {
			if (!to.meta.accessList.includes(user.role)) {
				return {
					name: "auth/login",
					query: {
						redirect: to.fullPath,
						message: "Access not granted. Elevated login required.",
					},
				};
			}
		}
	}
});

export default router;
