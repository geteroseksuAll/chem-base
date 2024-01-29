import axios from "axios";
import store from "..";
export default {
  state: {
    searchList: null,
    popularItemsList: [],
  },
  getters: {
    getSearchList: ({ searchList }) => searchList,
    getPopularItemsList: ({ popularItemsList }) => popularItemsList,
  },
  mutations: {
    changeSearchList(state, data) {
      state.searchList = data;
    },
    changePopularItemsList(state, data) {
      state.popularItemsList = data;
    },
  },
  actions: {
    async getPopularItemsRequest() {
      console.log("работает");
      const result = await axios.get("http://localhost:7000/api/v1/catalog");
      const listOfPopularItems = result.data;

      store.commit("changePopularItemsList", listOfPopularItems);
      return listOfPopularItems;
    },
    async getSearchListRequest(context, params) {
      const headers = {
        "Content-Type": "application/json",
      };

      const result = await axios.post("http://localhost:7000/api/v1", params, {
        headers: headers,
      });
      const listOfItems = result.data;

      store.commit("changeSearchList", listOfItems);
      return listOfItems;
    },
  },
};
