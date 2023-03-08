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
  Upload,
} from "antd";
import { InboxOutlined, UploadOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { addCourseApi } from "../../services/course ";
import { type } from "os";
import { blob } from "stream/consumers";
import { CatalogDto, CourseListDto, ManageDto } from "../../interfaces/course";

type SizeType = Parameters<typeof Form>[0]["size"];

export default function AddLearningManagement() {
  const [file, setFile] = useState<any>();
  const normFile = (values: any) => {
    console.log("Upload event:", values);
    if (Array.isArray(values)) {
      return values;
    }
    setFile(values.fileList[0]);
    return values?.fileList;
  };
  const [componentSize, setComponentSize] = useState<SizeType | "default">(
    "default"
  );

  const onFormLayoutChange = ({ size }: { size: SizeType }) => {
    setComponentSize(size);
  };

  const handleFinish = async (values: CourseListDto<ManageDto, CatalogDto>) => {
    // values.ngayTao = values.ngayTao.format("DD/MM/YYYY");

    const data: any = {
      maKhoaHoc: values.maKhoaHoc,
      biDanh: values.biDanh,
      tenKhoaHoc: values.tenKhoaHoc,
      mota: values.moTa,
      luotXem: values.luotXem,
      danhGia: values.danhGia,
      hinhAnh: values.hinhAnh,
      maNhom: values.maNhom,
      ngayTao: values.ngayTao,
      // maDanhMucKhoaHoc: values.danhMucKhoaHoc.maDanhMucKhoahoc,
      taiKhoanNguoiTao: values.nguoiTao,
    };

    console.log(data);
    await addCourseApi(data);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
        maKhoaHoc: "",
        danhMuckh: "",
        tenKhoaHoc: "",
        moTa: "",
        luotXem: +0,
        danhGia: 0,
        hinhAnh: "",
        maNhom: "",
        ngayTao: "",
        maDanhMucKhoaHoc: "",
        taiKhoanNguoiTao: "",
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
      onFinish={handleFinish}
    >
      <Form.Item name="maKhoaHoc" label="Mã khóa học">
        <Input placeholder="Mã khóa học" />
      </Form.Item>
      <Form.Item name="danhMuckh" label="Danh mục khóa học">
        <Select placeholder="Danh mục khóa học">
          <Select.Option value="Lập trình web">Lập trình web</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="danhGia" label="Đánh giá">
        <InputNumber placeholder="Lượt xem" />
      </Form.Item>
      <Form.Item name="nguoiTao" label="Người tạo">
        <Select placeholder="Người tạo"></Select>
      </Form.Item>
      <Form.Item name="maNhom" label="Mã nhóm">
        <Select placeholder="Mã nhóm">
          <Select.Option value="GP01">GP01</Select.Option>
          <Select.Option value="GP02">GP02</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="tenKhoaHoc" label="Tên khóa học">
        <Input placeholder="Tên khóa học" />
      </Form.Item>
      <Form.Item name="ngayTao" label="Ngày tạo">
        <DatePicker />
      </Form.Item>
      <Form.Item name="luotXem" label="Lượt xem">
        <InputNumber type="number" placeholder="Lượt xem" />
      </Form.Item>
      <Form.Item name="hinhAnh" label="Hình ảnh">
        <Input type="file" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}
