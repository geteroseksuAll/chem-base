import axios from "axios";
import store from "..";

export default {
  state: { userInfo: [], userPasswordStatus: "" },
  getters: {
    getUserInfo: ({ userInfo }) => userInfo,
    getPasswordStatus: ({ userPasswordStatus }) => userPasswordStatus,
  },
  mutations: {
    changeUserInfo(state, data) {
      state.userInfo = data;
    },
    changePasswordStatus(state, data) {
      state.userPasswordStatus = data;
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
        `https://backend.kimix.space/api/v1/user-profile`,
        { ...params },
        { headers: headers }
      );
      return result;
    },
    async getPasswordStatusRequest(context, { password, newPassword, email }) {
      const result = await axios
        .post(
          `https://backend.kimix.space/api/v1/user-profile/change-password`,
          { currentPassword: password, newPassword: newPassword, email: email }
        )
        .catch((error) => {
          throw error;
        });
      return result;
    },
    async getUserInfoRequest() {
      const headers = {
        Authorization: localStorage.getItem("token"),
      };
      const result = await axios.get(
        "https://backend.kimix.space/api/v1/user-profile",
        {
          headers: headers,
        }
      );

      store.commit("changeUserInfo", result.data);
      return result;
    },
  },
};
