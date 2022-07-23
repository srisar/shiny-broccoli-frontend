const appVersion = import.meta.env.VITE_APP_VERSION;

export default class AppInfo {
	/**
	 * Returns the app version from env file
	 */
	static get appVersion() {
		return appVersion;
	}
}
