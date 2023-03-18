import React from 'react'

import { Button, Form, Input, notification } from 'antd';

import { userLoginDto } from '../../../interfaces/user';
import { useDispatch } from 'react-redux';
import { RootDispatch } from '../../../store/config';
import { fetchUserInfoAction } from '../../../store/reducers/eduReducer';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {
    const dispatch = useDispatch<RootDispatch>();
    const navigate = useNavigate()
    const onFinish = async (values: userLoginDto) => {

        try {
            dispatch(fetchUserInfoAction(values));

            notification.success({
                message: "Đăng nhập thành công!",
                duration: 1,
            })
            navigate("/")
        } catch (error: any) {
            notification.error({
                message: error.response.data,
                duration: 2,
            })
        }
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
