import {Main} from "../pages/main/Main";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import ChangePassword from "../pages/changePassword/ChangePassword";
import Search from "../pages/search/Search";
import Product from "../pages/product/Product";
import PageNotFound from "../pages/pageNotFound/pageNotFound";
import { Category } from "../pages/category/Category";
import Profile from "../pages/profile/Profile";
import Checkout from "../pages/checkout/Checkout";
import { AllCategories } from "../pages/allCategories/AllCategories";
import { AllDiscount } from "../pages/allDiscount/AllDiscount";
import ThankYou from "../pages/thankYou/ThankYou";
import Basket from "../pages/basket/Basket";
import ProfileOrder from "../pages/profileOrder/ProfileOrder";
import ChangePasswordNewPassword from "../pages/changePasswordNewPassword/ChangePasswordNewPassword";
import { AllProducts } from "../pages/allProducts/AllProducts";

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
            path: '/change-pass/:token',
            element: <ChangePasswordNewPassword/>
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
            path: '/products',
            element: <AllProducts/>
        },
        {
            path: '/discount',
            element: <AllDiscount/>
        },
        {
            path: '/categories/:categoryAlias',
            element: <Category/>
        },
        {
            path: '/categories',
            element: <AllCategories/>
        },
        {
            path: '/profile',
            element: <Profile/>
        },
        {
            path: '/profile/:orderId',
            element: <ProfileOrder/>
        },
        {
            path: '/basket',
            element: <Basket/>
        },
        {
            path: '/checkout',
            element: <Checkout/>
        },
        {
            path: '/thx',
            element: <ThankYou/>
        },
    ]
}