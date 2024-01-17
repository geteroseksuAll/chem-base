import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import Store from "vuex";
import axios from "axios";
import VueAxios from "vue-axios";

loadFonts();

createApp(App)
  .use(router)
  .use(vuetify)
  .use(Store)
  .use(VueAxios, axios)
  .mount("#app");
