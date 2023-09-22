import styled from "styled-components";

export const RegistrationStyled = styled.section`

  .form-error {
    color: red;
    margin: 10px 0;
  }

  .form-success {
    color: green;
    margin: 10px 0;
  }

  .login__button:disabled:hover {
    background: #8098F9;
  }
  .login__button:disabled {
    opacity: .5;
    cursor: default;
  }

`
