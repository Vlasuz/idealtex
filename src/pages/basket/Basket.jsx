import React, {createContext, useContext, useEffect, useState} from 'react';
import BasketCard from "../../components/basketCard/BasketCard";
import {useDispatch, useSelector} from "react-redux";
import BasketBottom from "./components/BasketBottom";
import {setBasketCheckout, setBasketPriceDiscount} from "../../redux/toolkitSlice";
import { BreadCrumbs } from '../../components/breadCrumbs/BreadCrumbs';
import { BasketEmpty } from './components/BasketEmpty/BasketEmpty';

export const AllAmountContext = createContext(null);

const Basket = () => {

    const basket = useSelector(state => state.toolkit.basket)
    const dispatch = useDispatch()
    const [allAmountPrice, setAllAmountPrice] = useState(0)
    const [productsToCheckout, setProductsToCheckout] = useState([])

    useEffect(() => {
        dispatch(setBasketCheckout(productsToCheckout))
    }, [productsToCheckout])

    useEffect(() => {
        dispatch(setBasketPriceDiscount(allAmountPrice))
    }, [allAmountPrice])

    return (
        <AllAmountContext.Provider value={setAllAmountPrice}>
            <BreadCrumbs pages={[{page: 'Кошик'}]}/>
            <section className="basket">
                <div className="basket__top">
                    <div className="basket__container">
                        <h2 className="title basket__title">
                            КОШИК
                        </h2>
                        {basket.length ? (
                            <div className="basket__grid-layout">


                                {
                                    basket.map(item => <BasketCard data={item.product}
                                                                                productsToCheckout={productsToCheckout}
                                                                                setProductsToCheckout={setProductsToCheckout}
                                                                                selectedPackage={item.package}/>) 
                                }


                            </div>

                        ) : (
                            <BasketEmpty/>
                        )}
                    </div>
                </div>
                <BasketBottom/>
            </section>
        </AllAmountContext.Provider>
    );
};

export default Basket;