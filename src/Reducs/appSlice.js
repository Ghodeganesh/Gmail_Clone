import { createSlice } from '@reduxjs/toolkit'

const appSlice = createSlice({
    name: "appSlice",
    initialState: {
        open: false,
        Emails: [],
        selectedEmail: null
    },
    reducers: {
        setOpen: (state, action) => {
            state.open = action.payload;
        },
        setEmails: (state, action) => {
            state.Emails = action.payload
        },
        setSelectedEmail: (state, action) => {
            state.selectedEmail = action.payload
        }
    }
})

export const { setOpen, setEmails, setSelectedEmail } = appSlice.actions;
export default appSlice.reducer;