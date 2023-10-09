import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import {getApiLink} from "../../../hooks/getApiLink";
import arrNext from "../../../assets/initial/img/icons/arrow-left.svg";
import imagePlaceholder from './../../../assets/initial/img/defaultImage.jpg'

const ProductSlider = ({product}) => {
    return (
        <div className="product__slider">
            {product.imagesNames?.length ? <Swiper
                navigation={{
                    prevEl: ".product__arrow_prev",
                    nextEl: ".product__arrow_next"
                }}
                modules={[Pagination, Navigation]}
                pagination={{
                    el: '.product__pagination'
                }}
                slidesPerView={1}
                speed={700}
            >
                {
                    product.imagesNames?.map(image =>
                        <SwiperSlide key={image}>
                            <div className="product__image-ibg">
                                <img src={getApiLink("v1/public/images/" + image)} alt=""/>
                            </div>
                        </SwiperSlide>
                    )
                }

            </Swiper> : <div className="product__image-ibg">
                <img src={imagePlaceholder} alt="" />
            </div>}
            <div className="banner__pagination product__pagination"></div>
            {!!product.imagesNames?.length && <div className="banner__arrows">
                <button className="banner__arrow banner__arrow_prev product__arrow_prev">
                    <img src={arrNext} alt=""/>
                </button>
                <button className="banner__arrow banner__arrow_next product__arrow_next">
                    <img src={arrNext} alt=""/>
                </button>
            </div>}
        </div>
    );
};

export default ProductSlider;