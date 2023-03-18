import React from 'react'
import { Button, Form, Input, notification, Select } from 'antd';
import { userSignUpDto } from '../../../interfaces/user';
import { signUpApi } from '../../../services/user';
import { useNavigate } from 'react-router-dom';
export default function SignUp() {
    const patternPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/g

    const patternVietnamese = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôôốồồốộộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùùúúụụủủũưừứựửữỳýỵỷỹđ]*)*$/g

    const patternEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/g

    const patternPhone = /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})/g

    const navigate = useNavigate()
    const onFinish = async (values: userSignUpDto) => {
        try {
            await signUpApi(values);
            notification.success({
                message: "Đăng ký thành công!",
                duration: 1,
            })
            navigate("/login");
        } catch (error: any) {
            notification.error({
                message: error.response.data,
                duration: 2,
            })
        }
    };


    return <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17 }}
        name="basic"
        onFinish={onFinish}
        autoComplete="off"
    >
        <Form.Item
            label="Tài Khoản"
            name="taiKhoan"
            rules={[
                { required: true, message: 'Vui lòng nhập Tài khoản!' },
                {
                    whitespace: true,
                    message: 'Không dùng khoảng trắng đầu dòng!'
                },
                {
                    pattern: /^[a-z0-9]{8,16}$/g,
                    message: 'Tài khoản sai định dạng'
                }

            ]}
            hasFeedback
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Mật Khẩu"
            name="matKhau"
            rules={[
                { required: true, message: `Vui lòng nhập mật Khẩu 8-12 ký tự` },
                {
                    whitespace: true,
                    message: 'Không dùng khoảng trắng đầu dòng!'
                },
                {
                    pattern: patternPassword,
                    message: 'Mật Khẩu có ít nhất 1 ký tự thường, hoa và 1 ký tự đặc biệt!'
                },

            ]}
            hasFeedback
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            label="Họ tên"
            name="hoTen"
            rules={[
                { required: true, message: 'Vui lòng nhập Họ tên!' },
                {
                    whitespace: true,
                    message: 'Không dùng khoảng trắng đầu dòng!'
                },
                {
                    pattern: patternVietnamese,
                    message: 'Họ tên sai định dạng'
                },

            ]}
            hasFeedback
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Email"
            name="email"
            rules={[
                { required: true, message: 'Vui lòng nhập Email!' },
                {
                    whitespace: true,
                    message: 'Không dùng khoảng trắng đầu dòng!'
                },
                {
                    pattern: patternEmail,
                    message: 'Email sai định dạng!'
                },

            ]}
            hasFeedback
        >
            <Input />
        </Form.Item>
        <Form.Item
            label="Số điện thoại"
            name="soDT"
            rules={[
                { required: true, message: 'Vui lòng nhập Số điện thoại!' },
                {
                    whitespace: true,
                    message: 'Không dùng khoảng trắng đầu dòng!'
                },
                {
                    pattern: patternPhone,
                    message: 'Số điện thoại sai định dạng!'
                },

            ]}
            hasFeedback
        >
            <Input />
        </Form.Item>
        <Form.Item label="Mã Nhóm" name="maNhom"
            rules={[
                { required: true, message: 'Vui lòng chọn mã nhóm!' }
            ]}>
            <Select placeholder= "Chọn mã nhóm">
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
