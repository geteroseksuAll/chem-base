<template>
  <div class="container">
    <div class="header">
      <div class="logo-section">
        <div class="header-logo" @click="pushMainPage">
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
          v-model="postData.fullName"
          id="message"
        />
        <router-link
          type="button"
          :to="{ name: 'catalogSearch', query: { search: postData.fullName } }"
        >
          <img
            src="/icons/MagnifyingGlass.png"
            alt=""
            class="input-section_img"
          />
        </router-link>
      </div>
      <div class="header-lang-section">
        <p class="current-lang_text">RU</p>
        <div class="current-lang_button">
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
  data() {
    return { postData: { fullName: "" } };
  },
  name: "HeaderSection",
  components: {
    HeaderLogo,
    HeaderOptions,
    HeaderLangButton,
    HeaderLoginIcon,
    HeaderBasketIcon,
    HeaderHeartIcon,
  },
  methods: {
    pushMainPage() {
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
.current-lang_text {
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
  cursor: pointer;
}
.header-options {
  display: flex;
  align-items: center;
}
.input-section_img {
  margin: 5px 0 0 -50px;
}
.input-section {
  display: flex;
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
  padding: 9px 4px 9px 30px;
  width: 100%;
  background-color: #fff;
  border-radius: 20px;
  border: none;
  outline: none;
}
</style>
