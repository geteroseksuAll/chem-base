import axios from "axios";

export default {
  state: { status: "", token: localStorage.getItem("token") || "", user: {} },
  getters: {
    isLoggedIn: (state) => !!state.token,
    authStatus: (state) => state.status,
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token) {
      state.status = "success";
      state.token = token;
      console.log(token);
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "http://localhost7000/api/v1/auth/login",
          data: user,
          method: "POST",
        })
          .then((response) => {
            console.log(token, user);
            const token = response.data.token;
            const user = response.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(response);
          })
          .catch((error) => {
            commit("auth_error");
            localStorage.removeItem("token");
            reject(error);
          });
      });
    },
    async register({ commit }, user) {
      try {
        commit("auth_request");
        const response = await axios({
          url: "http://localhost7000/api/v1/auth/registration",
          data: user,
          method: "POST",
        });
        const token = response.data.token;
        const userData = response.data.user;
        localStorage.setItem("token", token);

        axios.defaults.headers.common["Authorization"] = token;
        console.log({ token, userData });

        commit("auth_success", token, userData);
      } catch (error) {
        commit("auth_error", error);
        localStorage.removeItem("token");
      }
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("logout");
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        resolve();
      });
    },
  },
};
