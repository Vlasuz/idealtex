import {createSlice} from "@reduxjs/toolkit";
import setCookie from "../functions/setCookie";
import getCookies from "../functions/getCookies";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: {},
        language: '',
        discounts: [],
        basket: [],
        basketCheckout: [],
        basketPrice: 0,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = {}
        },

        setBasketItems(state) {
            if (!getCookies('basket')) return;

            // CALCULATE GENERAL AMOUNT
            const productsCount = JSON.parse(getCookies('basket')).map(item => item.package).map(item => item?.count)
            const productsPrice = JSON.parse(getCookies('basket')).map(item => item.package).map(item => item?.data).map(item => item?.productPackagePrice)
            const arrayOfPrices = productsPrice.map((item, index) => item * productsCount[index])
            const finalAmount = arrayOfPrices.reduce((acc, num) => acc + num, 0);
            // CALCULATE GENERAL AMOUNT

            state.basket = JSON.parse(getCookies('basket'))
            state.basketPrice = finalAmount
        },
        addBasketItem(state, action) {
            const isDouble = state.basket.some(item => item.product.productCode === action.payload.product.productCode)

            state.basket = isDouble ? state.basket : [...state.basket, action.payload]
            state.basketPrice = isDouble ? state.basketPrice : state.basketPrice + (action.payload.package.data.productPackagePrice * action.payload.package.count)

            setCookie('basket', JSON.stringify(state.basket))
        },
        setBasketCheckout(state, action) {
            // state.basket.filter(item => item.product.productCode === action.payload.product.productCode)[0].package = action.payload.package
            // setCookie('basket', JSON.stringify(state.basket))

            state.basketCheckout = []

        },
        removeBasketItem(state, action) {
            state.basket = state.basket.filter(item => item.product.productCode !== action.payload.productCode)
            setCookie('basket', JSON.stringify(state.basket))

            // CALCULATE GENERAL AMOUNT
            const productsCount = JSON.parse(getCookies('basket')).map(item => item.package).map(item => item?.count)
            const productsPrice = JSON.parse(getCookies('basket')).map(item => item.package).map(item => item?.data).map(item => item?.productPackagePrice)
            const arrayOfPrices = productsPrice.map((item, index) => item * productsCount[index])
            const finalAmount = arrayOfPrices.reduce((acc, num) => acc + num, 0);
            // CALCULATE GENERAL AMOUNT

            state.basketPrice = finalAmount
        },

        addBasketPrice(state, action) {
            state.basketPrice = state.basketPrice + action.payload
        },

        setDiscounts(state, action) {
            state.discounts = action.payload
        },

        setLanguage(state, action) {
            state.language = action.payload
        },
    }
})

export default toolkitSlice.reducer;
export const {

    setUser,
    removeUser,
    setLanguage,
    setDiscounts,

    setBasketItems,
    setBasketCheckout,
    addBasketItem,
    removeBasketItem,

    addBasketPrice,

} = toolkitSlice.actions;