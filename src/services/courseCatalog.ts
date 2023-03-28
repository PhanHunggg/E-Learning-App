import { GROUP_ID } from "./../constants/index";

import { CatalogDto, CourseListDto, ManageDto } from "./../interfaces/course";
import { AxiosPromise } from "axios";
import { axiosRequest } from "../configs/axios.config";

export const fetchCourseByCatalogApi = (
  course: string
): AxiosPromise<CourseListDto<ManageDto, CatalogDto>[]> => {
  return axiosRequest({
    url: `/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${course}&MaNhom=${GROUP_ID}`,
    method: "GET",
  });
};
