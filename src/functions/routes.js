import {Main} from "../pages/main/Main";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import ChangePassword from "../pages/changePassword/ChangePassword";
import Search from "../pages/search/Search";
import Product from "../pages/product/Product";
import PageNotFound from "../pages/pageNotFound/pageNotFound";
import { Category } from "../pages/category/Category";
import Profile from "../pages/profile/Profile";
import ProfileOrder from "../pages/profileOrder/ProfileOrder";
import Checkout from "../pages/checkout/Checkout";

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
        {
            path: '/category/:categoryAlias',
            element: <Category/>
        },
        {
            path: '/profile',
            element: <Profile/>
        },
        {
            path: '/profile/orders/:orderNumber',
            element: <ProfileOrder/>
        },
        {
            path: '/checkout',
            element: <Checkout/>
        },
    ]
}