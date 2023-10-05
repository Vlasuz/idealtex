import {HeaderMain} from "./components/HeaderMain/HeaderMain";
import {HeaderTop} from "./components/HeaderTop/HeaderTop";
import {HeaderStyle} from "./Header.styled";
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
