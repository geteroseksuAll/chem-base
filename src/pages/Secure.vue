<template>
  <div class="gege">
    <button type="button" @click="user">Круто круто молодец</button>
    <button type="button" @click="admin">admin</button>
  </div>
</template>

<script>
import authService from "@/store/modules/auth.service";
import axios from "axios";

export default {
  name: "SecureBlock",
  setup() {
    return {};
  },
  methods: {
    user() {
      const result = axios.get("http://localhost:7000/api/v1/user", {
        headers: { Authorization: authService.state.token },
      });
      console.log(result.data);
    },
    admin() {
      const result = axios.get("http://localhost:7000/api/v1/admin", {
        headers: { Authorization: authService.state.token },
      });

      console.log(result);
    },
  },
};
</script>

<style lang="scss" scoped>
button {
  margin: 50px;
}
</style>
