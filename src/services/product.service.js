import { getProductsByType } from "../constants";


export const getProducts = (type, batchSize = 5) => {
    return Promise.resolve(getProductsByType(type));
}
