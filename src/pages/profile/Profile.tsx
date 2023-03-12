import React from 'react'
import Modal from '../../components/modal/Modal'

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
                    <div className="col-lg-3 col-md-4 left">
                        <div className="info">
                            <img src="./images/avatar.jpg" alt="" />
                            <h5>Robert Nguyễn</h5>
                            <p>Lập trình viên Front-end</p>
                        </div>
                    </div>
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
                                <div className="userInfo">
                                    <div className="top">
                                        <div className="row">
                                            <div className="col-md-7">
                                                <p>Email: <span>hung3@gmail.com</span></p>
                                                <p>Họ và tên: <span>Phan Quoc Hung</span></p>
                                                <p>Số điện thoại: <span>0797720574</span></p>
                                            </div>
                                            <div className="col-md-5">
                                                <p>Tài khoản: <span>phanquochung</span></p>
                                                <p>Nhóm: <span>GP01</span></p>
                                                <p>Đối tượng: <span>Học viên</span></p>
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
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal />
        </div>
    )
}
