import { NavLink } from "react-router-dom"

export const BreadCrumbsProducts = () => {
  return (
    <div class="breadcrumbs">
      <div class="breadcrumbs__container">
        <ul class="breadcrumbs__list">
          <li>
            <NavLink to={"/"}>Головна</NavLink>
          </li>
          <li>
            <span>Всі продукти</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
