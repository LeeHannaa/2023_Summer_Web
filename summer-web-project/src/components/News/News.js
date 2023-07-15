import styled from "styled-components";
import NewsList from "./NewsList";
import OneNews from "./OneNews";
import { useNavigate } from 'react-router-dom';

const NewsComponent = styled.div`
    display: flex; //유연하게 바꾸는 역할
    justify-content: center; // 중간으로 모으는 역할
    width: 100%; //100퍼센트의 중간
    height: 800px; // 임의값
`;
const Div = styled.div`
    display: flex; //유연하게
    flex-direction: column; //세로로 보여주는 역할
`;
const TextComponent = styled.div`
    display: flex;
    justify-content: space-between; /* 수평 좌우 정렬 */
`;
const NewsFont = styled.h1`
    font-family: 'YouandiNewKrTitle','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 900;
    color: #222;
`;
const NewsKorFont = styled.span`
    font-size: 13px;
    font-family: 'Pretendard','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 500;
    color: gray;
    padding-left: 8px;
`;
const AddButton = styled.button`
    width: 100px;
    height: 30px;
    background: #5A83B1;
    color: white;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
`;
const ParentContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`;

function News() {
    const navigate = useNavigate();

    const handleAddButtonClick = () => {
      navigate('/addNews'); // Replace '/add-news' with the appropriate route path of AddNews.js
    };
    return (
        <NewsComponent>
            <Div>
            <TextComponent>
                <NewsFont>News<NewsKorFont>뉴스</NewsKorFont></NewsFont>
                <AddButton onClick={handleAddButtonClick}>뉴스 추가하기</AddButton>
            </TextComponent>
            <ParentContainer>
                <OneNews />
                <NewsList />
            </ParentContainer>
            </Div>
        </NewsComponent>
    );
}

export default News;