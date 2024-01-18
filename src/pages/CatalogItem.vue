<template>
  <div class="container">
    <div class="item-page_content">
      <div class="item-page-info_block">
        <div class="item-page_links">
          <button class="pages_link">В каталог</button>
          <button class="pages_link">Прекурсоры</button>
          <button class="pages_link">Калий</button>
          <button class="pages_link">Соли неорганических кислот</button>
        </div>
        <div class="item-page_information">
          <div class="item-main_info">
            <h1 class="item_title">
              {{ this.items_data.item_name }}
            </h1>
            <div class="item-info_block">
              <img class="item-info_img" src="/icons/test_image.png" alt="" />
              <ul class="item-info_list">
                <li class="item-info_text">
                  ХАРАКТЕРИСТИКИ <HeaderLangButton />
                </li>
                <li class="item-info_text">ОПИСАНИЕ <HeaderLangButton /></li>
                <li class="item-info_text">
                  ДОСТАВКА И ОПЛАТА <HeaderLangButton />
                </li>
                <li class="item-info_text">
                  ВОПРОСЫ И ОТВЕТЫ <HeaderLangButton />
                </li>
                <li class="item-info_text">ОТЗЫВЫ <HeaderLangButton /></li>
              </ul>
            </div>
            <div class="popular_items_block">
              <div class="popular_items_title">ЧАСТО ПОКУПАЮТ</div>
              <ul class="popular_items_list">
                <li v-for="item in popular_items" :key="item.id">
                  <router-link :to="{ path: '/catalog/' + item.id }"
                    ><img class="popular_item_img" :src="item.img" alt=""
                  /></router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-main_price_block">
            <div class="item-main_price_menu">
              <div class="item_cas">{{ this.items_data.item_cas }}</div>
              <div class="item_formula"></div>
              <div class="item_buy-menu"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderLangButton from "@/components/UI/icons/HeaderLangButton.vue";
export default {
  name: "CatalogItem",
  computed: {
    id() {
      console.log(this.$route.params.id);
      return this.$route.params.id;
    },
    items_data() {
      return {
        item_name: this.$store.state.items.find(
          (item) => item.id == this.$route.params.id
        ).name,
        item_cas: this.$store.state.items.find(
          (item) => item.id == this.$route.params.id
        ).cas,
        item_formula: this.$store.state.items.find(
          (item) => item.id == this.$route.params.id
        ).formula,
        item_price: this.$store.state.items.find(
          (item) => item.id == this.$route.params.id
        ).price,
        item_danger_status: this.$store.state.items.find(
          (item) => item.id == this.$route.params.id
        ).danger_status,
        item_country: this.$store.state.items.find(
          (item) => item.id == this.$route.params.id
        ).country,
        item_package: this.$store.state.items.find(
          (item) => item.id == this.$route.params.id
        ).package,
        item_type_of_product: this.$store.state.items.find(
          (item) => item.id == this.$route.params.id
        ).type_of_product,
        item_variants: this.$store.state.items.find(
          (item) => item.id == this.$route.params.id
        ).variants,
        item_qualification: this.$store.state.items.find(
          (item) => item.id == this.$route.params.id
        ).qualification,
        item_gost: this.$store.state.items.find(
          (item) => item.id == this.$route.params.id
        ).gost,
      };
    },
    popular_items() {
      let items_list = this.$store.state.items.slice(0, 4);
      console.log(items_list);
      return items_list;
    },
  },
  components: { HeaderLangButton },
};
</script>

<style lang="scss" scoped>
.popular_item_img {
  width: 200px;
  height: 200px;
}
.popular_items_list {
  display: flex;
  justify-content: space-between;
  width: 64%;
}
.popular_items_title {
  color: var(--black-base, #2c2c2c);
  font-size: 12px;
  font-style: normal;
  font-weight: 550;
  line-height: 14px; /* 116.667% */
  letter-spacing: 0.24px;
}
ul {
  list-style-type: none;
}
.item-info_block {
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin-bottom: 134px;
}
.item-info_text {
  display: flex;
  color: var(--gray-heavy, #808080);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 131.25% */
  display: flex;
  justify-content: space-between;
  padding: 16px 0px 20px 0px;
  align-items: center;
  gap: 8px;
  width: 300px;
  border-bottom: 1px solid var(--gray-UI, #cdcdcd);
}
.item-info_list {
  display: flex;
  list-style-type: none;
  flex-direction: column;
}
.item-page_content {
  margin: 16px;
  width: 90%;
}
.item_title {
  color: var(--black-base, #2c2c2c);
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px; /* 133.333% */
  letter-spacing: -0.96px;
  margin-bottom: 100px;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-page_links {
  margin-bottom: 42px;
  justify-content: left;
  display: flex;
}
.pages_link {
  color: var(--gray-heavy, #808080);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 114.286% */
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 64px;
  border: 1px solid var(--gray-UI, #cdcdcd);
}
.pages_link:not(:last-child) {
  margin-right: 8px;
}
</style>
