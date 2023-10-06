import React from 'react';
import BasketCard from "../../components/basketCard/BasketCard";
import {useSelector} from "react-redux";
import BasketBottom from "./components/BasketBottom";

const Basket = () => {

    const basket = useSelector(state => state.toolkit.basket)


    console.log(basket)
    return (
        <section className="basket">
            <div className="basket__top">
                <div className="basket__container">
                    <h2 className="title basket__title">
                        КОШИК
                    </h2>
                    <div className="basket__grid-layout">

                        {
                            basket.length ? basket.map(item => <BasketCard data={item.product} selectedPackage={item.package}/>) : "Нічого немає =("
                        }

                    </div>
                </div>
            </div>
            <BasketBottom/>
        </section>
    );
};

export default Basket;