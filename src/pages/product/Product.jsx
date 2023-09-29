import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {getApiLink} from "../../hooks/getApiLink";
import {Swiper, SwiperSlide} from 'swiper/react';
import {ProductStyled} from "./Product.styled";
import {Navigation, Pagination} from "swiper";

import arrNext from './../../assets/initial/img/icons/arrow-left.svg'
import spoller from './../../assets/initial/img/icons/arrow-spoller.svg'
import CardOption from "../../components/card/components/cardOption";
import CardOptionEmpty from "../../components/card/components/cardOptionEmpty";
import Translate from "../../components/translate/Translate";

const Product = () => {
    const {productCode} = useParams()
    const [product, setProduct] = useState({})


    useEffect(() => {
        axios.get(getApiLink(`v1/public/products/${productCode}`)).then(({data}) => {
            setProduct(data)
        })
    }, [])

    const smallPackageId = 'small|' + product?.productCode
    const midPackageId = 'mid|' + product?.productCode
    const bigPackageId = 'big|' + product?.productCode

    const [count, setCount] = useState(1)
    const [productPackage, setProductPackage] = useState(midPackageId ?? bigPackageId ?? smallPackageId)

    const productPackageInfoList = {
        small: product.productPackagesSizes?.small,
        mid: product.productPackagesSizes?.mid,
        big: product.productPackagesSizes?.big,
    }

    const ppil = productPackage && productPackageInfoList[productPackage.slice(0, productPackage.indexOf('|'))]

    const isHaveSmallPackage = product?.productPackagesSizes?.small?.displayPackageCount
    const isHaveMidPackage = product?.productPackagesSizes?.mid?.displayPackageCount && !isHaveSmallPackage
    const isHaveBigPackage = product?.productPackagesSizes?.big?.displayPackageCount && !isHaveMidPackage

    useEffect(() => {
        setProductPackage((isHaveSmallPackage && smallPackageId) ?? (isHaveMidPackage && midPackageId) ?? (isHaveBigPackage && bigPackageId))
    }, [product])

    const finaleAmount =  ppil?.productPackagePrice * count

    const handleAddToCart = () => {
        console.log('added to cart', product)
    }

    if(!Object.keys(product).length) return '';

    const cardOption = (type, isHave, typeId) => {
        if (product?.productPackagesSizes[type] && product?.productPackagesSizes[type]?.displayPackageCount !== '0')
            return (<CardOption
                id={typeId}
                name={product?.productCode}
                setProductPackage={setProductPackage}
                metric={product?.productMetric}
                data={product?.productPackagesSizes[type]}
                checked={productPackage}
            />)
        else return <CardOptionEmpty/>
    }

    return (
        <ProductStyled className="product">
            <div className="product__container">
                <div className="product__row">
                    <div className="product__left">
                        <div className="product__slider">
                            <Swiper
                                navigation={{
                                    prevEl: ".product__arrow_prev",
                                    nextEl: ".product__arrow_next"
                                }}
                                modules={[Pagination, Navigation]}
                                pagination={{
                                    el: '.product__pagination'
                                }}
                                slidesPerView={1}
                                speed={700}
                            >
                                {
                                    product.imagesNames?.map(image =>
                                        <SwiperSlide key={image}>
                                            <div className="product__image-ibg">
                                                <img src={getApiLink("v1/public/images/" + image)} alt=""/>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            </Swiper>
                            <div className="banner__pagination product__pagination"></div>
                            <div className="banner__arrows">
                                <button className="banner__arrow banner__arrow_prev product__arrow_prev">
                                    <img src={arrNext} alt=""/>
                                </button>
                                <button className="banner__arrow banner__arrow_next product__arrow_next">
                                    <img src={arrNext} alt=""/>
                                </button>
                            </div>
                        </div>
                        <div className="product__info">
                            <span className="product__label"><Translate>product_code</Translate>: {product.productCode}</span>
                            <span
                                className="product__label"><Translate>product_country</Translate>: {product.productCountry}</span>
                            {/*<span className="product__label  product__label_empty">*/}
                            {/*    Немає в наявності*/}
                            {/*</span>*/}
                            <span className="product__label  product__label_is">
                                <Translate>product_residue</Translate> &gt; 100 шт
                            </span>
                        </div>
                        <div className="product__descr">
                            <p>{product.productName}</p>
                        </div>
                    </div>
                    <div className="product__right">
                        <div className="product__options options options_2">

                            {product?.productPackagesSizes?.small?.displayPackageCount && cardOption('small', isHaveSmallPackage, smallPackageId)}
                            {product?.productPackagesSizes?.mid?.displayPackageCount && cardOption('mid', isHaveMidPackage, midPackageId)}
                            {product?.productPackagesSizes?.big?.displayPackageCount && cardOption('big', isHaveBigPackage, bigPackageId)}

                        </div>
                        <ul className="product__list">
                            <li>
                                <div className="product__list-label">
                                    Кількість
                                </div>
                                <div className="product__list-value">
                                    <div data-quantity className="quantity quantity_2">
                                        <button onClick={_ => setCount(prev => prev > 1 ? prev - 1 : prev)}
                                                type="button"
                                                className="quantity__button quantity__button_minus">
                                            <img src={arrNext} alt=""/>
                                        </button>
                                        <div className="quantity__input">
                                            <input autoComplete="off" type="text" name="form[]"
                                                   value={count} onChange={e => setCount(+e.target.value)}/>
                                            <span>уп.</span>
                                        </div>
                                        <button onClick={_ => setCount(prev => prev + 1)} type="button"
                                                className="quantity__button quantity__button_plus"><img
                                            src={arrNext} alt=""/>
                                        </button>

                                    </div>
                                </div>

                            </li>
                            <li>
                                <div className="product__list-label">
                                    Сума
                                </div>
                                <div className="product__list-value">
                                    <div className="product__price">
                                        {finaleAmount} грн
                                    </div>
                                </div>
                            </li>
                        </ul>
                        {/*<div className="product__empty">*/}
                        {/*    <span>Немає в наявності</span>*/}
                        {/*</div>*/}
                        <button onClick={handleAddToCart} className="product__buy button button_green">
                            Купити
                        </button>
                        <div data-spollers className="product-card__spoller spoller-product">
                            <details className="spoller-product__item">
                                <summary data-spoller className="spoller-product__button">
                                    Знижки <img src={spoller} alt=""/>
                                </summary>
                                <div className="spoller-product__body">
                                    <div className="spoller-product__table-wrap">
                                        <table className="spoller-product__table">
                                            <thead className="spoller-product__thead">
                                            <tr>
                                                <th className="spoller-product__th">
                                                    Кількість одиниць в упаковці
                                                </th>
                                                <th className="spoller-product__th">
                                                    Ціна за одиницю
                                                </th>
                                                <th className="spoller-product__th">
                                                    Ціна за упаковку
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
                                                <td>15% знижка</td>
                                                <td>4.72</td>
                                                <td>125</td>
                                            </tr>
                                            <tr>
                                                <td>10% знижка</td>
                                                <td>4.68</td>
                                                <td>117</td>
                                            </tr>
                                            <tr>
                                                <td>15% знижка</td>
                                                <td>4.42</td>
                                                <td>110.5</td>
                                            </tr>
                                            <tr>
                                                <td>18% знижка</td>
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
                </div>
            </div>
        </ProductStyled>
    );
};

export default Product;