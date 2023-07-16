import styled from "styled-components";
import News from "../components/HomeComponents/Home_News/News";
import SkyWalkersMain from "../components/HomeComponents/Home_FirstMain/SkyWalkers";
import IntroPlayers from "../components/HomeComponents/Home_Players/IntroPlayers";
import HomeFooter from "../components/HomeComponents/Home_Footer/HomeFooter";

const HomePageComponent = styled.div`
    margin: 0;
`;

function HomePage() {
    return (
        <HomePageComponent>
            <SkyWalkersMain />
            <News />
            <IntroPlayers />
            <HomeFooter />
        </HomePageComponent>
    );
}

export default HomePage;