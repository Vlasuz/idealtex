export const calculatePriceWithDiscount = (price, discount) => {
    const productDiscount = discount ?? 0

    function decimalAdjust(type, value, exp) {
        // Если степень не определена, либо равна нулю...
        if (typeof exp === "undefined" || +exp === 0) {
            return Math[type](value);
        }
        value = +value;
        exp = +exp;
        // Если значение не является числом, либо степень не является целым числом...
        if (isNaN(value) || !(typeof exp === "number" && exp % 1 === 0)) {
            return 0;
        }
        // Сдвиг разрядов
        value = value.toString().split("e");
        value = Math[type](+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp)));
        // Обратный сдвиг
        value = value.toString().split("e");
        return +(value[0] + "e" + (value[1] ? +value[1] + exp : exp));
    }

    Math.round10 = function (value, exp) {
        return decimalAdjust("round", value, exp);
    };

    // return (price - price * (productDiscount / 100))
    return Math.round10((price - price * (productDiscount / 100)), -3)
}