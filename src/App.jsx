import "./assets/initial/css/style.css";
import {Header} from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import {Footer} from "./components/footer/Footer";
import getCookies from "./functions/getCookies";
import {useEffect, useRef, useState} from "react";
import getUserInfo from "./hooks/getUserInfo";
import {useDispatch, useSelector} from "react-redux";
import {routes} from "./functions/routes";
import {discounts} from "./api/discounts";
import {setBasketItems} from "./redux/toolkitSlice";
import {profileOrders} from "./api/profileOrders";

export const App = () => {
    const dispatch = useDispatch();
    const [routesList] = useState(routes());
    const headerBlock = useRef()
    const userInfo = useSelector(state => state.toolkit.user)

    useEffect(() => {
        dispatch(setBasketItems())
        discounts({dispatch})
        getUserInfo(getCookies("token"), dispatch);
    }, []);

    useEffect(() => {
        profileOrders({dispatch, userInfo})
    }, [userInfo])

    document.addEventListener('click', (e) => {
        if(e.target.closest('.header-catalog__tabs') === null && e.target.closest('.main-header__catalog-button') === null && e.target.closest('.menu__main-list') === null) {
            if(window.innerWidth <= 992) return;

            document.querySelector('html').classList.remove('open-catalog')
        }
        if(e.target.closest('.main-header__phone') === null) {
            document.querySelector('.main-header__phone').classList.remove('_active-phone')
        }
    })

    return (
        <div className={"wrapper"}>
            <Header block={headerBlock} />

            <Routes>
                {routesList.map(route => <Route key={route.path} element={route.element} path={route.path}/>)}
            </Routes>

            <Footer/>
        </div>
    );
};
