import { createSlice } from "@reduxjs/toolkit";

const cartSlice =createSlice(
    {
        name: 'cart',
        initialState: {
            items:[]
        },
        reducers:{
            addItem: (state,action) =>{

                //Vanialla(older) Redux=> DONT MUTATE STATE
                // const newState = [...state]
                // newState.items.push(action.payload);
                // return newState;

                //Redux Toolkit 
                // We Have to mutate the STATE 
                state.items.push(action.payload);
            },
            removeItem: (state)=>{
                state.items.pop();
            },
            clearCart: (state)=>{
                state.items.length=0;
            }
        }
    }
);

export const {addItem,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;