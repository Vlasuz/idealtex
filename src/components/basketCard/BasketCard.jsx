import React, {useState} from 'react';
import {CardStyled} from "../card/Card.styled";
import {getApiLink} from "../../hooks/getApiLink";

import trash from './../../assets/initial/img/icons/trash.svg'
import CardQuantity from "./components/CardQuantity";
import {NavLink} from "react-router-dom";
import CardQuantityNull from "./components/CardQuantityNull";
import {useDispatch} from "react-redux";
import {removeBasketItem, setBasketCheckout} from "../../redux/toolkitSlice";

const BasketCard = ({data, selectedPackage}) => {

    const [isProductAuction] = useState(Object.values(data.productPackagesSizes).map(item => item !== null && item).filter(item => item)[0].productAuction)
    const dispatch = useDispatch()

    console.log(selectedPackage)

    const handleChangeProduct = (count, size) => {
        // const dataItemToCart = {
        //     "product": data,
        //     "isAuction": isProductAuction,
        //     "package": {
        //         "data": selectedPackage,
        //         "size": size,
        //         "count": count,
        //     },
        // }
        //
        //
        // const productToCheckout = {
        //     "productCode": data.productCode,
        //     "productPackagesSizes": {
        //         "big": data.productPackagesSizes.big ? {
        //             "productAmount": size.includes("big") ? count : selectedPackage.count
        //         } : null,
        //         "mid": data.productPackagesSizes.mid ? {
        //             "productAmount": size.includes("mid") ? count : selectedPackage.count
        //         } : null,
        //         "small": data.productPackagesSizes.small ? {
        //             "productAmount": size.includes("small") ? count : selectedPackage.count
        //         } : null
        //     }
        // }
        //
        // console.log(selectedPackage.count)
        // console.log(productToCheckout)
        //
        // dispatch(setBasketCheckout(productToCheckout))
    }

    return (
        <CardStyled className="product-card product-card_basket">
            <div className="product-card__top">
                <NavLink to={"/products/" + data.productCode} className="product-card__image-ibg">
                    <img src={getApiLink(`v1/public/images/${data.imagesNames[0]}`)} alt=""/>
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
                        <CardQuantity size={'small'} handleChangeProduct={handleChangeProduct}
                                      count={selectedPackage.size.includes('small') ? selectedPackage.count : 0}
                                      isProductAuction={isProductAuction}
                                      productPackage={data.productPackagesSizes.small}/> : <CardQuantityNull/>}
                    {data.productPackagesSizes.mid ?
                        <CardQuantity size={'mid'} handleChangeProduct={handleChangeProduct}
                                      count={selectedPackage.size.includes('mid') ? selectedPackage.count : 0}
                                      isProductAuction={isProductAuction}
                                      productPackage={data.productPackagesSizes.mid}/> : <CardQuantityNull/>}
                    {data.productPackagesSizes.big ?
                        <CardQuantity size={'big'} handleChangeProduct={handleChangeProduct}
                                      count={selectedPackage.size.includes('big') ? selectedPackage.count : 0}
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