import styled from "styled-components";

export const HeaderStyle = styled.div`
    position: sticky;
    z-index: 3;
    top: 0;
    left: 0;
    background: var(--white);
    -webkit-transition: all 0.3s cubic-bezier(0.5, 0.02, 0.13, 0.5);
    transition: all 0.3s cubic-bezier(0.5, 0.02, 0.13, 0.5);
    --header-gap: 24px;
`