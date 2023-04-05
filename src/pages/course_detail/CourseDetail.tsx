import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  cancelCourseApi,
  fetchCourseDetailApi,
  signUpCourseApi,
} from "../../services/course ";
import "./courseDetail.scss";
import {
  CourseDetailDto,
  ManageDto,
  CatalogDto,
  SignUpCourseDto,
} from "./../.././interfaces/course";
import CourseLeft from "./components/CourseLeft";
import CourseRight from "./components/CourseRight";
import { useSelector } from "react-redux";
import { RootState } from "../../store/config";
import { notification } from "antd";
import { withViewport } from "../../HOCs/withViewport";
import { IPHONE6, IPHONE6PLUS } from "../../constants";
import Reference from "../home/component/course/components/Reference";
import { useLoading } from "../../contexts/loading/LoadingHook";

interface Props {
  device: any;
}

function CourseDetail(props: Props): JSX.Element {
  const [course, setCourse] =
    useState<CourseDetailDto<ManageDto, CatalogDto>>();

  const params = useParams();
  const eduState = useSelector((state: RootState) => state.eduReducer);
  const {  setLoading } = useLoading()

  const getCourseDetail = async () => {
    const result = await fetchCourseDetailApi(params.course || "");
    setCourse(result.data);
  };

  useEffect(() => {

    setLoading(true);
    getCourseDetail()
    setLoading(false);

  }, [ params.course]);

  const handleSignUp = async () => {
    const data: SignUpCourseDto = {
      maKhoaHoc: params?.course || "",
      taiKhoan: eduState.userInfo?.taiKhoan || "",
    };

    try {
      await signUpCourseApi(data);
      notification.success({
        message: "Đăng ký khóa học thành công",
        duration: 1,
      });
    } catch (error: any) {
      notification.error({
        message: error.response.data,
        duration: 2,
      });
    }
  };

  const handleCancel = async () => {
    const data: SignUpCourseDto = {
      maKhoaHoc: params?.course || "",
      taiKhoan: eduState.userInfo?.taiKhoan || "",
    };

    try {
      await cancelCourseApi(data);
      notification.success({
        message: "Hủy khóa học thành công",
        duration: 1,
      });
    } catch (error: any) {
      notification.error({
        message: error.response.data,
        duration: 2,
      });
    }
  };

  return (
    <section
      className={`course_detail ${(props.device === IPHONE6 && "active") ||
        (props.device === IPHONE6PLUS && "active")
        }`}
    >
      <div className="title">
        <h3>Thông tin khóa học</h3>
        <p>Tiến lên và không chần chừ</p>
      </div>
      <div className="detailCourseContent course">
        <div className="row">
          <CourseLeft course={course} />
          <CourseRight
            handleCancel={handleCancel}
            handleSignUp={handleSignUp}
            course={course}
          />
          <Reference courseState={eduState} />
        </div>
      </div>
    </section>
  );
}

export default withViewport(CourseDetail);
