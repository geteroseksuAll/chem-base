<template>
  <div class="container">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "AppLayout",
  components: { Header },
};
</script>

<style lang="scss" scoped></style>
