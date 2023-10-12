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
        setActivePackage(packages[productPackage?.slice(0, productPackage.indexOf('|'))]?.package)
    }, [productPackage])

    if(!Object.keys(data).length) return {cardOption: () => {}, activePackage: ""};

    const cardOption = (type) => {
        console.log(data)
        if (data?.productPackagesSizes[type] !== null)
            return (<CardOption
                id={packages[type]?.id}
                data={data}
                type={type}
                setProductPackage={setProductPackage}
                productPackage={productPackage}
            />)
        else return <CardOptionEmpty/>
    }

    return {
        cardOption,
        activePackage: packages[productPackage?.slice(0, productPackage.indexOf('|'))],
    }
}