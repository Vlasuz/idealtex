import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {getApiLink} from "../../hooks/getApiLink";
import {Swiper, SwiperSlide} from 'swiper/react';
import {ProductStyled} from "./Product.styled";
import {Navigation, Pagination} from "swiper";

import arrNext from './../../assets/initial/img/icons/arrow-left.svg'

const Product = () => {

    const [product, setProduct] = useState({})

    const {productCode} = useParams()

    useEffect(() => {
        axios.get(getApiLink(`v1/public/products/${productCode}`)).then(({data}) => {
            setProduct(data)
        })
    }, [])

    console.log("Product single", product)

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
                            <span className="product__label">Код продукту: 008+008</span>
                            <span className="product__label">Країна: Тайвань</span>
                            <span className="product__label  product__label_empty">
									Немає в наявності
								</span>
                        </div>
                        <div className="product__descr">
                            <p>Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem
                                Ipsum
                                є, фактично, стандартною "рибою" аж з XVI сторіччя, коли невідомий друкар взяв
                                шрифтову
                                гранку та склав на ній підбірку зразків шрифтів.</p>
                        </div>
                    </div>
                    <div className="product__right">
                        <div className="product__options options options_2">
                            <div className="options__item">
                                <input hidden id="o_2" className="options__input" type="radio" value="2"
                                       name="option"/>
                                <label htmlFor="o_2" className="options__label"><span className="options__info">уп. 100 шт
										</span>
                                    <span className="options__price-pc">
											Ціна за шт.
										</span><span className="options__price">
											0,02 грн
										</span></label>
                            </div>
                            <div className="options__item">
                                <input checked hidden id="o_22" className="options__input" type="radio" value="2"
                                       name="option"/>
                                <label htmlFor="o_22" className="options__label"><span
                                    className="options__info">уп
											50 шт</span><span className="options__price-pc">
											Ціна за шт.
										</span><span className="options__price">
											0,02 грн
										</span></label>
                            </div>
                            <div className="options__item">
                                <input hidden id="o_222" className="options__input" type="radio" value="2"
                                       name="option"/>
                                <label htmlFor="o_222" className="options__label"><span
                                    className="options__info">уп
											10 шт</span><span className="options__price-pc">
											Ціна за шт.
										</span><span className="options__price">
											0,02 грн
										</span></label>
                            </div>
                        </div>
                        <ul className="product__list">
                            <li>
                                <div className="product__list-label">
                                    Кількість
                                </div>
                                <div className="product__list-value">
                                    <div data-quantity className="quantity quantity_2">
                                        <button data-quantity-minus type="button"
                                                className="quantity__button quantity__button_minus">
                                            <img src="img/icons/arrow-left.svg" alt=""/>
                                        </button>
                                        <div className="quantity__input">
                                            <input data-quantity-value autoComplete="off" type="text" name="form[]"
                                                   value="1"/>
                                            <span>уп.</span>
                                        </div>
                                        <button data-quantity-plus type="button"
                                                className="quantity__button quantity__button_plus"><img
                                            src="img/icons/arrow-left.svg" alt=""/>
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
                                        500 грн
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="product__empty">
                            <span>Немає в наявності</span>
                        </div>
                        <div data-spollers className="product-card__spoller spoller-product">
                            <details className="spoller-product__item">
                                <summary data-spoller className="spoller-product__button">
                                    Знижки <img src="img/icons/arrow-spoller.svg" alt=""/>
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