import "./assets/initial/css/style.css";
import {Header} from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import {Footer} from "./components/footer/Footer";
import getCookies from "./functions/getCookies";
import {useEffect, useState} from "react";
import getUserInfo from "./hooks/getUserInfo";
import {useDispatch} from "react-redux";
import {routes} from "./functions/routes";

export const App = () => {
    const dispatch = useDispatch();
    const [routesList] = useState(routes());

    useEffect(() => {
        getUserInfo(getCookies("token"), dispatch);
    }, []);

    return (
        <div className={"wrapper"}>
            <Header/>

            <Routes>
                {routesList.map(route => <Route key={route.path} element={route.element} path={route.path}/>)}
            </Routes>

            <Footer/>
        </div>
    );
};
