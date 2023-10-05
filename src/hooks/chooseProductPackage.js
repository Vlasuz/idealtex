import React, {useEffect, useState} from "react";
import CardOption from "../components/card/components/CardOption";
import CardOptionEmpty from "../components/card/components/CardOptionEmpty";
import {useSelector} from "react-redux";
import {checkPackage} from "../functions/checkPackage";

export const useChooseProductPackage = ({data}) => {

    const packages = {
        'small': {
            id: 'small|' + data?.productCode,
            package: data.productPackagesSizes?.small
        },
        'mid': {
            id: 'mid|' + data?.productCode,
            package: data.productPackagesSizes?.mid
        },
        'big': {
            id: 'big|' + data?.productCode,
            package: data.productPackagesSizes?.big
        },
    }

    const [productPackage, setProductPackage] = useState('')
    const [activePackage, setActivePackage] = useState({})

    useEffect(() => {
        setProductPackage(checkPackage({data}))
    }, [data])
    useEffect(() => {
        setActivePackage(packages[productPackage.slice(0, productPackage.indexOf('|'))]?.package)
    }, [productPackage])

    const cardOption = (type) => {
        if (data?.productPackagesSizes[type]?.displayPackageCount !== '0')
            return (<CardOption
                id={packages[type]?.id}
                data={data}
                type={type}
                setProductPackage={setProductPackage}
                productPackage={productPackage}
            />)
        else return <CardOptionEmpty/>
    }


    // const [productDiscount, setProductDiscount] = useState(0)
    // const [maxProductDiscount, setMaxProductDiscount] = useState(0)
    // const basket = useSelector(state => state.toolkit.basket)
    // const basketPrice = useSelector(state => state.toolkit.basketPrice)
    // const discounts = useSelector(state => state.toolkit.discounts)
    // useEffect(() => {
    //     setProductDiscount(discounts.filter(item => basketPrice >= item.price).map(item => item.discount).sort((a, b) => b - a)[0] ?? 0)
    // }, [basket])
    //
    // useEffect(() => {
    //     setMaxProductDiscount(discounts.map(item => item.discount).sort((a, b) => b - a)[0])
    // }, [discounts])

    return {
        cardOption,
        activePackage
    }
}