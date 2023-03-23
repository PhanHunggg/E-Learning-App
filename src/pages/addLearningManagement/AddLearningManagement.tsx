import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  notification,
  Select,
  Image,
} from "antd";
import React, { useState } from "react";
import { addCourseApi, updateImgApi } from "../../services/course ";

import { CatalogDto, CourseListDto, ManageDto } from "../../interfaces/course";
import { useSelector } from "react-redux";
import { RootState } from "../../store/config";
import { useNavigate } from "react-router-dom";
import "../addLearningManagement/addLearningManagement.scss";
import TextArea from "antd/es/input/TextArea";

type SizeType = Parameters<typeof Form>[0]["size"];

export default function AddLearningManagement() {
  const [file, setFile] = useState<any>();
  const [imgPreview, setImgPreview] = useState<string>();
  const navigate = useNavigate();
  const stateEdu = useSelector((state: RootState) => state.eduReducer);

  const handleFile = (event: any) => {
    setFile(event.target.files[0]);

    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event: any) => {
      console.log(event);
      setImgPreview(event.target?.result);
    };
  };

  const renderCatalogList = () => {
    return stateEdu.courseCatalog?.map((ele) => {
      return (
        <Select.Option value={`${ele.maDanhMuc}`} key={`${ele.maDanhMuc}`}>
          {ele.tenDanhMuc}
        </Select.Option>
      );
    });
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
      moTa: values.moTa,
      luotXem: values.luotXem,
      danhGia: values.danhGia,
      hinhAnh: file.name,
      maNhom: values.maNhom,
      ngayTao: "30/06/2003",
      maDanhMucKhoaHoc: values.danhMucKhoaHoc,
      taiKhoanNguoiTao: stateEdu.userInfo?.taiKhoan,
    };

    const data1 = { ...stateEdu };
    const idx = data1.courseList.findIndex(
      (ele) => ele.maKhoaHoc === values.maKhoaHoc
    );

    if (stateEdu.courseList[idx]?.maKhoaHoc === values?.maKhoaHoc) {
      notification.error({
        message: "Mã khóa học đã tồn tại",
      });
      return;
    }

    try {
      handleImg(values);
      await addCourseApi(data);
      notification.success({
        message: "Thêm khóa học thành công",
      });
      navigate("/admin/learning-management");
    } catch (error: any) {
      notification.error({
        message: error.response.data,
      });
    }
  };

  const handleImg = async (values: CourseListDto<ManageDto, CatalogDto>) => {
    const formData = new FormData();

    formData.append("hinhAnh", file);
    formData.append("tenKhoaHoc", values.tenKhoaHoc);

    await updateImgApi(formData);
  };
  return (
    <Form
      layout="horizontal"
      initialValues={{
        size: componentSize,
        maKhoaHoc: "",
        biDanh: "",
        tenKhoaHoc: "",
        moTa: "",
        luotXem: "",
        danhGia: "",
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
      <div className="all__item">
        <div className="item__left">
          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-key"></i>
            </span>
            <Form.Item name="maKhoaHoc">
              <Input placeholder="Mã khóa học" />
            </Form.Item>
          </div>
          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-key"></i>
            </span>
            <Form.Item name="biDanh">
              <Input placeholder="Bí danh" />
            </Form.Item>
          </div>
          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-key"></i>
            </span>
            <Form.Item name="danhGia">
              <InputNumber placeholder="Đánh giá" className="danhGia" />
            </Form.Item>
          </div>
          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-key"></i>
            </span>
            <Form.Item name="tenKhoaHoc">
              <Input placeholder="Tên khóa học" />
            </Form.Item>
          </div>
          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-key"></i>
            </span>
            <Form.Item name="luotXem">
              <InputNumber
                type="number"
                placeholder="Lượt xem"
                className="luotXem"
              />
            </Form.Item>
          </div>
        </div>
        <div className="item__right">
          <div className="item__learning maNhom">
            <span className="icon__form">
              <i className="fa fa-key"></i>
            </span>
            <Form.Item className="same_option" name="maNhom">
              <Select placeholder="Mã nhóm">
                <Select.Option value="GP01">GP01</Select.Option>
                <Select.Option value="GP02">GP02</Select.Option>
              </Select>
            </Form.Item>
          </div>
          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-key"></i>
            </span>
            <Form.Item name="danhMucKhoaHoc">
              <Select className="same_option" placeholder="Danh mục khóa học">
                {renderCatalogList()}
              </Select>
            </Form.Item>
          </div>

          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-key"></i>
            </span>
            <Form.Item name="nguoiTao">
              <Select className="same_option" placeholder="Người tạo">
                <Select.Option value="GV">{`${stateEdu.userInfo?.maLoaiNguoiDung}`}</Select.Option>
              </Select>
            </Form.Item>
          </div>

          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-key"></i>
            </span>
            <Form.Item className="date" name="ngayTao">
              <DatePicker />
            </Form.Item>
          </div>
          <div className="item__image">
            <Form.Item className="hinhAnh" name="hinhAnh">
              <Input type="file" onChange={handleFile} />
            </Form.Item>
            <Image src={imgPreview} />
          </div>
        </div>
      </div>
      <div className="text__moTa">
        <h5>Mô tả khóa học</h5>
      </div>
      <div className="item__describe">
        <div className="icon__form">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
            alt="REACTJS"
          />
        </div>
        <Form.Item className="moTa" name="moTa">
          <TextArea placeholder="Mô tả" rows={4} />
        </Form.Item>
      </div>
      <Form.Item className="button">
        <Button type="primary" htmlType="submit">
          Thêm khóa học
        </Button>
      </Form.Item>
    </Form>
  );
}
