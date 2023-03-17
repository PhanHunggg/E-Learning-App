
import React from 'react'


import { CatalogDto, CourseDetailDto, ManageDto } from '../../../interfaces/course';

interface Props {
  course: CourseDetailDto<ManageDto, CatalogDto> | any;


  handleSignUp: () => {}
  handleCancel: () => {}

}
export default function CourseRight(props: Props) {

  return (
    <div className="col-lg-4 col-md-5 right">
      <div className="sideBarCourseDetail">
        <img src={props.course?.hinhAnh} alt={props.course?.biDanh} />
        <div className="coursePrice">
          <p>
            <i className="fa-solid fa-bolt"></i> 400.000<sup>đ</sup>
          </p>
        </div>
        <button onClick={() => props.handleSignUp()} className="btnGlobal btnPreview signUp">Đăng ký</button>
        <button onClick={() => props.handleCancel()} className="btnGlobal btnPreview cancel">Hủy đăng ký</button>
        <div className="sideBarDetailContent">
          <ul>
            <li>
              <p>
                Ghi danh: <span>10 học viên</span>
              </p>
              <i className="fa-solid fa-user-graduate"></i>
            </li>
            <li>
              <p>
                Thời gian: <span>18 giờ</span>
              </p>
              <i className="fa-regular fa-clock"></i>
            </li>
            <li>
              <p>
                Bài học: <span>10</span>
              </p>
              <i className="fa-solid fa-book"></i>
            </li>
            <li>
              <p>
                Video: <span>14</span>
              </p>
              <i className="fa-solid fa-photo-film"></i>
            </li>
            <li>
              <p>
                Trình độ: <span>Người mới bắt đầu</span>
              </p>
              <i className="fa-solid fa-database"></i>
            </li>
          </ul>
        </div>
        <form className="formCoupon">
          <input
            placeholder="Nhập mã Coupon"
            type="text"
            className="form-control"
            name="formCoupon"
          />
        </form>
      </div>
    </div>
  )
}
