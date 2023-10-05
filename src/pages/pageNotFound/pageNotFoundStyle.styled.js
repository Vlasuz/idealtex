import styled from "styled-components";

export const PageNotFoundStyle = styled.div`
    text-align: center;

    h1{
        font-size: 62px;
        font-weight: 700;
        letter-spacing: 8px;
        color: var(--darkblue);
        margin-bottom: 30px;
    }

    h2{
        font-size: 32px;
        font-weight: 700;
        letter-spacing: 8px;
        color: var(--darkblue);
        margin-bottom: 10px;        
    }

    p{
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 2px;
        color: var(--darkblue);
        margin-bottom: 30px;
    }

    a{
        width: 100%;
        margin: 0 auto;
        max-width: 150px;
        flex-shrink: 0;
        border-radius: 8px;
        background: var(--grey);
        font-weight: 500;
        line-height: 110.8%;
        padding: 15px 16px;
        color: var(--blue);
        transition: all 0.3s cubic-bezier(0.5, 0.02, 0.13, 0.5);

        &:hover{
            background: var(--hover-bg);
        }
    }
`