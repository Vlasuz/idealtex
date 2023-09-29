import styled from "styled-components";

export const BannerStyled = styled.div`
  .banner__slider.swiper {
    padding: 40px;
    margin: 0 -40px;
  }

  .banner__image-ibg {
    border-radius: 8px;
    overflow: hidden;
    -webkit-box-shadow: 2px 2px 30px 0px rgba(0, 0, 0, 0.25);
            box-shadow: 2px 2px 30px 0px rgba(0, 0, 0, 0.25);
    padding-bottom: 36.036036036%;
  }

  .banner__slider.swiper .swiper-slide {
    height: 100%;
  }
  
  .banner__pagination {
    position: absolute;
    bottom: 56px;
    left: 50%;
    -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
            transform: translateX(-50%);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
        -ms-flex-align: center;
            align-items: center;
    gap: 8px;
    z-index: 2;
    justify-content: center;
  }

  .banner__pagination .swiper-pagination-bullet {
    background: var(--white);
    opacity: 0.5;
    width: 10px;
    cursor: pointer;
    height: 10px;
    border-radius: 50%;
    -webkit-transition: all 0.3s cubic-bezier(0.5, 0.02, 0.13, 0.5);
    transition: all 0.3s cubic-bezier(0.5, 0.02, 0.13, 0.5);
  }

  .banner__pagination .swiper-pagination-bullet.swiper-pagination-bullet-active {
    opacity: 1;
  }
`