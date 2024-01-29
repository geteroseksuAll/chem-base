<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div class="dialog__content" @click.stop>
      <div class="dialog-title">Заполните форму</div>
      <div class="dialog-login">
        <div class="login-title">Полное название кампании</div>
        <input
          name="companyFullName"
          v-model="companyFullName"
          type="text"
          class="login-input"
        />
      </div>
      <div class="dialog-login">
        <div class="login-title">Инн</div>
        <input name="inn" v-model="inn" type="text" class="login-input" />
      </div>
      <div class="dialog-login">
        <div class="login-title">КПП</div>
        <input name="kpp" v-model="kpp" type="text" class="login-input" />
      </div>
      <div class="dialog-login">
        <div class="login-title">Адрес отделения банка</div>
        <input name="office" v-model="office" type="text" class="login-input" />
      </div>
      <div class="dialog-login">
        <div class="login-title">Счёт:</div>
        <input
          name="transer"
          v-model="transer"
          type="text"
          class="login-input"
        />
      </div>
      <div class="dialog-login">
        <div class="login-title">К/C</div>
        <input
          name="correspondentAccount"
          v-model="correspondentAccount"
          type="text"
          class="login-input"
        />
      </div>
      <div class="dialog-login">
        <div class="login-title">БИК</div>
        <input name="bik" v-model="bik" type="text" class="login-input" />
      </div>
      <div class="dialog-login">
        <div class="login-title">Юридический адрес</div>
        <input
          name="legalAdress"
          v-model="legalAdress"
          type="text"
          class="login-input"
        />
      </div>
      <div class="dialog-login">
        <div class="login-title">Фактический адрес</div>
        <input
          name="actualAdress"
          v-model="actualAdress"
          type="text"
          class="login-input"
        />
      </div>
      <div class="dialog-login">
        <div class="login-title">Email</div>
        <input name="email" v-model="email" type="text" class="login-input" />
      </div>
      <div class="dialog-login">
        <div class="login-title">Должность</div>
        <input
          name="position"
          v-model="position"
          type="text"
          class="login-input"
        />
      </div>
      <div class="dialog-login">
        <div class="login-title">ФИО</div>
        <input
          name="fullNamePerson"
          v-model="fullNamePerson"
          type="text"
          class="login-input"
        />
      </div>
      <div class="dialog-login">
        <div class="login-title">Номер телефона</div>
        <input name="number" v-model="number" type="text" class="login-input" />
      </div>
      <div class="dialog-button">
        <button type="submit" class="bttn" @click="postMethod">Войти</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "DialogMenu",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
    async postMethod() {
      var params = {
        companyFullName: this.companyFullName,
        inn: this.inn,
        kpp: this.kpp,
        office: this.office,
        transfer: this.transfer,
        correspondentAccount: this.correspondentAccount,
        bik: this.bik,
        legalAdress: this.legalAdress,
        actualAdress: this.actualAdress,
        email: this.email,
        position: this.position,
        fullName: this.fullNamePerson,
        phoneNumber: this.number,
      };
      const result = await axios.post(
        "http://localhost:7000/api/v1/catalog/{id}",
        params
      );
      console.log(result.data);
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog {
  top: 0;
  bottom: 0;
  left: 50%;
  right: 50%;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
}
</style>
