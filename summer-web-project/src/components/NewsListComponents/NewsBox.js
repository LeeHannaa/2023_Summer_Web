import styled from "styled-components";
import React, { useState } from 'react';
import MainNews from "../../assets/img/MainNews.jpeg";
import SkyWalkersMain from "../../assets/img/SkyWalkersMain.jpg";
import SkyWalkerLogo from "../../assets/img/SkyWalkerLogo.png";
import { FaTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import { Modal } from 'react-bootstrap';

const NewsComponent = styled.div`
    margin-top: 20px;
`;
const NewsTextContainer = styled.div`
    display: flex;
    padding: 10px;
    align-items: center;
    width: 900px;
    border-top: 1px solid #ccc;
    ${({ isLast }) => isLast && 'border-bottom: 1px solid #ccc;'}
`;
const NewsTitleContainer = styled.div`
    margin-left: 30px;
    margin-right: 20px;
    width: 520px;
`;
const NewsTitleText = styled.h3`
    padding: 0;
    margin: 0;
    font-family: 'YouandiNewKrTitle','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: bold;
    color: #222;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex-grow: 1;
`;
const NewsLink = styled.a`
    text-decoration: none;
    font-size: 10px;
    color: gray;
`;
const DateText = styled.p`
    padding: 0;
    margin: 0;
    margin-top: 5px;
    font-size: 11px;
    font-family: 'Pretendard','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 500;
    color: #222222;
`;
const NewsContentText = styled.p`
    padding: 0;
    margin: 0;
    height: 50px;
    margin-top: 15px;
    margin-bottom: 20px;
    font-size: 12px;
    font-family: 'Pretendard','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 500;
    color: #222222;
`;
const MainImg = styled.img`
    width: 268px;
    height: 170px;
`;

function NewsBox({ currentPage, itemsPerPage }) {
    const [newsList, setNewsList] = useState([ //part배열 생성 후 setPart 함수로 상태값을 업데이트
    {
        id: 1,
        img: MainNews,
        Category: '배구뉴스',
        newsTitle: '1R 출신 189cm 세터의 마지막 인사 “현대캐피탈 코치 이원중도 많은 응원 부탁드립니다”',
        newsContent: '이제는 믿고 보는 선수가 됐다. 소속팀인 현대캐피탈을 넘어 대한민국 남자 배구 대표팀의 주전 아포짓으로 성장했다. 유니폼 가슴에 단 태극마크가 가지고 있는 많은 의미를 이젠 잘 알고 있다. 국가대표 허수봉의 도전은 이제 시작이다.',
        selected: true,
        date: '2023.07',
        days: '06',
        link: 'https://sports.news.naver.com/news?oid=410&aid=0000947962'
    },
    {
        id: 2,
        img: SkyWalkersMain,
        Category: '배구뉴스',
        newsTitle: '현대캐피탈 실업배구 대회 또 나간다',
        newsContent: '현대캐피탈 허수봉 문성민 박상하 FA 전원 잔류 확정',
        selected: true,
        date: '2023.06',
        days: '29',
        link: 'https://sports.news.naver.com/news?oid=020&aid=0003506502'
    },
    {
        id: 3,
        img: SkyWalkerLogo,
        Category: '배구뉴스',
        newsTitle: '배구로 지역-문화 격차를 뛰어 넘는다 현대캐피탈이 만든 아름다운 문화 모두를 위한 배구교실',
        newsContent: '29일 한국실업배구연맹에 따르면 현대캐피탈은 2023 한국실업배구 단양 대회에 이시우29 함형진28 김선호24 홍동선22·이상 아웃사이드 히터 정태준23·미들 블로커 이현승22 이준협22·이상 세터 이준승21·리베로 등를 출전시키기로 했다.',
        selected: true,
        date: '2023.06',
        days: '19',
        link: 'https://sports.news.naver.com/news?oid=076&aid=0004021129'
    },
    {
        id: 4,
        img: MainNews,
        Category: '구단소식',
        newsTitle: '현대캐피탈 허수봉 문성민 박상하 FA 전원 잔류 확정',
        newsContent: '남자프로배구 현대캐피탈 스카이워커스는 최근 스카이워커스 유스 클럽데이를 성황리에 마무리 했다. 연고지 천안을 비롯해 충북 청주 전북 무주 지역 학생과 학부모 약 400명이 참가했다.',
        selected: true,
        date: '2023.04',
        days: '14',
        link: 'https://www.skywalkers.co.kr/walkerslounge/news/view/896'
    },
    {
        id: 5,
        img: MainNews,
        Category: '구단소식',
        newsTitle: '우승 노리는 현대캐피탈 이유 있는 이크바이리 선택',
        newsContent: '2023~24시즌 V리그 남자부에서 뛸 외국인 선수들이 결정됐다. 지난 시즌2022~23 준우승팀 현대캐피탈의 선택이 유독 주목 받고 있다. KOVO한국배구연맹은 지난 6일한국시간부터 사흘 동안 튀르키예 이스탄불에서 남자부 외국인 선수 트라이아웃을 진행했다.',
        selected: true,
        date: '2023.05',
        days: '10',
        link: 'https://sports.news.naver.com/news?oid=241&aid=0003274533'
    },
    ]);
    //update
    const [showModal, setShowModal] = useState(false);

    const handleUpdateClick = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };
    //delete
    const handleIconClick = () => {
        const result = window.confirm('이 뉴스를 정말 지우겠습니까?');
        if (result) {
          console.log('삭제가 진행되었습니다.');
        } else {
          console.log('취소되었습니다.');
        }
      };
      
    return (
        <NewsComponent>
            <ul style={{ padding: '0', margin: '0' }}>
            {newsList.map((news) => (
                <NewsTextContainer isLast={news.id % 4 === 0}>
                    <MainImg src={news.img} />
                <NewsTitleContainer>
                    <NewsTitleText>{news.newsTitle}</NewsTitleText>
                    <DateText>{news.date}.{news.days}</DateText>
                    <NewsContentText>{news.newsContent}</NewsContentText>
                    <NewsLink href={news.link} target="_blank" rel="noopener noreferrer">[뉴스 원문 보기]</NewsLink>
                </NewsTitleContainer>
                <FaPencilAlt style={{ fontSize: "15px", marginRight: "10px"}} onClick={handleUpdateClick} />
                <FaTrashAlt style={{ fontSize: "15px" }} onClick={handleIconClick} />
                </NewsTextContainer>
            ))}
            </ul>


                <Modal show={showModal} onHide={handleCloseModal}>
                    {/* 모달창의 내용을 여기에 작성합니다. */}
                    <Modal.Header>
                        <Modal.Title>내용 수정하기</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        뉴스 내용 뜨고 수정할 페이지 뜰 예정
                    </Modal.Body>
                    <Modal.Footer>
                    <button onClick={handleCloseModal}>수정</button>
                    <button onClick={handleCloseModal}>닫기</button>
                    </Modal.Footer>
                </Modal>


        </NewsComponent>
    );
}

export default NewsBox;