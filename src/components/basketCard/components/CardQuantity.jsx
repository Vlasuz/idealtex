import React, {useEffect, useState} from 'react';

import minus from './../../../assets/initial/img/icons/minus.svg'
import plus from './../../../assets/initial/img/icons/plus.svg'
import {useMaxDiscount} from "../../../hooks/maxDiscount";
import {useGetGeneralDiscount} from "../../../hooks/getGeneralDiscount";
import {calculatePriceWithDiscount} from "../../../functions/calculatePriceWithDiscount";
import {useDispatch} from "react-redux";
import {addBasketPrice, changeBasketItem} from "../../../redux/toolkitSlice";

const CardQuantity = ({productPackage, isProductAuction, count, handleChangeProduct, size}) => {

    const [value, setValue] = useState(count)
    const {maxDiscount} = useMaxDiscount()
    const {discount} = useGetGeneralDiscount()

    const priceWithDiscount = calculatePriceWithDiscount(productPackage?.productPackagePrice, !isProductAuction ? discount : 0)
    const finalAmount = (calculatePriceWithDiscount(productPackage?.productPackagePrice, !isProductAuction ? discount : 0) * value).toFixed(2)

    return (
        <div className="card-quantity">
            {
                isProductAuction && <div className="product-card__procent">
                    {maxDiscount}%
                </div>
            }
            {
                !isProductAuction && discount > 0 &&
                <div className="product-card__procent">
                    {discount}%
                </div>
            }
            <div className="card-quantity__title">
                уп {productPackage.productCountInPackage} шт
            </div>
            <div className="card-quantity__wrap">
                <div className="card-quantity__row">
                    <div className="card-quantity__label">
                        Ціна за уп.
                    </div>
                    <div className="card-quantity__value">
                        {
                            priceWithDiscount + " грн"
                        }
                    </div>
                </div>
                <div className="quantity quantity_basket">
                    <button onClick={_ => {
                        setValue(prev => prev > 0 ? prev - 1 : prev)
                        handleChangeProduct(value > 0 ? value - 1 : value, size)
                    }} type="button" className="quantity__button quantity__button_minus">
                        <img src={minus} alt=""/>
                    </button>
                    <div className="quantity__input">
                        <input autoComplete="off" onChange={e => setValue(+e.target.value)} type="number" value={value}/>
                    </div>
                    <button onClick={_ => {
                        setValue(prev => prev + 1)
                        handleChangeProduct(value + 1, size)
                    }} type="button" className="quantity__button quantity__button_plus">
                        <img src={plus} alt=""/>
                    </button>
                </div>
                <div className="card-quantity__row">
                    <div className="card-quantity__label">
                        Сума
                    </div>
                    <div className="card-quantity__value">
                        {finalAmount} грн
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardQuantity;