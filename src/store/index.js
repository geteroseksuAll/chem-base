import { createStore } from "vuex";
import searchList from "./modules/searchList";
import authService from "./modules/auth.service";

const store = new createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    searchList: searchList,
    authService,
  },
});

export default store;
