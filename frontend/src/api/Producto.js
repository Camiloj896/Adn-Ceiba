import Config from './../config';
import axios from 'axios';

export const setProduct = () => {
    
}

//GET PRODUCTS
export function setProducts() {
  return axios.get(Config.url+'cost/');
}

//CREATE PRODUCT
export const createProduct = async (data) => {

    return await fetch(Config.url+'cost/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
        return data;
    }).catch((error) => {
        console.log(error)
    })

}

export const updatedProduct = () => {

}

export const deleteProduct = () => {

}

