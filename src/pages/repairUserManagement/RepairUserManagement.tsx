import { Button, Form, Input, notification, Select } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { GROUP_ID } from "../../constants";
import { userLoginDto } from "../../interfaces/user";
import { updateUserApi } from "../../services/user";
import { RootState } from "../../store/config";
import "../addUserManagement/addUserManagement.scss";

const { Option } = Select;
type SizeType = Parameters<typeof Form>[0]["size"];

interface Props {
  id: any;
}

export default function RepairUserManagement(props: Props): JSX.Element {
  const [form] = Form.useForm();
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );
  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const stateEdu = useSelector((state: RootState) => state.eduReducer);

  const getProfile = () => {
    const data = [...stateEdu.findUserRepairList];
    const idx = data.findIndex((ele) => ele.taiKhoan === props.id.taiKhoan);
    const result: any = data[idx];
    form.setFieldsValue({
      taiKhoan: result.taiKhoan,
      hoTen: result.hoTen,
      email: result.email,
      soDT: result.soDt,
      maLoaiNguoiDung: result.maLoaiNguoiDung,
      matKhau: result.matKhau,
      maNhom: result.tenLoaiNguoiDung,
    });
    console.log(result);
  };

  useEffect(() => {
    getProfile();
  }, [props.id]);

  const handleFinish = async (values: userLoginDto) => {
    const data: any = {
      taiKhoan: values.taiKhoan,
      hoTen: values.hoTen,
      email: values.email,
      soDT: values.soDT,
      maLoaiNguoiDung: values.maLoaiNguoiDung,
      matKhau: values.matKhau,
      maNhom: GROUP_ID,
    };

    try {
      await updateUserApi(data);
      notification.success({
        message: "Cập nhật thành công",
      });
    } catch (error: any) {
      notification.error({
        message: error.response.data,
      });
    }
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
            Cập nhật
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}