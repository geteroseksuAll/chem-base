<template>
  <div
    class="registration"
    v-if="show"
    @click.stop="hideDialog"
    @keyup.enter="this.hideDialog"
  >
    <form
      class="registration_content_block"
      @submit.prevent="onRegister"
      v-if="!swapLogin"
    >
      <div class="registration_content" @click.stop>
        <input
          type="email"
          placeholder="Введите email"
          name="email"
          class="input_registration"
          v-model="emailReg"
          required
          autofocus
        />
        <input
          type="password"
          name="password"
          placeholder="Введите пароль"
          class="input_registration"
          v-model="passwordReg"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Подтвердите пароль"
          class="input_registration"
          v-model="passwordConfirmationReg"
          @blur="passwordConfirmation"
          required
        />
        <button
          type="submit"
          class="registration-button"
          @click="validateEmailReg"
        >
          Зарегистрироваться
        </button>
        <p class="registration_content_text">
          Зарегистрированы?
          <span class="blue-text" @click="swapLogin = !swapLogin"
            >Войти в аккаунт</span
          >
        </p>
      </div>
    </form>
    <form class="registration_1" v-if="swapLogin" @submit.prevent="onLogin">
      <div class="registration_content_block">
        <div class="registration_content" @click.stop>
          <input
            type="email"
            placeholder="Введите email"
            name="email"
            class="input_registration"
            v-model="emailLog"
            required
          />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Введите пароль"
            class="input_registration"
            v-model="passwordLog"
            required
          />
          <button
            type="submit"
            class="registration-button"
            @click="validateEmailLog"
          >
            Войти
          </button>
          <p class="registration_content_text">
            Не зарегистрированы?
            <span class="blue-text" @click="swapLogin = !swapLogin"
              >Зарегистрироваться</span
            >
          </p>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RegistrationMenu",
  data() {
    return {
      swapLogin: false,
      emailReg: "",
      passwordReg: "",
      passwordConfirmationReg: "",
      emailLog: "",
      passwordLog: "",
      letRegister: false,
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions(["register", "login"]),
    hideDialog() {
      this.$emit("update:show", false);
    },
    validateEmailReg() {
      if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.onRegister;
      }
    },
    validateEmailLog() {
      if (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        this.onLogin;
      }
    },
    passwordConfirmation() {
      if (this.passwordReg == this.passwordConfirmationReg) {
        this.letRegister = true;
      } else {
        this.letRegister = false;
      }
    },
    async onRegister() {
      let email = this.emailReg;
      let password = this.passwordReg;
      this.register({
        email,
        password,
      }).then(() => location.reload());
    },
    onLogin() {
      let email = this.emailLog;
      let password = this.passwordLog;
      this.login({ email, password })
        .then(() => location.reload())
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  border: 1px solid #5d5d5d;
  padding: 20px 64px 20px 16px;
  border-radius: 36px;
  outline: none;
}
::placeholder {
  color: #5d5d5d;
}
.registration_content_block {
  background-color: #fff;
  border-radius: 30px;
}
.registration_content_text {
  text-align: center;
  margin: 50px 0 0 0;
  color: #808080;
}

.blue-text {
  cursor: pointer;
  color: #216ee3;
}
.registration-button {
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
.input_registration {
  margin-bottom: 30px;
  background: #fff;
}
.registration_content {
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 50px;
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
}
</style>
