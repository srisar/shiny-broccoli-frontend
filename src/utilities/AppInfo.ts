const appTitle = import.meta.env.VITE_APP_TITLE;
const appVersion = import.meta.env.VITE_APP_VERSION;
const apiBaseURL = import.meta.env.VITE_API_BASE_URL;

export default class AppInfo {
	static getTitle() {
		return `${appTitle}`;
	}

	static getVersion() {
		return appVersion;
	}

	static getApiBaseURL() {
		return apiBaseURL;
	}
}
