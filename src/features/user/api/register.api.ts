import { api } from "../../../app/store/api";

type ResponsData = {
  email: string;
  fullname: string;
  password: string;
  id: number;
};

type UserData = {
  email: string;
  fullname: string;
  password: string;
};

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<ResponsData, UserData>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApi;

export const {
  endpoints: { register },
} = authApi;
