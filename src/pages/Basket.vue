<template>
  <div class="basket_block">
    <div class="basket_block_content">
      <div class="basket_pointers">
        <button type="button" class="basket_pointer">главная</button
        ><button type="button" class="basket_pointer">корзина</button>
      </div>
      <div class="basket_items_header">Оформление заказа</div>
      <div class="basket_items_list">
        <div class="basket_items">
          <div
            class="basket_item"
            v-for="item in this.$store.getters?.getAllItemsList"
            :key="item.id"
          >
            <div class="basket_img" v-html="item.image"></div>
            <div class="basket_item_info">
              <div class="item_text_info">
                <p class="item_articule">
                  <span class="item_articule_text">артикул:</span>{{ item.id }}
                </p>
                <p class="item_name">{{ item.name }}</p>
              </div>
              <div class="item_price">{{ item.price }}</div>
            </div>
          </div>
        </div>
        <div class="basket_current_price"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BasketPage",
  methods: { ...mapActions(["getAllItemsRequest"]) },
  mounted() {
    this.getAllItemsRequest();
    console.log(this.$store.getters?.getAllItemsList);
  },
};
</script>

<style lang="scss" scoped></style>
