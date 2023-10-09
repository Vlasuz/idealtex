import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllProducts } from "../../api/categories";
import { ProductsNotFound } from "../productsNotFound/ProductsNotFound";
import { Loader } from "../../components/loader/Loader";
import Card from "../../components/card/Card";
import { BreadCrumbs } from "../../components/breadCrumbs/BreadCrumbs";

export const AllDiscount = () => {
  const [discountProducts, setDiscountProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

  const loadMore = () => {
    getAllProducts({ type: "discount", offset: offset, limit: 12 })
      .then(({ products }) => {
        if (products.length === 0) {
          setHasMore(false);
        } else {
          setDiscountProducts((prevProducts) => [...prevProducts, ...products]);
          setOffset(offset + 12);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Помилка при завантаженні додаткових продуктів: ", error);
      });
  };

  useEffect(() =>{
    offset === 0 && window.scrollTo(0, 2)
  }, [offset])

  useEffect(() => {
    window.scrollTo(0, 0)
    setOffset(0);
  }, []);

  return (
    <>
      <BreadCrumbs pages={[{page: 'Акційні пропозиції'}]} />
      <div className="products">
        <div className="sale__container">
          <h2 className="category2__title title">АКЦІЙНІ ПРОПОЗИЦІЇ</h2>

          {!loading && discountProducts.length === 0 && <ProductsNotFound />}
          {loading && <Loader />}

          <InfiniteScroll
            dataLength={discountProducts.length}
            next={loadMore}
            hasMore={hasMore}
            loader={!loading && <Loader />}
            style={{ overflow: 'unset' }}
          >
            <div className="sale__grid-layout">
              {discountProducts.map((product) => (
                <Card key={product.productCode} data={product} />
              ))}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};
