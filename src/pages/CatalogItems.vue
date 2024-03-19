<template>
  <div class="items_block">
    <div class="items_content">
      <div class="items_pointers">
        <router-link to="/">
          <button type="button" class="basket_pointer">
            главная
          </button></router-link
        ><router-link to="/catalog">
          <button type="button" class="basket_pointer">
            каталог
          </button></router-link
        >
      </div>
      <div class="item_list_main-category">
        {{
          this.$store.getters.getProductsList[0]?.subsubcategoryDTO.russianName
        }}
      </div>
      <div class="items_list_block">
        <div class="items_list">
          <router-link
            style="color: inherit; text-decoration: none"
            class="item"
            v-for="item in this.$store.getters.getProductsList"
            :key="item.id"
            :to="'/catalog/product/' + item.id"
          >
            <img v-if="item.image" :src="item.image" class="item_image" />
            <img v-else src="/icons/mockupIcon.png" class="item_image" />
            <div class="item_info">
              <div class="item_name">{{ item?.commonName }}</div>
              <div class="item_cas">{{ item?.casNumbers.join() }}</div>
              <div class="item_description">{{ item?.description }}</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CatalogItems",

  methods: {
    ...mapActions(["getProductsListRequest"]),
    getItems() {
      this.getProductsListRequest({
        name: this.$route.params.category,
      });
    },
  },

  mounted() {
    this.getItems();
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  width: 23%;
  flex-direction: column;
  height: auto;
}
.item_image {
}
.item_list_main-category {
  display: flex;
  width: 100%;
  border-top: 1px solid #cdcdcd;
  font-size: 48px;
  font-weight: 700;
  line-height: 64px;
  letter-spacing: -0.02em;
}
.items_pointers {
  margin: 20px;
}

.basket_pointer {
  margin: 0 10px 0 0;
  border: 1px solid #cdcdcd;
  padding: 5px 20px;
  border-radius: 64px;
  color: gray;
  font-size: 14px;
}
.items_block {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.items_content {
  display: flex;
  width: 90%;
  flex-direction: column;
}
</style>
