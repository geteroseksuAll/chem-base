<template>
  <div
    class="registration"
    v-if="show"
    @click.stop="hideDialog"
    @keyup.enter="this.hideDialog"
  >
    <div class="registration_content_block">
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
          required
        />
        <button type="submit" class="registration-button" @click="onRegister">
          Зарегистрироваться
        </button>
      </div>
    </div>
    <div class="registration_1" @submit.prevent="login">
      <div class="registration_content_block">
        <div class="registration_content" @click.stop>
          <input
            type="email"
            placeholder="Введите email"
            name="email"
            class="input_registration"
            v-model="emailLog"
            required
            autofocus
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
          <button type="submit" class="registration-button" @click="login">
            Войти
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "RegistrationMenu",
  data() {
    return {
      emailReg: "",
      passwordReg: "",
      passwordConfirmationReg: "",
      emailLog: "",
      passwordLog: "",
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions(["register"]),
    hideDialog() {
      this.$emit("update:show", false);
    },
    async onRegister() {
      let emailReg = this.emailReg;
      let passwordReg = this.passwordReg;
      const result = await this.register({
        emailReg,
        passwordReg,
      });
      console.log(result);
    },
    login() {
      let emailLog = this.emailLog;
      let passwordLog = this.passwordLog;
      this.login({ emailLog, passwordLog })
        .then(() => this.$router.push("/"))
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss" scoped>
.registration-button {
  width: 500px;
  height: 50px;
  border-radius: 10px;
  align-self: center;
  background: #fff;
}
.input_registration {
  margin-bottom: 30px;
  background: #fff;
}
.registration_content {
  display: flex;
  flex-direction: column;
  width: 400px;
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
