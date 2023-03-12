
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootDispatch, RootState } from '../../../../store/config';
import { fetchCourseListAction } from '../../../../store/reducers/eduReducer';
import AllCoursList from './component/AllCoursList';
// import Test from "./component/Test"
// import PageOne from './component/PageOne';
import "./courseList.scss"



export default function CourseList(): JSX.Element {
  const dispatch = useDispatch<RootDispatch>();
  const courseState = useSelector((state: RootState) => state.eduReducer)


  useEffect(() => {
   dispatch(fetchCourseListAction  ()) 
  })

  return (
    <div className='courseList '>
   
      <AllCoursList courseState={courseState}/>
    </div>
  )
}
