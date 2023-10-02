import { createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: {},
        language: '',
        discounts: [],
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = {}
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

} = toolkitSlice.actions;