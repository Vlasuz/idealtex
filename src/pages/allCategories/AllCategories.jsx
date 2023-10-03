import { useEffect, useState } from "react"
import { getAllCategories } from "../../api/categories";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { BreadCrumbs } from "./components/breadCrumbs/BreadCrumbs";

export const AllCategories = () => {

  const [loading, setLoading] = useState(true);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() =>{
      getAllCategories()
          .then(({categories}) =>{
            console.log('все категории для ст', categories);
              setAllCategories(categories);
              setLoading(false);
          })
          .catch((error) => {
              console.error("Ошибка я не получил все категории для ст:", error);
              setLoading(false);
          });
  }, []);

  const allCategoryCard = allCategories.map((category) =>(
    <CategoryCard
      key={category.categoryAlias}
      data={category}
      type={"page-categories"}
    />
  ))

  return (
    <>
      <BreadCrumbs/>
      <div className="category2">
        <div className="category2__container">
          <h2 class="category2__title title">
              КАТЕГОРІЇ
          </h2>

          <div className="category2__grid-layout">
            {!loading ? allCategoryCard : <p>Загрузка...</p>}
          </div>
        </div>
      </div>
    </>
  )
}
