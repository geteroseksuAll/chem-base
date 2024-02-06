<template>
  <div v-if="show" @click.stop="hideDialog"></div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    methods: {
      hideDialog() {
        this.$emit("update:show", false);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
