import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    items: [],
    amount: 0,
    total: 0,
    isLoading: true,
}

const url = 'https://course-api.com/react-useReducer-cart-project';

export const getAllCarts = createAsyncThunk('cart/getAllCarts', async (_, thunkAPI) => {
    try {
        return await axios.get(url).then(res => res.data);
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        clearCart: (state) => {
            return {
                ...state,
                items: []
            }
        },
        removeItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        increase: (state, {payload}) => {
            const item = state.items.find(item => item.id === payload)
            item.amount += 1
        },
        decrease: (state, {payload}) => {
            const item = state.items.find(item => item.id === payload)
            if (item.amount === 1) return
            item.amount -= 1
        },
        calculateTotals: (state) => {
            const {total, amount} = state.items.reduce((cartTotal, cartItem) => {
                const {price, amount} = cartItem
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                cartTotal.amount += amount

                return cartTotal
            }, {
                total: 0,
                amount: 0,
            })
            state.total = total
            state.amount = amount
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAllCarts.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getAllCarts.fulfilled, (state, action) => {
            state.isLoading = false
            state.items = action.payload
        })
        builder.addCase(getAllCarts.rejected, (state, action) => {
            state.isLoading = true
            console.log(action.payload)
        })
    }

})


export const {clearCart, removeItem, increase, decrease, calculateTotals} = cartSlice.actions;

export default cartSlice.reducer;