import { createStore } from "vuex";
import searchList from "./modules/searchList";
import authService from "./modules/auth.service";
import basketModule from "./modules/basketModule";

const store = new createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    searchList: searchList,
    authService,
    basketModule,
  },
});

export default store;
