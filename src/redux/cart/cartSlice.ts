// import { createSlice } from '@reduxjs/toolkit';

// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState: {
//         items: []
//     },
//     reducers: {
//         addToCarts: (state, action) => {
//             const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
//             if (itemIndex >= 0) {
//                 state.items[itemIndex].quantity += 1;
//             } else {
//                 state.items.push({ ...action.payload, quantity: 1 });
//             }
//         },
      
//         removeFromCart: (state, action) => {
//             const filteredItems = state.items.filter(item => item.id !== action.payload);
//             state.items = filteredItems;
//         },
//          incrementQuantity: (state, action) => {
//             const item = state.items.find(item => item.id === action.payload);
//             if (item) {
//                 item.quantity += 1;
//             }
//         },
//          decrementQuantity: (state, action) => {
//             const item = state.items.find(item => item.id === action.payload);
//             if (item && item.quantity > 1) {
//                 item.quantity -= 1;
//             } else {
//                 state.items = state.items.filter(item => item.id !== action.payload);
//             }
//         },
//     },
// });

// // Export actions
// export const { addToCarts, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

// // Export reducer
// export default cartSlice.reducer;



import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for the state
interface CartState {
    items: { id: number; quantity: number }[]; // Assuming your items have an 'id' property
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] as { id: number; quantity: number }[] // Specify the initial state with type
    } as CartState, // Explicitly specify the type of the initial state
    reducers: {
        addToCarts: (state, action: PayloadAction<{ id: number }>) => {
            const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity += 1;
            } else {
                state.items.push({ id: action.payload.id, quantity: 1 });
            }
        },
      
        removeFromCart: (state, action: PayloadAction<number>) => {
            const filteredItems = state.items.filter(item => item.id !== action.payload);
            state.items = filteredItems;
        },
         incrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
         decrementQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            } else {
                state.items = state.items.filter(item => item.id !== action.payload);
            }
        },
    },
});

// Export actions
export const { addToCarts, removeFromCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
