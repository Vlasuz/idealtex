import { NavLink } from "react-router-dom";

export const BreadCrumbsBasket = () => {
  return (
    <div class="breadcrumbs">
      <div class="breadcrumbs__container">
        <ul class="breadcrumbs__list">
          <li>
            <NavLink to={"/"}>Головна</NavLink>
          </li>
          <li>
            <span>Кошик</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
