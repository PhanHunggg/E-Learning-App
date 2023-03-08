import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "../../store/config";

import { Button, Modal, Space, Table, Tag } from "antd";
import type { ColumnsType } from "antd/es/table";

import "./userManagement.scss";
import { fetchUserListAction } from "../../store/reducers/eduReducer";
import { MaLoaiNguoiDung, UserList } from "../../interfaces/userList";

import "./userManagement.scss";
import AddUserManagement from "../addUserManagement copy/AddUserManagement";

export default function UserManagement(): JSX.Element {
  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
    dispatch(fetchUserListAction());
  }, []);

  const stateUserList = useSelector(
    (state: RootState) => state.eduReducer?.UserList
  );

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

  const columns: ColumnsType<UserList<MaLoaiNguoiDung>> = [
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
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Người dùng",
      key: "maLoaiNguoiDung",
      render: (text) => (
        <>
          <span>{text.maLoaiNguoiDung}</span>
        </>
      ),
    },
    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Số điện thoại",
      key: "soDt",
      dataIndex: "soDt",
    },
    {
      title: "Chức năng",
      key: "chucNang",
      render: (text) => (
        <>
          <button className="btn add-user">Ghi danh</button>
          <button className="btn btn-warning repair">Sửa</button>
          <button className="btn btn-danger delete">Xóa</button>
        </>
      ),
    },
  ];

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
        Thêm Người Dùng
      </Button>
      <Table
        className="userList"
        columns={columns}
        dataSource={stateUserList as Array<UserList<MaLoaiNguoiDung>>}
      />
      <Modal
        title="Thông tin người dùng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddUserManagement />
      </Modal>
    </>
  );
}
