import React, {useState} from 'react';
import {CardStyled} from "./Card.styled";

import basketWhite from './../../assets/initial/img/icons/basket-white.svg'
import CardDiscounts from "./components/CardDiscounts";
import {useDispatch, useSelector} from "react-redux";
import {addBasketItem} from "../../redux/toolkitSlice";
import CardInfo from "./components/CardInfo";
import CardImage from "./components/CardImage";
import CardList from "./components/CardList";
import CardTitle from "./components/CardTitle";
import CardPrice from "./components/CardPrice";
import CardEmpty from "./components/CardEmpty";
import CardQuantity from "./components/CardQuantity";
import {useChooseProductPackage} from "../../hooks/chooseProductPackage";

const Card = ({data}) => {

    const dispatch = useDispatch()
    const {cardOption, activePackage} = useChooseProductPackage({data})

    const [countOfProduct, setCountOfProduct] = useState(1)
    const [isProductAuction] = useState(Object.values(data.productPackagesSizes).map(item => item !== null && item).filter(item => item)[0].productAuction)

    const handleAddToCart = () => {
        const dataItemToCart = {
            "product": data,
            "isAuction": isProductAuction,
            "package": {
                "data": activePackage.package,
                "size": activePackage.id,
                "count": countOfProduct,
            },
        }

        dispatch(addBasketItem(dataItemToCart))
    }

    return (
        <CardStyled className="product-card">
            <div className="product-card__top">
                {
                    isProductAuction &&
                    <div className="product-card__sale">
                        %
                    </div>

                }

                <CardImage data={data}/>

                <div className="product-card__options options">

                    {data?.productPackagesSizes?.small?.displayPackageCount && cardOption('small')}
                    {data?.productPackagesSizes?.mid?.displayPackageCount && cardOption('mid')}
                    {data?.productPackagesSizes?.big?.displayPackageCount && cardOption('big')}

                </div>

                <CardList data={data}/>
                <CardTitle data={data}/>
                <CardInfo productPackage={activePackage?.package} isProductAuction={isProductAuction}/>
                <CardPrice productPackage={activePackage?.package} countOfProduct={countOfProduct} isProductAuction={isProductAuction}/>

            </div>
            <div className="product-card__bottom">
                {+activePackage?.displayPackageCount === 0 ? <CardEmpty/> :
                    <div className="product-card__row">

                        <CardQuantity setCountOfProduct={setCountOfProduct}/>

                        <button onClick={handleAddToCart} className="product-card__button button-icon">
                            <img src={basketWhite} alt=""/>
                        </button>
                    </div>}
                <CardDiscounts isProductAuction={isProductAuction} data={activePackage?.package}/>
            </div>
        </CardStyled>
    );
};

export default Card;