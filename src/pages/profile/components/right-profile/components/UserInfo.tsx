import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RegistrationCourseDetailDto } from '../../../../../interfaces/course'
import { userProfileDto } from '../../../../../interfaces/user'
import { RootState } from '../../../../../store/config'

import { fetchUserProfileApi } from "../../../../../services/user"

export default function UserInfo() {
    // const userProfile = useSelector((state: RootState) => state.eduReducer.userInfo)
    const [userProfile, setUserProfile] = useState<userProfileDto<RegistrationCourseDetailDto>>()

    const getUserProfile = async () => {
        const result = await fetchUserProfileApi()
        setUserProfile(result.data)
    }

    useEffect(() => {
        getUserProfile()
    }, [])


    return (
        <div className="userInfo">
            <div className="top">
                <div className="row">
                    <div className="col-md-7">
                        <p>Email: <span>{userProfile?.email}</span></p>
                        <p>Họ và tên: <span>{userProfile?.hoTen}</span></p>
                        <p>Số điện thoại: <span>{userProfile?.soDT}</span></p>
                    </div>
                    <div className="col-md-5">
                        <p>Tài khoản: <span>{userProfile?.taiKhoan}</span></p>
                        <p>Nhóm: <span>{userProfile?.maNhom}</span></p>
                        <p>Đối tượng: <span>{userProfile?.maLoaiNguoiDung === "HV" ? "Học viên" : "Giảng Viên"}</span></p>
                        <button className='btn btn-primary update' data-toggle="modal" data-target="#exampleModal">Cập Nhật</button>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <h4>Kĩ năng của tôi</h4>

                <div className="row">
                    <div className="skillAll col-xl-8 col-lg-6 ">
                        <div className="mySkill ">
                            <div className="info">
                                <span>Html</span>
                            </div>
                            <div className="progress_line html"><span className='html'></span></div>
                        </div>
                        <div className="mySkill  ">
                            <div className="info">
                                <span>Css</span>
                            </div>
                            <div className="progress_line css"><span className='css'></span></div>
                        </div>
                        <div className="mySkill  ">
                            <div className="info">
                                <span>Bootstrap</span>
                            </div>
                            <div className="progress_line bootstrap"><span className='bootstrap'></span></div>
                        </div>
                        <div className="mySkill ">
                            <div className="info">
                                <span>Js</span>
                            </div>
                            <div className="progress_line js"><span className='js'></span></div>
                        </div>
                        <div className="mySkill ">
                            <div className="info">
                                <span>React</span>
                            </div>
                            <div className="progress_line react"><span className='react'></span></div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 btnTime">
                        <div className="timeStudy">
                            <div className="item">
                                <i className="fa-solid fa-user-clock"></i>
                                <div>
                                    <h6>Giờ học</h6>
                                    <p>80</p>
                                </div>
                            </div>
                            <div className="item">
                                <i className="fa-solid fa-layer-group"></i>
                                <div>
                                    <h6>Điểm tổng</h6>
                                    <p>80</p>
                                </div>
                            </div>
                            <div className="item">
                                <i className="fa-solid fa-swatchbook"></i>
                                <div>
                                    <h6>Buổi học</h6>
                                    <p>40</p>
                                </div>
                            </div>
                            <div className="item">
                                <i className="fa-solid fa-signal"></i>
                                <div>
                                    <h6>Cấp độ</h6>
                                    <p>Trung cấp</p>
                                </div>
                            </div>
                            <div className="item">
                                <i className="fa-solid fa-graduation-cap"></i>
                                <div>
                                    <h6>Học lực</h6>
                                    <p>Khá</p>
                                </div>
                            </div>
                            <div className="item">
                                <i className="fa-solid fa-book"></i>
                                <div>
                                    <h6>Bài tập</h6>
                                    <p>100</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
