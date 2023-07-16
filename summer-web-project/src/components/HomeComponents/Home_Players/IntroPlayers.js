import styled from "styled-components";
import React from "react";

const PlayerComponent = styled.div`
    display: flex; //유연하게 바꾸는 역할
    justify-content: center; // 중간으로 모으는 역할
    width: 100%; //100퍼센트의 중간
    height: 450px; // 임의값
`;
const MainDiv = styled.div`
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    background: #F8F5F5;
`;
const Text1 = styled.p`
    font-family: 'YouandiNewKrTitle','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 900;
    color: #222;
    font-size: 30px;
    margin: 40px;
    margin-left: 110px;
    margin-bottom: 10px;
`;
const Text2 = styled.p`
    font-family: 'Pretendard','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 900;
    color: #686565;
    font-size: 15px;
    margin: 0px;
    margin-left: 230px;
`;
const Text3 = styled.p`
    font-family: 'Pretendard','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 900;
    color: #3f4c6b;
    font-size: 25px;
    margin-top: 80px;
    backdrop-filter: blur(8px);
    text-align: center;
`;
const Text4 = styled.p`
    font-family: 'YouandiNewKrTitle','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 900;
    color: #3f4c6b;
    font-size: 25px;
    margin-top: 20px;
    text-align: center;
`;

function News() {
    return (
        <PlayerComponent>
            <MainDiv>
                <Text1>Walkers Player</Text1>
                <Text2>선수단 소개</Text2>
                <Text3>선수들의 정보가 업데이트 될 예정입니다!</Text3>
                <Text4>COMING SOON ~</Text4>
            </MainDiv>
        </PlayerComponent>
    );
}

export default News;