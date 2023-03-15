import React from 'react'
import MyCourseInfo from './components/MyCourseInfo'
import UserInfo from './components/UserInfo'

export default function RightProfile() {
    return (
        <div className="col-lg-9 col-md-8 content right">

            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active button btn_info" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Thông tin cá nhân</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link button btn_course" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Khóa học</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <UserInfo />
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <MyCourseInfo />
                </div>
            </div>
        </div>
    )
}
