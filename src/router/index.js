import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import CatalogItem from "@/pages/CatalogItem.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/catalog",
    name: "catalog",
    component: "Catalog",
  },
  {
    path: "/catalog/:id",
    name: "catalog_item",
    component: CatalogItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
