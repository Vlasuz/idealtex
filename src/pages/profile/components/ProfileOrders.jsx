import React, {useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import axios from "axios";
import {getApiLink} from "../../../hooks/getApiLink";
import {useSelector} from "react-redux";
import getCookies from "../../../functions/getCookies";

const ProfileOrders = ({setOrderItems}) => {

    const userInfo = useSelector(state => state.toolkit.user)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if(!Object.keys(userInfo).length) return;

        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookies('token')}`
        axios.get(getApiLink(`v1/public/users/${userInfo?.userId}/orders?limit=50`)).then(({data}) => {
            setOrders(data.orders)
        }).catch(er => {
            console.log(er)
        })
    }, [userInfo])

    return (
        <ul className="orders__list">

            {
                !!orders.length ? orders?.map(item =>
                    <li key={item.orderNumber}>
                        <button onClick={_ => setOrderItems(item.orderProducts)} className="orders__item">
                            Замовлення {item.orderNumber}
                        </button>
                    </li>
                ) : "Нічого не знайдено =("
            }

        </ul>
    );
};

export default ProfileOrders;