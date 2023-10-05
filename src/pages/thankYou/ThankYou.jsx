import React from 'react';
import {NavLink} from "react-router-dom";
import {ThankYouStyled} from "./ThankYou.styled";

const ThankYou = () => {
    return (
        <ThankYouStyled className="user__container">
            <h2 className="user__title">
                Дякуємо за замовлення!
            </h2>
            <NavLink to={'/'} className="user__button button button_pink button">
                Повернутися до головної
            </NavLink>
        </ThankYouStyled>
    );
};

export default ThankYou;