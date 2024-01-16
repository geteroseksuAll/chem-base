import { createApp } from "vue";
import store from "./store";

import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import router from "./router";
import axios from "axios";

loadFonts();

createApp(App).use(router).use(vuetify).use(store).use(axios).mount("#app");
