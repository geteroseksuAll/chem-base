<template>
  <form
    class="registration_content_block"
    @submit.prevent="validateEmailReg"
    v-if="showReg"
  >
    <div class="registration_content">
      <p class="registration_header">Введите данные для регистрации</p>
      <img
        class="close_svg"
        src="/icons/closeIcon.svg"
        alt=""
        @click="this.hideDialog()"
      />
      <div class="inputs_list">
        <input
          type="name"
          name="email"
          id="emailReg"
          :placeholder="this.$props.emailRegistration"
          class="input_registration"
          disabled="disabled"
          v-model="emailReg"
          required
          autofocus
        />
        <input
          type="name"
          placeholder="Ваше имя"
          name="email"
          class="input_registration"
          v-model="name"
          required
          autofocus
        />
        <input
          type="name"
          placeholder="Ваша фамилия"
          name="email"
          class="input_registration"
          v-model="surname"
          required
          autofocus
        />
        <input
          type="password"
          placeholder="Введите пароль"
          name="passwordReg"
          autocomplete="off"
          class="input_registration"
          v-model="password"
          required
          autofocus
        />
        <input
          v-model="passwordConfirmation"
          type="password"
          placeholder="Подтвердите пароль"
          name="passwordReg"
          class="input_registration"
          required
          @input="validatePasswordReg"
          autofocus
        />
      </div>
      <p class="registration_confirm_text deleted" id="confirmationText">
        Пароли не совпадают
      </p>
      <button type="submit" class="registration-button" @click="onRegistration">
        Зарегистрироваться
      </button>
    </div>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    showReg: {
      type: Boolean,
      default: false,
    },
    emailRegistration: { type: String, default: "" },
  },
  data: () => ({
    emailReg: "",
    passwordConfirmation: "",
    password: "",
    surname: "",
    letRegister: false,
    name: "",
  }),
  name: "RegistrationDataMenu",
  methods: {
    ...mapActions(["registration"]),
    setEmailReg() {
      this.emailReg = this.$props.emailRegistration;
    },

    hideDialog() {
      this.$emit("update:showReg", false);
    },
    validatePasswordReg() {
      let passwordInputs = document.getElementsByName("passwordReg");
      let confText = document.getElementById("confirmationText");

      if (this.passwordConfirmation == this.password) {
        this.letRegister = true;
        confText.classList.add("deleted");
        passwordInputs[0].classList.remove("redBorder");
        passwordInputs[1].classList.remove("redBorder");
      } else {
        this.letRegister = false;
        confText.classList.remove("deleted");
        passwordInputs[0].classList.add("redBorder");
        passwordInputs[1].classList.add("redBorder");
      }
    },
    onRegistration() {
      let params = {
        fullName: this.name + " " + this.surname,
        email: this.$props.emailRegistration,
        password: this.password,
      };
      this.registration({ params }).then((response) => {
        if (response.status == 200) {
          location.reload();
        }
      });
    },
  },
  mounted() {
    this.setEmailReg();
  },
};
</script>

<style lang="scss" scoped>
.inputs_list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
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
  width: 100%;
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
