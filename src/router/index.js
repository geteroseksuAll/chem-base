import { createRouter, createWebHistory } from "vue-router";
import MainPage from "@/pages/MainPage.vue";
import CatalogItem from "@/pages/CatalogItem.vue";
import CatalogPage from "@/pages/Catalog.vue";
import BasketPage from "@/pages/Basket.vue";
import CatalogSubCategoriesBlock from "@/pages/CatalogSubCategories";
import CatalogItems from "@/pages/CatalogItems.vue";
import CatalogMainCategoryBlock from "@/pages/CatalogMainCategory";

const routes = [
  {
    path: "/",
    name: "home",
    component: MainPage,
  },
  {
    path: "/catalog",
    name: "catalogSearch",
    component: CatalogPage,
  },
  {
    path: "/catalog/:category",
    name: "CatalogMainCategoryBlock",
    component: CatalogMainCategoryBlock,
  },
  {
    path: "/catalog/:category/:subCategory",
    name: "searchCategory",
    component: CatalogSubCategoriesBlock,
  },
  {
    path: "/catalog/:category/products",
    name: "CategoryProduct",
    component: CatalogItems,
  },
  {
    path: "/catalog/product/:id",
    name: "catalogItem",
    component: CatalogItem,
  },

  {
    path: "/basket",
    name: "basket",
    component: BasketPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
