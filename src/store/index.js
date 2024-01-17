import Vue from "vue";
import Vuex from "vuex";
import { createStore } from "vuex";

Vue.use(Vuex);

const store = new createStore({
  state: {
    items: [
      {
        id: 1,
        name: "Калий перманганат",
        cas: "7722-64-7",
        formula: "KMnO4",
        price: "2000",
        danger_status: "Да",
        country: "Россия",
        package: "84",
        type_of_product: "Кислота",
        variants: "1л.,18кг.",
        qualification: "ХЧ (химически чистый)",
        gost: "ГОСТ 4204-77",
      },
      {
        id: 2,
        name: "Калий перманганат num 2",
        cas: "7722-64-7",
        formula: "KMnO4",
        price: "2000",
        danger_status: "Да",
        country: "Россия",
        package: "84",
        type_of_product: "Кислота",
        variants: "1л.,18кг.",
        qualification: "ХЧ (химически чистый)",
        gost: "ГОСТ 4204-77",
      },
      {
        id: 3,
        name: "Калий перманганат num 3",
        cas: "7722-64-7",
        formula: "KMnO4",
        price: "2000",
        danger_status: "Да",
        country: "Россия",
        package: "84",
        type_of_product: "Кислота",
        variants: "1л.,18кг.",
        qualification: "ХЧ (химически чистый)",
        gost: "ГОСТ 4204-77",
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
