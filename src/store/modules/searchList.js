import axios from "axios";
import store from "..";
export default {
  state: {
    requestStatus: null,
    searchList: null,
    popularItemsList: [],
  },
  getters: {
    getSearchList: ({ searchList }) => searchList,
    getPopularItemsList: ({ popularItemsList }) => popularItemsList,
    getRequestStatus: ({ requestStatus }) => requestStatus,
  },
  mutations: {
    changeSearchList(state, data) {
      state.searchList = data;
    },
    changePopularItemsList(state, data) {
      state.popularItemsList = data;
    },
    changeRequestStatus(state, data) {
      state.requestStatus = data;
    },
  },
  actions: {
    async getPopularItemsRequest() {
      const result = await axios.get("http://localhost:7000/api/v1/catalog");
      const listOfPopularItems = result.data;

      store.commit("changePopularItemsList", listOfPopularItems);
      return listOfPopularItems;
    },
    async setTransfer(context, { params, id, price, name, amount }) {
      const headers = {
        "Content-Type": "application/json",
      };
      const result = await axios.post(
        `http://localhost:7000/api/v1/catalog/${id}`,
        { ...params, price, productName: name, amount },
        { headers: headers }
      );
      console.log(params, price, name, amount);

      if (result.status == 200) {
        store.commit("changeRequestStatus", true);
      } else {
        store.commit("changeRequestStatus", false);
      }
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
