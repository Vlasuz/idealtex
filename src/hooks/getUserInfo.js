import React, {useState} from 'react';
import getCookies from "../functions/getCookies";
import {useDispatch} from "react-redux";
import {setUser} from "../redux/toolkitSlice";
import axios from "axios";
import {getApiLink} from "./getApiLink";

const getUserInfo = (token, dispatch) => {


    if(getCookies("token")) {

        let tokenParts = token.split('.');
        let encodedPayload = tokenParts[1];
        let decodedPayload = atob(encodedPayload);
        let payloadObj = JSON.parse(decodedPayload);

        axios.defaults.headers.get['Authorization'] = `Bearer ${token}`
        axios.get(getApiLink(`v1/public/users/${payloadObj.uid}`), {
            userId: payloadObj.uid
        }).then((res) => {
            dispatch(setUser(res.data))
        })
    }
};

export default getUserInfo;