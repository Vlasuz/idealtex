import React, {useState} from 'react';
import {useGetGeneralDiscount} from "../../../hooks/getGeneralDiscount";

const CardOption = ({data, type, id, setProductPackage, productPackage}) => {

    const {discount} = useGetGeneralDiscount()

    const [isProductAuction] = useState(Object.values(data.productPackagesSizes).map(item => item !== null && item).filter(item => item)[0]?.productAuction)
    const finaleAmount = isProductAuction ? data?.productPackagesSizes[type]?.productPrice : (data?.productPackagesSizes[type]?.productPrice - data?.productPackagesSizes[type]?.productPrice * (discount / 100))

    return (
        <div className="options__item">
            <input hidden id={id} checked={productPackage === id} onChange={_ => setProductPackage(id)} className="options__input" type="radio" value={id} name={data?.productCode}/>
            <label htmlFor={id} className="options__label">
                <span className="options__info">
                    уп<br/>
                    {data?.productPackagesSizes[type]?.productCountInPackage} {data?.productMetric}</span>
                <span className="options__price">
                    {finaleAmount} грн
                </span>
            </label>
        </div>
    );
};

export default CardOption;