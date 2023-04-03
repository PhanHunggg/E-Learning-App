import { Button, Form, Input, notification, Select } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userLoginDto } from "../../interfaces/user";
import { addUserApi } from "../../services/user";
import { RootDispatch } from "../../store/config";
import { fetchUserListAction } from "../../store/reducers/eduReducer";
import "./addUserManagement.scss";

const { Option } = Select;

type SizeType = Parameters<typeof Form>[0]["size"];

export default function AddUserManagement(): JSX.Element {
  const dispatch = useDispatch<RootDispatch>();

  const [form] = Form.useForm();

  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const handleFinish = async (values: userLoginDto) => {
    const data: any = {
      taiKhoan: values.taiKhoan,
      hoTen: values.hoTen,
      email: values.email,
      soDT: values.soDT,
      maLoaiNguoiDung: values.maLoaiNguoiDung,
      matKhau: values.matKhau,
      maNhom: "GP01",
    };

    try {
      await addUserApi(data);
      notification.success({
        message: "Thêm người dùng thành công",
      });
      form.resetFields();
      dispatch(fetchUserListAction());
    } catch (error: any) {
      notification.error({
        message: error.response.data,
      });
    }
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  return (
    <div className="form__User">
      <Form
        form={form}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        onValuesChange={onFormLayoutChange}
        size={componentSize as SizeType}
        onFinish={handleFinish}
        style={{ marginLeft: 35, marginRight: 0 }}
        validateMessages={validateMessages}
      >
        <div className="item">
          <span className="icon__form">
            <i className="fa fa-user-circle"></i>
          </span>
          <Form.Item
            className="taiKhoan"
            name="taiKhoan"
            rules={[
              { required: true, message: "Vui lòng nhập tài khoản của bạn" },
            ]}
          >
            <Input placeholder="Tài khoản" />
          </Form.Item>
        </div>
        <div className="item">
          <span className="icon__form">
            <i className="fa fa-key"></i>
          </span>
          <Form.Item
            className="matKhau"
            name="matKhau"
            rules={[
              { required: true, message: "Vui lòng nhập mật khẩu của bạn" },
            ]}
          >
            <Input.Password
              className="hidden__password"
              placeholder="Mật khẩu"
            />
          </Form.Item>
        </div>
        <div className="item">
          <span className="icon__form icon__name">
            <i className="fa fa-user"></i>
          </span>
          <Form.Item
            className="hoTen"
            name="hoTen"
            rules={[
              { required: true, message: "Vui lòng nhập họ tên của bạn" },
            ]}
          >
            <Input placeholder="Họ tên" />
          </Form.Item>
        </div>
        <div className="item">
          <span className="icon__form">
            <i className="fa fa-phone"></i>
          </span>
          <Form.Item
            className="soDT"
            name="soDT"
            rules={[
              {
                required: true,
                message: "Vui lòng nhập số điện thoại của bạn",
              },
            ]}
          >
            <Input placeholder="Số điện thoại" />
          </Form.Item>
        </div>
        <div className="item">
          <span className="icon__form  icon__code">
            <i className="fa-solid fa-user-pen"></i>
          </span>
          <Form.Item
            className="maLoaiNguoiDung"
            name="maLoaiNguoiDung"
            rules={[
              {
                required: true,
                message: "Vui lòng chọn mã loại người dùng của bạn",
              },
            ]}
          >
            <Select placeholder="Mã Loại Người dùng">
              <Option value="GV">Giảng viên</Option>
              <Option value="HV">Học viên</Option>
            </Select>
          </Form.Item>
        </div>
        <div className="item">
          <span className="icon__form">
            <i className="fa fa-envelope"></i>
          </span>
          <Form.Item
            className="email"
            name="email"
            validateFirst
            rules={[
              {
                required: true,
                message: "Vui lòng nhập email của bạn",
              },
              {
                pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Email phải đúng định dạng.",
              },
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
        </div>
        <Form.Item className="button__user">
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
