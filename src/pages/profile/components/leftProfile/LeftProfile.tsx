import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../../../store/config'

export default function LeftProfile() {
    const userProfile = useSelector((state: RootState) => state.eduReducer.userProfile)
    return (
        <div className="col-lg-3 col-md-4 left">
            <div className="info">
                <img src="./images/avatar.jpg" alt="" />
                <h5>{userProfile?.hoTen}</h5>
                <p>Lập trình viên Front-end</p>
            </div>
        </div>
    )
}
