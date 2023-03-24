import { notification } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { RootState } from '../store/config'

export default function AuthGuard() {
    const navigate = useNavigate()
    const userInfo = useSelector((state: RootState) => state.eduReducer)
    useEffect(() => {
        if (!userInfo?.userInfo) {
            navigate("/login")
            notification.error({
                message: "Đăng nhập để tiếp tục",
                duration: 2,
            })
        }
    }, [])
    return (
        <Outlet />
    )
}
