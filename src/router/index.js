import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import CatalogItem from "@/pages/CatalogItem.vue";
import CatalogPage from "@/pages/Catalog.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/catalog/search",
    name: "catalogSearch",
    component: CatalogPage,
  },
  {
    path: "/catalog/:id",
    name: "catalogItem",
    component: CatalogItem,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
