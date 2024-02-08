<template>
  <div class="catalog_block">
    <div class="catalog_block_content">
      <div class="catalog_block_header">
        <p
          class="catalog_block_header_text"
          id="maintext"
          v-if="this.$route.query.search"
        >
          {{ this.$route.query.search }}
        </p>
        <p class="catalog_block_header_text" v-else>Каталог продукции</p>
        <p class="catalog_block_header_subtext deleted" id="subtext">
          Не удалось ничего найти по запросу "{{
            this.$route.query.search
          }}"<span class="subtext_mini">Попробуйте поискать по-другому</span>
        </p>
      </div>
      <div class="catalog_block_items">
        <div class="catalog_block_current_item"></div>
        <div class="catalog_block_content_items-list">
          <div
            class="catalog_block_content_items-list_item"
            v-for="item in this.$store.getters.getAllItemsList"
            :key="item.id"
          >
            <router-link
              class="catalog_block_content_items-list_item"
              :to="'/catalog/' + item.id"
            >
              <div
                class="catalog_block_content_intems-list_image"
                v-html="deleteAllBackSlashes(item.image)"
              ></div>
              <p class="catalog_block_content_items-list_name">
                {{ item.commonName }}
              </p>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CatalogPage",
  data: () => ({
    firstLoad: true,
  }),
  watch: {
    "$route.query.search"() {
      this.$store.state.searchList = [];
      var previousText = document.getElementById("maintext");
      var futureText = document.getElementById("subtext");
      previousText?.classList.remove("deleted");
      futureText?.classList.add("deleted");

      if (this.firstLoad) return;

      var params = { fullName: this.$route.query.search.replaceAll(" ", "") };

      this.$store.dispatch("getSearchListRequest", params).catch((error) => {
        var previous_text = document.getElementById("maintext");
        previous_text.classList.add("deleted");

        var future_text = document.getElementById("subtext");
        future_text.classList.remove("deleted");
        return error;
      });
    },
  },
  methods: {
    ...mapActions(["getSearchListRequest"]),
    deleteAllBackSlashes(str) {
      let cleanedStr = str.replace(/\\/g, "");
      var cleanedStrElems = cleanedStr.split(/\s+/);
      var width = window.innerWidth;
      cleanedStrElems[1] = `width="${width / 9}"`;
      cleanedStrElems[17] = `height="${width / 9}"`;

      cleanedStr = cleanedStrElems.join(" ");

      return cleanedStr;
    },
  },
  mounted() {
    var params = { fullName: this.$route.query.search.replaceAll(" ", "") };
    var previousText = document.getElementById("maintext");
    var futureText = document.getElementById("subtext");
    previousText?.classList.remove("deleted");
    futureText?.classList.add("deleted");

    if (params.fullName == "") {
      this.$store.dispatch("getAllItemsRequest");
    } else {
      this.getSearchListRequest(params).catch((error) => {
        previousText.classList.add("deleted");

        futureText.classList.remove("deleted");
        return error;
      });
    }
    this.firstLoad = false;
  },
};
</script>

<style lang="scss" scoped>
.catalog_block_header_subtext {
  text-align: left;
  margin: 50px 0 0 0;
  color: var(--black-base, #2c2c2c);
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px; /* 133.333% */
  letter-spacing: -0.96px;
  .subtext_mini {
    display: block;
    font-size: 26px;
    font-weight: 400;
  }
}
.catalog_block_content_items-list_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 24%;
  text-decoration: none;
  color: inherit;
}
.catalog_block_content_items-list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.catalog_block_content_links {
  margin: 20px 30px 30px 0;
  align-items: left;
  list-style: none;
  display: flex;
  text-align: left;
  flex-direction: column;
  width: 300px;
}
.catalog_block_items {
  display: flex;
  justify-content: space-between;
}
.block_content_link {
  padding: 20px 20px 20px 40px;
  margin-bottom: 5px;
  background: #f8f8f8 url("@/assets/catalogLinkIcon.svg") no-repeat;
  background-position: 2% 50%;
  border-radius: 4px;
}
.block_content_link,
text {
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
}
.catalog_block_header_text {
  margin: 20px 0;
  color: var(--black-base, #2c2c2c);
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  line-height: 64px; /* 133.333% */
  letter-spacing: -0.96px;
}
.catalog_block_content {
  width: 90%;
}
.catalog_block {
  display: flex;
  justify-content: center;
}
.deleted {
  display: none;
}
</style>
