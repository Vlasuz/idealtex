import React from 'react';

const CardOptionEmpty = () => {
    return (
        <div className="options__item">
            <input disabled hidden id="o_2" className="options__input" type="radio" value="2" name="option"/>
            <label htmlFor="o_2" className="options__label">
                    <span className="options__empty">
                    Відсутній
                </span>
            </label>
        </div>
    );
};

export default CardOptionEmpty;