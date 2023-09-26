import React from 'react';
import Input from "../../components/input/Input";
import iconEmail from "../../assets/initial/img/input-icons/mail.svg";
import iconPassword from "../../assets/initial/img/input-icons/password.svg";
import {NavLink} from "react-router-dom";
import {LoginStyled} from "../login/Login.styled";

const AlreadyAuth = () => {
    return (
        <div className="login">
            <div className="login__container">
                <div className="login__wrap">
                    <h2 className="login__title">
                        Ви вже увійшли у систему
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default AlreadyAuth;