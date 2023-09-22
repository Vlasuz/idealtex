import React, {useState} from 'react';
import iconUser from './../../assets/initial/img/input-icons/user.svg'
import iconEmail from './../../assets/initial/img/input-icons/mail.svg'
import iconPhone from './../../assets/initial/img/input-icons/phone.svg'
import iconPassword from './../../assets/initial/img/input-icons/password.svg'
import {RegistrationStyled} from "./Registration.styled";
import {NavLink, useNavigate} from "react-router-dom";
import {handleRegistration} from "../../api/registration";
import Input from "../../components/input/Input";

const Registration = () => {

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    return (
        <RegistrationStyled className="login">
            <div className="login__container">
                <div className="login__wrap">
                    <h2 className="login__title">
                        Створіть свій обліковий запис
                    </h2>
                    <form onSubmit={e => handleRegistration(e,
                        setIsLoading,
                        firstName,
                        secondName,
                        email,
                        phone,
                        password,
                        confirmPassword,
                        setSuccess,
                        setError,
                        setFirstName,
                        setSecondName,
                        setEmail,
                        setPhone,
                        setPassword,
                        setConfirmPassword,
                        navigate,)} className="login__form">
                        <div className="login__items">

                            <Input setValue={setFirstName} value={firstName} placeholder="Ім’я" type="text"
                                   icon={iconUser}/>
                            <Input setValue={setSecondName} value={secondName} placeholder="Прізвище" type="text"
                                   icon={iconUser}/>
                            <Input setValue={setEmail} value={email} placeholder="Пошта" type="email" icon={iconEmail}/>
                            <Input setValue={setPhone} value={phone} placeholder="Телефон" type="tel" icon={iconPhone}/>
                            <Input setValue={setPassword} value={password} placeholder="Пароль" type="password"
                                   icon={iconPassword}/>
                            <Input setValue={setConfirmPassword} value={confirmPassword}
                                   placeholder="Підтвердити пароль"
                                   type="password" icon={iconPassword}/>

                        </div>

                        <div className="form-error">{error}</div>
                        <div className="form-success">{success}</div>

                        <button disabled={isLoading ? "disable" : ""}
                                className="button login__button button_violet button_fw">
                            Зареєструватися
                        </button>
                        <div className="login__bottom">
                            Вже є акаунт?
                            <NavLink to={'/auth'} className="login__link">
                                Увійдіть в нього
                            </NavLink>
                        </div>
                    </form>
                </div>
            </div>
        </RegistrationStyled>
    );
};

export default Registration;