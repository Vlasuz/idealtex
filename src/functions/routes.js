import {Main} from "../pages/main/Main";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import ChangePassword from "../pages/changePassword/ChangePassword";
import Search from "../pages/search/Search";
import Product from "../pages/product/Product";
import PageNotFound from "../pages/pageNotFound/pageNotFound";

export const routes = () => {

    return [
        {
            path: '*',
            element: <PageNotFound/>
        },
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
        {
            path: '/change-pass',
            element: <ChangePassword/>
        },
        {
            path: '/search/:search',
            element: <Search/>
        },
        {
            path: '/products/:productCode',
            element: <Product/>
        },
    ]
}