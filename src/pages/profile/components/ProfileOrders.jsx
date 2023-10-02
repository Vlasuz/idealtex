import React from 'react';
import {NavLink} from "react-router-dom";

const ProfileOrders = () => {

    const orders = [
        {
            "orderNumber": 0,
            "orderProducts": [
                {
                    "productName": "string",
                    "productCode": "0000-000",
                    "productMetric": "string",
                    "imageNames": [
                        "string"
                    ],
                    "productCountry": "string",
                    "productPackagesSizes": {
                        "big": {
                            "productAmount": 0,
                            "productPackagePrice": 0,
                            "productAuction": true
                        },
                        "mid": {
                            "productAmount": 0,
                            "productPackagePrice": 0,
                            "productAuction": true
                        },
                        "small": {
                            "productAmount": 0,
                            "productPackagePrice": 0,
                            "productAuction": true
                        }
                    }
                }
            ],
            "totalSumOfProducts": 0,
            "discount": 0
        },
        {
            "orderNumber": 1,
            "orderProducts": [
                {
                    "productName": "string",
                    "productCode": "0000-000",
                    "productMetric": "string",
                    "imageNames": [
                        "string"
                    ],
                    "productCountry": "string",
                    "productPackagesSizes": {
                        "big": {
                            "productAmount": 0,
                            "productPackagePrice": 0,
                            "productAuction": true
                        },
                        "mid": {
                            "productAmount": 0,
                            "productPackagePrice": 0,
                            "productAuction": true
                        },
                        "small": {
                            "productAmount": 0,
                            "productPackagePrice": 0,
                            "productAuction": true
                        }
                    }
                }
            ],
            "totalSumOfProducts": 0,
            "discount": 0
        }
    ]

    return (
        <ul className="orders__list">

            {
                orders.map(item =>
                    <li key={item.orderNumber}>
                        <NavLink to={'/profile/orders/' + (item.orderNumber)} className="orders__item">
                            Замовлення {item.orderNumber}
                            {/*Замовлення {item.orderNumber} від 12.12.2000*/}
                        </NavLink>
                    </li>
                )
            }

        </ul>
    );
};

export default ProfileOrders;