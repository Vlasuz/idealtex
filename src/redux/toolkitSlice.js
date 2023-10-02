import { createSlice } from "@reduxjs/toolkit";
import setCookie from "../functions/setCookie";
import getCookies from "../functions/getCookies";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: {},
        language: '',
        discounts: [],
        basket: [],
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = {}
        },

        setBasketItems(state) {
            state.basket = getCookies('basket') ? JSON.parse(getCookies('basket')) : []
        },
        addBasketItem(state, action) {
            state.basket = [...state.basket, action.payload]
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