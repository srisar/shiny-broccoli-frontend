import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/index.routes";

import "./assets/main.scss";
import { AxiosService } from "@/services/axios_service";
import AppInfo from "@/utilities/AppInfo";
import { AuthService } from "@/services/auth_service";

/*
 * Init Axios service
 */

AxiosService.init({ baseURL: AppInfo.getApiBaseURL() });

/*
 * Init Auth service
 */

AuthService.init();

/*
 * Create Vue instance
 */

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
