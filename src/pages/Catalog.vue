<template>
  <div class="catalog_block">
    <div class="catalog_block_content">
      <div class="catalog_block_header">
        <p class="catalog_block_header_text" v-if="this.$route.query.search">
          {{ this.$route.query.search }}
        </p>
        <p class="catalog_block_header_text" v-else>Каталог продукции</p>
      </div>
      <div
        class="proverka"
        v-for="item in this.$store.getters.getSearchList"
        :key="item.id"
      >
        <router-link :to="'/catalog/' + item.id">
          {{ item.name }}<br />
          {{ item.casNumber }}<br
        /></router-link>
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
