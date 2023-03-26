import { notification } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { cancelCourseApi } from '../../../../../services/course ';
import { RootState } from '../../../../../store/config';
import { RegistrationCourseDetailDto, SignUpCourseDto } from "./../../../../../interfaces/course"
interface Props {
    ele: RegistrationCourseDetailDto
    handleCancel: (id: string) => {}
}

export default function RightItem(props: Props) {
    return (
        <div className="item">
            <div className="row">
                <div className="col-xl-3 col-lg-4">
                    <img id='course' src={props.ele.hinhAnh} alt={props.ele.biDanh} />
                </div>
                <div className="col-xl-7 col-lg-6 cardNetContent">
                    <h6>{props.ele.tenKhoaHoc} </h6>
                    <p className="content">
                        {props.ele.moTa}
                    </p>
                    <div className="iconNetCard">
                        <span><i className="fa-regular fa-clock"></i> 8 giờ</span>
                        <span><i className="fa-regular fa-calendar"></i> 23 giờ</span>
                        <span><i className="fa-solid fa-signal"></i> All level</span>
                    </div>
                    <p className="iconStarNet">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </p>
                    <div className="teacher">
                        <img src="https://demo2.cybersoft.edu.vn/static/media/instrutor10.89946c43.jpg" alt="1" />
                        <span>Nguyễn Nam</span>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-2 cancelNet">
                    <button onClick={() => props.handleCancel(props.ele.maKhoaHoc)} className='btn btn-warning'>Hủy khóa học</button>
                </div>
            </div>
        </div>
    )
}
