import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

export class AxiosService {
	private static CONFIG: AxiosRequestConfig;
	private static AXIOS: AxiosInstance;

	static init(config: AxiosRequestConfig) {
		AxiosService.CONFIG = config;
		AxiosService.AXIOS = axios.create(AxiosService.CONFIG);
	}

	static setAuthHeader(authToken: string) {
		AxiosService.AXIOS.defaults.headers.common["Authorization"] = `Bearer ${authToken}`;
	}

	static instance() {
		return AxiosService.AXIOS;
	}
}
