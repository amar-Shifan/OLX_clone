import axios from "axios";

const API_URL:string = 'http://localhost:3000/api/products';

export const fetchProducts = async() => {
    const { data } = await axios.get(API_URL);
    return data;
}

export const addProduct = async(product:any) => {
    const { data } = await axios.post(API_URL , product)
    return data 
}
