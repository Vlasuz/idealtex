import React, {useEffect} from 'react';
import OrderItem from "../profile/components/OrderItem";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import ProfileSidebar from "../../components/profileSidebar/ProfileSidebar";
import {ProfileStyled} from "../profile/Profile.styled";

const ProfileOrder = () => {

    const {orderId} = useParams()
    const orders = useSelector(state => state.toolkit.profileOrders)

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
                                Замовлення 466 від 12.12.2000
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
                                orders.filter(item => +item.orderNumber === +orderId)[0]?.orderProducts.map((item, index) =>
                                    <OrderItem key={index} data={item}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </ProfileStyled>
    );
};

export default ProfileOrder;