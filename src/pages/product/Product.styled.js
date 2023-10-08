import styled from "styled-components";

export const ProductStyled = styled.section`
  .product__slider {
    position: relative;
  }

  .product-card__procent {
    position: absolute;
    border-radius: 5px;
    background: red;
    top: -4px;
    right: -9px;
    font-size: 14px;
    font-weight: 700;
    line-height: 15px;
    padding: 1px 4px;
    color: #fff; 
  }

  .product__right .spoller-product__body {
    overflow: hidden;
    transition: all 0.3s ease;
    &._active {
      border-top: 0;
    }
  }
  
  .product__list {
    li {
      position: relative;
    }
  }
  
  .options {
    display: flex;
    &__item {
      width: 100%;
      min-height: 90px;
    }
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
