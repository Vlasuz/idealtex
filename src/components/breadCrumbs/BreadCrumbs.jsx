import { NavLink } from "react-router-dom";

export const BreadCrumbs = ({onSearch}) => {
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
            <span>{onSearch}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
