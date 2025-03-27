import axios from "axios";

const API_URL:string = 'http://localhost:3000/api/products';

export const fetchProducts = async() => {
    const { data } = await axios.get(API_URL);
    return data;
}

export const addProduct = async (productData: FormData) => {
    try {
        const response = await axios.post(API_URL, productData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        console.log("Response from server:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error in addProduct:", error);
        return { success: false };
    }
};

