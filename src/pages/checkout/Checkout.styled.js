import styled from "styled-components";

export const CheckoutStyled = styled.section`

  .custom-select {
    z-index: 2;
  }

  .select__options {
    z-index: -1;
    transition: all .3s ease;
    opacity: 0;
    margin-top: -10px;
  }
  
  .select__content {
    height: 27px;
  }

  ._select-open {
    .select__options {
      z-index: 2;
      opacity: 1;
      margin-top: 0;
    }
  }
`
