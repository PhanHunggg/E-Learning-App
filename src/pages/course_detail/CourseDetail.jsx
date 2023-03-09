import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCourseDetailApi } from "../../services/course ";
import "./courseDetail.scss";

export default function CourseDetail() {
  const params = useParams();
  useEffect(() => {
    getCourseDetail();
  }, []);

  const getCourseDetail = async () => {
    const result = await fetchCourseDetailApi(params.course);
    console.log(result.data);
  };
  return (
    <section className="course_detail">
      <div className="title">
        <h3>Thông tin khóa học</h3>
        <p>Tiến lên và không chần chừ</p>
      </div>
      <div className="detailCourseContent">
        <div className="row">
          <div className="col-lg-8 col-md-7">
            <h4 className="title_course">LẬP TRÌNH FRONT-END CHUYÊN NGHIỆP</h4>
            <div className="row headDetailCourse">
              <div className="col-4">
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
              <div className="col-4">
                <div className="detailCourseIntro">
                  <div className="icon">
                    <i class="fa-solid fa-graduation-cap"></i>
                  </div>
                  <div className="instructorTitle">
                    <p>Lĩnh vực</p>
                    <p>Lập trình Backend</p>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="detailCourseIntro">
                  <div className="reviewDetail rating">
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
          <div className="col-lg-4 col-md-5"></div>
        </div>
      </div>
    </section>
  );
}
