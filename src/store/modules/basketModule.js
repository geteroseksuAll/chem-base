import axios from "axios";
import store from "..";

export default {
  state: { basketAllItems: [], token: localStorage.getItem("token") || "" },
  getters: { getBasketAllItems: ({ basketAllItems }) => basketAllItems },
  mutations: {
    changeBasketAllItems(state, data) {
      state.basketAllItems = data;
    },
    deleteItemById(state, id) {
      state.basketAllItems = state.basketAllItems.filter(
        (item) => item.productDTO.id != id
      );
    },
  },
  actions: {
    async getBasketAllItemsRequest() {
      const headers = {
        Authorization: localStorage.getItem("token"),
      };
      const result = await axios.get("http://5.35.84.50:8080/api/v1/basket", {
        headers: headers,
      });
      const allItems = result.data;
      store.commit("changeBasketAllItems", allItems);
      return allItems;
    },

    async deleteItemFromCart(context, { id }) {
      const params = { id: id };
      const headers = {
        Authorization: localStorage.getItem("token"),
      };
      const result = await axios.delete(`http://5.35.84.50:8080/api/v1/basket`, {
        headers: headers,
        params,
      });
      context.commit("deleteItemById", id);
      return result;
    },

    async setItemToCart(context, { id }) {
      const headers = {
        Authorization: localStorage.getItem("token"),
      };
      const result = await axios.get(
        `http://5.35.84.50:8080/api/v1/catalog/${id}/add-to-cart`,
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
        `http://5.35.84.50:8080/api/v1/basket`,
        params,
        {
          headers: headers,
        }
      );
      return result;
    },

    async setItemUnits(context, { id, units }) {
      const headers = {
        Authorization: localStorage.getItem("token"),
      };
      const params = {
        productId: id,
        units: units,
      };
      const result = await axios.patch(
        `http://5.35.84.50:8080/api/v1/basket`,
        params,
        {
          headers: headers,
        }
      );
      return result;
    },
  },
};
