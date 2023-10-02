import styled from "styled-components";
import saleIcon from './../../assets/initial/img/svg/star.svg'

export const CardStyled = styled.div `
  
  border-radius: 8px;
  border: 2px solid var(--grey, #BACCE5);
  background: #FFF;
  -webkit-box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.15);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-item-align: start;
  align-self: flex-start;
  padding: 16px 16px 0;
  -webkit-transition: all 0.3s cubic-bezier(0.5, 0.02, 0.13, 0.5);
  transition: all 0.3s cubic-bezier(0.5, 0.02, 0.13, 0.5);

  .options {
    display: flex;
    &__item {
      width: 100%;
    }
    &__label {
      min-height: 80px;
    }
  }
  
  .product-card__not-count {
    padding: 14px;
    border-radius: 10px;
    background: rgba(255, 44, 44, 0.05);
    color: #FF2C2C;
    font-weight: 700;
    text-align: center;
    margin-top: 16px;
  }

  .product-card__top {
    position: relative;
  }

  .quantity__input input {
    font-size: 20px;
    font-weight: 700;
    line-height: 130%;
    height: 100%;
    color: var(--darkblue);
    width: 100%;
    text-align: center;
    outline: none;
  }
  .quantity__input input::-webkit-outer-spin-button,
  .quantity__input input::-webkit-inner-spin-button {
    -webkit-appearance: none
  }

  .product-card__sale {
    position: absolute;
    width: 55px;
    height: 55px;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    background: url(${saleIcon}) center/100% 100% no-repeat;
    top: -33px;
    right: -29px;
    color: #FFF;
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    line-height: 124.3%;
    z-index: 2;
  }

  .product-card__image-ibg {
    border-radius: 8px;
    overflow: hidden;
    display: block;
    height: 223px;
  }

  .product-card__options {
    margin: 16px 0;
  }

  .product-card__list {
    font-size: 14px;
    display: -ms-grid;
    display: grid;
    gap: 8px;
    font-weight: 400;
    color: var(--darkblue);
    opacity: 0.5;
    margin-bottom: 16px;
  }

  .product-card__title {
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;
    margin-bottom: 16px;
  }

  .product-card__title a {
    -webkit-transition: all 0.3s cubic-bezier(0.5, 0.02, 0.13, 0.5);
    transition: all 0.3s cubic-bezier(0.5, 0.02, 0.13, 0.5);
  }

  .product-card__items {
    display: -ms-grid;
    display: grid;
    gap: 20px;
  }

  .product-card__remove {
    width: 100%;
    margin-top: 20px;
  }

  .product-card__list-info {
    display: -ms-grid;
    display: grid;
    gap: 4px;
    font-size: 14px;
  }

  .product-card__list-info li {
    position: relative;
    border-radius: 8px;
    background: var(--grey, #BACCE5);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    gap: 10px;
    padding: 15px;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }

  .product-card__label {
    width: 60%;
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-weight: 500;
    line-height: 130%;
    opacity: 0.5;
  }

  .product-card__value {
    width: 40%;
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
    text-align: right;
    font-weight: 700;
    line-height: 130%;
    color: #159300;
  }

  .product-card__value.blue {
    color: var(--blue);
  }

  .product-card__procent {
    position: absolute;
    border-radius: 5px;
    background: #F00;
    top: -4px;
    right: -9px;
    font-size: 14px;
    font-weight: 700;
    line-height: 15px;
    padding: 1px 4px;
    color: #fff;
  }

  .product-card__price {
    font-size: 14px;
    font-weight: 500;
    line-height: 130%;
    margin: 16px 0;
    text-align: center;
  }

  .product-card__price span {
    color: #159300;
    font-weight: 700;
  }

  .product-card__row {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    gap: 10px;
  }

  .product-card__button {
    background: var(--blue);
  }

  .product-card__spoller {
    margin-top: 16px;
  }
`