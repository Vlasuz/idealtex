import axios from "axios";

import { getApiLink } from "../hooks/getApiLink";

export async function getAllCategories() {
    const response = await axios.get(getApiLink('v1/public/categories'));
    return response.data;
}

export async function getAllProducts() {
    const response = await axios.get(getApiLink('v1/public/products'));
    return response.data;
}