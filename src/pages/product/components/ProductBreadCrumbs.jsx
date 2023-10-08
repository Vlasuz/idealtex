import { NavLink } from 'react-router-dom'

export const ProductBreadCrumbs = ({product}) => {
  return (
    <div class="breadcrumbs">
      <div class="breadcrumbs__container">
        <ul class="breadcrumbs__list">
          <li>
            <NavLink to={"/"}>Головна</NavLink>
          </li>
          <li>
            <NavLink to={'/products'}>Всі продукти</NavLink>
          </li>
          <li>
            <span>{product.productName}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
