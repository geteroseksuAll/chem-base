<template>
  <div class="registration" v-if="showReg">
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
    validateEmailReg() {},
  },
};
</script>

<style lang="scss" scoped></style>
