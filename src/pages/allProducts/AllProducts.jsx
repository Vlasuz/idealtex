import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllProducts } from "../../api/categories";
import { ProductsNotFound } from "../productsNotFound/ProductsNotFound";
import { Loader } from "../../components/loader/Loader";
import Card from "../../components/card/Card";
import { BreadCrumbs } from "../../components/breadCrumbs/BreadCrumbs";


export const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);

    const loadMore = () => {
        getAllProducts({ offset: offset, limit: 12 })
          .then(({ products }) => {
            if (products.length === 0) {
              setHasMore(false);
            } else {
              setAllProducts((prevProducts) => [...prevProducts, ...products]);
              setOffset(offset + 12);
            }
            setLoading(false);
          })
          .catch((error) => {
            console.error("Помилка при завантаженні додаткових продуктів: ", error);
          });
    };

    useEffect(() =>{
        offset === 0 && loadMore()
        console.log('prodAll', offset);
      }, [offset])
    
      useEffect(() => {
        setOffset(0);
      }, []);

  return (
    <>
      <BreadCrumbs pages={[{page: 'Всі продукти'}]}/>
      <div className="products">
        <div className="sale__container">
          <h2 className="category2__title title">Всі продукти</h2>

          {!loading && allProducts.length === 0 && <ProductsNotFound />}

          <InfiniteScroll
            dataLength={allProducts.length}
            next={loadMore}
            hasMore={hasMore}
            loader={!loading && <Loader />}
            style={{ overflow: 'unset' }}
          >
            <div className="sale__grid-layout">
              {allProducts.map((product) => (
                <Card key={product.productCode} data={product} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  )
}
