import styled from "styled-components";
import React, { useState } from 'react';
import { FiArrowRight } from "react-icons/fi";


const NewsComponent = styled.div`
    margin-top: 20px;
    margin-left: 50px;
`;
const Category = styled.div`
    margin: 10px;
    padding-top: 2px;
    border-radius: 40px;
    color: white;
    font-size: 11px;
    height: 20px;
    min-width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NewsTextContainer = styled.div`
    display: flex;
    align-items: center;
    width: 750px;
    border-top: 1px solid #ccc;
    ${({ isLast }) => isLast && 'border-bottom: 1px solid #ccc;'}
`;
const NewsTitleContainer = styled.div`
    margin-left: 5px;
    margin-right: 20px;
    width: 450px;
`;
const NewsTitleText = styled.h3`
    font-family: 'YouandiNewKrTitle','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 500;
    color: #222;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
`;
const NewsLink = styled.a`
    text-decoration: none;
`;
const DateContainer = styled.div`
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;
`;
const DateText = styled.p`
    padding: 0;
    margin: 0;
    margin-top: 20px;
    font-size: 13px;
    font-family: 'Pretendard','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 500;
    color: gray;
    padding-left: 8px;
`;
const DaysText = styled.h1`
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
    color: gray;
    font-family: 'YouandiNewKrTitle','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 500;
`;

function NewsList() {
    const [newsList, setNewsList] = useState([ //part배열 생성 후 setPart 함수로 상태값을 업데이트
    {
        id: 1,
        Category: '배구뉴스',
        newsTitle: '1R 출신 189cm 세터의 마지막 인사 “현대캐피탈 코치 이원중도 많은 응원 부탁드립니다”',
        selected: true,
        date: '2023.07',
        days: '06',
        link: 'https://sports.news.naver.com/news?oid=410&aid=0000947962'
    },
    {
        id: 2,
        Category: '배구뉴스',
        newsTitle: '현대캐피탈 실업배구 대회 또 나간다',
        selected: true,
        date: '2023.06',
        days: '29',
        link: 'https://sports.news.naver.com/news?oid=020&aid=0003506502'
    },
    {
        id: 3,
        Category: '배구뉴스',
        newsTitle: '배구로 지역-문화 격차를 뛰어 넘는다 현대캐피탈이 만든 아름다운 문화 모두를 위한 배구교실',
        selected: true,
        date: '2023.06',
        days: '19',
        link: 'https://sports.news.naver.com/news?oid=076&aid=0004021129'
    },
    {
        id: 4,
        Category: '구단소식',
        newsTitle: '현대캐피탈 허수봉 문성민 박상하 FA 전원 잔류 확정',
        selected: true,
        date: '2023.04',
        days: '14',
        link: 'https://www.skywalkers.co.kr/walkerslounge/news/view/896'
    },
    ]);
    return (
        <NewsComponent>
            <ul style={{ padding: '0', margin: '0' }}>
            {newsList.map((news) => (
                <NewsTextContainer key={news.id} isLast={news.id === 4}>
                <DateContainer>
                    <DateText>{news.date}</DateText>
                    <DaysText>{news.days}</DaysText>
                </DateContainer>
                {news.Category === '배구뉴스' ? (
                <Category style={{ backgroundColor: '#3570B5' }}>{news.Category}</Category>
                ) : (
                <Category style={{ backgroundColor: 'green' }}>{news.Category}</Category>
                )}
                <NewsTitleContainer>
                    <NewsLink href={news.link} target="_blank" rel="noopener noreferrer">
                    <NewsTitleText>{news.newsTitle}</NewsTitleText>
                    </NewsLink>
                </NewsTitleContainer>
                <FiArrowRight style={{ fontSize: "24px" , color: "gray"}} />
                </NewsTextContainer>
            ))}
            </ul>
        </NewsComponent>
    );
}

export default NewsList;