import Config from '../config';
import axios from 'axios';

//GET PRODUCT
export const setProduct = (id) => {
  return axios.get(Config.url+`cost/${id}`);  
}

//GET PRODUCTS
export function setProducts() {
  return axios.get(Config.url+'cost/');
}

//CREATE PRODUCT
export const createProduct = (data) => {

    return axios.post(Config.url+'cost/', data);

}

export const updatedProduct = (id, data) => {
  return axios.put(Config.url+`cost/${id}`, data);
}

export const deleteProduct = (id) => {
  return axios.delete(Config.url+`cost/${id}`);  
}

