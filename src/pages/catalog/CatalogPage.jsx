import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getApiLink } from "../../hooks/getApiLink";
import Card from "../../components/card/Card";

export const CatalogPage = () => {
    const {categoriesAlias} = useParams();
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        axios
            .get(getApiLink(`v1/public/products?categoryAlias=${categoriesAlias}`))
            .then(({data}) =>{
                setProducts(data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.log("Помилка при завантаженні категорії:", error);
            });
        
        axios
            .get(getApiLink(`v1/public/categories/${categoriesAlias}/children`))
            .then(({ data }) => {
                setProducts(data);
              setLoading(false);
            })
            .catch((error) => {
              console.log("Помилка при завантаженні категорії:", error);
            });
    }, []);


    const catalogProduct = products.map((product) => (
        <Card data={product} key={product.productCode} />
    ))

  return (
    <div className="products">
      <div className="products__container">
        <h2 class="title products__title">
          Категорія: {category.categoryName}
        </h2>
        <div className="products__grid-layout">
          {/* {!loading ? catalogProduct : <p>Загрузка...</p>} */}
            {catalogProduct}
        </div>
      </div>
    </div>
  )
}
