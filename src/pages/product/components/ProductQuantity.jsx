import React, {useEffect, useState} from 'react';
import arrNext from "../../../assets/initial/img/icons/arrow-left.svg";

const ProductQuantity = ({setCountOfProduct}) => {

    const [value, setValue] = useState(1)

    useEffect(() => {
        setCountOfProduct(value)
    }, [value])

    return (
        <div className="quantity quantity_2">
            <button onClick={_ => setValue(prev => prev > 1 ? prev - 1 : prev)}
                    type="button"
                    className="quantity__button quantity__button_minus">
                <img src={arrNext} alt=""/>
            </button>
            <div className="quantity__input">
                <input autoComplete="off" type="text" value={value} onChange={e => setValue(+e.target.value)}/>
                <span>уп.</span>
            </div>
            <button onClick={_ => setValue(prev => prev + 1)} type="button"
                    className="quantity__button quantity__button_plus"><img
                src={arrNext} alt=""/>
            </button>
        </div>
    );
};

export default ProductQuantity;