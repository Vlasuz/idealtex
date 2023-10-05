import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useParams } from "react-router-dom";
import { getApiLink } from "../../hooks/getApiLink";
import Card from "../../components/card/Card";
import PageNotFound from "../../pages/pageNotFound/pageNotFound";
import { BreadCrumbs } from "../../components/breadCrumbs/BreadCrumbs";

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

  const searchCard = searchResults.length > 0 
    ? (
      searchResults.map((searchResult) => (
        <Card data={searchResult} key={searchResult.productCode} />
      ))
    ) : null;

  return (
    <>
      <BreadCrumbs />

      <div className="products">
        <div className="products__container">
          <h2 class="title products__title">Пошук за значенням: {search}</h2>

          {searchResults.length === 0 && <PageNotFound />}

          <div className="products__grid-layout">
            {!loading ? searchCard : <p>Загрузка...</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
