import axios from "axios";
import store from "..";
export default {
  state: {
    searchList: null,
  },
  getters: {
    getSearchList: ({ searchList }) => searchList?.items,
  },
  mutations: {
    changeSearchList(state, data) {
      state.searchList = data;
    },
  },
  actions: {
    async getSearchListRequest(context, str) {
      console.log(str);

      const result = await axios.post("http://localhost:7000/api/v1", str);
      console.log(str);
      console.log(result.data);
      const listOfItems = result.data;

      const allItems = listOfItems.items;

      store.commit("changeSearchList", allItems);
      return allItems;
    },
  },
};
