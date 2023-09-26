import {Main} from "../pages/main/Main";
import Login from "../pages/login/Login";
import Registration from "../pages/registration/Registration";
import getCookies from "./getCookies";
import AlreadyAuth from "../pages/alreadyAuth/AlreadyAuth";
import ChangePassword from "../pages/changePassword/ChangePassword";

export const routes = () => {

    return [
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
    ]
}