import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootDispatch, RootState } from "../../store/config";
import { Button, Modal, notification, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import {
  fetchUserListAction,
  findUserAction,
  findUserRepairAction,
} from "../../store/reducers/eduReducer";
import { MaLoaiNguoiDung, UserList } from "../../interfaces/userList";
import "./userManagement.scss";
import AddUserManagement from "../addUserManagement/AddUserManagement";
import { deleteUserApi } from "../../services/user";
import Search from "antd/es/transfer/search";
import RepairUserManagement from "../repairUserManagement/RepairUserManagement";

export default function UserManagement(): JSX.Element {
  const [id, setId] = useState<any>();

  const [keyWord, setKeyWord] = useState<any>();

  const dispatch = useDispatch<RootDispatch>();

  useEffect(() => {
    dispatch(fetchUserListAction());
  }, []);

  useEffect(() => {
    dispatch(findUserRepairAction(id?.taiKhoan));
  }, [id]);

  useEffect(() => {
    dispatch(findUserAction(keyWord));
  }, [keyWord]);

  const stateEdu = useSelector((state: RootState) => state.eduReducer);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userList, setUserList] = useState<UserList<MaLoaiNguoiDung>[]>(
    stateEdu.UserList
  );

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteUser = async (user: UserList<MaLoaiNguoiDung>) => {
    const data = [...stateEdu.UserList];
    const idx = data.findIndex((ele) => ele.taiKhoan === user.taiKhoan);

    try {
      await deleteUserApi(user.taiKhoan);
      notification.success({
        message: "Xóa người dùng thành công",
      });
      data.splice(idx, 1);
      setUserList(data);
      setKeyWord([]);
    } catch (error: any) {
      notification.error({
        message: error.response.data,
      });
    }
  };

  const columns: ColumnsType<UserList<MaLoaiNguoiDung>> = [
    {
      title: "STT",
      key: "Stt",
      className: "Stt",
      // render: (_, idx: number) => (
      //   <>
      //     <p>{idx}</p>
      //   </>
      // ),
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      className: "taiKhoan",
      key: "taiKhoan",
    },
    {
      title: "Người dùng",
      key: "maLoaiNguoiDung",
      className: "maLoaiNguoiDung",
      render: (text) => (
        <>
          <span>{text.maLoaiNguoiDung}</span>
        </>
      ),
    },
    {
      title: "Họ và tên",
      className: "hoTen",
      dataIndex: "hoTen",
      key: "hoTen",
    },
    {
      title: "Email",
      key: "email",
      className: "email ",
      render: (text) => (
        <>
          <div>
            <span>{text.email}</span>
          </div>
        </>
      ),
    },

    {
      title: "Số điện thoại",
      key: "soDt",
      className: "soDt",
      dataIndex: "soDt",
    },
    {
      title: "Chức năng",
      key: "chucNang",
      className: "chucNang",
      render: (text) => (
        <>
          <button onClick={() => showModalRepair(text)} className="btn repair">
            Sửa
          </button>
          <button
            onClick={() => handleDeleteUser(text)}
            className="btn btn-danger delete"
          >
            Xóa
          </button>
        </>
      ),
    },
  ];

  const filter: any = stateEdu.findUserList;

  const handleFilterUser = (data: any) => {
    if (!keyWord) {
      return userList;
    } else {
      if (keyWord === "") {
        return userList;
      }

      if (data[0]?.hoTen === "undefined") {
        return data[0];
      }

      if (data) {
        return data;
      }
    }
  };

  const handleChange = (event: any) => {
    setKeyWord(event.target.value);
  };

  const [open, setOpen] = useState(false);

  const showModalRepair = (text: any) => {
    setOpen(true);
    setId(text);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="header__admin d-flex">
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
        <Search
          onChange={handleChange}
          placeholder="Nhập tài khoản người dùng"
        />
      </div>
      <Table columns={columns} dataSource={handleFilterUser(filter) as any} />
      <Modal
        title="Thông tin người dùng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <AddUserManagement />
      </Modal>
      <Modal
        title="Sửa khóa học"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
      >
        <RepairUserManagement id={id} />
      </Modal>
    </>
  );
}
