import axios from "axios";

const BASE_URL = 'http://api.idealtex.com.ua/v1/public/';

export async function getAllCategories() {
    try {
        const response = await axios.get(`${BASE_URL}categories`);
        return response.data;
    } catch (error) {
        throw error;
    }
}