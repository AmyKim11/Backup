var container = document.getElementById('map');
		var options = {
            // 지도 위치 설정
			center: new kakao.maps.LatLng(35.871751599104805, 128.62487743114505),
            //지도 확대 축소
			level: 4
		};
        //지도 생성
		var map = new kakao.maps.Map(container, options);

        var imageSrc = '../img/지도마커.png', // 마커이미지의 주소입니다    
        imageSize = new kakao.maps.Size(220, 45), // 마커이미지의 크기입니다
        imageOption = {offset: new kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
        
        // 마커의 이미지정보를 가지고 있는 마커이미지를 생성합니다
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            markerPosition = new kakao.maps.LatLng(35.871751599104805, 128.62487743114505); // 마커가 표시될 위치입니다

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition, 
            image: markerImage // 마커이미지 설정 
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);