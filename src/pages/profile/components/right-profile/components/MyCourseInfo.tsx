import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../../store/config'
import RightItem from './RightItem'
import { RegistrationCourseDetailDto } from "./../../../../../interfaces/course"
import { userProfileDto } from '../../../../../interfaces/user'
import { fetchUserProfileApi } from '../../../../../services/user'

export default function MyCourseInfo() {
    const [userProfile, setUserProfile] = useState<userProfileDto<RegistrationCourseDetailDto> | any>()

    useEffect(() => {
        getUserProfile();
    }, []);

    const getUserProfile = async () => {
        const userProfile = await fetchUserProfileApi()
        setUserProfile(userProfile.data);
        console.log(userProfile.data)
    }


    const renderItem = () => {
        return userProfile?.chiTietKhoaHocGhiDanh?.map((ele: RegistrationCourseDetailDto) => {
            return <RightItem key={ele.maKhoaHoc} ele={ele} />
        })
    }

    return (

        <div className="myCourseInfo">
            <div className="myCourse">
                <h4>Khóa học của tôi</h4>
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
