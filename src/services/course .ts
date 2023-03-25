import { GROUP_ID } from "./../constants/index";
import {
  CatalogDto,
  CourseCatalogDto,
  CourseListDto,
  ManageDto,
} from "./../interfaces/course";
import { AxiosPromise } from "axios";
import { axiosRequest } from "../configs/axios.config";

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

export const fetchCourseInformationApi = (
  id: string
): AxiosPromise<CourseListDto<ManageDto, CatalogDto>> => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
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

export const updateImgApi = (img: any): AxiosPromise => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc`,
    method: "POST",
    data: img,
  });
};

export const deleteCourseApi = (course: any): AxiosPromise => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${course}`,
    method: "DELETE",
  });
};

export const updateCourseApi = (data: any): AxiosPromise => {
  return axiosRequest({
    url: "/QuanLyKhoaHoc/CapNhatKhoaHoc",
    method: "PUT",
    data: data,
  });
};

export const findCourseApi = (
  data: any
): AxiosPromise<CourseListDto<ManageDto, CatalogDto>[]> => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${data}&MaNhom=${GROUP_ID}`,
    method: "GET",
  });
};
