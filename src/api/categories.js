import axios from "axios";

import { getApiLink } from "../hooks/getApiLink";

export async function getAllCategories() {
    const response = await axios.get(getApiLink('v1/public/categories'));
    return response.data;
}

export async function getAllProducts(evt) {
    const limit = evt.limit ? `limit=${evt.limit}` : '';
    const type = evt.type ? `type=${evt.type}` : '';
    
    try {
        const response = await axios.get(getApiLink(`v1/public/products?${limit}&${type}`));
        return response.data;
    } catch (error) {
        console.log('помилка при отриманні продуктів з апі з лімітом', error);
    }
    
}