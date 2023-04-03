import React from 'react'
import CourseBox from './component/courseBox/CourseBox'
import CourseList from './component/courseList/CourseList'
import TitleCourse from './component/titleCourse/TitleCourse'

export default function Course(): JSX.Element {
  return (
    <div style={{ paddingTop: 100 }}>
      <TitleCourse />
      <CourseBox />
      <CourseList />
    </div>
  )
}
