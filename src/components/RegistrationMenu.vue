<template>
  <div
    class="registration"
    v-if="show"
    @click.stop="hideDialog"
    @keyup.enter="this.hideDialog"
    @submit.prevent="login"
  >
    <div class="registration_content_block">
      <div class="registration_content" @click.stop>
        <input
          type="email"
          placeholder="Введите email"
          name="email"
          class="input_registration"
          v-model="email"
        />
        <input
          type="password"
          name="password"
          id=""
          placeholder="Введите пароль"
          class="input_registration"
          v-model="password"
        />
        <button type="submit" class="registration-button" @click="login">
          Войти
        </button>
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
      email: "",
      password: "",
    };
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    ...mapActions([""]),
    hideDialog() {
      this.$emit("update:show", false);
    },
    login() {
      let email = this.email;
      let password = this.password;
      return email, password;
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
