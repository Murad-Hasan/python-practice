import { BUY_CAKE } from "./CakeTypes"

//initial state part of the reducer
const initialState = {
    numOfCakes: 10,
}

export const cakeReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes: state.numOfCakes - action.number,
            }
        default:
            return state
    }
}