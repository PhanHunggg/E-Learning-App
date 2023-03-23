export interface userLoginDto {
  taiKhoan: string;
  matKhau: string;
  accessToken: string;
  email: string;
  hoTen: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  soDT: string;
}

export interface userInfoDto {
  accessToken: string;
  email: string;
  hoTen: string;
  maLoaiNguoiDung: string;
  maNhom: string;
  soDT: string;
  taiKhoan: string;
}

export interface userSignUpDto {
  taiKhoan: string;
  matKhau: string;
  hoTen: string;
  soDT: string;
  maNhom: string;
  email: string;
}
