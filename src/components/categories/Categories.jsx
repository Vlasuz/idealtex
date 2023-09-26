import React, { useEffect, useState } from "react";
import { CategoriesHead } from "./components/CategoriesHead/CategoriesHead";
import { CategoriesCard } from "./components/CategoriesCard/CategoriesCard";
import { getAllCategories } from "../../api/categories";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
    getAllCategories()
      .then((data) => {
        setCategories(data);
        setLoading(false);
        console.log(data);
      })
      .catch((error) => {
        console.error("Ошибка я не получил категорий:", error);
        setLoading(false);
      });
}, []);

const categoryCards = Array.isArray(categories)
    ? categories.map((category) => (
        <CategoriesCard
        key={category.categoryAlias}
        name={category.categoryName}
        img={category.imageName}
        //   children={hasChildren}
        />
    ))
    : [];

  return (
    <div className="category">
      <div className="category__container">
        <CategoriesHead />

        <div className="category__grid-layout">
            {!loading ? categoryCards : <p>Загрузка...</p>}
        </div>
      </div>
    </div>
  );
};
