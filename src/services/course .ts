import {
  CatalogDto,
  CourseCatalogDto,
  CourseDetailDto,
  CourseListDto,
  ManageDto,
} from "./../interfaces/course";
import { AxiosPromise } from "axios";
import { axiosRequest } from "../configs/axios.config";
import { GROUP_ID } from "../constants";
import { MaLoaiNguoiDung, UserList } from "../interfaces/userList";

export const fetchCourseCatalogApi = (): AxiosPromise<CourseCatalogDto[]> => {
  return axiosRequest({
    url: "/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    method: "GET",
  });
};

export const fetchCourseListApi = (): AxiosPromise<
  CourseListDto<ManageDto, CatalogDto>[]
> => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/LayDanhSachKhoaHoc`,
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
  data: Array<CourseListDto<ManageDto, CatalogDto>>
): AxiosPromise<Array<CourseListDto<ManageDto, CatalogDto>>> => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/ThemKhoaHoc`,
    method: "POST",
    data: data,
  });
};

export const fetchCourseDetailApi = (
  course: string
): AxiosPromise<CourseDetailDto<ManageDto, CatalogDto>> => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${course}`,
    method: "GET",
  });
};
