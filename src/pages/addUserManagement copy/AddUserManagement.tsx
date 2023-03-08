import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";
import React, { useState } from "react";

type SizeType = Parameters<typeof Form>[0]["size"];

export default function AddUserManagement() {
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
    >
      <Form.Item label="Input">
        <Input placeholder="Tài Khoản" />
      </Form.Item>
      <Form.Item label="Input">
        <Input placeholder="Họ và Tên" />
      </Form.Item>
      <Form.Item label="Input">
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item label="Input">
        <Input placeholder="Mật khẩu" />
      </Form.Item>
      <Form.Item label="Input">
        <Input placeholder="Số điện thoại" />
      </Form.Item>
      <Form.Item label="Select">
        <Select placeholder="Loại người dùng">
          <Select.Option value="GV">Giáo vụ</Select.Option>
          <Select.Option value="HV">Học viên</Select.Option>
        </Select>
      </Form.Item>
    </Form>
  );
}
