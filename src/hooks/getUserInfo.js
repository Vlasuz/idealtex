import React from 'react';
import getCookies from "../functions/getCookies";
import {useDispatch} from "react-redux";
import {setUser} from "../redux/toolkitSlice";

const GetUserInfo = (token) => {

    const dispatch = useDispatch()

    // if(getCookies("token")) {

        let tokenParts = token.split('.');
        let encodedPayload = tokenParts[1];

        let decodedPayload = atob(encodedPayload);

        let payloadObj = JSON.parse(decodedPayload);

        console.log(payloadObj)

        // let name = payloadObj.name;
        // let wallet_address = payloadObj.wallet_address;
        // let password = payloadObj.password;
        // let email = payloadObj.email;
        // let username = payloadObj.username;
        // let phone = payloadObj.phone;

        dispatch(setUser({}))
    // }
};

export default GetUserInfo;