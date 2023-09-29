import { NavLink } from "react-router-dom";

export const BreadCrumbs = () => {
  return (
    <div class="breadcrumbs">
      <div class="breadcrumbs__container">
        <ul class="breadcrumbs__list">
          <li>
            <NavLink to={"/"}>Головна</NavLink>
          </li>
          <li>
            <a href="">Каталог товарів</a>
          </li>
          <li>
            <a href="">Всі категоріЇ</a>
          </li>
          <li>
            <span>Все для шиття</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
