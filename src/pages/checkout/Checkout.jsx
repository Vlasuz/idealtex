import React, {useState} from 'react';
import {CheckoutStyled} from "./Checkout.styled";
import Input from "../../components/input/Input";
import {useSelector} from "react-redux";
import axios from "axios";
import {getApiLink} from "../../hooks/getApiLink";
import getCookies from "../../functions/getCookies";

const Checkout = () => {

    const userInfo = useSelector(state => state.toolkit.user)

    const [firstName, setFirstName] = useState(userInfo?.firstName ?? '')
    const [lastName, setLastName] = useState(userInfo?.secondName ?? '')
    const [email, setEmail] = useState(userInfo?.email ?? '')
    const [phone, setPhone] = useState('')

    const [firstNameOther, setFirstNameOther] = useState('')
    const [lastNameOther, setLastNameOther] = useState('')
    const [phoneOther, setPhoneOther] = useState('')

    const [post, setPost] = useState('')
    const [region, setRegion] = useState('')
    const [town, setTown] = useState('')
    const [postNumber, setPostNumber] = useState('')

    const [communicate, setCommunicate] = useState('')
    const [bank, setBank] = useState('')
    const [comment, setComment] = useState('')

    const basket = useSelector(state => state.toolkit.basket)

    const handleSubmit = (e) => {
        e.preventDefault()

        console.log(basket)
        console.log('FORM SUBMIT')

        const bodyOfOrder = {
            "orderProducts": basket,
            "postOffice": {
                "name": post,
                "area": region,
                "city": town,
                "office": postNumber
            },
            "customer": {
                "phone": firstName,
                "email": lastName,
                "firstName": email,
                "secondName": phone
            },
            "recipient": {
                "phone": firstNameOther,
                "firstName": lastNameOther,
                "secondName": phoneOther
            },
            "communicationMethod": communicate,
            "paymentMethod": bank,
            "cartId": '12312',
            "customerMessage": comment
        }

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookies('token')}`
        axios.post(getApiLink('v1/public/orders'), bodyOfOrder).then(({data}) => {
            console.log(data)
        }).catch(er => {
            console.log(er)
        })

    }

    return (
        <CheckoutStyled className="user">
            <div className="user__container">
                <form action="#" onSubmit={handleSubmit} className="user__form">
                    <div className="user__block">
                        <h2 className="user__title">
                            Покупець
                        </h2>
                        <div className="user__grid-layout">
                            <label className="input-item ">
									<span className="input-item__title">
										Призвіще
									</span>
                                <input required name="form" onChange={e => setFirstName(e.target.value)} value={firstName} type="text" placeholder="" className="input"/>
                            </label>
                            <label className="input-item ">
									<span className="input-item__title">
										Ім'я
									</span>
                                <input required name="form" onChange={e => setLastName(e.target.value)} value={lastName} type="text" placeholder="" className="input"/>
                            </label>
                            <label className="input-item w-100">
									<span className="input-item__title">
										Email <span>
											(Не обов'язкове)
										</span>
									</span>
                                <input name="form" onChange={e => setEmail(e.target.value)} value={email} type="text" placeholder="" className="input"/>
                            </label>
                            <label className="input-item w-100">
									<span className="input-item__title">
										Телефон
									</span>
                                <input required name="form" onChange={e => setPhone(e.target.value)} value={phone} type="text" placeholder="" className="input"/>
                            </label>
                        </div>
                    </div>
                    <div className="user__block">
                        <h2 className="user__title">
                            Отримувач
                        </h2>
                        <div className="user__subtitle">
                            Якщо отримувати буде інша людина, то вкажіть дані цієї людини
                        </div>
                        <div className="user__grid-layout">
                            <label className="input-item ">
									<span className="input-item__title">
										Призвіще <span>(Не обов'язкове)</span>
									</span>
                                <input name="form" onChange={e => setFirstNameOther(e.target.value)} value={firstNameOther} type="text" placeholder="" className="input"/>
                            </label>
                            <label className="input-item ">
									<span className="input-item__title">
										Ім'я <span>(Не обов'язкове)</span>
									</span>
                                <input name="form" onChange={e => setLastNameOther(e.target.value)} value={lastNameOther} type="text" placeholder="" className="input"/>
                            </label>
                            <label className="input-item w-100">
									<span className="input-item__title">
										Телефон <span>(Не обов'язкове)</span>
									</span>
                                <input name="form" onChange={e => setPhoneOther(e.target.value)} value={phoneOther} type="text" placeholder="" className="input"/>
                            </label>
                        </div>
                    </div>
                    <div className="user__block">
                        <h2 className="user__title">
                            Адреса пошти
                        </h2>
                        <div className="user__grid-layout">
                            <label className="input-item w-100">
									<span className="input-item__title">
										Назва пошти
									</span>
                                <input required name="form" onChange={e => setPost(e.target.value)} value={post} type="text" placeholder="" className="input"/>
                            </label>
                            <label className="input-item w-100">
									<span className="input-item__title">
										Область
									</span>
                                <input required name="form" onChange={e => setRegion(e.target.value)} value={region} type="text" placeholder="" className="input"/>
                            </label>
                            <label className="input-item w-100">
									<span className="input-item__title">
										Місто
									</span>
                                <input required name="form" onChange={e => setTown(e.target.value)} value={town} type="text" placeholder="" className="input"/>
                            </label>
                            <label className="input-item w-100">
									<span className="input-item__title">
										Відділення
									</span>
                                <input required name="form" onChange={e => setPostNumber(e.target.value)} value={postNumber} type="text" placeholder="" className="input"/>
                            </label>
                        </div>
                    </div>
                    <div className="user__block">
                        <h2 className="user__title">
                            Комунікація та оплата
                        </h2>
                        <div className="user__grid-layout">
                            <label className="input-item ">
									<span className="input-item__title">
										Як з вами можна зв'язатися
									</span>
                                <select name="form[]" onChange={e => setCommunicate(e.target.value)} className="form">
                                    <option value=""></option>
                                    <option value="Telegram">Telegram</option>
                                    <option value="Viber">Viber</option>
                                    <option value="Немає нічого">Немає нічого</option>
                                </select>

                            </label>
                            <label className="input-item">
									<span className="input-item__title">
										Який банк вам зручніше
									</span>
                                <select name="form[]" onChange={e => setBank(e.target.value)} className="form">
                                    <option value=""></option>
                                    <option value="Monobank">Monobank</option>
                                    <option value="Private24">Private24</option>

                                </select>

                            </label>
                            <label className="input-item w-100">
									<span className="input-item__title">
										Примітка <span>(Не обов'язкове)</span>
									</span>
                                <textarea name="form" onChange={e => setComment(e.target.value)} value={comment} placeholder="" className="input"/>
                            </label>
                        </div>
                    </div>
                    <div className="user__block">
                        <h2 className="user__title user__title_grey">
                            Ваш кошик
                        </h2>
                        <div className="user__table">
                            <table>
                                <tbody>
                                <tr>
                                    <td>
                                        <div className="user__table-label">
                                            Вартість кошика (UAH)
                                        </div>
                                    </td>
                                    <td>
                                        <div className="user__table-value">
                                            ₴16
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="user__table-label">
                                            Знижка
                                        </div>
                                    </td>
                                    <td>
                                        <div className="user__table-value">
                                            0%
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="user__table-label">
                                            Загальна вартість (UAH)
                                        </div>
                                    </td>
                                    <td>
                                        <div className="user__table-value">
                                            ₴16
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <button className="user__button button button_pink button">
                        Замовити
                    </button>
                </form>
            </div>
        </CheckoutStyled>
    );
};

export default Checkout;