import React from 'react'
import { useSelector } from 'react-redux'
import { RegistrationCourseDetailDto } from '../../../../interfaces/course'
import { userProfileDto } from '../../../../interfaces/user'
import { RootState } from '../../../../store/config'

interface Props {
    userProfile: userProfileDto<RegistrationCourseDetailDto>
}

export default function LeftProfile(props: Props) {

    return (
        <div className="col-lg-3 col-md-4 left">
            <div className="info">
                <img src="../images/avatar.jpg" alt="" />
                <h5>{props.userProfile?.hoTen}</h5>
                <p>Lập trình viên Front-end</p>
            </div>
        </div>
    )
}
