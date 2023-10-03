import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../../../api/categories";
import { SalesHead } from "./components/SalesHead/SalesHead";
import Card from "../../../../components/card/Card";

export const Sales = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    getAllProducts({limit: 4, type: 'discount'})
      .then(({products}) => {
        setProducts(products);
        setLoading(false);
        console.log('Получил продукты аукционные', products);
      })
      .catch((error) => {
        console.error("Ошибка я не получил продукты:", error);
        setLoading(false);
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
            {!loading ? productSales : <p>Загрузка...</p>}       
          </div>
      </div>
    </div>
  );
};
  