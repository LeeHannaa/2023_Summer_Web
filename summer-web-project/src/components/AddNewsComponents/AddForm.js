import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const AddButton = styled.button`
    width: 120px;
    height: 35px;
    background: #5A83B1;
    color: white;
    border: none;
    border-radius: 15px;
    margin-top: 20px;
    margin-right: 30px;
    cursor: pointer;
`;
const CancelButton = styled.button`
    width: 120px;
    height: 35px;
    background: #A9A9A9;
    color: white;
    border: none;
    border-radius: 15px;
    margin-top: 20px;
    cursor: pointer;
`;
const Div = styled.div`
    margin: 20px;
`;
const LabelText = styled.label`
    margin: 20px;
    font-size: 20px;
`;
const NewsIMG = styled.img`
  width: 200px;
  height: 200px;
  align-items: center;
`;
const InputBox = styled.input`
  width: 400px;
  height: 50px;
`;


const AddForm = ({ onAddNews }) => {
  const [newsData, setNewsData] = useState({
    newsLink: '',
    newsTitle: '',
    category: '구단뉴스',
    date: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewsData({ ...newsData, [name]: value });
  };
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // 추가 후에 폼 초기화를 원하면 다음 줄을 추가합니다.
    setNewsData({ newsLink: '', newsTitle: '', category: '구단뉴스', date: '' });
    navigate('/allNews');
  };
  const handleCancelButtonClick = () => {
    navigate('/allNews'); // Replace '/add-news' with the appropriate route path of AddNews.js
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      const imageUrl = URL.createObjectURL(selectedFile);
      setSelectedImage(imageUrl);
    }
  };


  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>SkyWalker 뉴스 추가하기</h2>
      <Div>
        <LabelText>뉴스링크</LabelText>
        <InputBox
          type="text"
          name="newsLink"
          value={newsData.newsLink}
          onChange={handleInputChange}
          required
        />
      </Div>
      <Div>
        <LabelText>뉴스제목</LabelText>
        <InputBox
          type="text"
          name="newsTitle"
          value={newsData.newsTitle}
          onChange={handleInputChange}
          required
        />
      </Div>
      <Div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <LabelText>카테고리</LabelText>
        <div class="form-floating">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example" style={{ width: '410px', height: '55px' }}>
            <option value="구단뉴스" selected>구단뉴스</option>
            <option value="배구뉴스">배구뉴스</option>
          </select>
        </div>
      </Div>
      <Div>
        <LabelText>뉴스날짜</LabelText>
        <InputBox
          type="date"
          name="date"
          value={newsData.date}
          onChange={handleInputChange}
          required
        />
      </Div>
      <Div> 
        <LabelText>이미지</LabelText>
        <InputBox
          type="file"
          name="newsImage"
          onChange={handleImageChange}
          required
        />
        <br></br>
        {selectedImage && (
        <NewsIMG
          src={selectedImage}
          alt="Selected Image"
          style={{ marginLeft: '140px' }}
        />
      )}
      </Div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
      <AddButton type="submit">추가</AddButton>
      <CancelButton onClick={handleCancelButtonClick}>취소</CancelButton>
      </div>
    </form>
  );
};

export default AddForm;

