import React from 'react';

import userIcon from '../../assets/initial/img/icons/user.svg'
import orderIcon from '../../assets/initial/img/icons/order.svg'
// import userIcon from './../../../assets/initial/img/icons/user.svg'
import {useSelector} from "react-redux";
import {NavLink} from "react-router-dom";

const ProfileSidebar = () => {

    const userInfo = useSelector(state => state.toolkit.user)

    return (
        <div className="orders__aside">
            <div className="orders-user">
                <div className="orders-user__icon">
                    <img src={userIcon} alt=""/>
                </div>
                <div className="orders-user__content">
                    <div className="orders-user__name">
                        {userInfo.firstName} {userInfo.secondName}
                    </div>
                    <a href={"mailto:" + (userInfo.email)} className="orders-user__mail">
                        {userInfo.email}
                    </a>
                </div>
            </div>
            <div className="orders__aside-menu">
                <ul className="menu__main-list">
                    <li>
                        <NavLink to={'/profile'}>
                            <span className="menu__icon button-icon">
                                <img src={orderIcon} alt=""/>
                            </span>
                            Замовлення
                        </NavLink>
                    </li>
                    <li>
                        <a href="https://admin.idealtex.com.ua" target={'_blank'}>
                            <span className="menu__icon button-icon">
                                <img src={userIcon} alt=""/>
                            </span>
                            Admin
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProfileSidebar;