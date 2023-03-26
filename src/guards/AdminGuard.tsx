import { notification } from "antd";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState } from "../store/config";

export default function AdminGuard(): JSX.Element {
  const navigate = useNavigate();
  const stateEdu: any = useSelector<any>(
    (state: RootState) => state.eduReducer.userInfo
  );

  useEffect(() => {
    if (!stateEdu) {
      notification.warning({
        message: "Vui lòng đăng nhập!",
      });
      navigate("/");
    } else if (stateEdu.maLoaiNguoiDung === "HV") {
      notification.warning({
        message: "Bạn không thể truy cập!",
      });
      navigate("/");
    }
  }, []);

  return <Outlet />;
}
