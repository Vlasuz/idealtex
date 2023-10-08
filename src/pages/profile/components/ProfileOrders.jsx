import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {getApiLink} from "../../../hooks/getApiLink";
import {useDispatch, useSelector} from "react-redux";
import getCookies from "../../../functions/getCookies";
import {setProfileOrders} from "../../../redux/toolkitSlice";
import {profileOrders} from "../../../api/profileOrders";

const ProfileOrders = () => {

    const orders = useSelector(state => state.toolkit.profileOrders)

    return (
        <ul className="orders__list">

            {
                !!orders.length ? orders?.map(item =>
                    <li key={item.orderNumber}>
                        <NavLink to={"/profile/"+item.orderNumber} className="orders__item">
                            Замовлення {item.orderNumber}
                        </NavLink>
                    </li>
                ) : "Нічого не знайдено =("
            }

        </ul>
    );
};

export default ProfileOrders;