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
      <div class="items_list_block">
        <div class="items_list">
          <div
            class="item"
            v-for="item in this.$store.getters.getProductsList"
            :key="item.id"
          >
            <router-link :to="'/catalog/' + item.id">{{
              this.$store.getters.getProductsList
            }}</router-link>
          </div>
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
