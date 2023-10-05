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
            state.basket = [...state.basket, action.payload]
            state.basketPrice = state.basketPrice + (action.payload.package.data.productPackagePrice * action.payload.package.count)

            setCookie('basket', JSON.stringify(state.basket))
        },
        removeBasketItem(state, action) {
            state.basket = state.basket.filter(item => item.productCode !== action.productCode)

            setCookie('basket', state.basket.filter(item => item.productCode !== action.productCode))
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
    addBasketItem,
    removeBasketItem,

} = toolkitSlice.actions;