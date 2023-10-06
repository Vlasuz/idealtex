import { useEffect, useState } from "react"

export const CatalogTitles = ({setAlias, allCategories,}) => {
    const [activeTab, setActiveTab] = useState('')
    
    const categoryTitles = allCategories.map((category) =>(
        <button 
            key={category.categoryAlias} 
            onClick={() => {
                setAlias(category.categoryAlias)
                setActiveTab(category.categoryAlias)    
            }} 
            className={`header-catalog__title ${activeTab === category.categoryAlias ? '_tab-active' : ''}`}
        >
            <span> {category.categoryName} </span>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.75 4.5L11.25 9L6.75 13.5" strokeWidth="2" />
            </svg>
        </button>
    ))

    useEffect(() => {
        if (allCategories && allCategories.length > 0) {
            setActiveTab(allCategories[0].categoryAlias);
        }
    }, [allCategories]);

    return (
        <div data-tabs-titles className="header-catalog__titles">
            { categoryTitles}
        </div>
    )
}
