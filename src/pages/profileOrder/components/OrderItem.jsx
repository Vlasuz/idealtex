import React from 'react';

const OrderItem = () => {
    return (
        <div className="product-card product-card_basket product-card_orders">
            <div className="product-card__top">
                <a href="" className="product-card__image-ibg">
                    <picture>
                        <source srcSet="img/main-img/product.webp" type="image/webp"/>
                        <img
                            src="img/main-img/product.png" alt=""/>
                    </picture>
                </a>
                <ul className="product-card__list">
                    <li>
                        код 0008+ 000B
                    </li>
                </ul>
                <h4 className="product-card__title">
                    <a href="">
                        Lorem Ipsum - це текст-"риба", що використовується в друкарстві та дизайні.
                        Lorem
                        Ipsum є, фактично, стандартною "рибою" аж з XVI
                    </a>
                </h4>
                <div className="product-card__items">
                    <div className="card-quantity">
                        <div className="card-quantity__title">
                            уп 100 шт
                        </div>
                        <div className="card-quantity__wrap">
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Кол-во уп
                                </div>
                                <div className="card-quantity__value">
                                    0 шт
                                </div>
                            </div>
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Ціна за уп.
                                </div>
                                <div className="card-quantity__value">
                                    1 грн
                                </div>
                            </div>
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Сума
                                </div>
                                <div className="card-quantity__value">
                                    0 грн
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-quantity">
                        <div className="card-quantity__title">
                            уп 50 шт
                        </div>
                        <div className="card-quantity__wrap">
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Кол-во уп
                                </div>
                                <div className="card-quantity__value">
                                    0 шт
                                </div>
                            </div>
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Ціна за уп.
                                </div>
                                <div className="card-quantity__value">
                                    1 грн
                                </div>
                            </div>
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Сума
                                </div>
                                <div className="card-quantity__value">
                                    0 грн
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-quantity">
                        <div className="card-quantity__title">
                            уп 10 шт
                        </div>
                        <div className="card-quantity__wrap">
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Кол-во уп
                                </div>
                                <div className="card-quantity__value">
                                    0 шт
                                </div>
                            </div>
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Ціна за уп.
                                </div>
                                <div className="card-quantity__value">
                                    1 грн
                                </div>
                            </div>
                            <div className="card-quantity__row">
                                <div className="card-quantity__label">
                                    Сума
                                </div>
                                <div className="card-quantity__value">
                                    0 грн
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default OrderItem;