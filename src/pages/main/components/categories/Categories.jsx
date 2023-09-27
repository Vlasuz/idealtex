import React, {useEffect, useState} from "react";
import {CategoriesHead} from "./components/CategoriesHead/CategoriesHead";
import {getAllCategories} from "../../../../api/categories";
import CategoryCard from "../../../../components/categoryCard/CategoryCard";

export const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllCategories()
            .then(({categories}) => {
                setCategories(categories);
                setLoading(false);
                console.log('Получил категории', categories);
            })
            .catch((error) => {
                console.error("Ошибка я не получил категорий:", error);
                setLoading(false);
            });
    }, []);

    const categoryCards = categories.map((category) => (
        <CategoryCard
            key={category.categoryAlias}
            data={category}
            type={"page-home"}
        />
    ));

    return (
        <div className="category">
            <div className="category__container">
                <CategoriesHead/>

                <div className="category__grid-layout">
                    {!loading ? categoryCards : <p>Загрузка...</p>}
                </div>
            </div>
        </div>
    );
};
