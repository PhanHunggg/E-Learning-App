import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "../../store/config";
import {
  fetchCourseListAction,
  findCourseAction,
} from "../../store/reducers/eduReducer";

import { Button, Table, Modal, notification } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./learningManagement.scss";
import AddLearningManagement from "../addLearningManagement/AddLearningManagement";
import { CatalogDto, CourseListDto, ManageDto } from "../../interfaces/course";
import { deleteCourseApi } from "../../services/course ";

import Search from "antd/es/transfer/search";
import RepairLearning from "../repairLearningmanagement/RepairLearning";
import { useNavigate } from "react-router-dom";
import { withViewport } from "../../HOCs/withViewport";
import { useLoading } from "../../contexts/loading/LoadingHook";
import { DESKTOP, IPAD_PRO, TABLET } from "../../constants";

interface Props {
  device: any;
}

function LearningManagement(props: Props): JSX.Element {
  const dispatch = useDispatch<RootDispatch>();

  const { isLoading, setLoading } = useLoading();

  const navigate = useNavigate();
  const [id, setId] = useState<any>();

  const [keyWord, setKeyWord] = useState<any>();

  const stateEdu = useSelector((state: RootState) => state.eduReducer);

  const [courseList, setCourseList] = useState<
    Array<CourseListDto<ManageDto, CatalogDto>>
  >(stateEdu?.courseList);

  const columns: ColumnsType<any> = [
    {
      title: "STT",
      className: "SttLearning",
      key: "Stt",
      render: (text, _, idx: number) => (
        <>
          <span>{idx + 1}</span>
        </>
      ),
      responsive: ["sm"],
    },
    {
      title: "Mã khóa học",
      className: "maKhoaHoc",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
    },
    {
      title: "Tên khóa học",
      className: "tenKhoaHoc",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
    },
    {
      title: "Hình ảnh",
      className: "hinhAnh",
      key: "hinhAnh",
      render: (text) => <>{text.hinhAnh ? <img src={text.hinhAnh} /> : ""}</>,
      responsive: ["md"],
    },
    {
      title: "Người tạo",
      className: "hoTenLearning",
      key: "hoTen",
      render: (text) => (
        <>
          <p>{text.nguoiTao.hoTen}</p>
        </>
      ),
      responsive: ["sm"],
    },
    {
      title: "Chức năng",
      className: "chucNangLearning",
      key: "chucNang",
      render: (text) => (
        <div>
          <button onClick={() => showModalRepair(text)} className="btn repair">
            Sửa
          </button>
          <button
            onClick={() => deleteCourse(text)}
            className="btn btn-danger delete"
          >
            Xóa
          </button>
        </div>
      ),
    },
  ];

  const deleteCourse = async (course: any) => {
    const data = [...stateEdu?.courseList];
    const idx = data.findIndex((ele) => ele.maKhoaHoc === course.maKhoaHoc);

    if (idx === -1) {
      notification.error({
        message: "Khóa học không có trong danh sách",
      });
    } else {
      try {
        await deleteCourseApi(course.maKhoaHoc);
        notification.success({
          message: "Xóa khóa học thành công",
        });
        dispatch(fetchCourseListAction());
      } catch (error: any) {
        notification.error({
          message: error.response.data,
        });
      }
    }
  };

  useEffect(() => {
    if (stateEdu.courseList.length) return;
    setLoading(true);

    dispatch(fetchCourseListAction());

    setLoading(false);
  }, []);

  useEffect(() => {
    setCourseList(stateEdu.courseList);
  }, [stateEdu.courseList]);

  useEffect(() => {
    dispatch(findCourseAction(keyWord));
  }, [keyWord]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [open, setOpen] = useState(false);

  const showModalRepair = (text: any) => {
    setOpen(true);
    setId(text.maKhoaHoc);
  };

  const hideModal = () => {
    setOpen(false);
  };

  const handleChange = (event: any) => {
    setKeyWord(event.target.value);
  };

  const filter: any = stateEdu.findCourseList;

  const handleFilter = (data: any) => {
    if (!keyWord) {
      return courseList;
    } else {
      if (keyWord === "") {
        return courseList;
      }

      if (data[0]?.hoTen === "undefined") {
        return data[0];
      }

      if (data) {
        return data;
      }
    }
  };

  return (
    <>
      <div
        className={`header__adminLeaning d-flex ${
          props.device !== DESKTOP &&
          "active" &&
          props.device !== IPAD_PRO &&
          "active" &&
          props.device !== TABLET &&
          "active"
        }`}
      >
        <Button
          style={{
            padding: "16px 10px ",
            lineHeight: 0,
            fontWeight: 600,
            marginBottom: 20,
            fontSize: 17,
          }}
          type="primary"
          onClick={showModal}
          className="button__addLearn"
        >
          Thêm Khóa Học
        </Button>
        <Search
          onChange={handleChange}
          placeholder="Nhập tên khóa học cần tìm"
        />
        <span
          className="icon"
          onClick={() => {
            navigate("/");
          }}
        >
          <i className="fa fa-home"></i>
        </span>
      </div>
      <Table
        className="leaningList"
        columns={columns}
        dataSource={handleFilter(filter) as any}
      />
      <Modal
        title="Thêm khóa học"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className="addLearning"
      >
        <AddLearningManagement />
      </Modal>
      <Modal
        title="Sửa khóa học"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
      >
        <RepairLearning id={id} />
      </Modal>
    </>
  );
}

export default withViewport(LearningManagement);
