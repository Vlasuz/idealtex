import React, {useEffect, useRef, useState} from 'react';
import discountIcon from './../../../assets/initial/img/icons/arrow-spoller.svg'
import {useSelector} from "react-redux";
import {calculatePriceWithDiscount} from "../../../functions/calculatePriceWithDiscount";

const CardDiscounts = ({data, isProductAuction}) => {

    const packagePrice = data?.productPackagePrice
    const packagePriceOne = data?.productPrice
    const countInPackage = data?.productCountInPackage

    const [isOpen, setIsOpen] = useState(true)
    const [blockHeight, setBlockHeight] = useState(300)
    const blockBody = useRef(null)

    useEffect(() => {
        setBlockHeight(blockBody.current.clientHeight)
    }, [])

    useEffect(() => {
        blockHeight && setIsOpen(false)
    }, [blockHeight])

    const discounts = useSelector(state => state.toolkit.discounts)

    return (
        <div className="product-card__spoller spoller-product">
            <div className="spoller-product__item">
                <div className={"spoller-product__button" + (isOpen ? " _spoller-active" : "")} onClick={_ => setIsOpen(prev => !prev)}>
                    Знижки <img src={discountIcon} alt=""/>
                </div>
                <div ref={blockBody} className={"spoller-product__body" + (isOpen ? " _active" : "")} style={{maxHeight: isOpen ? blockHeight + "px" : "0px"}}>
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
                                discounts?.map(item =>
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
            </div>
        </div>
    );
};

export default CardDiscounts;