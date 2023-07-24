import styled from "styled-components";
import News from "../components/HomeComponents/Home_News/News";
import SkyWalkersMain from "../components/HomeComponents/Home_FirstMain/SkyWalkers";
import IntroPlayers from "../components/HomeComponents/Home_Players/IntroPlayers";
import HomeFooter from "../components/HomeComponents/Home_Footer/HomeFooter";
import Kakaomap from "../components/HomeComponents/Home_Map/Kakaomap";

const HomePageComponent = styled.div`
    margin: 0;
`;

function HomePage() {
    return (
        <HomePageComponent>
            <SkyWalkersMain />
            <News />
            <IntroPlayers />
            <Kakaomap />
            <HomeFooter />
        </HomePageComponent>
    );
}

export default HomePage;