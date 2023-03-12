import {
  userLoginDto,
  userProfileDto,
  userSignUpDto,
} from "./../interfaces/user";
import { AxiosPromise } from "axios";
import { axiosRequest } from "../configs/axios.config";
import { RegistrationCourseDetailDto } from "../interfaces/course";

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

export const fetchUserProfileApi = (): AxiosPromise<
  userProfileDto<RegistrationCourseDetailDto>
> => {
  return axiosRequest({
    url: "/QuanLyNguoiDung/ThongTinTaiKhoan",
    method: "POST",
  });
};
