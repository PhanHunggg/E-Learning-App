import React from 'react'
import { Button, Form, Input, notification, Select } from 'antd';
import { userLoginDto } from '../../interfaces/user';
import { login } from '../../services/user';
import { useNavigate } from 'react-router-dom';

import "./register.scss"

export default function Register(): JSX.Element {
    const navigate = useNavigate()
    const onFinish = async (values: userLoginDto) => {

        try {
            await login(values);
            notification.success({
                message: "Đăng nhập thành công!"
            })
        } catch (error: any) {
            notification.error({
                message: error.response.data
            })

        }
    };
    return (
        <div className="register">
            <div className="form container text-center">
                <h3>Xin chào bạn đến với thế giới coder</h3>
                <h4 >Đăng ký</h4>
                <Form
                    className='mx-auto'
                    name="basic"


                    initialValues={{ remember: true }}
                    onFinish={onFinish}

                    autoComplete="off"
                >
                    <div className="items">
                        <div className="left">
                            <Form.Item
                                label="Tài Khoản"
                                name="taiKhoan"
                                rules={[{ required: true, message: 'Vui lòng nhập tài khoản!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                               className='password'
                                label="Mật Khẩu"
                                name="matKhau"
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                            >
                                <Input.Password  />
                            </Form.Item>
                            <Form.Item
                                label="Số điện thoại"
                                name="soDT"
                                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                            >
                                <Input />
                            </Form.Item>
                        </div>
                        <div className="right">
                            <Form.Item
                                label="Họ tên"
                                name="hoTen"
                                rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[{ required: true, message: 'Vui lòng nhập email!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label="Mã nhóm">
                                <Select>
                                    <Select.Option value="demo">Demo</Select.Option>
                                </Select>
                            </Form.Item>
                        </div>

                    </div>
                    <a href="#">Quên mật khẩu?</a>

                    <div className="button">
                        <Form.Item >
                            <Button onClick={() => {
                                navigate("/login")
                            }} type="primary" htmlType="submit">
                                Đăng nhập
                            </Button>

                        </Form.Item>

                        <Form.Item >
                            <Button type="primary" >
                                Đăng ký
                            </Button>

                        </Form.Item>
                    </div>
                </Form>
            </div>
        </div>
    )
}
