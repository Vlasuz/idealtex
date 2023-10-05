import React from 'react';

const CardOption = ({data, type, id, setProductPackage, productPackage}) => {

    return (
        <div className="options__item">
            <input hidden id={id} checked={productPackage === id} onChange={_ => setProductPackage(id)} className="options__input" type="radio" value={id} name={data?.productCode}/>
            <label htmlFor={id} className="options__label">
                <span className="options__info">
                    уп<br/>
                    {data?.productPackagesSizes[type]?.productCountInPackage} {data?.productMetric}</span>
                <span className="options__price">
                    {data?.productPackagesSizes[type]?.productPrice} грн
                </span>
            </label>
        </div>
    );
};

export default CardOption;