import { createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: {},
        language: '',
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = {}
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

} = toolkitSlice.actions;