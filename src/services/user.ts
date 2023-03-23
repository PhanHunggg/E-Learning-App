<<<<<<< HEAD
import { GROUP_ID } from "./../constants/index";
import { UserList, MaLoaiNguoiDung } from "./../interfaces/userList";
import { userLoginDto, userSignUpDto } from "./../interfaces/user";
=======
import {
  userLoginDto,
  userProfileDto,
  userSignUpDto,
  userUpdateDto,
} from "./../interfaces/user";
>>>>>>> 27b8dc0577c1f7999059d37f70d80c6ecb95f86a
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

<<<<<<< HEAD
export const fetchUserListApi = (): AxiosPromise<
  Array<UserList<MaLoaiNguoiDung>>
> => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`,
    method: "GET",
  });
};

export const addUserApi = (data: userLoginDto): AxiosPromise<userLoginDto> => {
  return axiosRequest({
    url: "/QuanLyNguoiDung/ThemNguoiDung",
    method: "POST",
    data,
  });
};

export const deleteUserApi = (data: string): AxiosPromise<string> => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${data}`,
    method: "DELETE",
    data,
  });
};

export const findUserApi = (data: string): AxiosPromise<userLoginDto> => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${GROUP_ID}&tuKhoa=${data}`,
    method: "GET",
  });
};
=======
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
>>>>>>> 27b8dc0577c1f7999059d37f70d80c6ecb95f86a
