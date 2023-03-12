import React from 'react'
import CourseBox from './component/courseBox/CourseBox'
import CourseList from './component/courseList/CourseList'
import PaginationCourse from './component/paginationCourse/PaginationCourse'
import TitleCourse from './component/titleCourse/TitleCourse'

export default function Course(): JSX.Element{
  return (
      <div>
         <TitleCourse/>
          <CourseBox/>
        <CourseList/>
         <PaginationCourse/>
    </div>
  )
}
