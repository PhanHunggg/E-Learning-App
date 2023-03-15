import React from 'react'
import Modal from '../../components/modal/Modal'
import LeftProfile from './components/leftProfile/LeftProfile'
import RightProfile from './components/right-profile/RightProfile'

import "./profile.scss"

export default function Profile() {
    return (
        <div className='profile'>
            <div className="title">
                <h3>THÔNG TIN CÁ NHÂN</h3>
                <p>THÔNG TIN HỌC VIÊN</p>
            </div>
            <div className="infoPageContent">
                <div className="row">
                    <LeftProfile />
                    <RightProfile />
                </div>
            </div>
            <Modal />
        </div>
    )
}
