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
    url: `/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${GROUP_ID}`,
    method: "GET",
  });
};
