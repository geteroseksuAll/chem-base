import { createStore } from "vuex";
import searchList from "./modules/searchList";

const store = new createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    searchList: searchList,
  },
});

export default store;
