import styled from "styled-components";
import '../../../../assets/initial/css/style.css'

export const HeaderTopStyle = styled.div`
    background: var(--darkblue);
    color: var(--white);
    overflow: hidden;
    position: relative;
    -webkit-transition: all 0.2s cubic-bezier(0.5, 0.02, 0.13, 0.5);
    transition: all 0.2s cubic-bezier(0.5, 0.02, 0.13, 0.5);
    max-height: 200px;
   

    .top-header.close {
        opacity: 0;
        overflow: hidden;
        visibility: hidden;
        -webkit-transform: scaleY(0);
            -ms-transform: scaleY(0);
                transform: scaleY(0);
        -webkit-transform-origin: top center;
            -ms-transform-origin: top center;
                transform-origin: top center;
        height: 0;
    }

    ._header-scroll .top-header {
        max-height: 0px;
        opacity: 0;
        -webkit-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        transform: translateY(-100%);
    }

    .top-header__close {
        position: absolute;
        right: 20px;
        top: 20px;
    }

    .top-header__title {
        font-weight: 600;
        line-height: 110.8%;
        text-align: center;
        padding: 6px 0px;
    }

    .top-header__row {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        gap: 11px;
        position: relative;
    }

    .top-header__image {
        width: 65px;
        height: 65px;
        -ms-flex-negative: 0;
        flex-shrink: 0;
        margin-bottom: -20px;
    }

    .top-header__text {
        font-weight: 600;
        line-height: 110.8%;
        padding: 15px 0;
        text-align: center;
    }

    .top-header__text span {
        color: var(--blue);
    }

    .top-header__close {
        right: 10px;
        top: 10px;
    }

    @media (max-width: 29.99875em){
        .top-header__image {
            width: 30px;
            height: 30px;
            margin-bottom: -10px;
        }
    }

`