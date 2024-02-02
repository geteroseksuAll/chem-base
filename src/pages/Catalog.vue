<template>
  <div class="catalog_block">
    <div class="catalog_block_content">
      <div class="catalog_block_header">
        <p class="catalog_block_header_text" v-if="this.$route.query.search">
          {{ this.$route.query.search }}
        </p>
        <p class="catalog_block_header_text" v-else>Каталог продукции</p>
      </div>
      <div class="catalog_block_items">
        <ul class="catalog_block_content_links">
          <li class="block_content_link">Органические соединения</li>
          <li class="block_content_link">Органические соединения</li>
          <li class="block_content_link">Органические соединения</li>
          <li class="block_content_link">Органические соединения</li>
          <li class="block_content_link">Органические соединения</li>
          <li class="block_content_link">Органические соединения</li>
          <li class="block_content_link">Органические соединения</li>
          <li class="block_content_link">Органические соединения</li>
        </ul>
        <div class="catalog_block_content_items-list">
          <div
            class="catalog_block_content_items-list_item"
            v-for="item in this.$store.getters.getAllItemsList"
            :key="item.id"
          >
            <div
              class="catalog_block_content_intems-list_image"
              v-html="deleteAllBackSlashes(item.image)"
            ></div>
            <p class="catalog_block_content_items-list_name">
              {{ item.commonName }}
              {{ console.log(item) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogPage",
  data: () => ({
    firstLoad: true,
  }),
  watch: {
    "$route.query.search"() {
      if (this.firstLoad) return;
      var params = { fullName: this.$route.query.search };
      this.$store.dispatch("getSearchListRequest", params);
    },
  },
  methods: {
    deleteAllBackSlashes(str) {
      let cleanedStr = str.replace(/\\/g, "");
      var cleanedStrElems = cleanedStr.split(/\s+/);
      var width = window.innerWidth;
      cleanedStrElems[1] = `width="${width / 8}"`;
      cleanedStrElems[17] = `height="${width / 8}"`;

      cleanedStr = cleanedStrElems.join(" ");

      return cleanedStr;
    },
  },
  mounted() {
    var params = { fullName: this.$route.query.search };
    if (params.fullName == "") {
      this.$store.dispatch("getAllItemsRequest");
      this.firstLoad = false;
    } else {
      this.$store.dispatch("getSearchListRequest", params);
      this.firstLoad = false;
    }
  },
};
</script>

<style lang="scss" scoped>
.catalog_block_content_items-list_item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
}
.catalog_block_content_items-list {
  display: flex;
  flex-wrap: wrap;
}
.catalog_block_content_links {
  margin: 50px 20px 10px 0;
  list-style: none;
  display: flex;
  text-align: left;
  align-items: center;
  flex-direction: column;
  width: 550px;
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
  margin: 50px 0;
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
</style>
