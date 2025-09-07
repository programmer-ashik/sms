import { apiSlice } from "../api/apiSlice";
import { userLogedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
              role: result.data.role,
            })
          );
          dispatch(
            userLogedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
              role: result.data.role,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          localStorage.setItem(
            "auth",
            JSON.stringify({
              accessToken: result.data.accessToken,
              user: result.data.user,
              role: result.data.role,
            })
          );
          dispatch(
            userLogedIn({
              accessToken: result.data.accessToken,
              user: result.data.user,
              role: result.data.role,
            })
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const { useLoginMutation, useRegisterMutation } = authApi;
