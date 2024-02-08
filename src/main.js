import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";

loadFonts();

const app = createApp(App);

app.config.globalProperties.$http = axios;

const token = localStorage.getItem("token");

if (token) {
  app.config.globalProperties.$http.defaults.headers.common["Authorization"] =
    token;
}

app.use(vuetify).use(store).use(router).use(VueAxios, axios).mount("#app");
