import { createSlice } from "@reduxjs/toolkit";


const toolkitSlice = createSlice({
    name: "toolkit",
    initialState: {
        user: {},
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = {}
        },
    }
})

export default toolkitSlice.reducer;
export const {

    setUser,
    removeUser,

} = toolkitSlice.actions;