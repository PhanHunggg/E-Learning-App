import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { CatalogDto, CourseListDto, ManageDto } from "../../../../interfaces/course";
import { fetchCourseListApi } from "../../../../services/course ";
import { RootDispatch, RootState } from "../../../../store/config";
import { fetchCourseListAction } from "../../../../store/reducers/eduReducer";
import Pagination from "../pagination/Pagination";
import AllCoursList from "./component/AllCoursList";

import "./courseList.scss";

export default function CourseList(): JSX.Element {
  // const dispatch = useDispatch<RootDispatch>();
  // const courseState = useSelector((state: RootState) => state.eduReducer);
  const [courses, setCourses] = useState<CourseListDto<ManageDto, CatalogDto>[]>([]);
  const [page, setPage] = useState(0);
  // 1 page = 10 perPage  <==> 1 page has 10 courses
  const [perPage, setPerPage] = useState(12);


  useEffect(() => {
    // dispatch(fetchCourseListAction());
    renderCourses()
  }, []);

  const renderCourses = async () => {
    const {data} =  await fetchCourseListApi();
    setCourses(data);
  }

  const handleNextPage = (page: number) => {
    // console.log("12312")
    setPage(page)
  }

  const handlePrevPage = (page: number) => {
    // console.log("12312", page)
    setPage(page - 2)
  }

  return (
    <div className="courseList ">
      <AllCoursList courseState={courses.slice((page*perPage), (page*perPage) + 12)} />
      <Pagination currentPage={page + 1} totalPages={(Math.round(courses.length/perPage))} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
    </div>
  );
}
