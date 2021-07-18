import { combineReducers } from "redux";
import { cakeReducer } from "./Cake/CakeReducer";
import { IceCreamReducer } from "./IceCream/IceCreamReducer";
import userReducer from "./User/UserReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    user: userReducer,
    iceCream: IceCreamReducer
});

export default rootReducer;