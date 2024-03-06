<template>
  <div class="content">{{ this.$store.getters.getProductsList }}</div>
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

<style lang="scss" scoped></style>
