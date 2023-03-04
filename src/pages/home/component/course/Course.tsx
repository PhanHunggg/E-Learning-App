import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootDispatch, RootState } from '../../../../store/config';
import { fetchCourseListAction } from '../../../../store/reducers/eduReducer';
import Front_end from './components/Front_end';
import Popular from './components/Popular';
import Reference from './components/Reference';
import "./course.scss"

export default function Course(): JSX.Element {
    const dispatch = useDispatch<RootDispatch>();
    const courseState = useSelector((state: RootState) => state.eduReducer)

    useEffect(() => {
        dispatch(fetchCourseListAction())
    }, [])




    return (
        <div className='course py-5 px-5'>
            <Popular courseState={courseState} />
            <Reference courseState={courseState} />
            <Front_end courseState={courseState} />
        </div>
    )
}
