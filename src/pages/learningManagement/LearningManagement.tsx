import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "../../store/config";
import {
  EduState,
  fetchCourseListAction,
} from "../../store/reducers/eduReducer";

import { Button, Space, Table, Tag, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import "./learningManagement.scss";
import AddLearningManagement from "../addLearningManagement/AddLearningManagement";
import { useNavigate } from "react-router-dom";
import { CatalogDto, CourseListDto, ManageDto } from "../../interfaces/course";

export default function LearningManagement(): JSX.Element {
  const columns: ColumnsType<CourseListDto<ManageDto, CatalogDto>> = [
    {
      title: "STT",
      key: "Stt",
      // render: (_, idx: number) => (
      //   <>
      //     <p>{idx}</p>
      //   </>
      // ),
    },
    {
      title: "Mã khóa học",
      dataIndex: "maKhoaHoc",
      key: "maKhoaHoc",
    },
    {
      title: "Tên khóa học",
      dataIndex: "tenKhoaHoc",
      key: "tenKhoaHoc",
    },
    {
      title: "Hình ảnh",
      key: "hinhAnh",
      render: (text) => (
        <>
          <img src={`${text.hinhAnh}`} alt="#" />
        </>
      ),
    },
    {
      title: "Người tạo",
      key: "hoTen",
      render: (text) => (
        <>
          <p>{text.nguoiTao.hoTen}</p>
        </>
      ),
    },
    {
      title: "Chức năng",
      key: "chucNang",
      render: (text) => (
        <div>
          <button className="btn add-user">Ghi danh</button>
          <button className="btn btn-warning repair">Sửa</button>
          <button className="btn btn-danger delete">Xóa</button>
        </div>
      ),
    },
  ];

  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
    dispatch(fetchCourseListAction());
  }, []);

  const stateCourseList = useSelector(
    (state: RootState) => state.eduReducer?.courseList
  );

  console.log(stateCourseList);

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

  return (
    <>
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
      >
        Thêm Khóa Học
      </Button>
      <Table
        className="leaningList"
        columns={columns}
        dataSource={
          stateCourseList as Array<CourseListDto<ManageDto, CatalogDto>>
        }
      />
      <Modal
        title="Thêm khóa học"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddLearningManagement />
      </Modal>
    </>
  );
}
