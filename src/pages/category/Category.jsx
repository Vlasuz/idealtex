import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getApiLink } from "../../hooks/getApiLink";
import { ProductsNotFound } from "../productsNotFound/ProductsNotFound";
import { Loader } from "../../components/loader/Loader";
import Card from "../../components/card/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllProducts } from "../../api/categories";
import { BreadCrumbsCategory } from "./breadCrumbsCategory/BreadCrumbsCategory";

export const Category = () => {
  const { categoryAlias } = useParams();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

  const loadMore = () => {
      getAllProducts({ offset: offset, categoryAlias: categoryAlias, limit: 12 })
        .then(({ products }) => {
            console.log(products);
            if (products.length === 0) {
                setHasMore(false);
              } else {
                  setProducts((prevProducts) => [...prevProducts, ...products]);
                  setOffset(offset + 12);
          }
          setLoading(false);
        })
        .catch((error) => {
          console.log("Помилка при завантаженні категорії:", error);
        });
  };

  useEffect(() => {
    offset === 0 && window.scrollTo(0, 2)
    console.log(offset);
  }, [offset])
  

  useEffect(() => {
    window.scrollTo(0, 0)
    axios // запит для отримання назви категорій
      .get(getApiLink(`v1/public/categories/${categoryAlias}`))
      .then(({ data }) => {
        setCategory(data);
      })
      .catch((error) => {
        console.log("Помилка при завантаженні категорії:", error);
      });

    setOffset(0);
    setProducts([]);
  }, [categoryAlias]);

  return (
    <>
      <BreadCrumbsCategory onCategory={category.categoryName}/>

      <div className="products">
        <div className="products__container">
          <h2 className="title products__title">
            Категорія: {category.categoryName}
          </h2>
  
          {!loading && products.length === 0 && <ProductsNotFound />}
          {loading && <Loader />}
  
          <InfiniteScroll
            dataLength={products.length}
            next={loadMore}
            hasMore={hasMore}
            loader={!loading && <Loader />}
            style={{ overflow: "unset" }}
          >
            <div className="products__grid-layout">
              {products.map((product) => (
                <Card data={product} key={product.productCode} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};
  