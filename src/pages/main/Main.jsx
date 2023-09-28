import Card from "../../components/card/Card";
import {useEffect, useState} from "react";
import {Links} from "./components/links/Links";
import {Banner} from '../../components/banner/Banner'
import {Categories} from "./components/categories/Categories";
import {Sales} from "./components/sales/Sales";
import {Text} from "./components/text/Text";
import {useParams} from "react-router-dom";
import axios from "axios";
import {getApiLink} from "../../hooks/getApiLink";


export const Main = () => {

    return (
        <main className={'page'}>
            <Links/>

            <Banner apiEndpoint={'v1/public/settings/homeFirstBannersAd'} showNavigation={true}/>

            <Categories/>

            <Sales/>

            <Banner apiEndpoint={'v1/public/settings/homeSecondBannersAd'} showNavigation={false}/>

            <Text/>
        </main>
    );
}