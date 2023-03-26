import { notification } from 'antd'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'
import { RootState } from '../store/config'

export default function NoAuthGuard() {
    const navigate = useNavigate()
    const userInfo = useSelector((state: RootState) => state.eduReducer)

    useEffect(() => {
        if (userInfo?.userInfo) {
            navigate("/")
            notification.error(
                {
                    message: "Bạn đã đăng nhập",
                    duration: 1
                }
            )
        }

    }, [])

    return <Outlet />
}
