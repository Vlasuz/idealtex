import { NavLink } from 'react-router-dom'
import arrowLink from '../../../../../../assets/initial/img/icons/arrow-link.svg'

export const CategoriesHead = () => {
  return (
    <div className="category__head">
        <h2 className="title category__title">
            ЗАГАЛЬНІ КАТЕГОРІЇ
        </h2>
        <NavLink to={'/categories'} className="link">
            Показати всі <img src={arrowLink} alt="icon" />
        </NavLink>
    </div>
  )
}
