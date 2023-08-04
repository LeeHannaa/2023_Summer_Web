import Modal from 'react-modal';
import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const ModalStyles = {
    content: {
        position: 'absolute',
        width: '600px',
        height: '800px',
        borderRadius: '10px',
        borderStyle : 'none',
        background: 'linear-gradient(to right, #7799BC, #82C6F3)',
        margin: 'auto',
        padding: '0',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)',
        zIndex: '2',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      },
      overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.50)',
        zIndex: '2',
      },
  };
const ModalLabel = styled.p`
  font-weight: bold;
  margin: 1px;
  padding: 0;
`;
const ModalInput = styled.input`
  width: 400px;
  height: 80px;
`;
const ModalTextarea = styled.textarea`
  width: 400px;
  height: 80px;
`;
const ModalSelect = styled.select`
  width: 400px;
  height: 40px;
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ModalButton = styled.button`
  width: 120px;
  height: 40px;
  border-radius: 24px;
  margin: 20px;
  background: var(--gray-10, #F8F8F8);
  text-align: center;
  border: 0;
  cursor: pointer;
  font-size: 14px;
`;
const NewsIMG = styled.img`
  width: 100px;
  height: 100px;
  padding: 0;
  margin: 0;
`;

const NewsModal = ({ isOpen, onRequestClose, news, onSaveChanges }) => {
    Modal.setAppElement('#root'); 
    const [editedNews, setEditedNews] = useState({ ...news });
    useEffect(() => {
        setEditedNews({ ...news });
    }, [news]);
    const [selectedImage, setSelectedImage] = useState(null);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      const selectedFile = e.target.files && e.target.files[0];

      if (selectedFile) {
        const imageUrl = URL.createObjectURL(selectedFile);
        setSelectedImage(imageUrl);
      }
      setEditedNews((prevNews) => ({
        ...prevNews,
        [name]: value,
      }));
    };
  
    const handleSaveChanges = () => {
        // 수정된 뉴스 내용을 저장하는 로직 추가 (ex: API 호출, 상태 업데이트 등)
        onSaveChanges(editedNews); // 수정된 뉴스 정보를 NewsBox 컴포넌트로 전달
        onRequestClose(); // 모달 닫기
    };
  
    return (
      <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={ModalStyles}>
        <h2>뉴스 내용 수정하기</h2>
        <div>
          <ModalLabel>뉴스제목</ModalLabel>
          <ModalTextarea
            type="text"
            name="newsTitle"
            value={editedNews.newsTitle}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <ModalLabel>뉴스내용</ModalLabel>
          <ModalTextarea
            name="newsContent"
            value={editedNews.newsContent}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <div class="form-floating">
          <ModalLabel>카테고리</ModalLabel>
          <ModalSelect className="form-select" id="floatingSelect" aria-label="Floating label select example" name="Category" value={editedNews.Category} onChange={handleInputChange}>
            <option value="구단뉴스">구단뉴스</option>
            <option value="배구뉴스">배구뉴스</option>
          </ModalSelect>
          </div>
        </div>
        <div>
          <ModalLabel>뉴스날짜</ModalLabel>
          <ModalInput
            type="date"
            name="date"
            value={editedNews.date}
            onChange={handleInputChange}
            style={{height: "50px"}}
            required
        />
        </div>
        <div>
          <ModalLabel>뉴스링크</ModalLabel>
          <ModalInput
            name="newsLink"
            value={editedNews.link}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <ModalLabel>이미지</ModalLabel>
          <ModalInput
            type="file"
            name="newsImg"
            onChange={handleInputChange}
          />
        </div>
        {selectedImage && (
        <NewsIMG
          src={selectedImage}
          alt="Selected Image"
        />
      )}
        <ButtonContainer>
            <ModalButton onClick={handleSaveChanges}>수정</ModalButton>
            <ModalButton onClick={onRequestClose}>닫기</ModalButton>
        </ButtonContainer>
      </Modal>
    );
  };
  

export default NewsModal;