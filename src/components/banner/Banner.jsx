import {useEffect, useState} from "react";
import axios from "axios";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from "swiper";
import 'swiper/swiper-bundle.css';
import {BannerStyled} from "./Banner.styled";
import { getApiLink } from "../../hooks/getApiLink";
import arrowLeft from '../../assets/initial/img/icons/arrow-left.svg';
import arrowRight from '../../assets/initial/img/icons/arrow-left.svg';


export const Banner = ({apiEndpoint, showNavigation}) => {

    const [settingImage, setSettingImage] = useState([])

    useEffect(() =>{
        axios.get(getApiLink(apiEndpoint)).then(({data}) =>{
            setSettingImage(data.settings)
            console.log('images from swiper', data);
        })
    }, [apiEndpoint])


    return (
        <BannerStyled>
            <div className="banner__container">
                <Swiper 
                    className="banner__slider" 
                    navigation={ showNavigation ? {
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
                            <SwiperSlide key={image.imageName} >
                                <div className="banner__image-ibg">
                                    <img src={getApiLink("v1/public/images/" + image.imageName)} alt=""/>
                                </div>
                            </SwiperSlide>
                        )
                    }
                    <div className="banner__pagination"></div>
                    {showNavigation 
                        ?    <div className="banner__arrows">
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
            </div>
        </BannerStyled>
    );
};
