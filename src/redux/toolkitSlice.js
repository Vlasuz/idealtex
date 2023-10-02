import { createSlice } from "@reduxjs/toolkit";


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

        addBasketItem(state, action) {
            state.basket = [...state.basket, action.payload]
        },
        removeBasketItem(state, action) {
            state.basket = state.basket.filter(item => item.productCode !== action.productCode)
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

    addBasketItem,
    removeBasketItem,

} = toolkitSlice.actions;