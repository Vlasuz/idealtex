import './assets/initial/css/style.css'
import {Main} from './pages/main/Main';
import {Header} from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import {Footer} from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";

export const App = () => {

    const routes = [
        {
            path: '/',
            element: <Main/>
        },
        {
            path: '/auth',
            element: <Login/>
        },
        {
            path: '/registration',
            element: <Registration/>
        },
    ]

    return (
        <div className={"wrapper"}>
            <Header/>

            <Routes>
                {routes.map(route => <Route key={route.path} element={route.element} path={route.path} />)}
            </Routes>

            <Footer/>
        </div>
    );
}
