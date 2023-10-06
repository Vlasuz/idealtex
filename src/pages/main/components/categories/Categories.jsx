import { useEffect, useState } from "react";
import { CategoriesHead } from "./components/CategoriesHead/CategoriesHead";
import { getAllCategories } from "../../../../api/categories";
import { Loader } from "../../../../components/loader/Loader";
import CategoryCard from "../../../../components/categoryCard/CategoryCard";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllCategories()
      .then(({ categories }) => {
        setCategories(categories);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="category">
      <div className="category__container">
        {loading ? (
          <Loader />
        ) : categories.length > 0 ? (
          <>
            <CategoriesHead />
            <div className="category__grid-layout">
              {categories.map((category) => (
                <CategoryCard key={category.categoryAlias} data={category} type={"page-home"} />
              ))}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};
