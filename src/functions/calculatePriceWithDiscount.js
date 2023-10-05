export const calculatePriceWithDiscount = (price, discount) => {
    const productDiscount = discount ?? 0

    return (price - price * (productDiscount / 100)).toFixed(2)
}