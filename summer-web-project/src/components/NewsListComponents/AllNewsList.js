import React from 'react';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import SkyWalkersLogoImg from "../../assets/img/SkyWalkerLogo.png";

const AddButton = styled.button`
    width: 100px;
    height: 30px;
    background: #5A83B1;
    color: white;
    border: none;
    border-radius: 10px;
    margin-top: 20px;
    cursor: pointer;
    margin-left: 800px;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;
const LogoImg = styled.img`
    width: 76px;
    height: 67px;
    display: flex;
    margin-right: 20px;
`;

const AllNewsList = ({ newsList }) => {
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    navigate('/addNews'); // Replace '/add-news' with the appropriate route path of AddNews.js
  };
  const handleHomeButtonClick = () => {
    navigate('/'); // Replace '/add-news' with the appropriate route path of AddNews.js
  };
  // Handle cases where newsList is undefined or empty
  if (!newsList || newsList.length === 0) {
    return (
      <div>
        <HeaderContainer>
          <LogoImg src={SkyWalkersLogoImg} onClick={handleHomeButtonClick}/>
          <h2>SkyWalker News List Management</h2>
        </HeaderContainer>
        <AddButton onClick={handleAddButtonClick}>뉴스 추가하기</AddButton>
      </div>
    );
  }

  return (
    <div>
      <LogoImg src={SkyWalkersLogoImg} />
      <h2>SkyWalker News List Management</h2>
      <ul>
        {newsList.map((news, index) => (
          <li key={index}>
            <a href={news.newsLink} target="_blank" rel="noopener noreferrer">
              {news.newsTitle}
            </a>
            ({news.category}, {news.date})
          </li>
        ))}
      </ul>
      <AddButton onClick={handleAddButtonClick}>뉴스 추가하기</AddButton>
    </div>
  );
};

export default AllNewsList;


