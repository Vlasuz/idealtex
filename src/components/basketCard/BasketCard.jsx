import React, {useEffect, useState} from 'react';
import {CardStyled} from "../card/Card.styled";
import {getApiLink} from "../../hooks/getApiLink";

import trash from './../../assets/initial/img/icons/trash.svg'
import CardQuantity from "./components/CardQuantity";
import {NavLink} from "react-router-dom";
import CardQuantityNull from "./components/CardQuantityNull";
import {useDispatch, useSelector} from "react-redux";
import {removeBasketItem} from "../../redux/toolkitSlice";

import imagePlaceholder from './../../assets/initial/img/defaultImage.jpg'

const BasketCard = ({data, selectedPackage, setProductsToCheckout, productsToCheckout}) => {

    const basket = useSelector(state => state.toolkit.basket)
    const [isProductAuction] = useState(Object.values(data.productPackagesSizes).map(item => item !== null && item).filter(item => item)[0].productAuction)
    const dispatch = useDispatch()

    const [countOfSmall, setCountOfSmall] = useState(selectedPackage.size.includes('small') ? selectedPackage.count : 0)
    const [countOfMid, setCountOfMid] = useState(selectedPackage.size.includes('mid') ? selectedPackage.count : 0)
    const [countOfBig, setCountOfBig] = useState(selectedPackage.size.includes('big') ? selectedPackage.count : 0)

    useEffect(() => {

        const productToCheckout = {
            "productCode": data.productCode,
            "isAuction": isProductAuction,
            "productPackagesSizes": {
                "big": data.productPackagesSizes.big ? {
                    "productAmount": countOfBig
                } : null,
                "mid": data.productPackagesSizes.mid ? {
                    "productAmount": countOfMid
                } : null,
                "small": data.productPackagesSizes.small ? {
                    "productAmount": countOfSmall
                } : null
            }
        }


        const itemIndex = productsToCheckout.map(item => item.productCode).indexOf(productToCheckout.productCode)

        if(itemIndex > -1) {
            setProductsToCheckout(prev => [...prev.slice(0, itemIndex), productToCheckout, ...prev.slice(itemIndex+1)])
        } else {
            setProductsToCheckout(prev => [...prev, productToCheckout])
        }


        if(!countOfBig && !countOfMid && !countOfSmall) {
            dispatch(removeBasketItem(data))
        }

    }, [countOfBig, countOfMid, countOfSmall])

    return (
        <CardStyled className="product-card product-card_basket">
            <div className="product-card__top">
                <NavLink to={"/products/" + data.productCode} className="product-card__image-ibg">
                    <img src={data.imagesNames[0] ? getApiLink(`v1/public/images/${data.imagesNames[0]}`) : imagePlaceholder} alt=""/>
                </NavLink>
                <ul className="product-card__list">
                    <li>
                        код {data.productCode}
                    </li>
                </ul>
                <h4 className="product-card__title">
                    <NavLink to={"/products/" + data.productCode} href="">
                        {data.productName}
                    </NavLink>
                </h4>
                <div className="product-card__items">

                    {data.productPackagesSizes.small ?
                        <CardQuantity setCount={setCountOfSmall}
                                      // count={selectedPackage.size.includes('small') ? selectedPackage.count : 0}
                                      count={basket?.filter(item => item.product?.productCode === data.productCode && item.package.size.includes('small')) ? basket?.filter(item => item.product?.productCode === data.productCode && item.package.size.includes('small'))[0]?.package.count : 0}
                                      isProductAuction={isProductAuction}
                                      productPackage={data.productPackagesSizes.small}/> : <CardQuantityNull/>}
                    {data.productPackagesSizes.mid ?
                        <CardQuantity setCount={setCountOfMid}
                                      // count={selectedPackage.size.includes('mid') ? selectedPackage.count : 0}
                                      count={basket?.filter(item => item.product?.productCode === data.productCode && item.package.size.includes('mid')) ? basket?.filter(item => item.product?.productCode === data.productCode && item.package.size.includes('mid'))[0]?.package.count : 0}
                                      isProductAuction={isProductAuction}
                                      productPackage={data.productPackagesSizes.mid}/> : <CardQuantityNull/>}
                    {data.productPackagesSizes.big ?
                        <CardQuantity setCount={setCountOfBig}
                                      // count={selectedPackage.size.includes('big') ? selectedPackage.count : 0}
                                      count={basket?.filter(item => item.product?.productCode === data.productCode && item.package.size.includes('big')) ? basket?.filter(item => item.product?.productCode === data.productCode && item.package.size.includes('big'))[0]?.package.count : 0}
                                      isProductAuction={isProductAuction}
                                      productPackage={data.productPackagesSizes.big}/> : <CardQuantityNull/>}

                </div>
            </div>
            <div className="product-card__bottom">
                <button onClick={_ => dispatch(removeBasketItem(data))}
                        className="button product-card__remove button button_remove">
                    <img src={trash} alt=""/>
                </button>
            </div>
        </CardStyled>
    );
};

export default BasketCard;