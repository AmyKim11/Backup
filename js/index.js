let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let clientsImg = document.querySelectorAll(".client_CI");
let clientImgWrap = document.querySelector("ul"); 
let plusButton = document.querySelector(".button");  
// let countVisible = document.querySelectorAll("li[style='display: none']");
// function b (){
//    document.write(countVisible);
// }
// b();
let clientArray = [];
window.onload = function() {
   window.addEventListener("scroll", function(e) {
      scrollEvent();
      e.preventDefault(); 
   });
}
function  clientsImagesClass () {
   // let d = i+1;
   // clientsImg.className = classN;
   // clientImgWrap = parent;
   // clientsImg[i].style.animation = `0.${i}1s ease-in 0.1s`;
   // setTimeout(() => {
   //    clientsImagesClass(clientsImg[i], clientImgWrap);
   // }, i*1000);
      
      let v = 8;
      for (let i = 0; i < clientsImg.length; i++) {
         
         if (i < 9) {
            setTimeout(function () {
               clientsImg[i].style.opacity = 1;
            }, i * 200)
         } else if (i >= 9 && i < 18) {
            let j = i + v;
            let e = 26;
            v = v - 2;
            setTimeout(function () {
               clientsImg[j].style.opacity = 1;
               // i=i+1;
   
            }, (e - j) * 200)
   
         } else if(i>=18) {
               setTimeout(function () {
                  clientsImg[i].style.opacity = 1;
               }, i * 200)
            }
          
         }
        
   }

   function width1217(){
         
   let v = 7;
   for (let i = 0; i < clientsImg.length-3; i++) {
      if (i < 8) {
         setTimeout(function () {
            clientsImg[i].style.opacity = 1;
         }, i * 200)
      } else if (i >= 8 && i < 16) {
         let j = i + v;
         let e = 23;
         v = v - 2;
         setTimeout(function () {
            clientsImg[j].style.opacity = 1;
            // i=i+1;

         }, (e-j) * 200)

      } else if(i>=16) {
            setTimeout(function () {
               clientsImg[i].style.opacity = 1;
            }, i * 200)
         }
       
      }
      
   
   }

   

   function width940(){
      for (let i = 0; i < clientsImg.length-15; i++) {
            setTimeout(function () {
               clientsImg[i].style.opacity = 1;
            }, i * 200)
      }

      // if( clientsImg[26].style.opacity === 1 ){
      //    plusButton.style.display = 'none'; 
      // }
     
   }
   // clientsImagesClass();
   // clearTimeout(clientsImagesClass, width1217, width940);
   let startAni = true;
   let $BLOCK = 'block';
   let NONE =  'none';
   let sNum1 = [24, 27];
   let sNum2 = [12, 27];   
   const clientListAni = ()=> {
    
      if(windowWidth > 1218 ){
         clientsImagesClass();
         plusButton.style.display = 'none';
         startAni = false;
         console.log(windowWidth);
      } else if(windowWidth >= 941 && windowWidth <= 1218){
         width1217();
         // console.log(clientsImg[26]);
         // if(clientsImg[26].style.opacity == 1){
         //    console.log('여기');
         //    plusButton.style.display = 'none';
         // } else{
         //    console.log("here to");
         //    plusButton.style.display = 'block';
         // }
         startAni = false;
        console.log("테스트")
       
         // buttonClickWidth1218(NONE, sNum1[0], sNum1[1]);
         // width940();
         // console.log(windowWidth);
      
      } else if(windowWidth < 941){
         width940();
         startAni = false;
         // buttonClickWidth1218(NONE, sNum2[0], sNum2[1]);
         // console.log(windowWidth);
      }
   }

   for(let b=0;b<clientsImg.length;b++){
      clientArray.push(clientsImg[b]);
   }
   
  
// 해상도 마다 숨겨진 로고 갯수 및 해당 갯수 로고 안보이게 스타일 줌.
   function buttonClickWidth1218(BLOCK, num1, num2) {
      let sliceArray = [];
      sliceArray = clientArray.slice(num1, num2);
      // console.log(sliceArray);
      for(let s = 0; s < sliceArray.length;s++){
      sliceArray[s].style.display = BLOCK;
    }
   //  console.log('나머지로고')
   }

   //플러스 버튼 눌렀을때 나머지 로고 애니메이션 실행.
   function hiddenAni(startNum){
      let e =1;
      for(let v = startNum;v<clientsImg.length;v++){
         e++;
         setTimeout(function () {
            clientsImg[v].style.opacity = 1;
         }, e * 200)
      }
   }

   // 플러스 버튼 눌렀을때 나머지 로고 표시
   const clickButtonEvent = () => {
      buttonClickWidth1218($BLOCK);
      if(windowWidth >= 941 && windowWidth <= 1218){
         hiddenAni(24);
      } else if(windowWidth < 941){
         hiddenAni(12);
      }
 
      // plusButton.classList.add('noshow');
      // console.log(clientsImg[26].style.display);
      if(clientsImg[26].style.display == 'block'){
         console.log('여기');
         plusButton.style.display = 'none';
      } else{
         console.log("here to");
         plusButton.style.display = 'block';
      }
   }
 // clientListAni();
 let stop = true;
 let scrollEvent = function() {
      
   // 사용자 모니터 화면 높이 + 스크롤이 움직인 높이
   const scrollY = window.scrollY;
   const innerHeight = window.innerHeight;
   const scroll = (innerHeight * 0.9) + scrollY;

   // 애니메이션 효과를 넣을 DOM 객체 배열
   // const itemList = document.querySelectorAll(".client ul li");
   // let array = [];
   // for(let i = 0; i < itemList.length; i++) {
   //     array.push(itemList[i]);
   // }
   // console.log(scroll);
   
   Array.prototype.forEach.call(clientsImg, function(li) {
      console.log(li.offsetTop);
      // 객체 위치와 높이 비교 : 화면에 표출되는 높이인지 체크
      if(li.offsetTop < scroll) {
         clientListAni();
         plusButton.addEventListener("click", clickButtonEvent);
         // console.log('스크롤');
         // window.clearTimeout(clientListAni);
       } 
       
  });

}
scrollEvent();
   // console.log(buttonClickWidth1218);

   // window.addEventListener("scroll", scrollEvent);
 

   
