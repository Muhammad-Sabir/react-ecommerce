import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { products: [] };

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		addProductToCart(state, action) {
			state.products.push(action.payload);
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
