import { createSlice } from '@reduxjs/toolkit';

const initialCartState = { products: [] };

const cartSlice = createSlice({
	name: 'cart',
	initialState: initialCartState,
	reducers: {
		addProductToCart(state, action) {
			const existingProductIndex = state.products.findIndex(
				(item) => item.product.id === action.payload.id
			);

			if (existingProductIndex !== -1) {
				state.products[existingProductIndex].quantity++;
			} else {
				state.products.push({
					quantity: 1,
					product: action.payload,
				});
			}
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
