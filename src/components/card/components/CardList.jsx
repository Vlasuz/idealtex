import React from 'react';

const CardList = ({data, activePackage}) => {

    return (
        <ul className="product-card__list">
            <li>Код: {data?.productCode}</li>
            <li>Країна: {data?.productCountry}</li>
            <li>Залишок: {activePackage?.package.displayPackageCount}</li>
        </ul>
    );
};

export default CardList;