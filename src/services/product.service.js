import { getProductById, getProductsByType } from "../constants";
import axios from "axios";

export const getProducts = (type, batchSize = 5) => {
  return axios.get("https://fakestoreapi.com/products");
};

// export const getProducts = (type, batchSize = 5) => {
//   return Promise.resolve(getProductsByType(type));
// };

export const getProdById = (id = 1) => {
  return axios.get(`https://fakestoreapi.com/products/${id}`);
};
