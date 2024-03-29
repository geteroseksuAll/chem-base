<template>
  <div class="user_profile_block" v-if="isLoggedIn">
    <div class="user_profile_block_content">
      <div class="account_menu_block">
        <div class="account_menu">
          <div
            class="user_company_name"
            v-if="this.$store.getters.getUserInfo.companyDTO.name"
          >
            {{ this.$store.getters.getUserInfo?.companyDTO.name }}
          </div>
          <div class="user_company_name menu_item_name" v-else>Не задано</div>
          <div class="my_profile">
            <p
              class="menu_item_name"
              :class="{ active: profile }"
              @click="settingsMenu"
            >
              Настройки <MoreIconSvg />
            </p>
            <transition name="slide-fade">
              <div class="my_procurements_list" v-if="!procurements && profile">
                <div class="procurement" @click="component = 'myProfile'">
                  Мой профиль
                </div>
                <div class="procurement">Пользователи</div>
              </div>
            </transition>
          </div>
          <div class="my_procurements">
            <p
              class="menu_item_name"
              :class="{ active: procurements }"
              @click="procurementsMenu"
            >
              My procurements
              <MoreIconSvg />
            </p>
            <transition name="slide-fade">
              <div class="my_procurements_list" v-if="!profile && procurements">
                <div class="procurement">Sample Requests</div>
                <div class="procurement">Document Requests</div>
                <div class="procurement">RFQs</div>
                <div class="procurement">Quotes</div>
                <div class="procurement">Orders</div>
              </div>
            </transition>
          </div>
        </div>
      </div>
      <div class="current_menu">
        <div class="current_menu_header">Мой профиль</div>
        <div class="current_menu_block">
          <div class="current_menu_content">
            <div class="current_menu_info">
              <div class="user_name_logo">
                <div
                  class="user_name_short"
                  v-if="this.$store.getters.getUserInfo"
                >
                  {{
                    this.$store.getters.getUserInfo?.firstName[0] +
                    this.$store.getters.getUserInfo?.lastName[0]
                  }}
                </div>
              </div>
              <div class="input_info">
                <input
                  @input="filterStr"
                  class="info_input"
                  type="text"
                  v-model="firstName"
                /><span class="input_placeholder">Имя</span>
              </div>
              <div class="input_info">
                <input
                  class="info_input"
                  type="text"
                  v-model="lastName"
                  @input="filterStr"
                /><span class="input_placeholder">Фамилия</span>
              </div>
              <div class="input_info">
                <input
                  class="info_input"
                  type="text"
                  disabled
                  v-model="userEmail"
                /><span class="input_placeholder">Email</span>
              </div>
              <div class="input_info">
                <input
                  class="info_input"
                  type="text"
                  v-model="userCompany"
                  disabled
                /><span class="input_placeholder">Компания</span>
              </div>
              <div
                class="select_block"
                @click="categorySelect = !categorySelect"
              >
                <MoreIconSvg
                  :class="{ rotate: categorySelect }"
                  @click="categorySelect = !categorySelect"
                />
                <span class="input_placeholder">Категория ваших продуктов</span>
                <span>{{ marketCategoryRus }}</span>
              </div>
              <transition name="slide-fade">
                <div class="select_list" v-if="categorySelect">
                  <div
                    class="select_item"
                    v-for="item in this.$store.getters.getCategoriesList"
                    :key="item.id"
                    @click="changeMarketCategory(item)"
                  >
                    {{ item.russianName }}
                  </div>
                </div>
              </transition>
              <div class="input_info">
                <input
                  class="info_input"
                  type="text"
                  v-model="userJobTitle"
                  ref="jobTitle"
                /><span class="input_placeholder">Ваша должность</span>
              </div>
              <vue-tel-input
                v-bind="bindProps"
                v-model="phone"
                @validate="phoneObject"
                ref="numberInput"
              ></vue-tel-input>
              <button class="save_button" type="button" @click="saveMethod">
                Сохранить
              </button>
            </div>
            <div class="reset_menu">
              <div class="reset_menu_header">Восстановление пароля</div>
              <div class="input_info">
                <input
                  class="info_input"
                  type="password"
                  v-model="currentPassword"
                  ref="currentPassword"
                /><span class="input_placeholder">Ваш нынешний пароль </span>
                <ShowSvg
                  @click="
                    showCurrent = !showCurrent;
                    this.$refs.currentPassword.type = 'text';
                  "
                  v-if="!showCurrent"
                />
                <EyeSvg
                  v-else
                  @click="
                    showCurrent = !showCurrent;
                    this.$refs.currentPassword.type = 'password';
                  "
                />
              </div>
              <div class="input_info">
                <input
                  class="info_input"
                  type="password"
                  v-model="newPassword"
                  ref="newPassword"
                  @input="newPasswordCheck"
                /><span class="input_placeholder">Ваш новый пароль </span>
                <ShowSvg
                  @click="
                    showNew = !showNew;
                    this.$refs.newPassword.type = 'text';
                  "
                  v-if="!showNew"
                />
                <EyeSvg
                  v-else
                  @click="
                    showNew = !showNew;
                    this.$refs.newPassword.type = 'password';
                  "
                />
              </div>
              <div class="settings_block">
                <div class="setting_item">
                  <span
                    class="confirmation_text"
                    :class="{ confirmed: this.lenConfirmed }"
                    ><WarningSvg v-if="!lenConfirmed" /><ConfirmIcon v-else />
                    Длина пароля больше 8 символов
                  </span>
                </div>
                <div class="setting_item">
                  <span
                    class="confirmation_text"
                    :class="{ confirmed: this.numConfirmed }"
                    ><WarningSvg v-if="!numConfirmed" /><ConfirmIcon v-else />
                    Содержит минимум 1 цифру
                  </span>
                </div>
                <div class="setting_item">
                  <span
                    class="confirmation_text"
                    :class="{ confirmed: this.upperLowerConfirmed }"
                    ><WarningSvg v-if="!upperLowerConfirmed" /><ConfirmIcon
                      v-else
                    />
                    Содержит заглавные и строчные буквы
                  </span>
                </div>
                <button
                  class="save_button"
                  type="button"
                  @click="recoverPassword"
                >
                  Восстановить
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { VueTelInput } from "vue-tel-input";
import { mapActions } from "vuex";
import {
  MoreIconSvg,
  WarningSvg,
  ConfirmIcon,
  ShowSvg,
  EyeSvg,
} from "@/components/UI";
import "vue-tel-input/vue-tel-input.css";
export default {
  name: "UserProfile",
  data() {
    const phone = "";
    const procurements = false;
    const lastName = "";
    const profile = false;
    const component = null;
    const userEmail = "";
    const userCompany = "";
    const marketCategoryRus = "";
    const userJobTitle = "";
    const firstName = "";
    const categorySelect = false;
    const marketCategoryId = 0;
    const marketCategoryName = "";
    const newPassword = "";
    let lenConfirmed = false;
    let numConfirmed = false;
    let upperLowerConfirmed = false;

    return {
      numConfirmed,
      upperLowerConfirmed,
      lenConfirmed,
      newPassword,
      lastName,
      isValid: false,
      marketCategoryRus,
      userEmail,
      bindProps: { placeholder: "Введите номер телефона" },
      userCompany,
      phone,
      procurements,
      profile,
      component,
      firstName,
      userJobTitle,
      categorySelect,
      marketCategoryId,
      marketCategoryName,
      showCurrent: false,
      showNew: false,
    };
  },
  methods: {
    ...mapActions([
      "getUserInfoRequest",
      "getCategoriesListRequest",
      "setUserInfoRequest",
      "getPasswordStatusRequest",
    ]),
    newPasswordCheck() {
      this.lenConfirmed = false;
      this.numConfirmed = false;
      this.upperLowerConfirmed = false;

      let numCheck = /\d/g;
      if (this.newPassword.length >= 8) {
        this.lenConfirmed = true;
      }
      if (numCheck.test(this.newPassword)) {
        this.numConfirmed = true;
      }
      if (
        this.newPassword.toUpperCase() != this.newPassword &&
        this.newPassword.toLowerCase() != this.newPassword
      ) {
        this.upperLowerConfirmed = true;
      }
    },
    recoverPassword() {
      if (this.numConfirmed && this.currentPassword != null) {
        this.getPasswordStatusRequest({
          password: this.currentPassword,
          newPassword: this.newPassword,
          email: this.userEmail,
        }).catch((error) => {
          this.$refs.currentPassword.classList.add("redBorder");
          return error;
        });
      }
    },
    settingsMenu() {
      this.profile = !this.profile;
      this.procurements = false;
    },
    filterStr() {
      this.lastName = this.lastName.replace(/[^a-zа-яё\s]/gi, "");
      this.firstName = this.firstName.replace(/[^a-zа-яё\s]/gi, "");
    },
    saveMethod() {
      if (this.isValid && this.userJobTitle != null) {
        this.$refs.jobTitle.classList.remove("redBorder");
        console.log();
        this.setUserInfoRequest({
          firstName: this.firstName,
          lastName: this.lastName,
          jobPosition: this.userJobTitle,
          phone: this.phone,
          categoryDTO: {
            id: this.marketCategoryId,
            name: this.marketCategoryName,
            russianName: this.marketCategoryRus,
          },
        });
      } else {
        if (this.isValid) {
          this.$refs.jobTitle.classList.add("redBorder");
        }
      }
    },
    phoneObject(object) {
      if (object.valid || object.valid == null) {
        this.isValid = true;
      } else {
        this.isValid = false;
      }
    },
    changeMarketCategory(item) {
      this.marketCategoryRus = item.russianName;
      this.categorySelect = false;
      this.marketCategoryId = item.id;
    },
    procurementsMenu() {
      this.procurements = !this.procurements;
      this.profile = false;
    },
    close(e) {
      if (this.categorySelect == true && e.target.className != "select_block") {
        this.categorySelect = false;
      }
    },
  },
  components: {
    VueTelInput,
    MoreIconSvg,
    ConfirmIcon,
    WarningSvg,
    ShowSvg,
    EyeSvg,
  },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  mounted() {
    const userInfo = this.$store.getters.getUserInfo;
    addEventListener("click", this.close);
    if (this.isLoggedIn) {
      this.getUserInfoRequest();
      this.getCategoriesListRequest();
      this.phone = userInfo.phone;
      this.lastName = userInfo.lastName;
      this.userCompany = userInfo.companyDTO?.name;
      this.userEmail = userInfo.email;
      this.marketCategoryRus = userInfo.categoryDTO?.russianName;
      this.firstName = userInfo.firstName;
      this.userJobTitle = userInfo.jobPosition;
      this.marketCategoryName = userInfo.categoryDTO?.name;
      this.marketCategoryId = userInfo.categoryDTO?.id;
    }
  },
};
</script>

