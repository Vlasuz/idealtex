import { useEffect, useState } from "react"
import { getAllCategories } from "../../api/categories";
import CategoryCard from "../../components/categoryCard/CategoryCard";
import { ProductsNotFound } from "../productsNotFound/ProductsNotFound";
import { Loader } from "../../components/loader/Loader";
import { BreadCrumbs } from "../../components/breadCrumbs/BreadCrumbs";

export const AllCategories = () => {

  const [loading, setLoading] = useState(true);
  const [allCategories, setAllCategories] = useState([]);

  useEffect(() =>{
      getAllCategories()
          .then(({categories}) =>{
              setAllCategories(categories);
              setLoading(false);
          })
          .catch((error) => {
              console.error("Ошибка я не получил все категории для ст:", error);
          });
  }, []);

  return (
    <>
      <BreadCrumbs pages={[{page: 'Всі категорії'}]} />
      <div className="category2">
        <div className="category2__container">
          <h2 className="category2__title title">
              КАТЕГОРІЇ
          </h2>

          {!loading && allCategories.length === 0 && <ProductsNotFound/>}
          {loading && <Loader/>}

          <div className="category2__grid-layout">
            {!loading && allCategories.map((category) => <CategoryCard key={category.categoryAlias} data={category} type={"page-categories"} />)}
          </div>
        </div>
      </div>
    </>
  )
}
