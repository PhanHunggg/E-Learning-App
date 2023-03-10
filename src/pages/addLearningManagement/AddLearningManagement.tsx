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
      <Form.Item name="maKhoaHoc" label="M?? kh??a h???c">
        <Input placeholder="M?? kh??a h???c" />
      </Form.Item>
      <Form.Item name="danhMuckh" label="Danh m???c kh??a h???c">
        <Select placeholder="Danh m???c kh??a h???c">
          <Select.Option value="L???p tr??nh web">L???p tr??nh web</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="danhGia" label="????nh gi??">
        <InputNumber placeholder="L?????t xem" />
      </Form.Item>
      <Form.Item name="nguoiTao" label="Ng?????i t???o">
        <Select placeholder="Ng?????i t???o"></Select>
      </Form.Item>
      <Form.Item name="maNhom" label="M?? nh??m">
        <Select placeholder="M?? nh??m">
          <Select.Option value="GP01">GP01</Select.Option>
          <Select.Option value="GP02">GP02</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item name="tenKhoaHoc" label="T??n kh??a h???c">
        <Input placeholder="T??n kh??a h???c" />
      </Form.Item>
      <Form.Item name="ngayTao" label="Ng??y t???o">
        <DatePicker />
      </Form.Item>
      <Form.Item name="luotXem" label="L?????t xem">
        <InputNumber type="number" placeholder="L?????t xem" />
      </Form.Item>
      <Form.Item name="hinhAnh" label="H??nh ???nh">
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
