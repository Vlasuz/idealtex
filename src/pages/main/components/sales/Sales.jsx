import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../../api/categories";
import Card from "../../../../components/card/Card";
import { SalesHead } from "./components/SalesHead/SalesHead";

export const Sales = () => {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getAllProducts()
      .then(({products}) => {
        setProducts(products);
        // setLoading(false);
        console.log('Получил продукты', products);
      })
      .catch((error) => {
        console.error("Ошибка я не получил продукты:", error);
        // setLoading(false);
      });
}, []);

const productSales = products.map((product) => (
  <Card 
  key={product.productCode}
  data={product}
  />
));

    return (
      <div className="sale">
            <div className="sale__container">
              
                <SalesHead />

              <div className="sale__grid-layout">
                {productSales}       
            </div>
        </div>
    </div>
  );
};
  