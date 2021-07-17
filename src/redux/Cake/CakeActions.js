import { BUY_CAKE } from "./CakeTypes"; // ACTION

export const buyCake = () => {   //aCTION CREATOR
    return {
        type: BUY_CAKE,
    }
};