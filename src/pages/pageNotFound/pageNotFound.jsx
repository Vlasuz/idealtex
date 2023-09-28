import React from 'react';
import {NavLink} from "react-router-dom";

const PageNotFound = () => {
    return (
        <main className={'page'}>
            <div className="container">
                <h1>404</h1>
                <NavLink to={'/'}>
                    Go to main
                </NavLink>
            </div>
        </main>
    );
};

export default PageNotFound;