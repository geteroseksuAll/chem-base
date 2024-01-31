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
              {{ currentItem?.name }}
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
                <li
                  v-for="item in this.$store.getters.getPopularItemsList"
                  :key="item.id"
                >
                  <router-link
                    v-if="item.id < 5"
                    :to="{ path: '/catalog/' + item.id }"
                    ><img
                      class="popular_item_img"
                      src="/icons/test_image.png"
                      alt=""
                  /></router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-main_price_block">
            <div class="item-main_price_menu">
              <div class="item_cas item_text">
                <div class="name_info_top_items">
                  <p class="name_info_text">CAS</p>
                  <div class="top_item_info_svg">
                    <CatalogItemPropertiesSvg />
                  </div>
                </div>
                <p class="name_info_description">
                  {{ currentItem?.casNumber }}
                </p>
                <div class="name_info_bottom_items">
                  <div class="bottom_item_info_svg">
                    <CatalogItemPropertiesSvg />
                  </div>
                  <div class="copy_button_svg">
                    <CopySvgButton />
                  </div>
                </div>
              </div>
              <div class="item_cas item_text">
                <div class="name_info_top_items">
                  <p class="name_info_text">ФОРМУЛА</p>
                  <div class="top_item_info_svg">
                    <CatalogItemPropertiesSvg />
                  </div>
                </div>
                <p class="name_info_description">
                  {{ currentItem?.formula }}
                </p>
                <div class="name_info_bottom_items">
                  <div class="bottom_item_info_svg">
                    <CatalogItemPropertiesSvg />
                  </div>
                  <div class="copy_button_svg">
                    <CopySvgButton />
                  </div>
                </div>
              </div>
              <div class="item_buy-menu">
                <div class="item_buy-menu_content">
                  <div class="item_buy-menu_top">
                    <StatisticsSvgButton />
                    <p
                      class="status_buy-menu_top"
                      :style="{ background: types.orderOnly.bg }"
                    >
                      {{ types.orderOnly.title }}
                    </p>
                    <HeartIcon />
                  </div>
                  <div class="item_buy-menu_bottom">
                    <p class="item_current_price">
                      {{
                        currentItem?.price *
                        currentItemAmount *
                        currentItemValue
                      }}
                      <span class="green-text">xdr</span>
                    </p>
                    <div class="item_amount_value_choice">
                      <select
                        v-model="this.currentItemSystem"
                        name="value_amount"
                        id=""
                        class="value_amount"
                      >
                        <option value="КГ">КГ</option>
                        <option value="ГРАММ">ГРАММ</option>
                      </select>
                    </div>
                    <div class="item_current_amount">
                      <button
                        type="button"
                        class="minus"
                        id="plus"
                        @click="minusValue"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        placeholder="КГ"
                        id="item_amount"
                        class="amount"
                        v-model="this.currentItemAmount"
                      />
                      <button
                        class="plus"
                        id="plus"
                        type="button"
                        @click="plusValue"
                      >
                        +
                      </button>
                    </div>
                    <button
                      type="button"
                      class="item_buy_button"
                      @click="openForm"
                    >
                      КУПИТЬ
                    </button>
                    <DialogMenu
                      v-model:show="dialogVisible"
                      :nameItem="this.currentItem?.name"
                      :amountItem="
                        this.currentItemAmount + ' ' + this.currentItemSystem
                      "
                      :id="currentItem?.id"
                      :priceItem="
                        currentItem?.price *
                        currentItemAmount *
                        currentItemValue
                      "
                    />
                    <div class="item_bottom_bonus-text_block">
                      <p class="item_bottom_bonus-text">
                        если на вашем аккаунте есть
                        <span class="blue-text">бонусы</span>, вы сможете
                        списать их в корзине
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import DialogMenu from "../components/DialogMenu.vue";
import {
  StatisticsSvgButton,
  CopySvgButton,
  CatalogItemPropertiesSvg,
  HeaderLangButton,
  HeartIcon,
} from "@/components/UI";
export default {
  name: "CatalogItem",
  data() {
    let currentItemAmount = 1;
    let currentItemSystem = "КГ";
    var currentItemValue = 1;
    const dialogVisible = false;
    const types = {
      aLotOfItems: {
        title: "МНОГО В НАЛИЧИИ",
        bg: "rgba(20, 216, 181, 0.10)",
      },
      fewOfItems: {
        title: "МАЛО В НАЛИЧИИ",
        bg: "rgba(216, 126, 20, 0.10)",
      },
      onStock: {
        title: "НА СКЛАДЕ",
        bg: "rgba(216, 197, 20, 0.10)",
      },
      orderOnly: {
        title: "ПОД ЗАКАЗ",
        bg: "rgba(60, 20, 216, 0.10)",
      },
      outOfStock: {
        title: "НЕТ В НАЛИЧИИ",
        bg: "rgba(216, 20, 20, 0.10)",
      },
      comingSoon: {
        title: "СКОРО ПОЯВИТСЯ",
        bg: "rgba(20, 87, 216, 0.10);",
      },
    };
    return {
      types,
      currentItemAmount,
      currentItemSystem,
      currentItemValue,
      dialogVisible,
    };
  },
  methods: {
    ...mapActions(["getPopularItemsRequest"]),
    openForm() {
      this.dialogVisible = true;
    },
    plusValue() {
      if (this.currentItemAmount) {
        this.currentItemAmount = parseInt(this.currentItemAmount) + 1;
      } else {
        this.currentItemAmount = 1;
      }
    },
    minusValue() {
      if (this.currentItemAmount > 0) {
        this.currentItemAmount = parseInt(this.currentItemAmount) - 1;
      }
    },
  },
  computed: {
    currentItem() {
      const currentItem = this.$store.getters.getPopularItemsList.find(
        (item) => item.id == this.$route.params.id
      );

      return currentItem;
    },
  },
  mounted() {
    this.getPopularItemsRequest();
  },
  watch: {
    currentItemSystem() {
      if (this.currentItemSystem == "КГ") {
        this.currentItemValue = 1;
      } else {
        this.currentItemValue = 0.001;
      }
    },
  },
  components: {
    HeaderLangButton,
    CatalogItemPropertiesSvg,
    CopySvgButton,
    StatisticsSvgButton,
    HeartIcon,
    DialogMenu,
  },
};
</script>

