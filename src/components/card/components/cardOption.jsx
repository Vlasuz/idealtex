import React, {useEffect, useRef} from 'react';

const CardOption = ({data, metric, id, setProductPackage, name}) => {

    const refInput = useRef(null)

    useEffect(() => {
        setProductPackage(id)
    }, [])

    return (
        <div className="options__item">
            <input ref={refInput} hidden id={id} onChange={_ => setProductPackage(id)} className="options__input" type="radio" value={id} name={name}/>
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