import { NavLink } from "react-router-dom";

export const BreadCrumbs = ({pages}) => {
  return (
    <div class="breadcrumbs">
      <div class="breadcrumbs__container">
        <ul class="breadcrumbs__list">
          <li>
            <NavLink to={"/"}>Головна</NavLink>
          </li>
          {pages.map(item => 
              <li>
                {item.route ? <NavLink to={item.route}>{item.page}</NavLink> : <span>{item.page}</span>}
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
};
