import { useEffect, useState } from "react"
import { getAllCategories } from "../../../../api/categories";

export const CatalogTitles = ({setAlias, allCategories}) => {
    
    const categoryTitles = allCategories.map((category) =>(
            // _tab-active класс для активной рубрики
        <button key={category.categoryAlias} onClick={() => setAlias(category.categoryAlias)} className="header-catalog__title">
            <span> {category.categoryName} </span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeWidth="2" />
            </svg>
        </button>
    ))

    return (
        <div data-tabs-titles className="header-catalog__titles">
            {categoryTitles}
        </div>
    )
}
