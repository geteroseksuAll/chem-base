<template>
  <div class="container">
    <div class="main-section-block">
      <div class="katalog-products-block">
        <div class="first-block-svg">
          <FirstBlockSvg />
        </div>
        <p class="first-block-text block-text">Каталог <br />продукции</p>
      </div>
      <div class="constructor-block">
        <div class="second-block-svg">
          <SecondBlockSvg />
          <div class="second-block-text block-text">
            Конструктор <br />
            реагентов
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FirstBlockSvg, SecondBlockSvg } from "@/components/UI";
export default {
  name: "HeaderSection",
  components: { FirstBlockSvg, SecondBlockSvg },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
}
.constructor-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 49.7%;
  border-radius: 4px;
  background: var(--gray-bg, #f7f7f7);
}
.katalog-products-block {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 49.7%;
  border-radius: 4px;
  background: var(--gray-bg, #f7f7f7);
}
.main-section-block {
  display: flex;
  justify-content: space-between;
  text-align: center;
  width: 90%;
  margin: 16px 0 0 0;
}
.block-text {
  margin: 10% 0 15% 0;
  color: var(--black-base, #2c2c2c);
  text-align: center;
  font-size: 22px;
  font-style: normal;
  font-weight: 550;
  line-height: 28px; /* 127.273% */
  text-transform: uppercase;
}
</style>
