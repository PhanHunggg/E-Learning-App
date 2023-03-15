import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../store/config'
import RightItem from './RightItem'
import { RegistrationCourseDetailDto } from "./../../../../../interfaces/course"

export default function MyCourseInfo() {
    const userProfile = useSelector((state: RootState) => state.eduReducer.userProfile)
    const renderItem = () => {
        return userProfile?.chiTietKhoaHocGhiDanh.map((ele: RegistrationCourseDetailDto) => {
            return <RightItem key={ele.maKhoaHoc} ele={ele} />
        })
    }

    return (

        <div className="myCourseInfo">
            <div className="myCourse">
                <h4>Khóa học của tui</h4>
                <form className='form' >
                    <input type="text" placeholder='Tìm khóa học...' />
                    <i className="fa-solid fa-magnifying-glass"></i>
                </form>
            </div>
            <div className="myCourseItem">
                {renderItem()}
            </div>
        </div>
    )
}
