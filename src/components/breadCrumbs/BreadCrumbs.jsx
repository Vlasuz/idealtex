import { NavLink } from "react-router-dom";

export const BreadCrumbs = ({pages}) => {
  return (
    <div className="breadcrumbs">
      <div className="breadcrumbs__container">
        <ul className="breadcrumbs__list">
          <li>
            <NavLink to={"/"}>Головна</NavLink>
          </li>
          {pages.map((item, index) => 
              <li key={index}>
                {item.route ? <NavLink to={item.route}>{item.page}</NavLink> : <span>{item.page}</span>}
              </li>
            )
          }
        </ul>
      </div>
    </div>
  );
};
