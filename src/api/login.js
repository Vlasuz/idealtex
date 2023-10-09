import axios from "axios";
import {getApiLink} from "../hooks/getApiLink";
import {setUser} from "../redux/toolkitSlice";
import {useDispatch} from "react-redux";

export const login = (data, dispatch) => {
    let tokenParts = data.token.split('.');
    let encodedPayload = tokenParts[1];
    let decodedPayload = atob(encodedPayload);
    let payloadObj = JSON.parse(decodedPayload);

    axios.defaults.headers.get['Authorization'] = `Bearer ${data.token}`
    axios.get(getApiLink(`v1/public/users/${payloadObj.uid}`), {
        userId: payloadObj.uid
    }).then((res) => {
        dispatch(setUser(res.data))
    })
}
