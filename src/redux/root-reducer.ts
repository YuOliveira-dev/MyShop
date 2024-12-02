import { combineReducers } from "redux";
import { userReducer } from "./UserReducer/reducer";

//Importa os reducers da aplicação, e usando o combineReducers, combina todos eles em um só lugar.
export const rootReducer = combineReducers({
    userReducer,

});


export type RootReducer = ReturnType<typeof rootReducer>;