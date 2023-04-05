import React, { useEffect, useState } from 'react'
import Modal from '../../components/modal/Modal'
import { DESKTOP, IPHONE6, IPHONE6PLUS, IPAD_PRO } from '../../constants'
import { withViewport } from '../../HOCs/withViewport'
import { RegistrationCourseDetailDto } from '../../interfaces/course'
import { userProfileDto } from '../../interfaces/user'
import { fetchUserProfileApi } from '../../services/user'
import LeftProfile from './components/leftProfile/LeftProfile'
import RightProfile from './components/right-profile/RightProfile'

import "./profile.scss"
import { useLoading } from '../../contexts/loading/LoadingHook'

interface Props {
    device: any;
}

function Profile(props: Props): JSX.Element {

    const [userProfile, setUserProfile] = useState<userProfileDto<RegistrationCourseDetailDto> | any>()
    const { isLoading, setLoading } = useLoading()

    useEffect(() => {
        if (userProfile) return
        setLoading(true)
        getUserProfile().then(() => {
            setLoading(false)
        });
    }, [isLoading]);

    const getUserProfile = async () => {
        const result = await fetchUserProfileApi()
        setUserProfile(result.data);
    }
    return (
        <div className={`profile ${(props.device !== DESKTOP && "active") && (props.device !== IPAD_PRO && "active")} ${(props.device === IPHONE6 && "find") || (props.device === IPHONE6PLUS && "find")}`}>
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

export default withViewport(Profile)