import React, {useEffect, useState} from 'react';
import iconEmail from './../../assets/initial/img/input-icons/mail.svg'
import iconPassword from "../../assets/initial/img/input-icons/password.svg";
import Input from "../../components/input/Input";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {getApiLink} from "../../hooks/getApiLink";
import {LoginStyled} from "./Login.styled";
import setCookie from "../../functions/setCookie";
import GetUserInfo from "../../hooks/getUserInfo";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleLogin = (e) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        // axios.post(getApiLink('v1/public/auth/login#basic'), {
        //     email,
        //     password,
        //     rememberMe
        // }).then((res) => {
        //     if(res.status === 200) {
        //         setEmail('')
        //         setPassword('')
        //         setIsLoading(false)
        //
        //         console.log(res.data)
        //
        //         // GetUserInfo(res.data.token)
        //
        //         let tokenParts = res.data.token.split('.');
        //         let encodedPayload = tokenParts[1];
        //
        //         let decodedPayload = atob(encodedPayload);
        //
        //         let payloadObj = JSON.parse(decodedPayload);
        //
        //         console.log(payloadObj)
        //         console.log(getApiLink(`v1/public/users/${payloadObj.uid}`))
        //
        //         axios.defaults.headers.get['Authorization'] = `Bearer ${res.data.token}`
        //         axios.get(getApiLink(`v1/public/users/${payloadObj.uid}`), {
        //             userId: payloadObj.uid
        //         }).then((res) => {
        //             console.log('user', res.data)
        //         })
        //
        //         setCookie('token', res.data.token, res.data?.expiredAt)
        //     }
        // }).catch(er => {
        //     console.log(er)
        //     setIsLoading(false)
        //     setError(er.response.data.message)
        // })
    }

    return (
        <LoginStyled className="login">
            <div className="login__container">
                <div className="login__wrap">
                    <h2 className="login__title">
                        Вхід
                    </h2>
                    <form onSubmit={handleLogin} className="login__form">
                        <div className="login__items">

                            <Input setValue={setEmail} value={email}
                                   placeholder="Пошта"
                                   type="email" icon={iconEmail}/>
                            <Input setValue={setPassword} value={password}
                                   placeholder="Підтвердити пароль"
                                   type="password" icon={iconPassword}/>

                            <div className="login__row">
                                <div className="checkbox">
                                    <input id="c_1" data-error="Ошибка" className="checkbox__input" type="checkbox"
                                           name="form[]" checked={rememberMe}
                                           onChange={e => setRememberMe(e.target.checked)}/>
                                    <label htmlFor="c_1" className="checkbox__label"><span className="checkbox__text">Запом’ятати мене</span></label>
                                </div>
                                <a href="" className="login__link">
                                    Забув пароль ?
                                </a>
                            </div>
                        </div>

                        <div className="form-error">{error}</div>

                        <button disabled={isLoading ? "disable" : ""} className="button login__button button_violet button_fw">
                            Увійти
                        </button>
                        <div className="login__bottom">
                            Не маєте облікового запису?
                            <NavLink to={"/registration"} className="login__link">
                                Створіть його зараз
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </LoginStyled>
    );
};

export default Login;