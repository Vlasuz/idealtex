import React from 'react';
import OrderItem from "./OrderItem";

const ProfileOrder = ({orderItems}) => {
    return (
        <>
            <div className="orders__info">
                <div className="orders__info-item">
                    Замовлення 466 від 12.12.2000
                </div>
                <div className="orders__info-item">
                    Загальна сумма: <span className="green">500 грн</span>
                </div>
                <div className="orders__info-item">
                    Знижка:
                    <span className="blue">
                        0%
                    </span>
                </div>
            </div>
            <div className="orders__items">
                {
                    orderItems.map((item, index) => <OrderItem key={index} data={item}/>)
                }
            </div>
        </>
    );
};

export default ProfileOrder;