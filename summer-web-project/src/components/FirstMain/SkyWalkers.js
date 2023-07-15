import styled from "styled-components";
import React from "react";
import SkyWalkersImg from "../../assets/img/SkyWalkersMain.jpg";
import NavBar from "../Navbar";

const NewsComponent = styled.div`
    display: flex; //유연하게 바꾸는 역할
    justify-content: center; // 중간으로 모으는 역할
    width: 100%; //100퍼센트의 중간
    height: 680px; // 임의값
`;
const Div = styled.div`
    display: flex; //유연하게
`;
const MainImgDiv = styled.div`
    height: 610px;
    padding: 0;
    margin: 0;
    overflow: hidden; /* 이미지를 컨테이너에 맞게 잘라줌 */
`;
const MainImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover; /* 이미지 비율 유지하면서 컨테이너에 꽉 차도록 설정 */
`;

function News() {
    return (
        <NewsComponent>
            <Div>
                <NavBar />
                <MainImgDiv>
                    <MainImg src= {SkyWalkersImg} />
                </MainImgDiv>
            </Div>
        </NewsComponent>
    );
}

export default News;