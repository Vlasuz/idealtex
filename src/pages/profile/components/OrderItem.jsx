import React from 'react';
import {CardStyled} from "../../../components/card/Card.styled";
import {getApiLink} from "../../../hooks/getApiLink";
import {NavLink} from "react-router-dom";

const OrderItem = ({data}) => {

    console.log(data)

    return (
        <CardStyled className="product-card product-card_basket product-card_orders">
            <div className="product-card__top">
                <NavLink to={'/products/'+data.productCode} className="product-card__image-ibg">
                    <img src={getApiLink("v1/public/images/"+data.imagesNames[0])} alt=""/>
                </NavLink>
                <ul className="product-card__list">
                    <li>
                        код {data.productCode}
                    </li>
                </ul>
                <h4 className="product-card__title">
                    <NavLink to={'/products/'+data.productCode} href="profileOrder/components">
                        {data.productName}
                    </NavLink>
                </h4>
                <div className="product-card__items">
                    <div className="card-quantity">
                        <div className="card-quantity__title">
                            {/*уп {data.productPackagesSizes.} шт*/}
                        </div>
                        <div className="card-quantity__wrap">
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Кол-во уп
                                </div>
                                <div className="card-quantity__value">
                                    {data.productPackagesSizes.big.productAmount} {data.productMetric}
                                </div>
                            </div>
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Ціна за уп.
                                </div>
                                <div className="card-quantity__value">
                                    {data.productPackagesSizes.big.productPackagePrice} грн
                                </div>
                            </div>
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Сума
                                </div>
                                <div className="card-quantity__value">
                                    {data.productPackagesSizes.big.productAmount * data.productPackagesSizes.big.productPackagePrice} грн
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-quantity">
                        <div className="card-quantity__title">
                            уп 50 шт
                        </div>
                        <div className="card-quantity__wrap">
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Кол-во уп
                                </div>
                                <div className="card-quantity__value">
                                    {data.productPackagesSizes.mid.productAmount} {data.productMetric}
                                </div>
                            </div>
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Ціна за уп.
                                </div>
                                <div className="card-quantity__value">
                                    {data.productPackagesSizes.mid.productPackagePrice} грн
                                </div>
                            </div>
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Сума
                                </div>
                                <div className="card-quantity__value">
                                    {data.productPackagesSizes.mid.productAmount * data.productPackagesSizes.mid.productPackagePrice} грн
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-quantity">
                        <div className="card-quantity__title">
                            уп 10 шт
                        </div>
                        <div className="card-quantity__wrap">
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Кол-во уп
                                </div>
                                <div className="card-quantity__value">
                                    {data.productPackagesSizes.small.productAmount} {data.productMetric}
                                </div>
                            </div>
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Ціна за уп.
                                </div>
                                <div className="card-quantity__value">
                                    {data.productPackagesSizes.small.productPackagePrice} грн
                                </div>
                            </div>
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Сума
                                </div>
                                <div className="card-quantity__value">
                                    {data.productPackagesSizes.small.productAmount * data.productPackagesSizes.small.productPackagePrice} грн
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CardStyled>
    );
};

export default OrderItem;