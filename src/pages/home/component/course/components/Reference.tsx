import React from 'react'
import { Link } from 'react-router-dom';
import { EduState } from '../../../../../store/reducers/eduReducer';

interface Props {
    courseState: EduState;
}

export default function Reference(props: Props) {
    const renderReference = () => {
        return props.courseState?.courseList?.map((ele, idx) => {
            return <React.Fragment key={ele.maKhoaHoc}>
                {
                    (4 < idx && idx <= 8) && ele.nguoiTao.hoTen && <div className="col-xl-3 col-md-6 card cardGlobalRes mt-4">
                        <Link to={`/course-detail/${ele.maKhoaHoc}`}>
                            <div className="card_header">
                                <img src="https://ectimes.files.wordpress.com/2019/03/cac-ngon-ngu-lap-trinh-pho-bien-2.jpg" alt={ele.biDanh} />
                                <span>{ele.biDanh}</span>
                            </div>
                            <div className="card_body">
                                <h6>{ele.tenKhoaHoc}</h6>
                                <div className="author">
                                    <div className="img">
                                        <img src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png" alt="#" />
                                    </div>
                                    <span>{ele.nguoiTao.hoTen}</span>

                                </div>

                            </div>
                            <div className="card_footer">
                                <div className="total">
                                    <p>800.000<sup>đ</sup></p>
                                    <p>400.000đ</p>
                                </div>
                                <div className="rate">
                                    <i className="fa-solid fa-star"></i>
                                    <span>4.9</span>
                                    <span>(9999)</span>
                                </div>
                            </div>
                        </Link>
                    </div>
                }
            </React.Fragment>

        })
    }
    return (
        <div className=" course_list reference">
            <h6>Khóa học tham khảo</h6>
            <div className="row mt-4">
                {renderReference()}
            </div>
        </div>
    )
}
