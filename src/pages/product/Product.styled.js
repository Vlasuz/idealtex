import styled from "styled-components";

export const ProductStyled = styled.section`
  .product__slider {
    position: relative;
  }

  .product__pagination {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .product__pagination .swiper-pagination-bullet {
    background: var(--blue);
    width: 10px;
    height: 10px;
  }
  .quantity_2 .quantity__input input {
    width: 100%;
  }
  .product-card__spoller {
    margin-top: 16px;
  }
`
