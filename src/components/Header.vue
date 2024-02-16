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
        <router-link
          class="router_link_to_catalog"
          :to="{ name: 'catalogSearch', query: { search: '' } }"
        >
          <div class="catalog_link_section">
            <p class="catalog_link_section_text">Каталог</p>
          </div>
        </router-link>
      </div>
      <div class="input-section">
        <input
          type="text"
          placeholder="реагента по номеру/названию/коду..."
          name="search"
          v-model="postData.fullName"
          id="message"
          @keyup.enter="
            this.$router.push({
              name: 'catalogSearch',
              query: { search: postData.fullName },
            })
          "
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
      <!-- <div class="header-lang-section">
        <p class="current-lang_text">RU</p>
        <div class="current-lang_button">
          <HeaderLangButton />
        </div>
      </div> -->
      <div class="header-icons-section">
        <HeaderLoginIcon
          v-if="!isLoggedIn"
          @click="openRegistration"
          style="cursor: pointer"
        />
        <HeaderMyProfileIcon v-else style="cursor: pointer" />
        <HeaderHeartIcon />
        <HeaderBasketIcon
          style="cursor: pointer"
          v-if="!isLoggedIn"
          @click="openRegistration"
        />
        <router-link v-if="isLoggedIn" to="/basket">
          <HeaderBasketIcon
            style="cursor: pointer; color: inherit; text-decoration: none"
          />
        </router-link>
      </div>
      <RegistrationMenu v-model:show="dialogVisible" />
    </div>
  </div>
</template>

<script>
import RegistrationMenu from "./RegistrationMenu.vue";
import {
  HeaderLogo,
  HeaderOptions,
  // HeaderLangButton,
  HeaderLoginIcon,
  HeaderBasketIcon,
  HeaderHeartIcon,
  HeaderMyProfileIcon,
} from "./UI";
export default {
  data() {
    return { postData: { fullName: "" }, dialogVisible: false };
  },
  name: "HeaderSection",
  components: {
    HeaderLogo,
    HeaderOptions,
    // HeaderLangButton,
    HeaderLoginIcon,
    HeaderBasketIcon,
    HeaderHeartIcon,
    RegistrationMenu,
    HeaderMyProfileIcon,
  },
  methods: {
    pushMainPage() {
      this.$router.push("/");
    },

    openRegistration() {
      this.dialogVisible = true;
    },
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    },
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
};
</script>

<style lang="scss" scoped>
.catalog_link_section {
  display: none;
}
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
@media screen and (max-width: 1440px) {
  .header {
    padding: 0;
  }
  .input-section {
    width: 30%;
    .input-section_img {
      margin: 5px 0 0 -40px;
    }
  }
  .header-options {
    margin-top: 10px;
  }
  .header-logo {
    margin: 0px 10% 0px 10px;
  }
  .logo-section {
    width: 30%;
    display: flex;
    align-items: center;
  }
  .input-section {
    justify-content: right;
    margin: 0 20px 0 0;
  }
  .router_link_to_catalog {
    text-decoration: none;
    color: inherit;
  }
  .catalog_link_section {
    margin-left: 30px;
    display: flex;
    text-align: center;
    align-items: center;
    padding: 31.5px 40px 31.5px 40px;
    cursor: pointer;
    border-right: 1px solid #cdcdcd;
    border-left: 1px solid #cdcdcd;
    transition: 0.3s ease;
    &:hover {
      border: none;
      background: #14d8b5;
    }
  }
  .catalog_link_section_text {
    font-size: 16px;
    font-weight: 550;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: center;
  }
}
</style>
