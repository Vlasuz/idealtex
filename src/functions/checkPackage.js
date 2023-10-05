export const checkPackage = ({data}) => {
    const smallPackageId = 'small|' + data?.productCode
    const midPackageId = 'mid|' + data?.productCode
    const bigPackageId = 'big|' + data?.productCode

    const isHaveSmallPackage = data?.productPackagesSizes?.small?.displayPackageCount
    const isHaveMidPackage = data?.productPackagesSizes?.mid?.displayPackageCount && !isHaveSmallPackage
    const isHaveBigPackage = data?.productPackagesSizes?.big?.displayPackageCount && !isHaveMidPackage

    return (isHaveSmallPackage && smallPackageId) ?? (isHaveMidPackage && midPackageId) ?? (isHaveBigPackage && bigPackageId)
}