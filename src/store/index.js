import { createStore } from "vuex";
import searchList from "./modules/searchList";
import authService from "./modules/auth.service";
import basketModule from "./modules/basketModule";
import catalogModule from "./modules/catalogModule";
import userProfile from "./modules/userProfile";

const store = new createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    searchList: searchList,
    authService,
    basketModule,
    catalogModule,
    userProfile,
  },
});

export default store;
