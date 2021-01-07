import { getProductById, getProductsByType } from "../constants";


export const getProducts = (type, batchSize = 5) => {
    return Promise.resolve(getProductsByType(type));
}

export const getProdById = (type, batchSize = 5) => {
    return Promise.resolve(getProductById(type));
}
