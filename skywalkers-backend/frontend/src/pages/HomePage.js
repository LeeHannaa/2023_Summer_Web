import React, { useState } from 'react';
import styled from "styled-components";
import News from "../components/HomeComponents/Home_News/News";
import SkyWalkersMain from "../components/HomeComponents/Home_FirstMain/SkyWalkers";
import IntroPlayers from "../components/HomeComponents/Home_Players/IntroPlayers";
import HomeFooter from "../components/HomeComponents/Home_Footer/HomeFooter";
import Kakaomap from "../components/HomeComponents/Home_Map/Kakaomap";
import axios from 'axios'

const HomePageComponent = styled.div`
    margin: 0;
`;

function HomePage() {
    const [message, setMessage] = useState('');

    axios.get('http://localhost:8080/skywalkers_backend_war_exploded/news/list')
        .then(response => {
            // 성공적인 응답을 처리합니다.
            console.log(response.data);
            setMessage(response.data);
        })
        .catch(error => {
            console.error(error);
        });
    return (
        <HomePageComponent>
            <p>{message}</p>
            <SkyWalkersMain />
            <News />
            <IntroPlayers />
            <Kakaomap />
            <HomeFooter />
        </HomePageComponent>
    );
}

export default HomePage;