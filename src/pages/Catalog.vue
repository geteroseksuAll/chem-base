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
        <div
          class="catalog_block_content_items-list"
          v-for="item in this.$store.getters.getSearchList"
          :key="item.id"
        >
          {{ item.name }}
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
  mounted() {
    var params = { fullName: this.$route.query.search };
    this.$store.dispatch("getSearchListRequest", params);
    this.firstLoad = false;
  },
};
</script>

<style lang="scss" scoped>
.catalog_block_content_links {
  list-style: none;
  display: flex;
  text-align: left;
  align-items: center;
  flex-direction: column;
  width: 315px;
}
.catalog_block_items {
  display: flex;
  justify-content: space-between;
}
.block_content_link {
  padding: 20px 16px 20px 30px;
  width: 100%;
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
