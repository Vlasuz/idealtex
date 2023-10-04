import { useEffect, useState } from "react"
import { getAllCategories } from "../../../../api/categories";

export const CatalogTitles = () => {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    
    useEffect(() =>{
        getAllCategories()
            .then(({categories}) =>{
                setCategories(categories)
                setLoading(false);
            })
            .catch((error) => {
                console.error('я не получил категории', error);
            })
    }, []);

    const categoryTitles = categories.map((category) =>(
            // _tab-active класс для активной рубрики
        <button className="header-catalog__title">
            <span> {category.categoryName} </span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeWidth="2" />
            </svg>
        </button>
    ))

    return (
        <div data-tabs-titles className="header-catalog__titles">
            {!loading ? categoryTitles : <p>Загрузка...</p>}
        </div>
    )
}
