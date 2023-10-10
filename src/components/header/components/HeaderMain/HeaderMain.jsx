import {useState} from "react";
import {HeaderAside} from "../HeaderAside/HeaderAside";
import {HeaderCatalog} from "../HeaderCatalog/HeaderCatalog";
import {HeaderPhone} from "../HeaderPhone/HeaderPhone";
import {useDispatch, useSelector} from "react-redux";
import {HeaderMainStyled} from "./HeaderMain.styled";
import {handleExit} from "../../../../functions/exitAccount";
import {NavLink, useNavigate} from "react-router-dom";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import menu from "../../../../assets/initial/img/icons/menu.svg";
import catalog from "../../../../assets/initial/img/icons/catalog.svg";
import phone from "../../../../assets/initial/img/icons/phone.svg";
import search from "../../../../assets/initial/img/icons/search.svg";
import search2 from "../../../../assets/initial/img/icons/search2.svg";
import user from "../../../../assets/initial/img/icons/user.svg";
import basket from "../../../../assets/initial/img/icons/basket.svg";
import closeBlue from "../../../../assets/initial/img/icons/close-blue.svg";
import logo from "../../../../assets/initial/img/main-img/logo.webp";
import logo2 from "../../../../assets/initial/img/main-img/logo.png";

export const HeaderMain = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    const userInfo = useSelector((state) => state.toolkit.user);

    const handleOpenAside = () => {
        document.documentElement.classList.add("menu-open");
    };

    const handleCloseAside = () => {
        document.documentElement.classList.remove("menu-open");
    };

    const handleOpenCatalog = () => {
        document.documentElement.classList.toggle("open-catalog");
    }

    const handleCloseCatalog = () => {
        document.documentElement.classList.remove('open-catalog')
    };

    const handleOpenPhone = () => {
        const phoneBtn = document.querySelector("[data-phone]");
        phoneBtn.parentElement.classList.toggle("_active-phone");
    };

    const handleOpenSearch = () => {
        document.documentElement.classList.add('open-search');
    }

    const handleCloseSearch = (evt) => {
        // evt.stopPropagation();
        toast.dismiss();
        document.documentElement.classList.remove('open-search');
        setIsSearchOpen(false);
    }

    const handleSearch = (evt) => {
        evt.preventDefault();
        setSearchQuery('');
        if (!searchQuery.trim()) {
            if (isSearchOpen) {
                toast.info('Будь ласка, введіть коректний запит для пошуку.');
            }  
            return; 
        }
        navigate('/search/' + searchQuery);
        handleCloseSearch()
    }
    


    return (

        <HeaderMainStyled className="header__main main-header">
            <div className="header__overlay" onClick={handleCloseAside}></div>
            <ToastContainer theme="dark"/>
            <HeaderCatalog onClose={handleCloseCatalog}/>
            <HeaderAside onClose={handleCloseAside}/>

            <div className="main-header__container">
                <div className="main-header__row">
                    <div className="main-header__left">
                        <button
                            data-open-menu
                            className="main-header__menu"
                            onClick={handleOpenAside}
                        >
                            <img src={menu} alt="icon"/>
                        </button>

                        <NavLink to={"/"} className="main-header__logo">
                            <picture>
                                <source srcSet={logo} type="image/webp"/>
                                <img src={logo2} alt="img"/>
                            </picture>
                        </NavLink>
                        <button
                            className="main-header__catalog-button"
                            onClick={handleOpenCatalog} //_ => setCatalogOpen(true)
                        >
                            <img src={catalog} alt="icon"/>
                            <span>Каталог товарів</span>
                        </button>
                        <div className="main-header__phone phone-header">
                            <button
                                data-phone
                                className="main-header__button phone-header__button button-icon"
                                onClick={handleOpenPhone}
                            >
                                <img src={phone} alt="icon"/>
                            </button>

                            <HeaderPhone/>
                        </div>
                    </div>
                    <div className="main-header__right">
                        <div className="main-header__search search-header">
                            <form action="#" className="search-header__form" onSubmit={handleSearch}>
                                <div className="search-header__item">
                                    <span className="search-header__icon">
                                        <img src={search} alt="icon"/>
                                    </span>
                                    <input
                                        placeholder="Пошук"
                                        type="text"
                                        className="search-header__input input"
                                        value={searchQuery}
                                        onChange={(evt) => setSearchQuery(evt.target.value.replace(/\s+/g, ' '))}
                                    />
                                    <button className="search-header__button">Знайти</button>
                                </div>
                                <button className="search-header__close button-icon" onClick={handleCloseSearch}>
                                    <img src={closeBlue} alt="icon"/>
                                </button>
                            </form>
                        </div>
                        <button className="main-header__search-open button-icon" onClick={handleOpenSearch}>
                            <img src={search2} alt="icon"/>
                        </button>
                        <div className="header__user">
                            <NavLink to={!!Object.keys(userInfo).length ? '/profile' : '/auth'}
                                     className="main-header__button button-icon">
                                <img src={user} alt="icon"/>
                            </NavLink>
                            {!!Object.keys(userInfo).length && (
                                <p>
                                    <span>{userInfo.firstName}</span>
                                    <a href={"mailto:" + userInfo.email}>{userInfo.email}</a>
                                    <button onClick={(_) => handleExit(dispatch)}>Exit</button>
                                </p>
                            )}
                        </div>
                        <NavLink to={"/basket"} className="main-header__button button-icon">
                            <img src={basket} alt="icon"/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </HeaderMainStyled>
    );
};
