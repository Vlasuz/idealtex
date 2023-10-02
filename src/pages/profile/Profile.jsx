import React from 'react';
import ProfileSidebar from "../../components/profileSidebar/ProfileSidebar";
import ProfileOrders from "./components/ProfileOrders";
import {ProfileStyled} from "./Profile.styled";

const Profile = () => {
    return (
        <ProfileStyled className="orders">
            <div className="orders__container">
                <div className="orders__row">
                    <ProfileSidebar/>
                    <div className="orders__main">
                        <h2 className="orders__title">
                            Замовлення
                        </h2>
                        <ProfileOrders/>
                    </div>
                </div>
            </div>
        </ProfileStyled>
    );
};

export default Profile;