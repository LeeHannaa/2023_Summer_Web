import React from 'react';
import styled from "styled-components";
import AllNewsList from '../components/NewsListComponents/AllNewsList';
import NewsBox from '../components/NewsListComponents/NewsBox';

const AllNewsListPageComponent = styled.div`
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const AllNewsListPage = () => {
  return (
    <AllNewsListPageComponent>
        <AllNewsList />
        <NewsBox />
    </AllNewsListPageComponent>
  );
};

export default AllNewsListPage;