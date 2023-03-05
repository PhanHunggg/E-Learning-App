export interface CourseCatalogDto {
  maDanhMuc: string;
  tenDanhMuc: string;
}

export interface CourseListDto<N, D> {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem?: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: number;
  nguoiTao: N;
  danhMucKhoaHoc: D;
}

export interface CatalogDto {
  maDanhMucKhoahoc: string;
  tenDanhMucKhoaHoc: string;
}

export interface ManageDto {
  taiKhoan?: string;
  hoTen?: string;
  maLoaiNguoiDung?: string;
  tenLoaiNguoiDung?: string;
}