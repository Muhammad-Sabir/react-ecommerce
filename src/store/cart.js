import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: { products: [] },
	reducers: {
		addProductToCart(state, action) {
			state.products.push(action.payload);
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
