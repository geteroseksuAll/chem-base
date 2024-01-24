<template>
  <div class="container">
    <div class="main-section-block">
      <div class="main-section_upper">
        <div class="katalog-products-block">
          <div class="first-block-svg">
            <FirstBlockSvg />
          </div>
          <p class="first-block-text block-text">Каталог <br />продукции</p>
        </div>
        <div class="constructor-block">
          <div class="second-block-svg">
            <SecondBlockLeftSvg />
            <div class="second-block-text block-text">
              Конструктор <br />
              реагентов
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="second-section-block">
      <div class="second-section_content">
        <div class="second-section_upper">
          <SecondSectionBlockRightSvg class="second-section-upper-img" />
          <p class="second-section_upper__text bottom-text">
            удобно искать <br />— выгодно покупать.
          </p>
        </div>
        <div class="second-section_middle">
          <SecondSectionBlockLeftSvg class="second-section-bottom-img" />
          <p class="second-section_middle__text">
            Химические реагенты и товары для химических лабораторий
          </p>
          <button
            type="button"
            class="second-section-middle-button green-bttn"
            id="search"
          >
            <p class="second-section_middle__button-text">Зарегистрироваться</p>
          </button>
        </div>
        <div class="second-section_bottom">
          <p class="second-section_bottom__text">
            <span class="green-text">+</span>
            доставка в любую<br />
            точку мира.*
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  FirstBlockSvg,
  SecondBlockLeftSvg,
  SecondSectionBlockRightSvg,
  SecondSectionBlockLeftSvg,
} from "@/components/UI";
export default {
  name: "HeaderSection",
  components: {
    FirstBlockSvg,
    SecondBlockLeftSvg,
    SecondSectionBlockRightSvg,
    SecondSectionBlockLeftSvg,
  },
  methods: {
    postMethod() {},
  },
};
</script>

<style lang="scss" scoped>
.green-bttn {
  display: flex;
  padding: 18px 45px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 64px;
  background: var(--Base, #14d8b5);
}
.second-section_middle__button-text {
  color: var(--gray-bg, #f7f7f7);

  font-size: 16px;
  font-style: normal;
  font-weight: 550;
  line-height: 21px; /* 131.25% */
  letter-spacing: 0.32px;
  text-transform: uppercase;
}
.second-section_bottom__text {
  margin: 0 0 0 57%;
  padding-bottom: 60px;
  color: var(--black-base, #2c2c2c);
  font-size: 64px;
  font-style: normal;
  font-weight: 550;
  line-height: 68px;
}
.green-text {
  color: var(--Base, #14d8b5);
}
.second-section-bottom-img {
  position: absolute;
  left: 5%;
}
.second-section_bottom {
  display: flex;
}
.second-section_middle {
  display: flex;
  flex-direction: wrap;
  margin-left: 20%;
}
.second-section-upper-img {
  position: absolute;
  right: 5%;
}
.second-section_middle__text {
  max-width: 260px;
  color: var(--gray-heavy, #808080);
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 21px; /* 116.667% */
}
.second-section_upper__text {
  margin: 32px 0 78px 32px;
}
.bottom-text {
  color: var(--black-base, #2c2c2c);
  font-size: 64px;
  font-style: normal;
  font-weight: 550;
  line-height: 68px; /* 106.25% */
}
.second-section_content {
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-radius: 4px;
  background: var(--gray-bg, #f7f7f7);
}
.second-section-block {
  margin-top: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
}
.main-section-block {
  width: 100%;
  display: flex;
  justify-content: center;
}
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
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
.main-section_upper {
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
