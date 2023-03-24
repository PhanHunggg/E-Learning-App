import React, { useEffect } from 'react'

import { Button, Form, Input, notification } from 'antd';

import { userLoginDto } from '../../../interfaces/user';
import { useDispatch, useSelector } from 'react-redux';
import { RootDispatch, RootState } from '../../../store/config';
import { fetchUserInfoAction } from '../../../store/reducers/eduReducer';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const dispatch = useDispatch<RootDispatch>();
    const navigate = useNavigate()
    const userInfo = useSelector((state: RootState) => state.eduReducer)

    useEffect(() => {
        if (userInfo.userInfo) navigate("/")
    }, [userInfo.userInfo])

    const onFinish = async (values: userLoginDto) => {
        dispatch(fetchUserInfoAction(values));

    };
    return (
        <Form
            className='mx-auto '
            name="basic"

            initialValues={{ remember: true }}
            onFinish={onFinish}

            autoComplete="off"
        >
            <Form.Item
                label="Tài Khoản"
                name="taiKhoan"
                rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Mật Khẩu"
                name="matKhau"
                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
            >
                <Input.Password />
            </Form.Item>

            <a href="#">Quên mật khẩu?</a>

            <div className="button mt-2">
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Đăng nhập
                    </Button>

                </Form.Item>
            </div>
        </Form>
    )
}
