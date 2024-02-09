import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import CatalogItem from "@/pages/CatalogItem.vue";
import CatalogPage from "@/pages/Catalog.vue";
import SecureBlock from "@/pages/Secure.vue";

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
  {
    path: "/user",
    name: "SecureBlock",
    component: SecureBlock,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
