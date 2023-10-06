import {HeaderMain} from "./components/HeaderMain/HeaderMain";
import {HeaderTop} from "./components/HeaderTop/HeaderTop";
import {HeaderStyle} from "./Header.styled";
import {ScrollUp} from "./components/ScrollUp/ScrollUp";
import {useState} from "react";

export const Header = ({block}) => {

    const [isHeaderScroll, setIsHeaderScroll] = useState(false)

    return (
        <HeaderStyle ref={block} className={isHeaderScroll ? "_header-scroll" : ""}>
            <HeaderTop setIsHeaderScroll={setIsHeaderScroll} />
            <HeaderMain/>
            <ScrollUp/>
        </HeaderStyle>
    );
};
