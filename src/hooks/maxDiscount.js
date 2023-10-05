import {useSelector} from "react-redux";

export const useMaxDiscount = () => {
    const discounts = useSelector(state => state.toolkit.discounts)

    return {maxDiscount: discounts.map(item => item.discount).sort((a, b) => b - a)[0]}
}