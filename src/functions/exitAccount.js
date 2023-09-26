import {removeUser} from "../redux/toolkitSlice";
import setCookie from "./setCookie";

export const handleExit = (dispatch) => {
    dispatch(removeUser())
    setCookie('token', '')
}