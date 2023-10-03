import { useEffect, useState } from "react";
import { getAllCategories } from "../../../../api/categories";
import { NavLink } from "react-router-dom";

export const Links = () => {

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
    <div className="links">
      <div className="links__container">
        <ul className="links__list">
            {categories.map((category) =>(
                <li key={category.categoryAlias}>
                    <NavLink to={`/category/${category.categoryAlias}`}>
                        {category.categoryName}
                    </NavLink>
                </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
