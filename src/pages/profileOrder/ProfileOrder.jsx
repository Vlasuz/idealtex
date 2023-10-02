import React from 'react';
import ProfileSidebar from "../../components/profileSidebar/ProfileSidebar";
import {ProfileOrderStyled} from "./ProfileOrder.styled";
import OrderItem from "./components/OrderItem";

const ProfileOrder = () => {
    return (
        <ProfileOrderStyled className="orders">
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
                                Знижка: <span className="blue">
										0%
									</span>
                            </div>
                        </div>
                        <div className="orders__items">
                            <OrderItem  />
                            <OrderItem  />
                        </div>
                    </div>
                </div>
            </div>
        </ProfileOrderStyled>
    );
};

export default ProfileOrder;