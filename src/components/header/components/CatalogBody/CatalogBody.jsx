import axios from "axios";
import { useEffect, useState } from "react"
import { getApiLink } from "../../../../hooks/getApiLink";

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
        <a href="" className="category-card" key={category.categoryAlias}>
            <div className="category-card__image-ibg">
            <picture>
                <source srcSet="img/main-img/category.webp" type="image/webp" />
                <img src="img/main-img/category.png" alt="" />
            </picture>
            </div>
            <h4 className="category-card__title">
                {category.categoryName}
            </h4>
        </a>
    ))

    return (
        <div className="header-catalog__body">
            <div className="header-catalog__grid-layout">
                {!loading ? categoriesChildrenCard : <p>Загрузка...</p>}
            </div>
        </div>
    )
}
