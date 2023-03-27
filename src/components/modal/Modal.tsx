import { notification } from 'antd';
import React, { useEffect, useState } from 'react'
import { IPHONE6, IPHONE6PLUS } from '../../constants';
import { withViewport } from '../../HOCs/withViewport';
import { RegistrationCourseDetailDto } from '../../interfaces/course';
import { userProfileDto } from '../../interfaces/user';
import { updateUserApi } from '../../services/user';
import "./modal.scss"

interface Props {
    userProfile: userProfileDto<RegistrationCourseDetailDto>
    device: any
}

function Modal(props: Props) {
    const patternVietnamese = "^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôôốồồốộộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùùúúụụủủũưừứựửữỳýỵỷỹđ]*)*$"

    const patternPassword = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"

    const patternEmail = "[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"

    const patternPhone = "(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})"

    const [form, setForm] = useState(
        {
            values: {
                matKhau: "",
                email: "",
                soDT: "",
                hoTen: ""
            },
            err: {
                matKhau: "",
                email: "",
                soDT: "",
                hoTen: ""
            }
        }

    )
    const handleChange = (even: any): void => {
        const { name, value } = even.target
        setForm({
            ...form,
            values: {
                ...form.values,
                [name]: value
            }
        })
    }
    const handleSubmit = async (even: any) => {
        even.preventDefault();

        const isValid = even.target.checkValidity()

        if (!isValid) return

        const data = {
            taiKhoan: props.userProfile?.taiKhoan || "",
            matKhau: form.values.matKhau,
            hoTen: form.values.hoTen,
            soDT: form.values.soDT,
            maLoaiNguoiDung: props.userProfile?.maLoaiNguoiDung || "",
            maNhom: props.userProfile?.maNhom || "",
            email: form.values.email
        }

        try {
            await updateUserApi(data)
            notification.success({
                message: "Cập nhật thành công",
                duration: 1,
            })

        } catch (error: any) {
            notification.error({
                message: error.response.data,
                duration: 2,
            })
        }
    }

    const handleBlur = (event: any) => {
        const { name, title, validity, minLength, maxLength } = event.target;

        const { valueMissing, patternMismatch, tooLong, tooShort } = validity;

        let message = "";
        if (valueMissing) {
            message = `${title} cần nhập`;
        }

        if (patternMismatch) {
            message = `${title} sai định dạng`
        }


        if (patternMismatch && name === "matKhau") {
            message = `${title} có ít nhất 1 ký tự thường, hoa và 1 ký tự đặc biệt`;
        }
        if ((tooLong || tooShort) && name === "matKhau") {
            message = `${title} từ ${minLength}-${maxLength}`

        }

        if (tooShort && name === "hoTen") {
            message = `${title} ít nhất ${minLength} ký tự`

        }



        setForm({
            ...form,
            err: {
                ...form.err,
                [name]: message,
            }
        })
    }

    useEffect(() => {
        setForm({
            ...form,
            values: {
                matKhau: props.userProfile?.matKhau || "",
                email: props.userProfile?.email || "",
                soDT: props.userProfile?.soDT || "",
                hoTen: props.userProfile?.hoTen || ""
            },
        })
        console.log(form)
    }, [props.userProfile])
    return (

        <div className={`modal fade ${(props.device === IPHONE6 && "active") || (props.device === IPHONE6PLUS && "active")}`} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content box">
                    <div className="modal-body">
                        <h3>Chỉnh sửa thông tin</h3>
                        <form noValidate onSubmit={handleSubmit}>
                            <div className="form-group">

                                <input
                                    placeholder=" "
                                    pattern={patternVietnamese}
                                    minLength={8}
                                    required
                                    title="Họ và tên"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    defaultValue={form?.values.hoTen} name='hoTen'
                                    type="text"
                                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <span>Họ và Tên</span>
                                <i></i>
                                <span className="text-danger">{form.err?.hoTen}</span>
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder=" "
                                    minLength={8}
                                    maxLength={12}
                                    pattern={patternPassword}
                                    required
                                    title="Mật khẩu"
                                    onBlur={handleBlur}
                                    defaultValue={form?.values.matKhau} onChange={handleChange}
                                    name='matKhau'
                                    type="password" className="form-control" id="exampleInputPassword1" />
                                <span>Mật khẩu</span>
                                <i></i>
                                <span className="text-danger">{form.err?.matKhau}</span>
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder=" "
                                    pattern={patternEmail}
                                    required
                                    title="Email"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    defaultValue={form?.values.email} name='email'
                                    type="email"
                                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <span>Email</span>
                                <i></i>
                                <span className="text-danger">{form.err?.email}</span>
                            </div>
                            <div className="form-group last">
                                <input
                                    placeholder=" "
                                    pattern={patternPhone}
                                    required
                                    title="Số điện thoại"
                                    onBlur={handleBlur}
                                    onChange={handleChange}
                                    defaultValue={form?.values.soDT} name='soDT'
                                    type="text"
                                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <span>Số điện thoại</span>
                                <i></i>
                                <span className="text-danger">{form.err?.soDT}</span>
                            </div>
                            <div className="button">
                                <button type="submit" className="btn btn-primary">Cập nhật</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default withViewport(Modal)