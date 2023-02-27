import { CourseCatalogDto } from './../interfaces/course';
import { AxiosPromise } from "axios";
import { axiosRequest } from "../configs/axios.config";

export const fetchCourseCatalogApi = (): AxiosPromise<CourseCatalogDto[]> => {
  return axiosRequest({
    url: "/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    method: "GET",
  });
};
