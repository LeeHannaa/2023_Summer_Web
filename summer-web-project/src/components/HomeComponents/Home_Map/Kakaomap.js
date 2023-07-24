import React, { useEffect } from 'react';
import styled from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";

const { kakao } = window;

const Text1 = styled.p`
    font-family: 'YouandiNewKrTitle','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 900;
    color: #2E3F85;
    font-size: 30px;
    margin: 40px;
    margin-left: 100px;
    margin-bottom: 10px;
`;
const Text2 = styled.p`
    font-family: 'Pretendard','Apple SD Gothic Neo', 'Malgun Gothic', arial, sans-serif;
    font-weight: 900;
    color: #6876AF;
    font-size: 15px;
    margin: 0px;
    margin-left: 150px;
    margin-bottom: 50px;
`;

function Kakaomap() {
    useEffect(() =>{
        const mapContainer = document.getElementById('map'); // 지도를 표시할 div 
        const options = { 
            center: new kakao.maps.LatLng(36.821, 127.1142), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, options); 
        // 마우스 드래그로 지도 이동 가능여부를 설정합니다
        map.setDraggable(false);    

        // 마커가 표시될 위치입니다 
        var markerPosition  = new kakao.maps.LatLng(36.821, 127.1142); 

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        var iwContent = '<div style="padding:5px;"> <a href="http://kko.to/EHkkv9fF8z" style="color:#5C7DFF; text-decoration: none;" target="_blank"> 홈 경기장 길찾기 </a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(36.821, 127.1142); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        var infowindow = new kakao.maps.InfoWindow({
            position : iwPosition, 
            content : iwContent 
        });
        
        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker); 
    }, [])

  return (
    <>
        <Text1>Skywalkers 홈 경기장 오시는 길</Text1>
        <Text2><FaMapMarkerAlt/>충남 천안시 서북구 번영로 208 (천안종합운동장 내) 유관순 체육관</Text2>
        <div id="map" style={{width: '80%', height: '500px', margin: '0 auto', marginBottom: '50px'}}></div>
    </>
    
  );
}

export default Kakaomap;
