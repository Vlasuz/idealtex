import React, {useState} from 'react';

const Input = ({placeholder, type, icon, setValue, value}) => {
    const [isShowPassword, setIsShowPassword] = useState(false)

    return (
        <label className="input-item input-item_icon input-item_password">
            <span className="input-item__icon">
                <img src={icon} alt=""/>
            </span>
            {type === "password" &&
                <span onClick={_ => setIsShowPassword(prev => !prev)} className={"input-item__password-btn form__viewpass" + (isShowPassword ? " _viewpass-active" : "")}/>}
            <input onChange={e => setValue(e.target.value)} value={value} name="form" type={isShowPassword ? "text" : type} placeholder={placeholder} className="input"/>
        </label>
    );
};

export default Input;