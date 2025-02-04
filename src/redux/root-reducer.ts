import { combineReducers } from "redux";
import { userSlice } from "./User/use-slice";
import { cartSlice } from "./Cart/cart-slice";

//Importa os reducers da aplicação, e usando o combineReducers, combina todos eles em um só lugar.
export const rootReducer = combineReducers({
  userReducer: userSlice.reducer,
  cartReducer: cartSlice.reducer,
});

export type RootReducer = ReturnType<typeof rootReducer>;
