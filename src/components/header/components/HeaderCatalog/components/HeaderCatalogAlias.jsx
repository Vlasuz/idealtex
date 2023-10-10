import axios from "axios";
import { useEffect, useState } from "react"
import { getApiLink } from "../../../../../hooks/getApiLink";
import { NavLink } from "react-router-dom";
import { Loader } from "../../../../loader/Loader";
import { ProductsNotFound } from "../../../../../pages/productsNotFound/ProductsNotFound";
import imagePlaceholder from '../../../../../assets/initial/img/defaultImage.jpg'
import CloseBtnIcon from '../../../../../assets/initial/img/icons/arrow-back.svg'

export const HeaderCatalogAlias = ({alias, onClose, onBack, categories}) => {
    const [categoryChild, setCategoryChild] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!alias) return;
        axios
            .get(getApiLink(`v1/public/categories/${alias}/children`))
            .then(({data}) => {
                setCategoryChild(data.categories)
                setLoading(false);
            })
            .catch((error) => {
                console.error("Помилка при завантаженні підкатегорій:", error);
            });
    }, [alias])

    return (
        <div data-tabs-body className="header-catalog__content">

            {/* {!loading && categoryChild.length === 0 && <ProductsNotFound/>} */}
            {/* {loading && <Loader/>} */}

            <div className="header-catalog__body">

                <button className="header-catalog__back" onClick={onBack}>
                    <img src={CloseBtnIcon} alt="icon" /> {categories.find(cat => cat.categoryAlias === alias)?.categoryName}
                </button>

                <div className="header-catalog__grid-layout">
                    {categoryChild.map((category) => (
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
                    ))}
                </div>
            </div>
        </div>
    )
}
