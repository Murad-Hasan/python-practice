import { BUY_CAKE } from "./CakeTypes"; // ACTION

export const buyCake = (number = 1) => {   //aCTION CREATOR
    return {
        type: BUY_CAKE,
        number
    }
};