import React, {useEffect, useState} from 'react';
import OrderItem from "../profile/components/OrderItem";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ProfileSidebar from "../../components/profileSidebar/ProfileSidebar";
import {ProfileStyled} from "../profile/Profile.styled";

const ProfileOrder = () => {

    const {orderId} = useParams()
    const orders = useSelector(state => state.toolkit.profileOrders)
    const [orderItems, setOrderItems] = useState(orders.filter(item => +item.orderNumber === +orderId)[0]?.orderProducts)

    useEffect(() => {
        setOrderItems(orders.filter(item => +item.orderNumber === +orderId)[0]?.orderProducts)
    }, [orders])

    return (
        <ProfileStyled className="orders">
            <div className="orders__container">
                <div className="orders__row">
                    <ProfileSidebar/>
                    <div className="orders__main">
                        <h2 className="orders__title">
                            Замовлення
                        </h2>

                        <div className="orders__info">
                            <div className="orders__info-item">
                                Замовлення {orderId}
                            </div>
                            <div className="orders__info-item">
                                Загальна сумма: <span className="green">500 грн</span>
                            </div>
                            <div className="orders__info-item">
                                Знижка:
                                <span className="blue">0%</span>
                            </div>
                        </div>
                        <div className="orders__items">
                            {
                                orderItems?.length ? orderItems?.map((item, index) =>
                                    <OrderItem key={index} data={item}/>) : "Ничего нет =("
                            }
                        </div>
                    </div>
                </div>
            </div>
        </ProfileStyled>
    );
};

export default ProfileOrder;