<style lang="scss" scoped>
.setting_item {
  display: flex;
  font-size: 14px;
  span {
    color: rgb(210 68 50);
  }
  .confirmed {
    color: rgb(0 151 61);
  }
}
.reset_menu_header {
  margin: 50px 0 20px 0;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.2;
}
.reset_menu {
  display: flex;
  flex-direction: column;
  width: 50%;
}
.save_button {
  width: 100%;
  margin-top: 20px;
  padding: 15px 0;
  background: #14d8b5;
  border-radius: 4px;
  font-size: 16px;
  color: rgb(255, 255, 255);
  font-weight: 600;
  line-height: 1.375;
  transition: 0.3s;
}
.save_button:hover {
  background-color: #00d2ac;
}
.select_list {
  position: absolute;
  z-index: 10000;
  max-width: 450px;
  background-color: #fff;
  max-height: 160px;
  box-sizing: border-box;
  overflow: hidden auto;
  border: 1px solid #cdcdcd;
  min-width: 192px;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 20px, rgba(0, 0, 0, 0.04) 0px 4px 8px,
    rgba(0, 0, 0, 0.06) 0px 0px 16px;
}
.select_item {
  padding: 5px 20px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.42857;
}
.select_item:hover {
  background: rgb(244 244 244);
}
.select_block {
  overflow: hidden;
  position: relative;
  width: 100%;
  padding: 26px 0 10px 16px;
  outline: none;
  font-size: 16px;
  font-weight: 500;
  line-height: 1.375;
  letter-spacing: 0px;
  border: 1px solid rgb(204, 204, 204);
  background-color: rgb(255, 255, 255);
  border-radius: 4px;
  height: 56px;
  margin-bottom: 20px;
}
input:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}
input:disabled:hover {
  border-color: rgb(204, 204, 204);
}
input:disabled + .input_placeholder {
  opacity: 0.4;
}
.select_block {
  cursor: pointer;
  svg {
    position: absolute;
    right: 20px;
    top: 40%;
    transform: rotate(90deg);
    transition: 0.3s;
  }
  .rotate {
    transform: rotate(270deg);
  }
}
.input_placeholder {
  margin: 0px;
  font-style: normal;
  position: absolute;
  pointer-events: none;
  transition: all 75ms ease-in 0s;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.33333;
  letter-spacing: 0px;
  top: 8px;
  left: 16px;
  color: rgb(153, 153, 153);
  transition: 0.3s;
}
.input_info {
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  transition: 0.3s;
  input {
    width: 100%;
    padding: 26px 0 10px 16px;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.375;
    letter-spacing: 0px;
    border: 1px solid rgb(204, 204, 204);
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    height: 56px;
  }
  select {
    width: 100%;
    padding: 26px 0 10px 16px;
    outline: none;
    font-size: 16px;
    font-weight: 500;
    line-height: 1.375;
    letter-spacing: 0px;
    border: 1px solid rgb(204, 204, 204);
    background-color: rgb(255, 255, 255);
    border-radius: 4px;
    height: 56px;
    max-height: 160px;
  }
  input:hover:not(:disabled):not(:focus) {
    border-color: rgb(153, 153, 153);
  }
  .info_input:focus {
    border-color: #14d8b5 !important;
  }
  .info_input:focus + span {
    color: #14d8b5;
  }
  svg {
    position: absolute;
    top: 40%;
    right: 35px;
    cursor: pointer;
  }
}
.user_name_logo {
  display: flex;
  justify-content: center;
  margin: 0 0 20px 0;
}
.current_menu_info {
  width: 50%;
}
.current_menu {
  padding: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: rgb(244, 244, 244);
}
.user_name_short {
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  color: rgb(255, 255, 255);
  text-align: center;

  font-size: 48px;
  line-height: 1.375;
  background: linear-gradient(
    302deg,
    rgb(244, 170, 59) 23.71%,
    rgb(221, 66, 66) 84.26%
  );
  width: 128px;
  height: 128px;
  border-radius: 100px;
}
.current_menu_block {
  padding: 29px 16px;
}
.current_menu_header {
  margin: 0px 0px 28px;
  font-style: normal;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.16667;
}
.current_menu_content {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.my_procurements_list {
  display: flex;
  flex-direction: column;
  padding: 5px 10px 5px 10px;
  border-radius: 4px;
  --tw-bg-opacity: 1;
  background-color: rgb(244 244 244);
  border-top: 1px solid rgb(227 227 227);
}
.procurement {
  padding: 10px 10px 5px 10px;
  transition: 0.3s;
  cursor: pointer;
}
.procurement:hover {
  background: rgb(236 236 236);
}
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}
.menu_item_name {
  cursor: pointer;
  padding: 15px 15px 15px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 30px;
  transition: 0.5s;
  svg {
    transition: 0.3s ease-in-out;
    transform: rotate(90deg);
  }
}
.redBorder {
  border-color: red !important;
}
.redBorder + span {
  color: red;
}
.menu_item_name:hover {
  background: rgb(244, 244, 244);
}
.account_menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #cdcdcd;
  border-bottom: 1px solid #cdcdcd;
}

.user_company_name {
  cursor: auto;
  border-bottom: 1px solid #cdcdcd;
  padding: 0px 0px 10px 10px;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
}

.current_menu_block {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: #fff;
}
.user_profile_block_content {
  display: flex;
  width: 90%;
  justify-content: space-between;
}
.user_profile_block {
  display: flex;
  justify-content: center;
}
.account_menu_block {
  display: flex;
  width: 20%;
}

.active {
  svg {
    transform: rotate(270deg);
  }
}
</style>
