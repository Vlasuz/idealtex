import React, {createContext, useContext, useEffect, useState} from 'react';
import BasketCard from "../../components/basketCard/BasketCard";
import {useDispatch, useSelector} from "react-redux";
import BasketBottom from "./components/BasketBottom";
import {setBasketCheckout, setBasketPriceDiscount} from "../../redux/toolkitSlice";

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
            <section className="basket">
                <div className="basket__top">
                    <div className="basket__container">
                        <h2 className="title basket__title">
                            КОШИК
                        </h2>
                        <div className="basket__grid-layout">

                            {
                                basket.length ? basket.map(item => <BasketCard data={item.product} key={item.product.productCode}
                                                                               productsToCheckout={productsToCheckout}
                                                                               setProductsToCheckout={setProductsToCheckout}
                                                                               selectedPackage={item.package}/>) : "Нічого немає =("
                            }

                        </div>
                    </div>
                </div>
                <BasketBottom/>
            </section>
        </AllAmountContext.Provider>
    );
};

export default Basket;