import Card from "../../components/card/Card";
import {useState} from "react";


export const Main = () => {

    const [cardsList] = useState([
        {
            productName: "Мотор швейн машини 100 ВАТТ черн уп.=10шт (Акція ціна без знижок)",
            productCode: "0120-01",
            productMetric: "шт.",
            imagesNames: [
                "58830740_-1747289364.jpg"
            ],
            productCountry: "Тайвань",
            productPackagesSizes: {
                big: {displayPackageCount: "> 1.0000",
                    productPrice: 12.50000000,
                    productCountInPackage: 15.0000,
                    productPackagePrice: 125.000000000000,
                    productAuction: true},
                mid: {
                    displayPackageCount: "> 1.0000",
                    productPrice: 11.50000000,
                    productCountInPackage: 13.0000,
                    productPackagePrice: 115.000000000000,
                    productAuction: true
                },
                small: null
            }
        },
        {
            productName: "Мотор швейн машини 100 ВАТТ черн уп.=10шт (Акція ціна без знижок)",
            productCode: "01220-01",
            productMetric: "шт.",
            imagesNames: [
                "58830740_-1747289364.jpg"
            ],
            productCountry: "Тайвань",
            productPackagesSizes: {
                big: null,
                mid: {
                    displayPackageCount: "> 1.0000",
                    productPrice: 11.50000000,
                    productCountInPackage: 10.0000,
                    productPackagePrice: 115.000000000000,
                    productAuction: true
                },
                small: null
            }
        },
    ])

    return (
        <>
            {
                cardsList.map(card => <Card key={card.productCode} data={card} />)
            }
        </>
    );
}