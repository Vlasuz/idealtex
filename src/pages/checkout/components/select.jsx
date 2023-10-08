import React, {useState} from 'react';

const Select = ({list, setValue, value}) => {

    const [isOpen, setIsOpen] = useState(false)

    const handleSelect = (option) => {
        setValue(option)
        setIsOpen(false)
    }

    return (
        <div className={"custom-select" + (isOpen ? " _select-active _select-open" : "")}>
            <button type="button" className="select__title" onClick={_ => setIsOpen(prev => !prev)}>
                                        <span className="select__value">
                                            <span className="select__content">
                                                {value}
                                            </span>
                                        </span>
            </button>
            <div className={"select__options"} style={{maxHeight: isOpen ? "100px" : "0px", }}>
                <div className="select__scroll">
                    {
                        list.map(option =>
                            <button onClick={_ => handleSelect(option)} className="select__option"
                                    data-value={option} type="button">
                                {option}
                            </button>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Select;