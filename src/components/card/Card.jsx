import React from 'react';
import {CardStyled} from "./Card.styled";

const Card = () => {
    return (
        <CardStyled className="product-card">
            <div className="product-card__top">
                <div className="product-card__sale">
                    %
                </div>
                <a href="" className="product-card__image-ibg">
                    <picture>
                        <source srcSet="img/main-img/product.webp" type="image/webp"/>
                        <img src="img/main-img/product.png" alt=""/>
                    </picture>
                </a>
                <div className="product-card__options options">

                    <div className="options__item">
                        <input hidden id="o_2" className="options__input" type="radio" value="2" name="option"/>
                        <label htmlFor="o_2" className="options__label">
                                <span className="options__info">уп <br/>
												100 шт</span>
                            <span className="options__price">
												0,02 грн
											</span>
                        </label>
                    </div>
                    <div className="options__item">
                        <input checked hidden id="o_22" className="options__input" type="radio" value="2"
                               name="option"/>
                        <label htmlFor="o_22" className="options__label">
                                <span className="options__info">уп <br/>
												50 шт</span>
                            <span className="options__price">
												0,02 грн
											</span>
                        </label>
                    </div>
                    <div className="options__item">
                        <input hidden id="o_222" className="options__input" type="radio" value="2"
                               name="option"/>
                        <label htmlFor="o_222" className="options__label">
                                <span className="options__info">уп <br/>
												10 шт</span>
                            <span className="options__price">
												0,02 грн
											</span>
                        </label>
                    </div>
                </div>
                <ul className="product-card__list">
                    <li>
                        код 0008+ 000B
                    </li>
                    <li>Країна: Польща</li>
                    <li>Залишок: 12</li>
                </ul>
                <h4 className="product-card__title">
                    <a href="">
                        Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні. Lorem
                        Ipsum
                        є, фактично, стандартною "рибою" аж з XVI
                    </a>
                </h4>
                <ul className="product-card__list-info">
                    <li>
										<span className="product-card__label">
											Одиниць в уп.
										</span>
                        <span className="product-card__value blue">
											100 шт
										</span>
                    </li>
                    <li>
                        <div className="product-card__procent">
                            18%
                        </div>
                        <span className="product-card__label">
											Ціна за од.
										</span>
                        <span className="product-card__value">
											0,02 грн
										</span>
                    </li>
                    <li>
                        <div className="product-card__procent">
                            18%
                        </div>
                        <span className="product-card__label">
											Ціна за уп.
										</span>
                        <span className="product-card__value blue">
											2 грн
										</span>
                    </li>
                </ul>
                <div className="product-card__price">
                    Сума: <span>20 грн</span>
                </div>
            </div>
            <div className="product-card__bottom">
                <div className="product-card__row">
                    <div data-quantity className="quantity">
                        <button data-quantity-minus type="button" className="quantity__button quantity__button_minus">
                            <img src="img/icons/minus.svg" alt=""/>
                        </button>
                        <div className="quantity__input">
                            <input data-quantity-value autoComplete="off" type="text" name="form[]" value="2"/>
                        </div>
                        <button data-quantity-plus type="button"
                                className="quantity__button quantity__button_plus">
                            <img src="img/icons/plus.svg" alt=""/>
                        </button>
                    </div>
                    <button className="product-card__button button-icon">
                        <img src="img/icons/basket-white.svg" alt=""/>
                    </button>
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
                                        <td>25 шт</td>
                                        <td>5.2</td>
                                        <td>130</td>
                                    </tr>
                                    <tr>
                                        <td>5%</td>
                                        <td>4.72</td>
                                        <td>125</td>
                                    </tr>
                                    <tr>
                                        <td>10%</td>
                                        <td>4.68</td>
                                        <td>117</td>
                                    </tr>
                                    <tr>
                                        <td>15%</td>
                                        <td>4.42</td>
                                        <td>110.5</td>
                                    </tr>
                                    <tr>
                                        <td>18%</td>
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
        </CardStyled>
    );
};

export default Card;