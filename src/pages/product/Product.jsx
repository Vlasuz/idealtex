import axios from "axios";
import {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getApiLink} from "../../hooks/getApiLink";
import {ProductStyled} from "./Product.styled";
import {useDispatch, useSelector} from "react-redux";
import {addBasketItem} from "../../redux/toolkitSlice";
import {useChooseProductPackage} from "../../hooks/chooseProductPackage";
import {useMaxDiscount} from "../../hooks/maxDiscount";
import {useGetGeneralDiscount} from "../../hooks/getGeneralDiscount";
import {BreadCrumbs} from '../../components/breadCrumbs/BreadCrumbs';
import CardDiscounts from "../../components/card/components/CardDiscounts";
import ProductSlider from "./components/ProductSlider";
import ProductInfo from "./components/ProductInfo";
import ProductQuantity from "./components/ProductQuantity";
import {calculatePriceWithDiscount} from "../../functions/calculatePriceWithDiscount";

const Product = () => {

    const {productCode} = useParams()
    const [product, setProduct] = useState({})
    const [countOfProduct, setCountOfProduct] = useState(0)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(getApiLink(`v1/public/products/${productCode}`)).then(({data}) => {
            setProduct(data)
            setIsProductAuction(Object.values(data.productPackagesSizes).map(item => item !== null && item).filter(item => item)[0].productAuction)
        })
    }, [])

    const [isProductAuction, setIsProductAuction] = useState([])

    const {maxDiscount} = useMaxDiscount()
    const {discount} = useGetGeneralDiscount()

    const {cardOption, activePackage} = useChooseProductPackage({data: product})

    const handleAddToCart = () => {
        const dataItemToCart = {
            "product": product,
            "isAuction": isProductAuction,
            "package": {
                "data": activePackage.package,
                "size": activePackage.id,
                "count": countOfProduct,
            },
        }

        dispatch(addBasketItem(dataItemToCart))
    }


    return (
        <>
            <BreadCrumbs pages={[{route: '/products', page: 'Всі продукти'}, {page: product.productName}]}/>

            <ProductStyled className="product">
                <div className="product__container">
                    <div className="product__row">
                        <div className="product__left">
                            <ProductSlider product={product} />
                            <ProductInfo product={product} activePackage={activePackage}/>
                        </div>
                        <div className="product__right">
                            <div className="product__options options options_2">

                                {cardOption('small')}
                                {cardOption('mid')}
                                {cardOption('big')}

                            </div>
                            <ul className="product__list">
                                {+activePackage?.package?.displayPackageCount !== 0 && <li>
                                    <div className="product__list-label">
                                        Кількість
                                    </div>
                                    <div className="product__list-value">
                                        <ProductQuantity setCountOfProduct={setCountOfProduct}/>
                                    </div>
                                </li>}
                                <li>
                                    {
                                        !isProductAuction && discount > 0 &&
                                        <div className="product-card__procent">
                                            {discount}%
                                        </div>
                                    }

                                    {
                                        isProductAuction && <div className="product-card__procent">
                                            {maxDiscount}%
                                        </div>
                                    }
                                    <div className="product__list-label">
                                        Сума
                                    </div>
                                    <div className="product__list-value">
                                        <div className="product__price">
                                            {calculatePriceWithDiscount(activePackage?.package?.productPackagePrice * countOfProduct, discount)} грн
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            {+activePackage?.package?.displayPackageCount === 0 ?
                                <div className="product__empty">
                                    <span>Немає в наявності</span>
                                </div> :
                                <button onClick={handleAddToCart} className="product__buy button button_green">
                                    Купити
                                </button>
                            }
                            <CardDiscounts isProductAuction={isProductAuction} data={activePackage?.package}/>
                        </div>
                    </div>
                </div>
            </ProductStyled>
        </>
    );
};

export default Product;