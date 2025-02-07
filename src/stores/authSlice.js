import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: !!localStorage.getItem('access_token'),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLoggedIn(state, action) {
            state.isLoggedIn = action.payload;
        },
    },
});

export const { setIsLoggedIn } = authSlice.actions;
export default authSlice.reducer;
