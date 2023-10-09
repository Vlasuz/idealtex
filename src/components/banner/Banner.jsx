import axios from "axios";
import 'swiper/swiper-bundle.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import {useEffect, useState} from "react";
import {Navigation, Pagination} from "swiper";
import {BannerStyled} from "./Banner.styled";
import {Loader} from "../../components/loader/Loader";
import {getApiLink} from "../../hooks/getApiLink";
import arrowLeft from '../../assets/initial/img/icons/arrow-left.svg';
import arrowRight from '../../assets/initial/img/icons/arrow-left.svg';
import {NavLink, useNavigate} from "react-router-dom";


export const Banner = ({apiEndpoint, showNavigation}) => {
    const [loading, setLoading] = useState(true);
    const [settingImage, setSettingImage] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(getApiLink(apiEndpoint)).then(({data}) => {
            setSettingImage(data.settings);
            setLoading(false);
        })
            .catch((error) => {
                console.error("Ошибка я не получил swiper", error);
                setLoading(false);
            });
    }, [apiEndpoint])


    return (
        <BannerStyled>
            <div className="banner__container">
                {loading ? <Loader/> :
                    <Swiper
                        className="banner__slider"
                        navigation={showNavigation ? {
                            prevEl: ".banner__arrow_prev",
                            nextEl: ".banner__arrow_next",
                        } : false}
                        modules={[Pagination, Navigation]}
                        pagination={{
                            el: ".banner__pagination",
                            clickable: true,
                        }}
                        slidesPerView={1}
                        spaceBetween={100}
                        speed={700}
                        loop={true}
                    >
                        {
                            settingImage.map(image =>
                                <SwiperSlide key={image.imageName}>
                                    <div className="banner__image-ibg">
                                        <NavLink to={image.route}>
                                            <img src={getApiLink("v1/public/images/" + image.imageName)} alt=""/>
                                        </NavLink>
                                    </div>
                                </SwiperSlide>
                            )
                        }
                        <div className="banner__pagination"></div>
                        {showNavigation
                            ? <div className="banner__arrows">
                                <button className="banner__arrow banner__arrow_prev">
                                    <img src={arrowLeft} alt="icon"/>
                                </button>
                                <button className="banner__arrow banner__arrow_next">
                                    <img src={arrowRight} alt="icon"/>
                                </button>
                            </div>

                            : false
                        }
                    </Swiper>
                }
            </div>
        </BannerStyled>
    );
};
