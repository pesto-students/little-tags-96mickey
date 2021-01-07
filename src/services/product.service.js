// import { getProductById, getProductsByType } from "../constants";
import axios from "axios";

export const getAllProducts = (type, batchSize = 5) => {
  return axios.get("https://fakestoreapi.com/products");
};

// export const getProducts = (type, batchSize = 5) => {
//     return Promise.resolve(getProductsByType(type));
// }

// export const getProdById = (type, batchSize = 5) => {
//     return Promise.resolve(getProductById(type));
// }
export const getSelectedProduct = (id = 1) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
};
