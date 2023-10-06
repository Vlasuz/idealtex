import React from 'react';
import Translate from "../../../components/translate/Translate";

const ProductInfo = ({product}) => {
    return (
        <>
            <div className="product__info">
                <span className="product__label"><Translate>product_code</Translate>: {product.productCode}</span>
                <span className="product__label"><Translate>product_country</Translate>: {product.productCountry}</span>
                {/*{+ppil?.displayPackageCount === 0 ?*/}
                {/*    <span className="product__label  product__label_empty">*/}
                {/*                    Немає в наявності*/}
                {/*                </span> :*/}
                {/*    <span className="product__label  product__label_is">*/}
                {/*                    <Translate>product_residue</Translate> {ppil?.displayPackageCount}*/}
                {/*                </span>*/}
                {/*}*/}
            </div>
            <div className="product__descr">
                <p>{product.productName}</p>
            </div>
        </>
    );
};

export default ProductInfo;