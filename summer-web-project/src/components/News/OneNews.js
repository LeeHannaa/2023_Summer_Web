import styled from "styled-components";
import MainNews from "../../assets/img/MainNews.jpeg";

const NewsComponent = styled.div`
    margin-top: 20px;
`;
const MainImg = styled.img`
    border-radius: 20px;
    width: 490px;
    height: 272px;
`;
const Category = styled.div`
    margin-top: 10px;
    padding-top: 2px;
    border-radius: 40px;
    background-color:  #3570B5;
    color: white;
    font-size: 11px;
    width: 60px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const NewsTextContainer = styled.div`
    display: flex;
    align-items: center;
    width: 490px;
`;
const NewsTitleText = styled.h3`
    font-family: 'YouandiNewKrTitle','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 500;
    color: #222;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;
const DateText = styled.p`
    font-size: 13px;
    font-family: 'Pretendard','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 500;
    color: gray;
    padding-left: 8px;
`;

function OneNews() {
    return (
        <NewsComponent>
            <a href="https://sports.news.naver.com/news?oid=530&aid=0000009083" target="_blank" rel="noreferrer">
            <MainImg src={MainNews} alt="example" />
			</a>
            <Category>배구뉴스</Category>
            <NewsTextContainer>
                <NewsTitleText>“국가대표 허수봉입니다” 가슴에 단 태극마크 그 이상의 책임감</NewsTitleText>
                <DateText>2023.07.09</DateText>
            </NewsTextContainer>
        </NewsComponent>
    );
}

export default OneNews;