import styled from "styled-components";
import React from "react";

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #83a4d4, #b6fbff);
  padding: 20px;
  text-align: center;
`;
const ClonedPageLink = styled.a`
  color: #222;
  font-weight: bold;
  font-size: 16px;
  text-decoration: none;
  margin-left: 10px;

  &:hover {
    text-decoration: underline;
  }
`;
const GitHubLink = styled.a`
  color: #222;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;


function HomeFooter() {
    return (
      <FooterContainer>
        <p>
          <ClonedPageLink href="https://www.skywalkers.co.kr/" target="_blank" rel="noopener noreferrer">
            SkyWalkers Website
          </ClonedPageLink>
          <span> | </span>
          Cloned Website Created by LeeHannaa | Find me on{' '}
          <GitHubLink href="https://github.com/LeeHannaa/2023_Summer_Web.git" target="_blank" rel="noopener noreferrer">
            GitHub
          </GitHubLink>
        </p>
      </FooterContainer>
    );
}

export default HomeFooter;