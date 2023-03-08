export interface CourseList<N, D> {
  maKhoaHoc: string;
  biDanh: string;
  tenKhoaHoc: string;
  moTa: string;
  luotXem: number;
  hinhAnh: string;
  maNhom: string;
  ngayTao: string;
  soLuongHocVien: number;
  nguoiTao: N;
  danhMucKhoaHoc: D;
  danhGia: number;
}

export interface DanhMucKhoaHocDto {
  maDanhMucKhoahoc: string;
  tenDanhMucKhoaHoc: string;
}

export interface NguoiTAODto {
  taiKhoan: string;
  hoTen: string;
  maLoaiNguoiDung: string;
  tenLoaiNguoiDung: string;
}
