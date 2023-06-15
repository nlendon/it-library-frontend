import React, {useState, useEffect} from "react";
import Logo from '../../images/logo.png';
import {message} from 'antd';

const AdminSignIn = () => {

    const [messageApi, contextHolder] = message.useMessage();
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    useEffect(() => {
        document.title = 'IT-Library | AdminSignIn'
    });

    const handleCancel = () => {
        setEmail(null);
        setPass(null);
    }

    const handleError = (reason) => {
        messageApi.open({
            type: 'error',
            content: reason,
        });
    }

    const handleChange = async () => {
        try {
            if (!email || !pass) {
                return handleError("Please Enter all fields");
            }
            // await login(email, pass).then((data) => {
            //     if (data) {
            //         window.location = '/admin';
            //     }
            // });
        } catch (e) {
            handleError("Email or Password is Incorrect");
        }
    }

    return (
        <div className="limiter">
            {contextHolder}
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt">
                        <img src={Logo} alt="IMG"/>
                    </div>

                    <div className="login100-form validate-form">
					<span className="login100-form-title">
						Login to Admin Panel
                        <p style={{color: "red", fontWeight: "bolder", fontSize: '20px'}}>Only for Admins</p>
					</span>

                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="text" name="email" placeholder="Email"
                                   onChange={(e) => setEmail(e.target.value)}/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
							<i className="fa fa-envelope" aria-hidden="true"></i>
						</span>
                        </div>

                        <div className="wrap-input100">
                            <input className="input100" type="password" placeholder="Password"
                                   onChange={(e) => setPass(e.target.value)}/>
                            <span className="focus-input100"></span>
                            <span className="symbol-input100">
							<i className="fa fa-lock" aria-hidden="true"></i>
						</span>
                        </div>

                        <div className="container-login100-form-btn">
                            <button className="login100-form-btn" onClick={handleChange}>
                                Login
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminSignIn;