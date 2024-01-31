<template>
  <div class="dialog" v-if="show" @click.stop="hideDialog">
    <div class="dialog__content-block">
      <div class="dialog__content" @click.stop>
        <div class="dialog__content_text_block">
          <div class="dialog__content_text">
            <h1>Отправьте заявку на заказ:</h1>
            <h4>Название: {{ nameItem }}</h4>
            <h4>Количество: {{ amountItem }}</h4>
            <h4>Цена: {{ priceItem }} xdr</h4>
            <h4 class="dialog__context_bottom">
              Заполните форму, отправьте ее нам, мы с Вами свяжемся!
            </h4>
          </div>
          <div class="dialog__content_buy-bttn">
            <button type="button" @click="postMethod">Оформить заказ</button>
          </div>
        </div>
        <div class="dialog__content_inputs">
          <div class="dialog-login">
            <input
              name="companyFullName"
              v-model="this.params.companyFullName"
              type="text"
              class="login-input"
              placeholder="Полное название кампании"
            />
          </div>
          <div class="dialog-login">
            <div class="login-title"></div>
            <input
              name="inn"
              v-model="this.params.inn"
              type="text"
              class="login-input"
              placeholder="ИНН"
            />
          </div>
          <div class="dialog-login">
            <input
              name="kpp"
              v-model="this.params.kpp"
              type="text"
              class="login-input"
              placeholder="КПП"
            />
          </div>
          <div class="dialog-login">
            <input
              name="office"
              v-model="this.params.office"
              type="text"
              class="login-input"
              placeholder="Адрес отделения банка"
            />
          </div>
          <div class="dialog-login">
            <input
              name="transfer"
              v-model="this.params.transfer"
              type="text"
              class="login-input"
              placeholder="Счёт"
            />
          </div>
          <div class="dialog-login">
            <input
              name="correspondentAccount"
              v-model="this.params.correspondentAccount"
              type="text"
              class="login-input"
              placeholder="К/С"
            />
          </div>
          <div class="dialog-login">
            <input
              name="bik"
              v-model="this.params.bik"
              type="text"
              class="login-input"
              placeholder="БИК"
            />
          </div>
          <div class="dialog-login">
            <input
              name="legalAddress"
              v-model="this.params.legalAddress"
              type="text"
              class="login-input"
              placeholder="Юридический Адрес"
            />
          </div>
          <div class="dialog-login">
            <input
              name="actualAddress"
              v-model="this.params.actualAddress"
              type="text"
              class="login-input"
              placeholder="Фактический адрес"
            />
          </div>
          <div class="dialog-login">
            <input
              name="email"
              v-model="this.params.email"
              type="text"
              class="login-input"
              placeholder="Email"
            />
          </div>
          <div class="dialog-login">
            <input
              name="position"
              v-model="this.params.position"
              type="text"
              class="login-input"
              placeholder="Ваша должность"
            />
          </div>
          <div class="dialog-login">
            <input
              name="fullNamePerson"
              v-model="this.params.fullName"
              type="text"
              class="login-input"
              placeholder="ФИО полностью"
            />
          </div>
          <div class="dialog-login">
            <input
              name="number"
              v-model="this.params.phoneNumber"
              type="text"
              class="login-input"
              placeholder="Номер телефона"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DialogMenu",
  data() {
    return {
      params: {
        companyFullName: "",
        inn: "",
        kpp: "",
        office: "",
        transfer: "",
        correspondentAccount: "",
        bik: "",
        legalAddress: "",
        actualAddress: "",
        email: "",
        position: "",
        fullName: "",
        phoneNumber: "",
      },
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    priceItem: { default: Number },
    nameItem: { type: String },
    amountItem: { type: String },
    id: { Type: Number },
  },
  methods: {
    hideDialog() {
      this.$emit("update:show", false);
    },
    async postMethod() {
      this.$store.dispatch("setTransfer", {
        params: this.params,
        price: this.$props.priceItem,
        name: this.$props.nameItem,
        amount: this.$props.amountItem,
        id: this.$props.id,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.dialog__context_bottom {
  margin-top: 50px;
}
.dialog__content_buy-bttn {
  display: flex;
  align-items: center;
  align-self: center;
  margin-bottom: 15%;
  padding: 20px 40px;
  background: rgb(133, 133, 133);
  border-radius: 20px;
  color: #cdcdcd;
  font-size: 20px;
}
.dialog__content_inputs {
  width: 50%;
  margin-top: 20px;
}
.dialog__content_text_block {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  width: 40%;
  h1 {
    font-size: 30px;
    margin-bottom: 40px;
    font-weight: 400;
  }
  h4 {
    font-size: 18px;
    font-weight: 400;
  }
}
input {
  outline: none;
  padding: 2% 2% 2px 0;
  margin-bottom: 1%;
  text-align: left;
  width: 70%;
  height: 100%;
  border-bottom: 1px solid rgb(133, 133, 133);
}
.dialog__content-block {
  width: 70%;
  height: 70%;
  background: #cdcdcd;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
}
.dialog__content {
  width: 100%;
  height: 100%;
  margin: 20px;
  display: flex;
  justify-content: space-between;
}
.dialog {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: 0%;
  bottom: 0;
  left: 0%;
  right: 0%;
  background: rgb(0, 0, 0, 0.5);
  position: fixed;
}
</style>
