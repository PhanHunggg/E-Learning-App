import React, { useState } from 'react'


import "./login.scss"

import SignIn from './component/SignIn';
import SignUp from './component/SignUp';
import { withViewport } from '../../HOCs/withViewport';
import { DESKTOP, IPAD_PRO, IPHONE6, IPHONE6PLUS, MOBILE } from '../../constants';

interface Props {
    device: any;
}
function Login(props: Props): JSX.Element {
    const [box, setBox] = useState<boolean>(false)

    const handleButton = (value: string) => {
        if (value === "signIn") {
            setBox(false)
        } else {
            setBox(true)
        }
    }


    return (
        <div className={`login ${props.device === IPAD_PRO && "iPad_pro"} ${(props.device !== IPAD_PRO) && (props.device !== DESKTOP) && "active"} ${props.device === MOBILE && "mobile"} ${props.device === IPHONE6 && "iphone6"} ${props.device === IPHONE6PLUS && "iphone6_plus"}`}>
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
export default withViewport(Login)