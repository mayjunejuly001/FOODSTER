import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
     //mutating the state  , directly modifying state 
      state.items.push(action.payload)
    },
    removeItem: (state) => {
      state.items.pop()
    }, 
    //original state = ["pizza"]
    clearCart: (state) => {
      // state = []
      //local state = [] , this will not change the original 
      //RTK says either mutate the existing state  or return a new state
      // state.items.length = 0 // do this or
      //return { items : []} ....this new [] will be replaced inside  originall items = []
      return { items: [] }
    },
  },
})

export const {addItem , removeItem , clearCart} = cartSlice.actions

export const cartReducer =  cartSlice.reducer