<style lang="scss" scoped>
select {
  display: flex;
  justify-content: space-between;
  background-image: url("../components/UI/icons/ArrowDown.png");
  background-position: 90% 50%;
  color: var(--black-base, #2c2c2c);
  font-size: 20px;
  font-weight: 550;
  line-height: 22px; /* 137.5% */
  text-transform: uppercase;
  width: 200px;
  padding: 10px 0 10px 20px;
}

.item_amount_value_choice {
  margin-top: 20px;

  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid var(--gray-UI, #cdcdcd);
}
.item_bottom_bonus-text_block {
  display: flex;
  justify-content: center;
  max-width: 200px;
  margin-bottom: 30px;
}
.item_bottom_bonus-text {
  color: var(--gray-heavy, #808080);
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  span {
    color: var(--Blue, #216ee3);
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
  }
}
.item_buy_button {
  color: var(--gray-bg, #f7f7f7);
  text-align: center;
  font-size: 16px;
  font-weight: 550;
  letter-spacing: 0.32px;
  text-transform: uppercase;
  padding: 20px 80px;
  border-radius: 64px;
  background: var(--Base, #14d8b5);
  margin-bottom: 50px;
}
.amount {
  width: 110px;
  height: 32px;
  padding: 30px;
  margin: 0 20px;
  outline: none;
  text-align: center;
}
.item_current_amount {
  margin: 150px 0 30px 0;
  border-radius: 4px;
  border: 1px solid var(--gray-UI, #cdcdcd);
  width: 50%;
  font-size: 30px;
}

.item_buy-menu_bottom {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}
.item_current_price {
  font-size: 32px;
  font-weight: 550;
  line-height: 64px;
  letter-spacing: 0em;
  text-align: center;
}
.green-text {
  color: #14d8b5;
}
.status_buy-menu_top {
  color: var(--gray-heavy, #808080);
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  padding: 20px 60px;
}

.item_buy-menu {
  width: 100%;
  border-radius: 4px;
  border: 1px solid var(--gray-UI, #cdcdcd);
}
.item_buy-menu_top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
.copy_button_svg {
  margin: 0 10px 0 0;
}
.name_info_bottom_items {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.name_info_top_items {
  display: flex;
  justify-content: space-between;
  align-items: start;
}
.name_info_description {
  text-align: center;
  color: var(--black-base, #2c2c2c);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 100% */
}
.top_item_info_svg {
  transform: rotate(180deg);
  display: flex;
  object-position: right top;
}
.name_info_text {
  text-align: left;
  color: var(--gray-heavy, #808080);
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px; /* 100% */
}
.item_text {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}
.name_info {
  width: 100%;
  text-align: left;
}
.item-main_price_menu {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item-main_price_block {
  display: flex;
  justify-content: center;
  width: 40%;
}
.item-main_info {
  display: flex;
  flex-direction: column;
  width: 60%;
}
.item-page_information {
  display: flex;
  flex-direction: row;
}
.popular_item_img {
  width: 100%;
  height: 105%;
}
.popular_items_list {
  margin: 20px 0 0 0;
  display: flex;
  gap: 8px;
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
  width: 90%;
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
