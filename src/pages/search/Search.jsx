import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {getApiLink} from "../../hooks/getApiLink";

const Search = () => {

    const {search} = useParams()

    useEffect(() => {
        axios.get(getApiLink(`v1/public/products?search=${search}`))
            .then((response) => {
                const searchResults = response.data;
                console.log('А что тут у нас?):', searchResults);
            })
            .catch((error) => {
                console.error('Ошибочка при поиске:', error);
            });
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Search;