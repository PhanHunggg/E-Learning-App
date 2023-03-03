import { userLoginDto, userSignUpDto } from "./../interfaces/user";
import { AxiosPromise } from "axios";
import { axiosRequest } from "../configs/axios.config";

export const login = (data: userLoginDto): AxiosPromise<userLoginDto> => {
  return axiosRequest({
    url: "/QuanLyNguoiDung/DangNhap",
    method: "POST",
    data,
  });
};

export const signUpApi = (data: userSignUpDto): AxiosPromise<userSignUpDto> => {
  return axiosRequest({
    url: "/QuanLyNguoiDung/DangKy",
    method: "POST",
    data,
  });
};
