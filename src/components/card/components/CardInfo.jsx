import React, {useState} from 'react';
import {calculatePriceWithDiscount} from "../../../functions/calculatePriceWithDiscount";
import {useMaxDiscount} from "../../../hooks/maxDiscount";
import {useSelector} from "react-redux";
import {useGetGeneralDiscount} from "../../../hooks/getGeneralDiscount";

const CardInfo = ({productPackage, isProductAuction}) => {

    const {maxDiscount} = useMaxDiscount()
    const {discount} = useGetGeneralDiscount()

    return (
        <ul className="product-card__list-info">
            <li>
                <span className="product-card__label">
                    Одиниць в уп.
                </span>
                <span className="product-card__value blue">
                    {productPackage?.productCountInPackage}
                </span>
            </li>
            <li>
                {
                    !isProductAuction && discount > 0 &&
                    <div className="product-card__procent">
                        {discount}%
                    </div>
                }

                {
                    isProductAuction && <div className="product-card__procent">
                        {maxDiscount}%
                    </div>
                }

                <span className="product-card__label">
                    Ціна за од.
                </span>
                <span className="product-card__value">
                    {
                        calculatePriceWithDiscount(productPackage?.productPrice) + " грн"
                    }
                </span>
            </li>
            <li>
                {
                    !isProductAuction && discount > 0 &&
                    <div className="product-card__procent">
                        {discount}%
                    </div>
                }

                {
                    isProductAuction && <div className="product-card__procent">
                        {maxDiscount}%
                    </div>
                }

                <span className="product-card__label">
                    Ціна за уп.
                </span>
                <span className="product-card__value blue">
                    {
                        calculatePriceWithDiscount(productPackage?.productPackagePrice) + " грн"
                    }
                </span>
            </li>
        </ul>
    );
};

export default CardInfo;