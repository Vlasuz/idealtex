import { NavLink } from "react-router-dom"

export const BreadCrumbs = () => {
  return (
    <div class="breadcrumbs">
        <div class="breadcrumbs__container">
            <ul class="breadcrumbs__list">
                <li>
                    <NavLink to={'/'}>
                        Головна
                    </NavLink>
                </li>
                <li>
                    <a href="">
                        Каталог товарів
                    </a>
                </li>
                <li>
                    <span>Всі категоріЇ</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
