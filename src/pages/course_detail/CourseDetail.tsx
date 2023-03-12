import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { cancelCourseApi, fetchCourseDetailApi, signUpCourseApi } from "../../services/course ";
import "./courseDetail.scss";
import {
  CourseDetailDto,
  ManageDto,
  CatalogDto,
  SignUpCourseDto,
} from "./../.././interfaces/course";
import CourseLeft from "./components/CourseLeft";
import CourseRight from "./components/CourseRight";
import { useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "../../store/config";
import { fetchUserProfileAction } from "../../store/reducers/eduReducer";
import { notification } from "antd";

export default function CourseDetail() {
  const dispatch = useDispatch<RootDispatch>()
  const [course, setCourse] = useState<CourseDetailDto<ManageDto, CatalogDto>>();
  const params = useParams();
  const eduState = useSelector((state: RootState) => state.eduReducer)
  const [checkCourse, setCheckCourse] = useState<boolean>(false)

  useEffect(() => {
    getCourseDetail();
    dispatch(fetchUserProfileAction())
    handleCheckCourse()
  }, []);

  const getCourseDetail = async () => {

    const result = await fetchCourseDetailApi(params.course || "");

    setCourse(result.data);
  };

  const handleCheckCourse = (): void => {
    const idx = eduState.userProfile?.chiTietKhoaHocGhiDanh.findIndex((ele) => ele.maKhoaHoc === params.course)

    if (idx === -1) {
      setCheckCourse(false)
    } else {
      setCheckCourse(true)
    }
  }
 
  const handleSignUp = async (course: boolean) => {
    const data: SignUpCourseDto = {
      maKhoaHoc: params?.course || "",
      taiKhoan: eduState.userInfo?.taiKhoan || "",
    }

    if (course) {

      try {
        await cancelCourseApi(data)
        notification.success({
          message: "Hủy khóa học thành công"
        })
        setCheckCourse(false);
      } catch (error: any) {
        notification.error({
          message: error.response.data
        })
      }

    } else {

      try {
        await signUpCourseApi(data)
        notification.success({
          message: "Đăng ký khóa học thành công"
        })
        setCheckCourse(true);
      } catch (error: any) {
        notification.error({
          message: error.response.data
        })
      }
    }

  }



  return (
    <section className="course_detail">
      <div className="title">
        <h3>Thông tin khóa học</h3>
        <p>Tiến lên và không chần chừ</p>
      </div>
      <div className="detailCourseContent">
        <div className="row">
          <CourseLeft course={course} />
          <CourseRight handleSignUp={handleSignUp} checkCourse={checkCourse} params={params} course={course} />
        </div>
      </div>
    </section>
  );
}
