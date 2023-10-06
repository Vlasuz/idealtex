import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {getApiLink} from "../../hooks/getApiLink";
import {Swiper, SwiperSlide} from 'swiper/react';
import {ProductStyled} from "./Product.styled";
import {Navigation, Pagination} from "swiper";

import arrNext from './../../assets/initial/img/icons/arrow-left.svg'
import CardOption from "../../components/card/components/CardOption";
import CardOptionEmpty from "../../components/card/components/CardOptionEmpty";
import Translate from "../../components/translate/Translate";
import CardDiscounts from "../../components/card/components/CardDiscounts";
import {useDispatch, useSelector} from "react-redux";
import {addBasketItem} from "../../redux/toolkitSlice";
import ProductSlider from "./components/ProductSlider";
import ProductInfo from "./components/ProductInfo";
import CardQuantity from "../../components/card/components/CardQuantity";
import ProductQuantity from "./components/ProductQuantity";
import {useChooseProductPackage} from "../../hooks/chooseProductPackage";

const Product = () => {

    const {productCode} = useParams()
    const [product, setProduct] = useState({})
    const [countOfProduct, setCountOfProduct] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(getApiLink(`v1/public/products/${productCode}`)).then(({data}) => {
            setProduct(data)
            setIsProductAuction(Object.values(data.productPackagesSizes).map(item => item !== null && item).filter(item => item)[0].productAuction)
        })
    }, [])

    const [isProductAuction, setIsProductAuction] = useState([])

    const {cardOption, activePackage} = useChooseProductPackage({data: product})

    const handleAddToCart = () => {
        const dataItemToCart = {
            "product": product,
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
        <ProductStyled className="product">
            <div className="product__container">
                <div className="product__row">
                    <div className="product__left">
                        <ProductSlider product={product} />
                        <ProductInfo product={product}/>
                    </div>
                    <div className="product__right">
                        <div className="product__options options options_2">

                            {product?.productPackagesSizes?.small?.displayPackageCount && cardOption('small')}
                            {product?.productPackagesSizes?.mid?.displayPackageCount && cardOption('mid')}
                            {product?.productPackagesSizes?.big?.displayPackageCount && cardOption('big')}

                        </div>
                        <ul className="product__list">
                            <li>
                                <div className="product__list-label">
                                    Кількість
                                </div>
                                <div className="product__list-value">
                                    <ProductQuantity setCountOfProduct={setCountOfProduct} />
                                </div>

                            </li>
                            <li>
                                <div className="product__list-label">
                                    Сума
                                </div>
                                <div className="product__list-value">
                                    <div className="product__price">
                                        {(activePackage?.package?.productPackagePrice * countOfProduct).toFixed(2)} грн
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {+activePackage?.package?.displayPackageCount === 0 ?
                            <div className="product__empty">
                                <span>Немає в наявності</span>
                            </div> :
                            <button onClick={handleAddToCart} className="product__buy button button_green">
                                Купити
                            </button>
                        }
                        <CardDiscounts isProductAuction={isProductAuction} data={activePackage?.package}/>
                    </div>
                </div>
            </div>
        </ProductStyled>
    );
};

export default Product;