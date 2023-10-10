import axios from "axios";
import { useEffect, useState } from "react"
import { getApiLink } from "../../../../hooks/getApiLink";
import { NavLink } from "react-router-dom";
import { Loader } from "../../../loader/Loader";
import { ProductsNotFound } from "../../../../pages/productsNotFound/ProductsNotFound";
import imagePlaceholder from '../../../../assets/initial/img/defaultImage.jpg'

export const CatalogBody = ({alias, onClose}) => {
    const [loading, setLoading] = useState(true);
    const [categoriesChildren, setCategoriesChildren] = useState([]);

    useEffect(() => {
        if (!alias) return;
        axios
            .get(getApiLink(`v1/public/categories/${alias}/children`))
            .then(({data}) => {
                setCategoriesChildren(data.categories)
                setLoading(false);
            })
            .catch((error) => {
                console.error("Помилка при завантаженні підкатегорій:", error);
            });
    }, [alias])

    return (
        <div className="header-catalog__body">

            {!loading && categoriesChildren.length === 0 && <ProductsNotFound/>}
            {loading && <Loader/>}

            <div className="header-catalog__grid-layout">
                {!loading && 
                    categoriesChildren.map((category) => (
                        <NavLink to={`/categories/${category.categoryAlias}`} 
                            className="category-card" 
                            key={category.categoryAlias} 
                            onClick={onClose}
                        >
                            <div className="category-card__image-ibg">
                            <picture>
                                <img src={category.imageName ? getApiLink("v1/public/images/" + category.imageName) : imagePlaceholder} alt="photo" />
                            </picture>
                            </div>
                            <h4 className="category-card__title">
                                {category.categoryName}
                            </h4>
                        </NavLink>
                    ))
                }
            </div>
        </div>
    )
}
