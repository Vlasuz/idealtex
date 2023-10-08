import axios from "axios";
import getCookies from "../functions/getCookies";
import {getApiLink} from "../hooks/getApiLink";
import {setProfileOrders} from "../redux/toolkitSlice";

export const profileOrders = ({dispatch, userInfo}) => {
    if(!Object.keys(userInfo).length) return;

    axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('token')}`
    axios.get(getApiLink(`v1/public/users/${userInfo?.userId}/orders?limit=50`)).then(({data}) => {
        dispatch(setProfileOrders(data.orders))
    }).catch(er => {
        console.log(er)
    })
}