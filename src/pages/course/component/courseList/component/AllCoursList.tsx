import React, { useState } from "react";
import { EduState } from "../../../../../store/reducers/eduReducer";

import {
  CatalogDto,
  CourseListDto,
  ManageDto,
} from "../../../../../interfaces/course";
import "./allCourseList.scss"
interface Props {
  courseState: CourseListDto<ManageDto, CatalogDto>[];
}

export default function AllCoursList(props: Props) {

  const renderAllCourse = () => {
    return props.courseState?.map((ele, idx) => {
      return (
        <React.Fragment key={ele.maKhoaHoc}>
          {
            <div className="col-xl-3 col-md-6 col-lg-4 cardEffect cardGlobalRes mt-4">
              <a href={`/course-detail/${ele.maKhoaHoc}`}>
                <div className="card_header">
                  <img src={ele.hinhAnh} alt={ele.biDanh} />
                  <span>{ele.biDanh}</span>
                </div>
                <div className="card_body">
                  <h6>{ele.tenKhoaHoc}</h6>
                  <div className="author">
                    <div className="img">
                      <img
                        src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png"
                        alt="#"
                      />
                    </div>
                    <span>{ele.nguoiTao.hoTen}</span>
                  </div>
                </div>
                <div className="card_footer">
                  <div className="total">
                    <p>
                      800.000<sup>đ</sup>
                    </p>
                    <p>400.000đ</p>
                  </div>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <span>4.9</span>
                    <span>(9999)</span>
                  </div>
                </div>
              </a>
            </div>
          }
        </React.Fragment>
      );
    });
  };

  return (
    <div className="course_list">
      <h6>
        <i className="fas fa-bookmark"></i>
        Danh sách khóa học
      </h6>
      <div className="row ">{renderAllCourse()}</div>
    </div>
  );
}
