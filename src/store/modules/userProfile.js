import axios from "axios";
import store from "..";

export default {
  state: { userInfo: [] },
  getters: { getUserInfo: ({ userInfo }) => userInfo },
  mutations: {
    changeUserInfo(state, data) {
      state.userInfo = data;
    },
  },
  actions: {
    async setUserInfoRequest(
      context,
      { categoryDTO, phone, lastName, firstName, jobPosition }
    ) {
      const params = {
        lastName: lastName,
        phoneNumber: phone,
        firstName: firstName,
        jobPosition: jobPosition,
        categoryDTO: categoryDTO,
      };
      console.log(params);
      const headers = {
        Authorization: localStorage.getItem("token"),
      };
      const result = await axios.patch(
        `https://82.97.240.195:80/api/v1/user-profile`,
        { ...params },
        { headers: headers }
      );
      return result;
    },
    async getUserInfoRequest() {
      const headers = {
        Authorization: localStorage.getItem("token"),
      };
      const result = await axios.get(
        "https://82.97.240.195:80/api/v1/user-profile",
        {
          headers: headers,
        }
      );

      store.commit("changeUserInfo", result.data);
      return result;
    },
  },
};
