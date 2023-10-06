import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export const useGetGeneralDiscount = () => {
    const discounts = useSelector(state => state.toolkit.discounts)
    const basketPrice = useSelector(state => state.toolkit.basketPrice)

    const [discount, setDiscount] = useState(0)

    useEffect(() => {
        setDiscount(discounts.map(item => basketPrice >= item.price && item).map(item => item.discount).sort((a, b) => b - a)[0] ?? 0)
    }, [basketPrice, discounts])

    return {discount}

}