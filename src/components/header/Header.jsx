import {HeaderMain} from "./components/HeaderMain/HeaderMain";
import {HeaderTop} from "./components/HeaderTop/HeaderTop";
// import { ScrollUp } from "./components/ScrollUp/ScrollUp";
import {HeaderStyle} from "./Header.styled";
import {NavLink} from "react-router-dom";
import {ScrollUp} from "./components/ScrollUp/ScrollUp";

export const Header = () => {
    return (
        <HeaderStyle>
            <HeaderTop/>
            <HeaderMain/>
            <ScrollUp/>
        </HeaderStyle>
    );
};
