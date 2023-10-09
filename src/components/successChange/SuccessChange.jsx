import React from 'react';
import {NavLink} from "react-router-dom";

const SuccessChange = ({title}) => {
    return (
        <div className="login__wrap">
            <h2 className="login__title mb-150">
                {title}
            </h2>
            <NavLink to={'/'} className="button login__button button_violet button_fw">
                На головну
            </NavLink>
        </div>
    );
};

export default SuccessChange;
