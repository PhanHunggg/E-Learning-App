import { Button, Form, Input, notification, Select } from "antd";
import React, { useState } from "react";
import { userLoginDto } from "../../interfaces/user";
import { addUserApi } from "../../services/user";
import "./addUserManagement.scss";

const { Option } = Select;

type SizeType = Parameters<typeof Form>[0]["size"];

export default function AddUserManagement(): JSX.Element {
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
    } catch (error: any) {
      notification.error({
        message: error.response.data,
      });
    }
    form.resetFields();
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
        style={{ marginLeft: 160, marginRight: 100 }}
      >
        <div className="item">
          <span className="icon__form">
            <i className="fa fa-user-circle"></i>
          </span>
          <Form.Item
            className="taiKhoan"
            name="taiKhoan"
            rules={[
              { required: true, message: "Tài khoản không được để trống" },
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
              { required: true, message: "Mật khẩu không được để trống" },
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
            rules={[{ required: true, message: "Họ tên không được để trống" }]}
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
              { required: true, message: "Số điện thoại không được để trống" },
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
                message: "Mã loại người dùng không được để trống",
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
            rules={[{ required: true, message: "Email không được để trống" }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
        </div>
        <Form.Item className="button">
          <Button type="primary" htmlType="submit">
            Đăng ký
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
