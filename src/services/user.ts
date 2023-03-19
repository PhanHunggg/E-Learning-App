import {
  userLoginDto,
  userProfileDto,
  userSignUpDto,
  userUpdateDto,
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
    url: "/QuanLyNguoiDung/ThongTinNguoiDung",
    method: "POST",
  });
};

export const updateUserApi = (data: userUpdateDto): AxiosPromise => {
  return axiosRequest({
    url: "/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
    method: "PUT",
    data,
  });
};
