import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import AddNewsBackground from "../../assets/img/AddNewsBackground.png";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  z-index: 1;
  position: relative;
`;
const BackImgWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;
const BackImg = styled.img`
    width: 100%;
    height: 100%;
    opacity: 0.05;
`;
const Title = styled.p`
  font-size: 24px;
  font-family: 'YouandiNewKrTitle','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
  font-weight: 900;
  color: #222;
`;
const FormInput = styled.input`
  width: 300px;
  height: 30px;
  margin-bottom: 10px;
`;

const AddButton = styled.button`
  width: 100px;
  height: 30px;
  background: #5A83B1;
  color: white;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
`;

const AddForm = () => {

  const navigate = useNavigate();

  const [id, setId] = useState('');
  const [category, setCategory] = useState('');
  const [newsTitle, setNewsTitle] = useState('');
  const [selected, setSelected] = useState(true);
  const [date, setDate] = useState('');
  const [days, setDays] = useState('');
  const [link, setLink] = useState('');

  const handleAddButtonClick = () => {
    // const newNews = {
    //   id: id,
    //   Category: category,
    //   newsTitle: newsTitle,
    //   selected: selected,
    //   date: date,
    //   days: days,
    //   link: link,
    // };

    // Reset the form inputs
    setId('');
    setCategory('');
    setNewsTitle('');
    setSelected(true);
    setDate('');
    setDays('');
    setLink('');

    navigate('/');
  };

  return (
    <FormContainer>
      <BackImgWrapper>
        <BackImg src={AddNewsBackground} />
      </BackImgWrapper>
        <Title>추가할 뉴스 정보를 입력해주세요!</Title>
      <label>Id:</label>
      <FormInput
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <label>Category:</label>
      <FormInput
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <label>News Title:</label>
      <FormInput
        type="text"
        value={newsTitle}
        onChange={(e) => setNewsTitle(e.target.value)}
      />

      <label>Selected:</label>
      <FormInput
        type="checkbox"
        checked={selected}
        onChange={(e) => setSelected(e.target.checked)}
      />

      <label>Date: (ex. 2023.06)</label>
      <FormInput
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label>Days: (ex. 23)</label>
      <FormInput
        type="text"
        value={days}
        onChange={(e) => setDays(e.target.value)}
      />

      <label>Link:</label>
      <FormInput
        type="text"
        value={link}
        onChange={(e) => setLink(e.target.value)}
      />

      <AddButton onClick={handleAddButtonClick}>추가하기</AddButton>
    </FormContainer>
  );
};

export default AddForm;
