import { useEffect, useState } from "react";
import { getAllProducts } from "../../../../api/categories";
import { SalesHead } from "./components/SalesHead/SalesHead";
import Card from "../../../../components/card/Card";
import { Loader } from "../../../../components/loader/Loader";

export const Sales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getAllProducts({limit: 4, type: 'discount'})
      .then(({products}) => {
        setProducts(products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Ошибка я не получил продукты:", error);
        setLoading(false);
      });
}, []);

  return (
    <div className="sale">
        <div className="sale__container">          
          {loading ? (
            <Loader/>
          ) : products.length > 0 ? (
            <>
              <SalesHead />
              <div className="sale__grid-layout">
                {products.map((product) => <Card data={product} key={product.productCode} />)}       
              </div>
            </>
          ) : null}
      </div>
    </div>
  );
};
  