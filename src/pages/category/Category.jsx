import axios from "axios";
import React, {useEffect, useState} from "react";
import {getApiLink} from "../../hooks/getApiLink";
import {useParams} from "react-router-dom";
import Card from "../../components/card/Card";
import { ProductsNotFound } from "../productsNotFound/ProductsNotFound";

export const Category = () => {
    const {categoryAlias} = useParams();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(getApiLink(`v1/public/products?categoryAlias=${categoryAlias}`))
            .then(({data}) => {
                setProducts(data.products);
                setLoading(false);
                console.log("отримана категорія на ст.", data);
            })
            .catch((error) => {
                console.log("Помилка при завантаженні категорії:", error);
            });

        axios
            .get(getApiLink(`v1/public/categories/${categoryAlias}`))
            .then(({data}) => {
                setCategory(data);
            })
            .catch((error) => {
                console.log("Помилка при завантаженні категорії:", error);
            });
    }, [categoryAlias]);

    return (
        <div className="products">
            <div className="products__container">
                <h2 className="title products__title">
                    Категорія: {category.categoryName}
                </h2>

                {!loading && products.length === 0 && <ProductsNotFound/>}

                <div className="products__grid-layout">
                    {
                        !loading ?
                            products.map((product) => <Card data={product} key={product.productCode}/>)
                            : <p>Загрузка...</p>
                    }
                </div>
            </div>
        </div>
    );
};
