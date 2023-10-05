import React from 'react';
import discountIcon from './../../../assets/initial/img/icons/arrow-spoller.svg'
import {useSelector} from "react-redux";
import {calculatePriceWithDiscount} from "../../../functions/calculatePriceWithDiscount";

const CardDiscounts = ({data, isProductAuction}) => {

    const packagePrice = data?.productPackagePrice
    const packagePriceOne = data?.productPrice
    const countInPackage = data?.productCountInPackage

    const discount = useSelector(state => state.toolkit.discounts)

    return (
        <div className="product-card__spoller spoller-product">
            <details className="spoller-product__item">
                <summary className="spoller-product__button">
                    Знижки <img src={discountIcon} alt=""/>
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
                                <td>{countInPackage} шт</td>
                                <td>{packagePriceOne?.toFixed(2)}</td>
                                <td>{packagePrice?.toFixed(2)}</td>
                            </tr>

                            {
                                discount?.map(item =>
                                    <tr key={item.price}>
                                        <td>{item.discount}%</td>
                                        <td>{calculatePriceWithDiscount(packagePriceOne, (!isProductAuction ? item.discount : 0))}</td>
                                        <td>{calculatePriceWithDiscount(packagePrice, (!isProductAuction ? item.discount : 0))}</td>
                                    </tr>
                                )
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </details>
        </div>
    );
};

export default CardDiscounts;