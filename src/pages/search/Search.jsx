import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getApiLink } from "../../hooks/getApiLink";
import { BreadCrumbs } from "../../components/breadCrumbs/BreadCrumbs";
import { ProductsNotFound } from "../productsNotFound/ProductsNotFound";
import Card from "../../components/card/Card";
import { Loader } from "../../components/loader/Loader";

const Search = () => {
  const { search } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    // виконання запиту та обробку результатів
    setLoading(true);
    axios
      .get(getApiLink(`v1/public/products?search=${search}`))
      .then((response) => {
        const searchResults = response.data.products;
        setSearchResults(searchResults);
        setLoading(false);
        console.log("А что тут у нас? search):", searchResults);
      })
      .catch((error) => {
        console.error("Ошибочка при поиске на странице search:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <>
      <BreadCrumbs />

      <div className="products">
        <div className="products__container">
          <h2 class="title products__title">Пошук за значенням: {search}</h2>

          {!loading && searchResults.length === 0 && <ProductsNotFound/>}

          <div className="products__grid-layout">
            {!loading 
              ? searchResults.map((searchResult) => <Card data={searchResult} key={searchResult.productCode} />)
              : <Loader/>
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
