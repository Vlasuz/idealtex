import React, {useEffect, useState} from 'react';
import minus from "../../../assets/initial/img/icons/minus.svg";
import plus from "../../../assets/initial/img/icons/plus.svg";

const CardQuantity = ({setCountOfProduct}) => {

    const [value, setValue] = useState(1)

    useEffect(() => {
        setCountOfProduct(value)
    }, [value])

    return (
        <div className="quantity">
            <button onClick={_ => setValue(prev => prev > 1 ? prev - 1 : prev)}
                    type="button" className="quantity__button quantity__button_minus">
                <img src={minus} alt=""/>
            </button>
            <div className="quantity__input">
                <input autoComplete="off" type="number" name="form[]" value={value}
                       onChange={e => setValue(+e.target.value)}/>
            </div>
            <button onClick={_ => setValue(prev => prev + 1)} type="button"
                    className="quantity__button quantity__button_plus">
                <img src={plus} alt=""/>
            </button>
        </div>
    );
};

export default CardQuantity;