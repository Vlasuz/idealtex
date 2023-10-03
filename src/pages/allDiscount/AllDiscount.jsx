import { useEffect, useState } from "react"
import { getAllProducts } from "../../api/categories";
import Card from "../../components/card/Card";
import { BreadCrumbs } from "./components/BreadCrumbs/BreadCrumbs";

export const AllDiscount = () => {

    const [discountProducts, setDiscountProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        getAllProducts({type: 'discount'})
            .then(({products}) =>{
                setDiscountProducts(products);
                setLoading(false);
                console.log('Получил продукты аукционные next st', products);
            })
            .catch((error) =>{
                console.error("Ошибка я не получил продукты for next st:", error);
                setLoading(false);    
            })
    }, [])

    const AllProductDiscount = discountProducts.map((product) =>(
        <Card
            key={product.productCode}
            data={product}
        />
    ))

  return (
    <>
        <BreadCrumbs />
        <div className="products">
            <div className="sale__container">
                <h2 class="category2__title title">
                    АКЦІЙНІ ПРОПОЗИЦІЇ
                </h2>
                <div className="sale__grid-layout">
                    {!loading ? AllProductDiscount : <p>Загрузка...</p>}       
                </div>
            </div>
        </div>
    </>
  )
}
