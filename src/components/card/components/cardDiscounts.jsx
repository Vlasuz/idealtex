import React from 'react';
import discount from './../../../assets/initial/img/icons/arrow-spoller.svg'

const CardDiscounts = ({data}) => {

    const packagePrice = data?.productPackagePrice
    const packagePriceOne = data?.productPrice
    const countInPackage = data?.productCountInPackage

    const discountCalcPriceOne = (prc) => {
        return (packagePriceOne - packagePriceOne * (prc / 100)).toFixed(2)
    }
    const discountCalcPrice = (prc) => {
        return (packagePrice - packagePrice * (prc / 100)).toFixed(2)
    }

    return (
        <div className="product-card__spoller spoller-product">
            <details className="spoller-product__item">
                <summary className="spoller-product__button">
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
                                <td>{countInPackage} шт</td>
                                <td>{packagePriceOne}</td>
                                <td>{packagePrice}</td>
                            </tr>
                            <tr>
                                <td>10%</td>
                                <td>{discountCalcPriceOne(10)}</td>
                                <td>{discountCalcPrice(10)}</td>
                            </tr>
                            <tr>
                                <td>20%</td>
                                <td>{discountCalcPriceOne(20)}</td>
                                <td>{discountCalcPrice(20)}</td>
                            </tr>
                            <tr>
                                <td>30%</td>
                                <td>{discountCalcPriceOne(30)}</td>
                                <td>{discountCalcPrice(30)}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </details>
        </div>
    );
};

export default CardDiscounts;