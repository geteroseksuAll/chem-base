import axios from "axios";
import store from "..";

export default {
  state: { basketAllItems: [], token: localStorage.getItem("token") || "" },
  getters: { getBasketAllItems: ({ basketAllItems }) => basketAllItems },
  mutations: {
    changeBasketAllItems(state, data) {
      state.basketAllItems = data;
    },
  },
  actions: {
    async getBasketAllItemsRequest() {
      const headers = {
        Authorization: localStorage.getItem("token"),
      };
      const result = await axios.get("http://localhost:7000/api/v1/basket", {
        headers: headers,
      });
      const allItems = result.data;
      store.commit("changeBasketAllItems", allItems);
      return allItems;
    },
    async setItemToCart(context, { id }) {
      const headers = {
        Authorization: localStorage.getItem("token"),
      };
      const result = await axios.get(
        `http://localhost:7000/api/v1/catalog/${id}/add-to-cart`,
        {
          headers: headers,
        }
      );

      return result;
    },
    async setItemAmount(context, { id, count }) {
      const headers = {
        Authorization: localStorage.getItem("token"),
      };
      const params = {
        productId: id,
        count: count,
      };
      const result = await axios.patch(
        `http://localhost:7000/api/v1/basket`,
        params,
        {
          headers: headers,
        }
      );
      return result;
    },
  },
};
