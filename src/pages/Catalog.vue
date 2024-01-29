<template>
  <div
    class="proverka"
    v-for="item in this.$store.getters.getSearchList"
    :key="item.id"
  >
    <router-link :to="'/catalog/' + item.id"
      >{{ item.id }}<br />
      {{ item.name }}<br />
      {{ item.casNumber }}<br />
      {{ item.price + item.productPackage }}</router-link
    >
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

<style lang="scss" scoped></style>
