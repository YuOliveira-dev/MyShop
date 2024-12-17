import { combineReducers } from "redux";
import { userReducer } from "./User/reducer";
import { cartReducer } from "./Cart/cart-reducer";

//Importa os reducers da aplicação, e usando o combineReducers, combina todos eles em um só lugar.
export const rootReducer = combineReducers({
    userReducer,
    cartReducer,

});


export type RootReducer = ReturnType<typeof rootReducer>;