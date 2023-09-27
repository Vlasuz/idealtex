import React, {useEffect, useState} from 'react';
import {CardStyled} from "./Card.styled";
import CardOption from "./components/cardOption";
import CardOptionEmpty from "./components/cardOptionEmpty";
import {getApiLink} from "../../hooks/getApiLink";

import discount from './../../assets/initial/img/icons/arrow-spoller.svg'
import basketWhite from './../../assets/initial/img/icons/basket-white.svg'
import plus from './../../assets/initial/img/icons/plus.svg'
import minus from './../../assets/initial/img/icons/minus.svg'
import {NavLink} from "react-router-dom";

const Card = ({data}) => {

    const [count, setCount] = useState(1)
    const [productPackage, setProductPackage] = useState('')

    const smallPackage = 'small|' + data?.productCode
    const midPackage = 'mid|' + data?.productCode
    const bigPackage = 'big|' + data?.productCode

    const productPackageInfoList = {
        small: data.productPackagesSizes.small,
        mid: data.productPackagesSizes.mid,
        big: data.productPackagesSizes.big,
    }

    console.log('Product data', data)

    const finaleAmount = productPackageInfoList[productPackage.slice(0, productPackage.indexOf('|'))]?.productCountInPackage * count

    return (
        <CardStyled className="product-card">
            <div className="product-card__top">
                <div className="product-card__sale">
                    %
                </div>
                <NavLink to={'/product/'+data?.productCode} className="product-card__image-ibg">

                    {<img src={getApiLink("v1/public/images/" + data?.imagesNames[0])} alt=""/>}

                </NavLink>
                <div className="product-card__options options">

                    {data?.productPackagesSizes?.small ?
                        <CardOption
                            id={smallPackage}
                            name={data?.productCode}
                            setProductPackage={setProductPackage}
                            metric={data?.productMetric}
                            data={data?.productPackagesSizes?.small}/>
                        :
                        <CardOptionEmpty/>}
                    {data?.productPackagesSizes?.mid ?
                        <CardOption
                            id={midPackage}
                            name={data?.productCode}
                            setProductPackage={setProductPackage}
                            metric={data?.productMetric}
                            data={data?.productPackagesSizes?.mid}/>
                        :
                        <CardOptionEmpty/>}
                    {data?.productPackagesSizes?.big ?
                        <CardOption
                            id={bigPackage}
                            name={data?.productCode}
                            setProductPackage={setProductPackage}
                            metric={data?.productMetric}
                            data={data?.productPackagesSizes?.big}/>
                        :
                        <CardOptionEmpty/>}

                </div>
                <ul className="product-card__list">
                    <li>Код: {data?.productCode}</li>
                    <li>Країна: {data?.productCountry}</li>
                    <li>Залишок: 12</li>
                </ul>
                <h4 className="product-card__title">
                    <a href="">
                        {data?.productName}
                    </a>
                </h4>
                <ul className="product-card__list-info">
                    <li>
                        <span className="product-card__label">
                            Одиниць в уп.
                        </span>
                        <span className="product-card__value blue">
                            {productPackageInfoList[productPackage.slice(0, productPackage.indexOf('|'))]?.productCountInPackage}
                        </span>
                    </li>
                    <li>
                        <div className="product-card__procent">
                            18%
                        </div>
                        <span className="product-card__label">
                            Ціна за од.
                        </span>
                        <span className="product-card__value">
                            {productPackageInfoList[productPackage.slice(0, productPackage.indexOf('|'))]?.productPrice} грн
                        </span>
                    </li>
                    <li>
                        <div className="product-card__procent">
                            18%
                        </div>
                        <span className="product-card__label">
                            Ціна за уп.
                        </span>
                        <span className="product-card__value blue">
                            {productPackageInfoList[productPackage.slice(0, productPackage.indexOf('|'))]?.productPackagePrice} грн
                        </span>
                    </li>
                </ul>
                <div className="product-card__price">
                    Сума: <span>{finaleAmount} грн</span>
                </div>
            </div>
            <div className="product-card__bottom">
                <div className="product-card__row">
                    <div className="quantity">
                        <button onClick={_ => setCount(prev => prev > 1 ? prev - 1 : prev)}
                                type="button" className="quantity__button quantity__button_minus">
                            <img src={minus} alt=""/>
                        </button>
                        <div className="quantity__input">
                            <input autoComplete="off" type="number" name="form[]" value={count} onChange={e => setCount(+e.target.value)}/>
                        </div>
                        <button onClick={_ => setCount(prev => prev + 1)} type="button"
                                className="quantity__button quantity__button_plus">
                            <img src={plus} alt=""/>
                        </button>
                    </div>
                    <button className="product-card__button button-icon">
                        <img src={basketWhite} alt=""/>
                    </button>
                </div>
                <div data-spollers className="product-card__spoller spoller-product">
                    <details className="spoller-product__item">
                        <summary data-spoller className="spoller-product__button">
                            Знижки <img src={discount} alt=""/>
                        </summary>
                        <div className="spoller-product__body">
                            <div className="spoller-product__table-wrap">
                                <table className="spoller-product__table">
                                    <thead className="spoller-product__thead">
                                    <tr>
                                        <th className="spoller-product__th">
                                            Кільк-ть од. в уп.
                                        </th>
                                        <th className="spoller-product__th">
                                            Ціна за од.
                                        </th>
                                        <th className="spoller-product__th">
                                            Ціна за уп.
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>25 шт</td>
                                        <td>5.2</td>
                                        <td>130</td>
                                    </tr>
                                    <tr>
                                        <td>5%</td>
                                        <td>4.72</td>
                                        <td>125</td>
                                    </tr>
                                    <tr>
                                        <td>10%</td>
                                        <td>4.68</td>
                                        <td>117</td>
                                    </tr>
                                    <tr>
                                        <td>15%</td>
                                        <td>4.42</td>
                                        <td>110.5</td>
                                    </tr>
                                    <tr>
                                        <td>18%</td>
                                        <td>4.264</td>
                                        <td>106.6</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
        </CardStyled>
    );
};

export default Card;