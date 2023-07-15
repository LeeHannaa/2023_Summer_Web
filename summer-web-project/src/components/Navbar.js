import React from 'react';
import styled from 'styled-components';
import SkyWalkersLogoImg from "../assets/img/SkyWalkerLogo.png";

const NavBarWrapper = styled.nav`
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 10%;
    background-color: none;
    height: 80px;
    margin: 10px;
`;
const LogoImg = styled.img`
    width: 76px;
    height: 67px;
    display: flex;
    margin-right: 20px;
`;
const Content1 = styled.div`
    position: relative;
    color: white;
    font-family: 'YouandiNewKrTitle','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    margin: 0 30px;
    display: flex;
    font-weight: bold;
    font-size: 20px;
    cursor: pointer;
`;

const DropdownContent = styled.div`
  position: absolute;
  margin-top: 10px;
  top: 100%;
  left: 0;
  width: 100px;
  background-color: white;
  color: gray;
  padding: 10px;
  display: none;

  ${Content1}:hover & {
    display: block;
  }
  border-radius: 10px;
`;

const DropdownItem = styled.p`
  font-size: 12px;
  margin: 0;
  padding: 5px 0;
`;



const NavBar = () => {
    const menuItems = [
        {
          label: 'SkyWalkers',
          dropdownItems: ['인사말', '구단소개', '구단연혁', '홈경기장 소개', '복합베이스캠프', '구단역사관'],
        },
        {
          label: 'Team',
          dropdownItems: ['코칭스텝', '플레이어', '응원단'],
        },
        {
          label: 'GameInfo',
          dropdownItems: ['일정 및 결과', '팀기록', '선수기록', '티켓 예매'],
        },
        {
            label: 'Walkers Lounge',
            dropdownItems: ['구단소식', '배구뉴스', '포토갤러리', '동영상갤러리'],
        },
        {
            label: 'Supporters',
            dropdownItems: ['FAQ', '서포터즈소개'],
        },
    ];
    return(
    <NavBarWrapper>
        <LogoImg src={SkyWalkersLogoImg} />
        {menuItems.map((menuItem, index) => (
        <Content1 key={index}>
          {menuItem.label}
          <DropdownContent>
            {menuItem.dropdownItems.map((item, idx) => (
              <DropdownItem key={idx}>{item}</DropdownItem>
            ))}
          </DropdownContent>
        </Content1>
        ))}
    </NavBarWrapper>
    );
};


export default NavBar;