import React from 'react'
import { Button, Form, Input, notification, Select } from 'antd';
import { userSignUpDto } from '../../../interfaces/user';
import { signUpApi } from '../../../services/user';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const navigate = useNavigate()
    const onFinish = async (values: userSignUpDto) => {
        try {
            await signUpApi(values);
            notification.success({
                message: "Đăng ký thành công!"
            })
            navigate("/login");
        } catch (error: any) {
            notification.error({
                message: error.response.data
            })
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return <Form
        name="basic"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
    >
        <Form.Item
            label="Tài Khoản"
            name="taiKhoan"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Mật Khẩu"
            name="matKhau"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            label="Họ tên"
            name="hoTen"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Số điện thoại"
            name="soDT"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>
        <Form.Item label="Mã Nhóm" name="maNhom">
            <Select>
                <Select.Option key="GP01">GP01</Select.Option>
                <Select.Option key="GP02">GP02</Select.Option>
                <Select.Option key="GP03">GP03</Select.Option>
                <Select.Option key="GP04">GP04</Select.Option>
                <Select.Option key="GP05">GP05</Select.Option>
                <Select.Option key="GP06">GP06</Select.Option>
                <Select.Option key="GP07">GP07</Select.Option>
                <Select.Option key="GP08">GP08</Select.Option>
                <Select.Option key="GP09">GP09</Select.Option>
                <Select.Option key="GP10">GP10</Select.Option>
            </Select>
        </Form.Item>





        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
                Đăng ký
            </Button>
        </Form.Item>
    </Form>
}
