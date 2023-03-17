import React, { useEffect, useState } from 'react'
import Modal from '../../components/modal/Modal'
import { RegistrationCourseDetailDto } from '../../interfaces/course'
import { userProfileDto } from '../../interfaces/user'
import { fetchUserProfileApi } from '../../services/user'
import LeftProfile from './components/leftProfile/LeftProfile'
import RightProfile from './components/right-profile/RightProfile'

import "./profile.scss"

export default function Profile() {

    const [userProfile, setUserProfile] = useState<userProfileDto<RegistrationCourseDetailDto> | any>()

    useEffect(() => {
        getUserProfile();
    }, []);

    const getUserProfile = async () => {
        const userProfile = await fetchUserProfileApi()
        setUserProfile(userProfile.data);
    }
    return (
        <div className='profile'>
            <div className="title">
                <h3>THÔNG TIN CÁ NHÂN</h3>
                <p>THÔNG TIN HỌC VIÊN</p>
            </div>
            <div className="infoPageContent">
                <div className="row">
                    <LeftProfile userProfile={userProfile} />
                    <RightProfile />
                </div>
            </div>
            <Modal userProfile={userProfile} />
        </div>
    )
}
