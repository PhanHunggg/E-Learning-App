import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { EduState } from "../../../../../store/reducers/eduReducer";
interface Props {
  courseState: EduState;
}

export default function Front_end(props: Props) {
  const navigate = useNavigate();
  const handleCourseFontEnd = () => {
    const data = props.courseState?.courseList;
    let arrFrontEnd = [];
    for (let index = 0; index < data.length; index++) {
      if (
        data[index].danhMucKhoaHoc.maDanhMucKhoahoc === "FrontEnd" &&
        arrFrontEnd.length <= 3
      ) {
        arrFrontEnd.push(data[index]);
      }
    }
    return arrFrontEnd;
  };

  const renderCourseFrontEnd = () => {
    return handleCourseFontEnd().map((ele) => {
      return (
        <div
          key={ele.maKhoaHoc}
          className="col-xl-3 col-md-6 card cardGlobalRes mt-4"
        >
          <Link to={`/course-detail/${ele.maKhoaHoc}`}>
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
            <div className="subCard">
              <div className="subCard_header">
                <img src="./images/GV.png" alt="Giáo viên" />
                <span>{ele.nguoiTao.hoTen}</span>
              </div>
              <div className="body">
                <h5>{ele.tenKhoaHoc}</h5>
                <p className="cardTitle">
                  Đã có hơn 6200 bạn đăng kí học và có việc làm thông qua chương
                  trình đào tạo Bootcamp Lập trình Front End chuyên nghiệp. Khóa
                  học 100% thực hành cường độ cao theo dự án thực tế và kết nối
                  doanh nghiệp hỗ trợ tìm việc ngay sau khi học...
                </p>
                <div className="cardIcon">
                  <span>
                    <i className="far fa-clock iconOclock"></i>8 giờ
                  </span>
                  <span>
                    <i className="far fa-calendar-alt iconCalendar"></i>4 giờ
                  </span>
                  <span>
                    <i className="fas fa-signal iconLevel"></i>
                    Tất cả
                  </span>
                </div>
              </div>
              <div className="subCard_footer">
                <button
                  onClick={() => {
                    navigate(`/course-detail/${ele.maKhoaHoc}`);
                  }}
                  className="btn btn-primary"
                >
                  Xem chi tiết
                </button>
              </div>
            </div>
          </Link>
        </div>
      );
    });
  };
  return (
    <div className=" course_list_detail front_end">
      <h6 style={{ paddingLeft: 15 }}>Khóa học Front End React Js</h6>
      <div className="row ">{renderCourseFrontEnd()}</div>
    </div>
  );
}
