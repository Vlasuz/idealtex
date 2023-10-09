import React, {useState} from 'react';
import passwordIcon from "./../../assets/initial/img/input-icons/password.svg"
import {NavLink, useParams} from "react-router-dom";
import Input from "../../components/input/Input";
import axios from "axios";
import {getApiLink} from "../../hooks/getApiLink";
import {ChangePasswordNewPasswordStyled} from "./ChangePasswordNewPassword.styled";
import SuccessChange from "../../components/successChange/SuccessChange";

const ChangePasswordNewPassword = () => {

    const {token} = useParams()
    const [newPassword, setNewPassword] = useState('')
    const [newPasswordRepeat, setNewPasswordRepeat] = useState('')
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleChangePassword = (e) => {
        e.preventDefault()
        setError(false)
        setSuccess(false)

        if(newPassword === newPasswordRepeat && (newPassword || newPasswordRepeat)) {
            axios.put(getApiLink("v1/public/users/passwords#endChangePassword"), {
                "token": token,
                "password": newPassword
            }).then(res => {
                setNewPassword('')
                setNewPasswordRepeat('')
                setSuccess(true)
            }).catch(er => {console.log(er)})
        } else {
            setError(true)
        }
    }

    return (
        <ChangePasswordNewPasswordStyled className="login">
            <div className="login__container">
                {!success ? <div className="login__wrap">
                    <h2 className="login__title">
                        Зміна паролю
                    </h2>
                    <form onSubmit={e => handleChangePassword(e)} className="login__form">
                        <div className="login__items">
                            <Input placeholder={"Пароль"} setValue={setNewPassword} value={newPassword}
                                   type={"password"} icon={passwordIcon}/>
                            <Input placeholder={"Пароль"} setValue={setNewPasswordRepeat} value={newPasswordRepeat}
                                   type={"password"} icon={passwordIcon}/>
                            {error && <div className={"change-pass-error"}>
                                Пароли не совпадают
                            </div>}
                            {success && <div className={"change-pass-success"}>
                                Пароль изменен! <NavLink to={"/auth"}>перейдите для авторизации</NavLink>
                            </div>}
                        </div>
                        <button className="button login__button button_violet button_fw">
                            Змінити
                        </button>

                    </form>
                </div> : <SuccessChange title={"Ви змінили пароль"} />}
            </div>
        </ChangePasswordNewPasswordStyled>
    );
};

export default ChangePasswordNewPassword;