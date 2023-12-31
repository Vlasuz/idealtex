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
import {login} from "../../api/login";
import {useDispatch, useSelector} from "react-redux";
import AlreadyAuth from "../alreadyAuth/AlreadyAuth";
import getCookies from "../../functions/getCookies";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe, setRememberMe] = useState(false)

    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const dispatch = useDispatch()

    const handleLogin = (e) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        axios.post(getApiLink('v1/public/auth/login#basic'), {
            email,
            password,
            rememberMe
        }).then((res) => {
            if(res.status === 200) {
                setEmail('')
                setPassword('')
                setIsLoading(false)

                login(res.data, dispatch)
                setCookie('token', res.data.token, res.data?.expiredAt)
            }
        }).catch(er => {
            console.log(er)
            setIsLoading(false)
            setError(er.response.data.message)
        })
    }

    const userInfo = useSelector(state => state.toolkit.user)
    const isLogin = getCookies('token')
    if(isLogin && userInfo) {
        return <AlreadyAuth/>
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
                                    <input id="c_1" data-error="Ошибка" className="checkbox__input" type="checkbox" checked={rememberMe}
                                           onChange={e => setRememberMe(e.target.checked)}/>
                                    <label htmlFor="c_1" className="checkbox__label"><span className="checkbox__text">Запом’ятати мене</span></label>
                                </div>
                                <NavLink to={'/change-pass'} className="login__link">
                                    Забув пароль ?
                                </NavLink>
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
