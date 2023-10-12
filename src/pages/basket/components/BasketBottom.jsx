import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {useGetGeneralDiscount} from "../../../hooks/getGeneralDiscount";
import {NavLink} from "react-router-dom";

const BasketBottom = () => {

    const basketPrice = useSelector(state => state.toolkit.basketPrice)
    const {discount} = useGetGeneralDiscount()
    const discounts = useSelector(state => state.toolkit.discounts)
    const [nextDiscount, setNextDiscount] = useState(discounts?.filter(item => item.discount !== discount && discount < item.discount)[0])

    useEffect(() => {
        setNextDiscount(discounts?.filter(item => item.discount !== discount && discount < item.discount)[0])
    }, [discount])

    return (
        <div className="basket__bottom">
            <div className="basket__container">
                <div className="basket__bottom-wrap">
                    <ul className="basket__list">
                        <li>
                            <div className="basket__label">
                                Сума
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
                                Сума зі знижкою
                            </div>
                            <div className="basket__value green">
                                {basketPrice.toFixed(2)} грн
                            </div>
                        </li>
                        {nextDiscount && <li>
                            <div className="basket__label">
                                До знижки {nextDiscount?.discount}% додайте товару на суму:
                            </div>
                            <div className="basket__value">
                                {Math.ceil(nextDiscount?.price - basketPrice)} грн
                            </div>
                        </li>}
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