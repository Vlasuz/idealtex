import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BreadCrumbs } from "../../components/breadCrumbs/BreadCrumbs";
import { ProductsNotFound } from "../productsNotFound/ProductsNotFound";
import Card from "../../components/card/Card";
import { Loader } from "../../components/loader/Loader";
import { getAllProducts } from "../../api/categories";
import InfiniteScroll from "react-infinite-scroll-component";

const Search = () => {
  const { search } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);

  const fetchData = () => {
    setLoading(true);

    getAllProducts({ offset: offset, limit: 12, search: search })
      .then(({ products }) => {
        if (products.length === 0) {
          setHasMore(false);
        } else {
          setSearchResults((prevProducts) => [...prevProducts, ...products]);
          setOffset(offset + 12);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Помилка під час пошуку:", error);
      });
  };

  useEffect(() => {
    offset === 0 && window.scrollTo(0, 2)
  }, [offset]);
  
  useEffect(() => {
    window.scrollTo(0, 0)
    setOffset(0);
    setSearchResults([]);
  }, [search]);

  return (
    <>
      <BreadCrumbs pages={[{route: '/products', page: 'Всі продукти'}, {page: search}]}/>

      <div className="products">
        <div className="products__container">
          <h2 className="title products__title">Пошук за значенням: {search}</h2>

          {!loading && searchResults.length === 0 && <ProductsNotFound/>}

          <InfiniteScroll
            dataLength={searchResults.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<Loader/>}
            style={{overflow: 'unset'}}
          >
            <div className="products__grid-layout">
                {searchResults.map((searchResult) => <Card data={searchResult} key={searchResult.productCode} />)}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default Search;
