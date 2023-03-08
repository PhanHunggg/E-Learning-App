import { CourseCatalogDto } from "./../interfaces/course";
import { AxiosPromise } from "axios";
import { axiosRequest } from "../configs/axios.config";
import {
  CourseList,
  DanhMucKhoaHocDto,
  NguoiTAODto,
} from "../interfaces/courseList";
import { GROUP_ID } from "../constants";
import { MaLoaiNguoiDung, UserList } from "../interfaces/userList";

export const fetchCourseCatalogApi = (): AxiosPromise<CourseCatalogDto[]> => {
  return axiosRequest({
    url: "/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    method: "GET",
  });
};

export const fetchCourseListApi = (): AxiosPromise<
  Array<CourseList<NguoiTAODto, DanhMucKhoaHocDto>>
> => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`,
    method: "GET",
  });
};

export const fetchUserListApi = (): AxiosPromise<
  Array<UserList<MaLoaiNguoiDung>>
> => {
  return axiosRequest({
    url: `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`,
    method: "GET",
  });
};

export const addCourseApi = (
  data: Array<CourseList<NguoiTAODto, DanhMucKhoaHocDto>>
): AxiosPromise<Array<CourseList<NguoiTAODto, DanhMucKhoaHocDto>>> => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/ThemKhoaHoc?MaNhom=${GROUP_ID}`,
    method: "POST",
    data: data,
  });
};
