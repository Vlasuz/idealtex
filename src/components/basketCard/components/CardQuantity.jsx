import React, {useContext, useEffect, useState} from 'react';

import minus from './../../../assets/initial/img/icons/minus.svg'
import plus from './../../../assets/initial/img/icons/plus.svg'
import {useMaxDiscount} from "../../../hooks/maxDiscount";
import {useGetGeneralDiscount} from "../../../hooks/getGeneralDiscount";
import {calculatePriceWithDiscount} from "../../../functions/calculatePriceWithDiscount";
import {useDispatch, useSelector} from "react-redux";
import {addBasketPrice, changeBasketItem, setBasketPriceDiscount} from "../../../redux/toolkitSlice";
import {AllAmountContext} from "../../../pages/basket/Basket";

const CardQuantity = ({productPackage, isProductAuction, count, setCount}) => {

    const [value, setValue] = useState(count)
    const {maxDiscount} = useMaxDiscount()
    const {discount} = useGetGeneralDiscount()
    const dispatch = useDispatch()
    const basketPrice = useSelector(state => state.toolkit.basketPrice)
    const setAllAmount = useContext(AllAmountContext)

    const priceWithDiscount = calculatePriceWithDiscount(productPackage?.productPackagePrice, !isProductAuction ? discount : 0)
    const finalAmount = (priceWithDiscount * value).toFixed(2)

    useEffect(() => {
        setTimeout(() => {
            setAllAmount(0)
        }, 20)
        setTimeout(() => {
            setAllAmount(prev => prev + +(calculatePriceWithDiscount(productPackage?.productPackagePrice, !isProductAuction ? discount : 0) * value))
        }, 30)
    }, [discount])

    useEffect(() => {
        setAllAmount(0)
        setTimeout(() => {
            setAllAmount(prev => prev + +(calculatePriceWithDiscount(productPackage?.productPackagePrice, !isProductAuction ? discount : 0) * value))
        }, 10)
    }, [basketPrice, discount])


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
                        if (value <= 0) return;
                        setValue(prev => prev > 0 ? prev - 1 : prev)
                        setCount(value > 0 ? value - 1 : value)
                        dispatch(addBasketPrice(-productPackage?.productPackagePrice))
                    }} type="button" className="quantity__button quantity__button_minus">
                        <img src={minus} alt=""/>
                    </button>
                    <div className="quantity__input">
                        <input autoComplete="off" onChange={e => setValue(+e.target.value)} type="number"
                               value={value}/>
                    </div>
                    <button onClick={_ => {
                        setValue(prev => prev + 1)
                        setCount(value + 1)
                        dispatch(addBasketPrice(productPackage?.productPackagePrice))
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