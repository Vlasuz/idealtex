import styled from "styled-components";

export const BannerStyled = styled.div`
  .banner__slider.swiper {
    padding: 40px;
    margin: 0 -40px;
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
`