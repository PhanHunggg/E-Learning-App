import React, { useState } from 'react'

import { Button, Form, Input, notification } from 'antd';
import "./login.scss"
import { userLoginDto } from '../../interfaces/user';
import { login } from '../../services/user';
import { useNavigate } from 'react-router-dom';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

export default function Login(): JSX.Element {
    const [box, setBox] = useState<boolean>(false)

    const handleButton = (value: string) => {
        if (value === "signIn") {
            setBox(false)
        } else {
            setBox(true)
        }
    }


    return (
        <div className="login">
            <div className="form container mx-auto">
                <div className="background">
                    <div className="box signIn">
                        <div className="box_2">
                            <h3>Xin chào </h3>
                            <h4>Hãy đăng nhập để bắt đầu!</h4>
                            <button onClick={() => handleButton("signIn")} className='signInBtn'>Đăng nhập</button>
                        </div>

                    </div>
                    <div className="box signUp">
                        <div className="box_2">
                            <h3>Xin chào </h3>
                            <h4>Hãy đăng ký để bắt đầu!</h4>
                            <button onClick={() => handleButton("signUp")} className='signUpBtn'>Đăng ký</button>
                        </div>

                    </div>
                </div>

                <div className={`formBx ${box ? "active" : ""}`}>
                    <div className="form signInForm">
                        <SignIn />
                    </div>
                    <div className="form signUpForm">
                        <SignUp />
                    </div>
                </div>

            </div>
        </div>

    )
}
