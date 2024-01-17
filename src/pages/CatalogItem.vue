<template>
  <div class="container">
    <div class="item-page-content">
      <div class="item-page-links">
        <button class="pages-link">В каталог</button>
        <button class="pages-link">Прекурсоры</button>
        <button class="pages-link">Калий</button>
        <button class="pages-link">Соли неорганических кислот</button>
      </div>
      <div class="item-page-information">
        <div class="item-main-info">{{ $store.state. }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CatalogItem",
};
</script>

<style lang="scss" scoped>
.item-page-content {
  width: 90%;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-page-links {
  margin: 16px;
  justify-content: left;
  display: flex;
}
.pages-link {
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
.pages-link:not(:last-child) {
  margin-right: 8px;
}
</style>
