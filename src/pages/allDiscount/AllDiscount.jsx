import { useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component";
import { getAllProducts } from "../../api/categories";
import { BreadCrumbs } from "./components/BreadCrumbs/BreadCrumbs";
import { ProductsNotFound } from "../productsNotFound/ProductsNotFound";
import { Loader } from "../../components/loader/Loader";
import Card from "../../components/card/Card";

export const AllDiscount = () => {

    const [discountProducts, setDiscountProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() =>{
        getAllProducts({type: 'discount', limit: 12} )
            .then(({products}) =>{
                setDiscountProducts(products);
                setLoading(false);
            })
            .catch((error) =>{
                console.error("Ошибка я не получил продукты for next st:", error);
                setLoading(false);    
            })
    }, [])

  return (
    <>
        <BreadCrumbs />
        <div className="products">
            <div className="sale__container">
                <h2 class="category2__title title">
                    АКЦІЙНІ ПРОПОЗИЦІЇ
                </h2>

                {!loading && discountProducts.length === 0 && <ProductsNotFound/>}
                {loading && <Loader/>}

                <div className="sale__grid-layout">
                    {!loading && discountProducts.map((product) => <Card key={product.productCode} data={product}/>)}       
                </div>
            </div>
        </div>
    </>
  )
}
