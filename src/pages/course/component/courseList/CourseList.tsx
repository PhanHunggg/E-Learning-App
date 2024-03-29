import React, { useEffect, useState } from "react";

import { CatalogDto, CourseListDto, ManageDto } from "../../../../interfaces/course";
import { fetchCourseListApi } from "../../../../services/course ";

import Pagination from "../pagination/Pagination";
import AllCoursList from "./component/AllCoursList";

import "./courseList.scss";
import { useLoading } from "../../../../contexts/loading/LoadingHook";

export default function CourseList(): JSX.Element {

  const [courses, setCourses] = useState<CourseListDto<ManageDto, CatalogDto>[]>([]);
  const [page, setPage] = useState(0);
  const { isLoading, setLoading } = useLoading()


  const [perPage, setPerPage] = useState(12);



  useEffect(() => {
    if (courses.length) return
    setLoading(true);
    renderCourses().then(() => {
      setLoading(false);
    })



  }, [isLoading]);

  const renderCourses = async () => {
    const { data } = await fetchCourseListApi();

    setCourses(data);
  }

  const handleNextPage = (page: number) => {
    setPage(page)
  }

  const handlePrevPage = (page: number) => {
    
    setPage(page - 2)
  }

  return (
    <div className="courseList ">
      <AllCoursList courseState={courses.slice((page * perPage), (page * perPage) + 12)} />
      <Pagination currentPage={page + 1} totalPages={(Math.round(courses.length / perPage))} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
    </div>
  );
}
