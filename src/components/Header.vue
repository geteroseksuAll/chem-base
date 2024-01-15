<template>
  <div class="container">
    <div class="header">
      <div class="logo-section">
        <div class="header-logo">
          <HeaderLogo />
        </div>
        <div class="header-options">
          <HeaderOptions />
        </div>
      </div>
      <div class="input-section">
        <input
          type="text"
          placeholder="реагента по номеру/названию/коду..."
          name="search"
        />
      </div>
      <div class="header-lang-section">
        <p class="current-lang-text">RU</p>
        <div class="current-lang-button">
          <HeaderLangButton />
        </div>
      </div>
      <div class="header-icons-section">
        <HeaderLoginIcon />
        <HeaderHeartIcon />
        <HeaderBasketIcon />
      </div>
    </div>
  </div>
</template>

<script>
import {
  HeaderLogo,
  HeaderOptions,
  HeaderLangButton,
  HeaderLoginIcon,
  HeaderBasketIcon,
  HeaderHeartIcon,
} from "./UI";
export default {
  name: "HeaderSection",
  components: {
    HeaderLogo,
    HeaderOptions,
    HeaderLangButton,
    HeaderLoginIcon,
    HeaderBasketIcon,
    HeaderHeartIcon,
  },
};
</script>

<style lang="scss" scoped>
.current-lang-text {
  margin-right: 5px;
  color: var(--Base, #14d8b5);

  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 100% */
}
.header-lang-section {
  display: flex;
  justify-content: space-between;
}
.header-logo {
  margin: 0px 20% 0px 10px;
}
.header-options {
  display: flex;
  align-items: center;
}
.input-section {
  width: 50%;
}
.container {
  display: flex;
  justify-content: center;
}
.header-icons-section {
  display: flex;
  justify-content: space-between;
  width: 10%;
  margin-right: 10px;
}
.logo-section {
  width: 20%;
  display: flex;
}
.header {
  background: var(--gray-bg, #f7f7f7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10px 20px 10px;
  width: 90%;
}
input {
  border: 1px solid #555;
  padding: 9px 4px 9px 70px;
  width: 100%;
  background: transparent url("./UI/icons/MagnifyingGlass.png") no-repeat 13px
    center;
  background-color: #fff;
  border-radius: 20px;
  border: none;
}
</style>
