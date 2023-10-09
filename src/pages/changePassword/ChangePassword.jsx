import React, {useState} from 'react';
import emailIcon from './../../assets/initial/img/input-icons/mail.svg'
import axios from "axios";
import getCookies from "../../functions/getCookies";
import {getApiLink} from "../../hooks/getApiLink";
import SuccessChange from "../../components/successChange/SuccessChange";

const ChangePassword = () => {

    const [email, setEmail] = useState('')
    const [isChange, setIsChange] = useState(false)

    const handleChangePassword = (e) => {
        e.preventDefault()

        axios.defaults.headers.put['Authorization'] = `Bearer ${getCookies('token')}`
        axios.put(getApiLink('v1/public/users/passwords#startChangePassword'), {email}).then(res => {
            setIsChange(true)
        }).catch(er => {console.log(er)})
    }

    return (
        <section className="login">
            <div className="login__container">
                {!isChange ? <div className="login__wrap">
                    <h2 className="login__title">
                        Запит на зміну <br/> паролю
                    </h2>
                    <form onSubmit={handleChangePassword} className="login__form">
                        <div className="login__items">
                            <label className="input-item input-item_icon">
									<span className="input-item__icon">
										<img src={emailIcon} alt=""/>
									</span>
                                <input onChange={e => setEmail(e.target.value)} value={email} name="form" type="text"
                                       placeholder="Пошта" className="input"/>
                            </label>
                        </div>
                        <button className="button login__button button_violet button_fw">
                            Змінити
                        </button>
                    </form>
                </div> : <SuccessChange title={"Повідомлення для зміни паролю було надіслано вам на пошту"} />}
            </div>
        </section>
    );
};

export default ChangePassword;