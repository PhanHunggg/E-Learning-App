import React from 'react'
import { CatalogDto, CourseDetailDto, ManageDto } from '../../../interfaces/course'

interface Props {
  course: CourseDetailDto<ManageDto, CatalogDto> | any;
}

export default function CourseLeft(props: Props) {
  return (
    <div className="col-lg-8 col-md-7 left">
      <h4 className="title_course">{props.course?.tenKhoaHoc}</h4>
      <div className="row headDetailCourse">
        <div className="col-lg-4 col-6 info">
          <div className="detailCourseIntro">
            <div className="img">
              <img src="../images/teacher1.png" alt="students" />
            </div>
            <div className="instructorTitle">
              <p>Giảng viên</p>
              <p>Robert Ngô Ngọc</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-6 major">
          <div className="detailCourseIntro">
            <div className="icon">
              <i className="fa-solid fa-graduation-cap"></i>
            </div>
            <div className="instructorTitle">
              <p>Lĩnh vực</p>
              <p>{props.course?.danhMucKhoaHoc.tenDanhMucKhoaHoc}</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-12">
          <div className="detailCourseIntro">
            <div className="reviewDetail">
              <p>
                4/<sub>5</sub>
                <i className="fa-solid fa-star"></i>
              </p>
              <div className=" rating">
                <input name="clr" type="radio" />
                <input name="clr" type="radio" />
                <input name="clr" type="radio" />
                <input name="clr" type="radio" />
                <input name="clr" type="radio" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="textDiscripts">
        React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử
        dụng và tìm hiểu ngày nay để xây dựng giao diện người dùng hiện
        đại, phản ứng cho web.Khóa học này dạy bạn về React chuyên sâu, từ
        cơ bản, từng bước đi sâu vào tất cả các kiến ​​thức cơ bản cốt
        lõi, khám phá rất nhiều ví dụ và cũng giới thiệu cho bạn các khái
        niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví dụ và
        bản trình diễn, bài tập và bài tập cũng như vô số kiến ​​thức quan
        trọng bị hầu hết các nguồn khác bỏ qua - sau cùng, có một lý do
        tại sao khóa học này lại rất lớn! Và trong trường hợp bạn thậm chí
        không biết tại sao bạn lại muốn học React và bạn chỉ ở đây vì một
        số quảng cáo hoặc "thuật toán" - đừng lo lắng: ReactJS là một công
        nghệ quan trọng với tư cách là một nhà phát triển web và trong
        khóa học này, tôi sẽ cũng giải thích TẠI SAO điều đó lại quan
        trọng!
      </p>
      <div className="boxCourseLearn">
        <h4>Những gì bạn sẽ học</h4>
        <div className="row">
          <div className="col-6 detail">
            <ul>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>
                  Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân
                  thiện với người dùng và phản ứng nhanh
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>
                  Đăng ký công việc được trả lương cao hoặc làm freelancer
                  trong một trong những lĩnh vực được yêu cầu nhiều nhất
                  mà bạn có thể tìm thấy trong web dev ngay bây giờ
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>
                  Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận
                  dụng sức mạnh của JavaScript một cách dễ dàng
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>
                  Tìm hiểu tất cả về React Hooks và React Components
                </span>
              </li>
            </ul>
          </div>
          <div className="col-6 detail">
            <ul>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>
                  Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp
                  Javascript NPM, Webpack, Babel và ES6 / ES2015
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>
                  Nhận ra sức mạnh của việc xây dựng các thành phần có thể
                  kết hợp
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>
                  Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi
                  người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản
                </span>
              </li>
              <li>
                <i className="fa-solid fa-check"></i>
                <span>
                  Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các
                  ứng dụng Redux
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
