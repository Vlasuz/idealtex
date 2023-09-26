import categoryWebp from '../../../../assets/initial/img/main-img/category.webp'
import categoryPng from '../../../../assets/initial/img/main-img/category.png'

export const CategoriesCard = ({ name, img}) => {
  return (
    <a href="#" className="category-card">
        <div className="category-card__image-ibg">
            <picture>
                {/* <source srcSet={categoryWebp} type="image/webp" /> */}
                <img src={img} alt="photo" />
            </picture>
        </div>
        <h4 className="category-card__title">
            {name}
        </h4>
    </a>
  )
}
