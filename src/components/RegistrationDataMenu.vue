<template>
  <div class="registration">
    <form class="registration_content_block" @submit.prevent="validateEmailReg">
      <div class="registration_content">
        <img
          class="close_svg"
          src="/icons/closeIcon.svg"
          alt=""
          @click="this.hideDialog()"
        />
        <input
          type="email"
          placeholder="Введите email"
          name="email"
          id="emailReg"
          class="input_registration"
          v-model="emailReg"
          required
          autofocus
        />
        <p class="registration_confirm_email deleted" id="emailCheck">
          Пользователь с таким логином существует
        </p>
        <p class="registration_confirm_text deleted" id="confirmationText">
          Пароли не совпадают
        </p>
        <button
          type="submit"
          class="registration-button"
          @click="validateEmailReg"
        >
          Зарегистрироваться
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  name: "RegistrationDataMenu",
  methods: {
    hideDialog() {
      this.$emit("update:showReg", false);
    },
    validateEmailReg() {
      if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.emailReg)) {
        console.log("ok");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.registration_content_block {
  position: relative;
  background-color: #fff;
  border-radius: 30px;
}
.registration-button {
  margin-top: 30px;
  padding: 20px 50px;
  border-radius: 64px;
  background: #14d8b5;
  font-family: Helvetica;
  font-size: 18px;
  font-weight: 400;
  line-height: 21px;
  letter-spacing: 0.02em;
  color: #f7f7f7;
}
.blue-text {
  cursor: pointer;
  color: #216ee3;
}
input {
  border: 1px solid #5d5d5d;
  padding: 20px 64px 20px 16px;
  border-radius: 36px;
  outline: none;
}
.input_registration {
  margin-top: 30px;
  background: #fff;
}
.registration_content {
  display: flex;
  flex-direction: column;
  width: 440px;
  padding: 100px 60px;
}
.close_svg {
  position: absolute;
  right: 5%;
  top: 10px;
  cursor: pointer;
  transition: 0.3s;
}
.close_svg:hover {
  transform: scale(115%);
}
.registration {
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
  z-index: 10000;
  backdrop-filter: blur(4px);
}
.deleted {
  display: none;
}
.redBorder {
  border: 1px solid red;
}
</style>
