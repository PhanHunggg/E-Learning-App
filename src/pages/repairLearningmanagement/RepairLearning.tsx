import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Image,
  notification,
} from "antd";
import React, { useEffect, useState } from "react";
import {
  fetchCourseInformationApi,
  updateCourseApi,
  updateImgApi,
} from "../../services/course ";
import { useSelector } from "react-redux";
import { RootState } from "../../store/config";
import "../addLearningManagement/addLearningManagement.scss";
import TextArea from "antd/es/input/TextArea";

type SizeType = Parameters<typeof Form>[0]["size"];

interface Props {
  id: string;
}

export default function RepairLearning(props: Props): JSX.Element {
  const [profile, setProfile] = useState<any>();
  const [file, setFile] = useState<any>();
  const [imgPreview, setImgPreview] = useState<string>();
  const stateEdu = useSelector((state: RootState) => state.eduReducer);
  const [form] = Form.useForm();

  const getProfile = async () => {
    const result: any = await fetchCourseInformationApi(props.id);
    setProfile(result.data);
    form.setFieldsValue({
      maKhoaHoc: result.data.maKhoaHoc,
      biDanh: result.data.biDanh,
      tenKhoaHoc: result.data.tenKhoaHoc,
      moTa: result.data.moTa,
      luotXem: result.data.luotXem,
      danhGia: result.data.danhGia,
      maNhom: result.data.maNhom,
      ngayTao: result.data.ngayTao,
      maDanhMucKhoaHoc: result.data.danhMucKhoaHoc?.tenDanhMucKhoaHoc,
      nguoiTao: result.data.nguoiTao?.maLoaiNguoiDung,
    });
  };

  useEffect(() => {
    if (props.id) {
      getProfile();
    }
  }, [props.id]);

  const handleFile = (event: any) => {
    setFile(event.target.files[0]);

    const reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]);

    reader.onload = (event: any) => {
      setImgPreview(event.target?.result);
    };
  };

  const renderCatalogList = () => {
    return stateEdu.courseCatalog?.map((ele) => {
      return (
        <Select.Option value={`${ele.tenDanhMuc}`} key={`${ele.maDanhMuc}`}>
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

  const handleFinish = async (values: any) => {
    const data: any = {
      maKhoaHoc: values.maKhoaHoc,
      biDanh: values.biDanh,
      tenKhoaHoc: values.tenKhoaHoc,
      moTa: values.moTa,
      luotXem: values.luotXem,
      danhGia: values.danhGia,
      hinhAnh: file ? file.name : profile?.hinhAnh,
      maNhom: values.maNhom,
      ngayTao: values.ngayTao,
      maDanhMucKhoaHoc: profile?.danhMucKhoaHoc.maDanhMucKhoahoc,
      taiKhoanNguoiTao: stateEdu.userInfo?.taiKhoan,
    };

    try {
      file
        ? await updateCourseApi(data).then(async () => {
            const formData = new FormData();

            formData.append("hinhAnh", file);
            formData.append("tenKhoaHoc", values.tenKhoaHoc);

            await updateImgApi(formData);
          })
        : await updateCourseApi(data);

      notification.success({
        message: "Cập nhật thành công",
      });
    } catch (error: any) {
      notification.error({
        message: error.response.data,
      });
    }
  };

  console.log(file);

  return (
    <Form
      onFinish={handleFinish}
      initialValues={{
        size: componentSize,
        maKhoaHoc: "",
        biDanh: "",
        tenKhoaHoc: "",
        moTa: "",
        luotXem: 0,
        danhGia: 0,
        hinhAnh: "",
        maNhom: "",
        ngayTao: "",
        maDanhMucKhoaHoc: "",
        taiKhoanNguoiTao: "",
      }}
      form={form}
      layout="horizontal"
      onValuesChange={onFormLayoutChange}
      size={componentSize as SizeType}
    >
      <div className="all__item">
        <div className="item__left">
          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-lock"></i>
            </span>
            <Form.Item name="maKhoaHoc">
              <Input placeholder="Mã khóa học" />
            </Form.Item>
          </div>

          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-user-secret"></i>
            </span>
            <Form.Item name="biDanh">
              <Input placeholder="Bí danh" />
            </Form.Item>
          </div>

          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-book"></i>
            </span>
            <Form.Item name="tenKhoaHoc">
              <Input placeholder="Tên khóa học" />
            </Form.Item>
          </div>

          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-thumbs-up"></i>
            </span>
            <Form.Item name="danhGia">
              <InputNumber placeholder="Đánh giá" className="danhGia" />
            </Form.Item>
          </div>

          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-eye"></i>
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
              <i className="fa fa-users"></i>
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
              <i className="fa fa-book-open"></i>
            </span>
            <Form.Item name="maDanhMucKhoaHoc">
              <Select className="same_option" placeholder="Danh mục khóa học">
                {renderCatalogList()}
              </Select>
            </Form.Item>
          </div>

          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-user"></i>
            </span>
            <Form.Item name="nguoiTao">
              <Select className="same_option" placeholder="Người tạo">
                <Select.Option value="GV">{`${stateEdu.userInfo?.maLoaiNguoiDung}`}</Select.Option>
              </Select>
            </Form.Item>
          </div>

          <div className="item__learning">
            <span className="icon__form">
              <i className="fa fa-calendar"></i>
            </span>

            <Form.Item className="date" name="ngayTao">
              <Input />
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
          <img src={`${profile?.hinhAnh}`} alt="REACTJS" />
        </div>
        <Form.Item className="moTa" name="moTa">
          <TextArea placeholder="Mô tả" rows={4} />
        </Form.Item>
      </div>
      <Form.Item className="button">
        <Button type="primary" htmlType="submit">
          Cập nhật
        </Button>
      </Form.Item>
    </Form>
  );
}
