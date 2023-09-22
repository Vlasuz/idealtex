import { HeaderMain } from "./components/HeaderMain/HeaderMain";
import { HeaderTop } from "./components/HeaderTop/HeaderTop";
import { HeaderStyle } from "./Header.styled";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderStyle>
      <HeaderTop />
      <HeaderMain />

      <NavLink to={"/"}>Main</NavLink>
      <NavLink to={"/catalog"}>Catalog</NavLink>
    </HeaderStyle>
  );
};
