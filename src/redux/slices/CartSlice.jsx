import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add: (state,action) => {

     state.push(action.payload) // ✅ add item
    },
    remove: (state,action) => {
     return state.filter((item)=>item.id !=action.payload)  // ✅ remove by id
    },
  },
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;
