import { type AxiosRequestConfig } from "axios";

import { axiosInstance } from "@/lib/utils/axios";
import { type Response } from "@/types/general";
import { type SignUpType, type loginType } from "@/types/auth";

const config: AxiosRequestConfig = {
  headers: {
    "Content-Type": "application/json",
  },
};

// signup service
export const signupUser = async (data: SignUpType): Promise<Response<any>> => {
  let url = `/user/register`;
  const response = await axiosInstance.post(url, data, config);
  return response.data;
};

// login services
export const loginUser = async (data: loginType): Promise<Response<any>> => {
  let url = `/user/login`;
  const response = await axiosInstance.post(url, data);
  return response.data;
};
