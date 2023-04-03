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
import { useNavigate } from "react-router-dom";
import { withViewport } from "../../HOCs/withViewport";
import { useLoading } from "../../contexts/loading/LoadingHook";
import {
  DESKTOP,
  IPAD_PRO,
  IPHONE6PLUS,
  MOBILE,
  TABLET,
} from "../../constants";

interface Props {
  device: any;
}

function UserManagement(props: Props): JSX.Element {
  const navigate = useNavigate();

  const stateEdu = useSelector((state: RootState) => state.eduReducer);

  const dispatch = useDispatch<RootDispatch>();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [userList, setUserList] = useState<UserList<MaLoaiNguoiDung>[]>(
    stateEdu.UserList
  );

  const { isLoading, setLoading } = useLoading();

  const [id, setId] = useState<any>();

  const [keyWord, setKeyWord] = useState<any>();

  useEffect(() => {
    if (stateEdu.UserList.length && stateEdu.findUserRepairList.length) return;
    setLoading(true);

    dispatch(fetchUserListAction());
    dispatch(findUserRepairAction());

    if (stateEdu.UserList.length) {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    setUserList(stateEdu.UserList);
  }, [stateEdu.UserList]);

  useEffect(() => {
    dispatch(findUserAction(keyWord));
  }, [keyWord]);

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

    try {
      await deleteUserApi(user.taiKhoan);
      notification.success({
        message: "Xóa người dùng thành công",
      });
      setUserList(data);
      setKeyWord([]);
      dispatch(fetchUserListAction());
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
      render: (text, _, idx: number) => (
        <>
          <span>{idx + 1}</span>
        </>
      ),
      responsive: ["sm"],
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
      responsive: ["md"],
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
      render: (text) => <>{text.email}</>,
      responsive: ["lg"],
    },
    {
      title: "Số điện thoại",
      key: "soDt",
      className: "soDt",
      dataIndex: "soDt",
      responsive: ["sm"],
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
    setId(text);
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={`header__admin d-flex `}>
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
          className="button__addUser"
        >
          Thêm Người Dùng
        </Button>
        <Search
          onChange={handleChange}
          placeholder="Nhập tên hoặc tài khoản người dùng"
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
      <Table columns={columns} dataSource={handleFilterUser(filter) as any} />
      <Modal
        title="Thông tin người dùng"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        className={`${props.device === TABLET && "tablet"} ${
          props.device === IPHONE6PLUS && "iphone6plus"
        } ${props.device === MOBILE && "mobile"} ${
          props.device === IPAD_PRO && "laptop"
        } ${props.device === DESKTOP && "desktop"} user__management`}
      >
        <AddUserManagement />
      </Modal>
      <Modal
        title="Cập nhật khóa học"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        className={`${props.device === TABLET && "tablet"} ${
          props.device === IPHONE6PLUS && "iphone6plus"
        } ${props.device === MOBILE && "mobile"} ${
          props.device === IPAD_PRO && "laptop"
        } ${props.device === DESKTOP && "desktop"} user__repair`}
      >
        <RepairUserManagement id={id} />
      </Modal>
    </>
  );
}

export default withViewport(UserManagement);
