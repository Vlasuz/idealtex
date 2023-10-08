import React, {useEffect, useState} from 'react';
import ProfileSidebar from "../../components/profileSidebar/ProfileSidebar";
import ProfileOrders from "./components/ProfileOrders";
import {ProfileStyled} from "./Profile.styled";

const Profile = () => {

    const [orderItems, setOrderItems] = useState([])

    return (
        <ProfileStyled className="orders">
            <div className="orders__container">
                <div className="orders__row">
                    <ProfileSidebar setOrderItems={setOrderItems}/>
                    <div className="orders__main">
                        <h2 className="orders__title">
                            Замовлення
                        </h2>
                        {!orderItems.length && <ProfileOrders setOrderItems={setOrderItems}/>}
                    </div>
                </div>
            </div>
        </ProfileStyled>
    );
};

export default Profile;