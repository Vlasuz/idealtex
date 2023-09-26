import { useEffect } from "react";

import Swiper from "swiper";
import "swiper/css";

import banner from '../../assets/initial/img/main-img/banner.webp'
import banner2 from '../../assets/initial/img/main-img/banner.png'
import arrowLeft from '../../assets/initial/img/icons/arrow-left.svg' 
import arrowRight from '../../assets/initial/img/icons/arrow-left.svg' 

export const Banner = () => {
  useEffect(() => {
      new Swiper(".swiper", {
        slidesPerView: 1,
        spaceBetween: 20,

        navigation: {
            nextEl: '.banner__arrow_next',
            prevEl: '.banner__arrow_prev',
        },
        pagination: {
            el: '.banner__pagination',
            clickable: true,
        },
    });
  });

  return (
    <div className="banner">
      <div className="banner__container">
        <div className="banner__slider swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="banner__image-ibg">
                <picture>
                  <source srcSet={banner} type="image/webp" />
                  <img srcSet={banner2} alt="" />
                </picture>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner__image-ibg">
                <picture>
                  <source srcSet={banner} type="image/webp" />
                  <img srcSet={banner2} alt="" />
                </picture>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner__image-ibg">
                <picture>
                  <source srcSet={banner} type="image/webp" />
                  <img srcSet={banner2} alt="" />
                </picture>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="banner__image-ibg">
                <picture>
                  <source srcSet={banner} type="image/webp" />
                  <img srcSet={banner2} alt="" />
                </picture>
              </div>
            </div>
          </div>
          <div className="banner__pagination">
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
            <span className="swiper-pagination-bullet"></span>
          </div>
          <div className="banner__arrows">
            <button className="banner__arrow banner__arrow_prev">
              <img src={arrowLeft} alt="icon" />
            </button>
            <button className="banner__arrow banner__arrow_next">
              <img src={arrowRight} alt="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
