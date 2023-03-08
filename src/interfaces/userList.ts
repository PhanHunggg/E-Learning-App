export interface UserList<M> {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDt: null | string;
  maLoaiNguoiDung: M;
}

export enum MaLoaiNguoiDung {
  Gv = "GV",
  Hv = "HV",
}
