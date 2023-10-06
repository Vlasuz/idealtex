import React from 'react';
import {useSelector} from "react-redux";
import {useGetGeneralDiscount} from "../../../hooks/getGeneralDiscount";
import {NavLink} from "react-router-dom";

const BasketBottom = () => {

    const basketPrice = useSelector(state => state.toolkit.basketPrice)
    const {discount} = useGetGeneralDiscount()

    return (
        <div className="basket__bottom">
            <div className="basket__container">
                <div className="basket__bottom-wrap">
                    <ul className="basket__list">
                        <li>
                            <div className="basket__label">
                                Оформити замовлення
                            </div>
                            <div className="basket__value green">
                                {basketPrice.toFixed(2)} грн
                            </div>
                        </li>
                        <li>
                            <div className="basket__label">
                                Знижка зараз:
                            </div>
                            <div className="basket__value">
                                {discount}%
                            </div>
                        </li>
                        <li>
                            <div className="basket__label">
                                До знижки 5% додайте товару на суму:
                            </div>
                            <div className="basket__value">
                                1000 грн
                            </div>
                        </li>
                    </ul>
                    <NavLink to={"/checkout"} className="basket__button button button_green button_fw">
                        Оформити замовлення
                    </NavLink>
                </div>
            </div>

        </div>
    );
};

export default BasketBottom;