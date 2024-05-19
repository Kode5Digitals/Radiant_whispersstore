import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => {

      return action.payload.map((product) => ({
        ...product,
        quantity: 0,
      }));
    },
    },
  
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;
export const selectProducts = (state) => state.products
