import { isEmpty } from "lodash";
import { AxiosService } from "@/services/axios_service";
import { User } from "@/_backend/models/user";

const KEY_USER = "x-sb-user";
const KEY_JWT_TOKEN = "x-sb-jwt";

export class AuthService {
	private static USER: object;
	private static TOKEN: string;

	static init() {
		console.log("Auth: init...");

		this.readFromStore();

		if (!isEmpty(this.TOKEN)) {
			AxiosService.setAuthHeader(this.TOKEN);
			console.log("User restored...");
		}
	}

	/**
	 * Login
	 * @param username
	 * @param password
	 */
	static async login(username: string, password: string) {
		const response = await AxiosService.instance().post("/auth/login.php", {
			username,
			password,
		});

		const token = response.data["payload"]["jwt"];
		const user = new User(response.data["payload"]);

		this.writeToStore(user, token);

		this.init();
	}

	/**
	 * Logout
	 */
	static logout() {
		this.clearLocalStorage();
		this.readFromStore();
	}

	/**
	 * Check if user auth is still valid
	 */
	static async isLoggedIn() {
		if (isEmpty(this.USER) || isEmpty(this.TOKEN)) {
			return false;
		}

		try {
			await AxiosService.instance().post("/auth/authenticate.php");
			return true;
		} catch (e) {
			return false;
		}
	}

	/**
	 * Gets the current logged-in user instance
	 */
	static getUser(): User | null {
		if (!isEmpty(this.USER)) {
			return new User(this.USER);
		}
		return null;
	}

	/*
	 * -------------------------------------------------------
	 * Helper Methods
	 *
	 */

	private static writeToStore(user: object, token: string) {
		localStorage.setItem(KEY_USER, user.toString());
		localStorage.setItem(KEY_JWT_TOKEN, token);

		this.readFromStore();
	}

	private static readFromStore() {
		this.USER = JSON.parse(localStorage.getItem(KEY_USER) ?? "{}");
		this.TOKEN = localStorage.getItem(KEY_JWT_TOKEN) ?? "";
	}

	private static clearLocalStorage() {
		localStorage.removeItem(KEY_USER);
		localStorage.removeItem(KEY_JWT_TOKEN);
	}
}
