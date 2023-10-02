import React, {useEffect, useState} from 'react';
import {CardStyled} from "./Card.styled";
import CardOption from "./components/cardOption";
import CardOptionEmpty from "./components/cardOptionEmpty";
import {getApiLink} from "../../hooks/getApiLink";

import basketWhite from './../../assets/initial/img/icons/basket-white.svg'
import plus from './../../assets/initial/img/icons/plus.svg'
import minus from './../../assets/initial/img/icons/minus.svg'
import {NavLink} from "react-router-dom";
import CardDiscounts from "./components/cardDiscounts";
import {useDispatch, useSelector} from "react-redux";
import {addBasketItem} from "../../redux/toolkitSlice";

const Card = ({data}) => {

    const dispatch = useDispatch()

    const smallPackageId = 'small|' + data?.productCode
    const midPackageId = 'mid|' + data?.productCode
    const bigPackageId = 'big|' + data?.productCode

    console.log(data)

    const [count, setCount] = useState(1)
    const [productPackage, setProductPackage] = useState(midPackageId ?? bigPackageId ?? smallPackageId)
    const [isPackageAuction, setIsPackageAuction] = useState(false)
    const [productDiscount, setProductDiscount] = useState(0)

    const productPackageInfoList = {
        small: data.productPackagesSizes?.small,
        mid: data.productPackagesSizes?.mid,
        big: data.productPackagesSizes?.big,
    }

    const ppil = productPackage && productPackageInfoList[productPackage.slice(0, productPackage.indexOf('|'))]

    const isHaveSmallPackage = data?.productPackagesSizes?.small?.displayPackageCount
    const isHaveMidPackage = data?.productPackagesSizes?.mid?.displayPackageCount && !isHaveSmallPackage
    const isHaveBigPackage = data?.productPackagesSizes?.big?.displayPackageCount && !isHaveMidPackage

    useEffect(() => {
        setProductPackage((isHaveSmallPackage && smallPackageId) ?? (isHaveMidPackage && midPackageId) ?? (isHaveBigPackage && bigPackageId))
    }, [data])

    useEffect(() => {
        setIsPackageAuction(ppil.productAuction)
    }, [productPackage])

    const finaleAmount = (ppil?.productPackagePrice - ppil?.productPackagePrice * (productDiscount / 100)) * count

    const cardOption = (type, isHave, typeId) => {
        if (data?.productPackagesSizes[type]?.displayPackageCount !== '0')
            return (<CardOption
                id={typeId}
                name={data?.productCode}
                setProductPackage={setProductPackage}
                setIsPackageAuction={setIsPackageAuction}
                metric={data?.productMetric}
                data={data?.productPackagesSizes[type]}
                checked={productPackage}
            />)
        else return <CardOptionEmpty/>
    }


    const cartPriceAmount = 150;

    const discounts = useSelector(state => state.toolkit.discounts)
    useEffect(() => {
        discounts.map(item => {
            if (cartPriceAmount >= item.price) {
                setProductDiscount(item.discount)
            }
        })
    }, [cartPriceAmount])

    const handleAddToCart = () => {

        console.log(productPackage.slice(0, productPackage.indexOf('|')))

        const size = {
            'big': {
                big: {
                    "productAmount": count
                },
            },
            'mid': {
                mid: {
                    "productAmount": count
                },
            },
            'small': {
                small: {
                    "productAmount": count
                },
            },
        }

        dispatch(addBasketItem({
            "productCode": data.productCode,
            "productPackagesSizes": size[productPackage.slice(0, productPackage.indexOf('|'))]
        }))
    }

    return (
        <CardStyled className="product-card">
            <div className="product-card__top">
                {!isPackageAuction && <div className="product-card__sale">
                    %
                </div>}
                <NavLink to={'/products/' + data?.productCode} className="product-card__image-ibg">

                    {<img src={getApiLink("v1/public/images/" + data?.imagesNames[0])} alt=""/>}

                </NavLink>
                <div className="product-card__options options">

                    {data?.productPackagesSizes?.small?.displayPackageCount && cardOption('small', isHaveSmallPackage, smallPackageId)}
                    {data?.productPackagesSizes?.mid?.displayPackageCount && cardOption('mid', isHaveMidPackage, midPackageId)}
                    {data?.productPackagesSizes?.big?.displayPackageCount && cardOption('big', isHaveBigPackage, bigPackageId)}

                </div>
                <ul className="product-card__list">
                    <li>Код: {data?.productCode}</li>
                    <li>Країна: {data?.productCountry}</li>
                    <li>Залишок: {ppil.displayPackageCount}</li>
                </ul>
                <h4 className="product-card__title">
                    <NavLink to={'/products/' + data?.productCode}>
                        {data?.productName}
                    </NavLink>
                </h4>
                <ul className="product-card__list-info">
                    <li>
                        <span className="product-card__label">
                            Одиниць в уп.
                        </span>
                        <span className="product-card__value blue">
                            {ppil?.productCountInPackage}
                        </span>
                    </li>
                    <li>
                        {productDiscount > 0 && <div className="product-card__procent">
                            {productDiscount}%
                        </div>}
                        <span className="product-card__label">
                            Ціна за од.
                        </span>
                        <span className="product-card__value">
                            {(ppil?.productPrice - ppil?.productPrice * (productDiscount / 100)).toFixed(2)} грн
                        </span>
                    </li>
                    <li>
                        {productDiscount > 0 && <div className="product-card__procent">
                            {productDiscount}%
                        </div>}
                        <span className="product-card__label">
                            Ціна за уп.
                        </span>
                        <span className="product-card__value blue">
                            {(ppil?.productPackagePrice - ppil?.productPackagePrice * (productDiscount / 100)).toFixed(2)} грн
                        </span>
                    </li>
                </ul>
                <div className="product-card__price">
                    Сума: <span>{finaleAmount.toFixed(2)} грн</span>
                </div>
            </div>
            <div className="product-card__bottom">
                {+ppil?.displayPackageCount === 0 ?
                    <div className="product__empty">
                        <span>Немає в наявності</span>
                    </div> :
                    <div className="product-card__row">
                        <div className="quantity">
                            <button onClick={_ => setCount(prev => prev > 1 ? prev - 1 : prev)}
                                    type="button" className="quantity__button quantity__button_minus">
                                <img src={minus} alt=""/>
                            </button>
                            <div className="quantity__input">
                                <input autoComplete="off" type="number" name="form[]" value={count}
                                       onChange={e => setCount(+e.target.value)}/>
                            </div>
                            <button onClick={_ => setCount(prev => prev + 1)} type="button"
                                    className="quantity__button quantity__button_plus">
                                <img src={plus} alt=""/>
                            </button>
                        </div>
                        <button onClick={handleAddToCart} className="product-card__button button-icon">
                            <img src={basketWhite} alt=""/>
                        </button>
                    </div>}
                <CardDiscounts data={ppil}/>
            </div>
        </CardStyled>
    );
};

export default Card;