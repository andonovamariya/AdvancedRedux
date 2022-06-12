import { createSlice } from "@reduxjs/toolkit";

import Item from "../interfaces/items";

interface NewItem {
  id: string;
  price: number;
  title: string;
}

interface InitialState {
  items: Item[];
  totalQuantity: number;
}

interface RemoveItemAction {
  type: string;
  payload: string;
}

interface AddItemAction {
  type: string;
  payload: NewItem;
}

const cartSlice = createSlice({
  name: "cart-slice",
  initialState: {
    items: [],
    totalQuantity: 0,
  },
  reducers: {
    addItemToCart(state: InitialState, action: AddItemAction) {
      const newItem: NewItem = action.payload;
      const existingItem: Item | undefined = state.items.find(
        (item: Item) => item.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    removeItemFromCart(state: InitialState, action: RemoveItemAction) {
      const id: string = action.payload;
      const existingItem: Item | undefined = state.items.find(
        (item: Item) => item.id === id
      );
      state.totalQuantity--;
      if (existingItem!.quantity === 1) {
        state.items = state.items.filter((item: Item) => item.id !== id);
      } else {
        existingItem!.quantity--;
        existingItem!.totalPrice =
          existingItem!.totalPrice - existingItem!.price;
      }
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
