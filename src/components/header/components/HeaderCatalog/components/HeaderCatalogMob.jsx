import imagePlaceholder from '../../../../../assets/initial/img/defaultImage.jpg'
import { getApiLink } from "../../../../../hooks/getApiLink";

export const HeaderCatalogMob = ({categories, setAlias}) => {

    return (
        <div className="catalog-mob">
            <div className="catalog-mob__nav">
                {categories.map((category) => (
                    <div className='category-card' 
                        key={category.categoryAlias} 
                        onClick={() => setAlias(category.categoryAlias)}
                    >
                        <div className="category-card__image-ibg">
                            <picture>
                                <img src={category.imageName ? getApiLink("v1/public/images/" + category.imageName) : imagePlaceholder} alt="img" />
                            </picture>
                        </div>
                        <div className="category-card__title">{category.categoryName}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}
