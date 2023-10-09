import { NavLink } from 'react-router-dom'
import arrowLink from '../../../../../../assets/initial/img/icons/arrow-link.svg'

export const SalesHead = () => {
  return (
    <div className="sale__head">
        <h2 className="title sale__title">
            АКЦІЙНІ ПРОПОЗИЦІЇ
        </h2>
        <NavLink to={'/discount'} className="link">
            Показати всі <img src={arrowLink} alt="icon" />
        </NavLink>
    </div>
  )
}
