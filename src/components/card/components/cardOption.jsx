import React, {useEffect, useRef, useState} from 'react';

const CardOption = ({data, metric, id, setProductPackage, name, checked}) => {

    const refInput = useRef(null)

    return (
        <div className="options__item">
            <input ref={refInput} hidden id={id} checked={checked === id} onChange={_ => setProductPackage(id)} className="options__input" type="radio" value={id} name={name}/>
            <label htmlFor={id} className="options__label">
                <span className="options__info">
                    уп<br/>
                    {data?.productCountInPackage} {metric}</span>
                <span className="options__price">
                    {data?.productPrice} грн
                </span>
            </label>
        </div>
    );
};

export default CardOption;