import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IAuthenticationResponse, IErrorResponse, ISendOtpResponse, IVerifyOtpOtpResponse } from "../../types/response.types";
import { ILoginFormState, IRegisterFormState, IResetPasswordState, ISendOtpState, IVerifyOtpState } from "../../types/states.types";
const baseUrl = process.env.REACT_APP_API_URL;

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    userLogin: builder.mutation<IAuthenticationResponse, ILoginFormState>({
      query: (loginCredentials) => ({
        url: '/user/signin',
        method: 'POST',
        body: loginCredentials
      })
    }),
    userRegister: builder.mutation<IAuthenticationResponse, IRegisterFormState>({
      query: (newUserCredentials) => ({
        url: '/user/signup',
        method: 'POST',
        body: newUserCredentials
      })
    }),
    sendOtpService: builder.mutation<ISendOtpResponse,ISendOtpState >({
      query: ({email,type}) => ({
        url: '/user/sendOtp',
        method: 'POST',
        body: { email ,type}
      })
    }),
    verifyOtpService: builder.mutation<IVerifyOtpOtpResponse, IVerifyOtpState>({
      query: (verifyOtpCredentials) => ({
        url: '/user/verifyOtp',
        method: 'POST',
        body: verifyOtpCredentials
      })
    }),
    resetPassword: builder.mutation<{message:string}, IResetPasswordState>({
      query: ({email,password,cnfPassword}) => ({
        url: '/user/resetPassword',
        method: 'POST',
        body: { email,password,cnfPassword}
      })
    }),
    verifyTokenService: builder.query<IAuthenticationResponse, void>({
      query: () => '/user/verifyToken'
    })
  })
});

export const { 
    useUserLoginMutation, 
    useUserRegisterMutation, 
    useSendOtpServiceMutation, 
    useVerifyOtpServiceMutation, 
    useResetPasswordMutation,
    useVerifyTokenServiceQuery
 } = authApi;
