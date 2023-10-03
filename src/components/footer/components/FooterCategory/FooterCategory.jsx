import { useEffect, useState } from "react";
import { getAllCategories } from "../../../../api/categories";
import { NavLink } from "react-router-dom";

export const FooterCategory = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        getAllCategories()
            .then(({categories}) =>{
                setCategories(categories);
            })
            .catch((error) => {
                console.error("Ошибка я не получил категорий:", error);
            });
    }, [])

    return (
        <div className="footer__column">
            <div className="footer__title">
                Категорії
            </div>
            <nav className="footer__nav">
                <ul className="footer__list">
                    {categories.map((category) =>(
                        <li key={category.categoryAlias}>
                            <NavLink to={`/categories/${category.categoryAlias}`}>
                                {category.categoryName}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}
