import React, {createContext, useContext, useEffect, useState} from 'react';
import BasketCard from "../../components/basketCard/BasketCard";
import {useDispatch, useSelector} from "react-redux";
import BasketBottom from "./components/BasketBottom";
import {setBasketCheckout, setBasketPriceDiscount} from "../../redux/toolkitSlice";
import {BreadCrumbs} from '../../components/breadCrumbs/BreadCrumbs';
import {BasketEmpty} from './components/BasketEmpty/BasketEmpty';

export const AllAmountContext = createContext(null);

const Basket = () => {

    const basket = useSelector(state => state.toolkit.basket)
    const dispatch = useDispatch()
    const [allAmountPrice, setAllAmountPrice] = useState(0)
    const [productsToCheckout, setProductsToCheckout] = useState([])

    useEffect(() => {
        dispatch(setBasketCheckout(productsToCheckout))
    }, [productsToCheckout])

    console.log(allAmountPrice)

    useEffect(() => {
        if(basket.length === 0) {
            dispatch(setBasketPriceDiscount(0))
        } else {
            dispatch(setBasketPriceDiscount(allAmountPrice))
        }
    }, [allAmountPrice, basket])

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
                                    basket.reduce((o, i) => {
                                        if (!o.find(v => v.product.productCode === i.product.productCode)) {
                                            o.push(i);
                                        }
                                        return o;
                                    }, []).filter(item => basket.some(item2 => item2.product.productCode === item.product.productCode) ? item : '').map(item => <BasketCard
                                        key={item.product.productCode}
                                        data={item.product}
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