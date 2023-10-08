import { NavLink } from "react-router-dom";

export const BreadCrumbsCategory = ({onCategory}) => {
  return (
    <div class="breadcrumbs">
      <div class="breadcrumbs__container">
        <ul class="breadcrumbs__list">
          <li>
            <NavLink to={"/"}>Головна</NavLink>
          </li>
          <li>
            <NavLink to={'/categories'}>Всі категорії</NavLink>
          </li>
          <li>
            <span>{onCategory}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
