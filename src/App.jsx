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
