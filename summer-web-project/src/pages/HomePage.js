import styled from "styled-components";
import News from "../components/News/News";
import SkyWalkersMain from "../components/FirstMain/SkyWalkers";

const HomePageComponent = styled.div`
    margin: 0;
`;

function HomePage() {
    return (
        <HomePageComponent>
            <SkyWalkersMain />
            <News />
        </HomePageComponent>
    );
}

export default HomePage;