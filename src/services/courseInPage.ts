import { AxiosPromise } from "axios";
import { axiosRequest } from "../configs/axios.config";
import { GROUP_ID } from "../constants";
import { HttpRespon } from "../interfaces/api";
import { CatalogDto, CourseListDto, ManageDto } from "../interfaces/course";

export const fetchCourseListInPageApi = (): AxiosPromise<HttpRespon<CourseListDto<ManageDto,CatalogDto>[]>>  => {
    return axiosRequest({
        url: `/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=2&pageSize=10&MaNhom=${GROUP_ID}`,
        method: "GET",
    })
}