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

    // return fetch(Config.url+'cost/', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     return data;
    // }).catch((error) => {
    //     console.log(error)
    // })
    return axios.post(Config.url+'cost/', {
      headers: {
        'Content-Type': 'application/json',
      },
      data: data
    });

}

export const updatedProduct = (id, data) => {
  return axios.put(Config.url+`cost/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    data: data
  });
}

export const deleteProduct = (id) => {
  return axios.delete(Config.url+`cost/${id}`);  
}

