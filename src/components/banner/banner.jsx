import { useEffect } from "react";
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import banner from '../../assets/initial/img/main-img/banner.webp';
import banner2 from '../../assets/initial/img/main-img/banner.png';
import arrowLeft from '../../assets/initial/img/icons/arrow-left.svg'; 
import arrowRight from '../../assets/initial/img/icons/arrow-left.svg'; 
import { BannerStyled } from "./banner.styled";


export const Banner = () => {
  useEffect(() => {
    if (document.querySelector(".banner__slider")) new Swiper(".banner__slider", {
      modules: [Navigation, Pagination],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      loop: true,
      spaceBetween: 100,
      speed: 800,
      pagination: {
        el: ".banner__pagination",
        clickable: true,
      },
      navigation: {
        prevEl: ".banner__arrow_prev",
        nextEl: ".banner__arrow_next",
      },
      breakpoints: {
        320: {
          spaceBetween: 10,
        },
        768: {
          spaceBetween: 100,
        },
      },
    });
  }, []);

  return (
    <BannerStyled>
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
      </BannerStyled>
  );
};
