import axios from "axios";
import { useEffect, useState } from "react"
import { getApiLink } from "../../../../hooks/getApiLink";
import { NavLink } from "react-router-dom";
import defaultImage from '../../../../assets/initial/img/defaultImage.jpg'

export const CatalogBody = ({alias}) => {
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

    const categoriesChildrenCard = categoriesChildren.map((category) => (
        <NavLink to={`/categories/${category.categoryAlias}`} className="category-card" key={category.categoryAlias}>
            <div className="category-card__image-ibg">
            <picture>
                <source srcSet={defaultImage} type="image/webp" />
                <img src={defaultImage} alt="photo" />
            </picture>
            </div>
            <h4 className="category-card__title">
                {category.categoryName}
            </h4>
        </NavLink>
    ))

    return (
        <div className="header-catalog__body">
            <div className="header-catalog__grid-layout">
                {!loading ? categoriesChildrenCard : <p>Загрузка...</p>}
            </div>
        </div>
    )
}
