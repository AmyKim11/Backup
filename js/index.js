
let clientsImg = document.querySelectorAll(".client_CI");
let clientImgWrap = document.querySelector("ul"); 
let plusButton = document.querySelector(".button");  

// const smallSize = window.matchMedia("(max-width: 940px)");
// const middleSize = window.matchMedia("(min-width: 941px)");
// const wideSize = window.matchMedia("(max-width: 1217px)");
let clientArray = [];

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
      
      if( clientsImg[26]){
         plusButton.style.display = 'none';
         console.log(1); 
      }
   
   }

   function width940(){
      for (let i = 0; i < clientsImg.length; i++) {
            setTimeout(function () {
               clientsImg[i].style.opacity = 1;
            }, i * 200)
      }

      if( clientsImg[26].style.opacity === 1 ){
         plusButton.style.display = 'none'; 
      }
     
   }
   // clientsImagesClass();
   // clearTimeout(clientsImagesClass, width1217, width940);
   let startAni = true;
   let $BLOCK = 'block';
   let NONE =  'none';
   let sNum1 = [24, 27];
   let sNum2 = [12, 27];   
   const clientListAni = ()=> {
    
      if(window.innerWidth > 1218 ){
         clientsImagesClass();
         startAni = false;
      } else if(window.innerWidth >= 941 && window.innerWidth <= 1218){
         width1217(); 
         startAni = false;
        
         buttonClickWidth1218(NONE, sNum1[0], sNum1[1]);
         // width940();
      
      } else if(window.innerWidth < 941){
         width940();
         startAni = false;
         buttonClickWidth1218(NONE, sNum2[0], sNum2[1]);
      }
   }

   for(let b=0;b<clientsImg.length;b++){
      clientArray.push(clientsImg[b]);
   }
  
  
   clientListAni();

   

   function buttonClickWidth1218(BLOCK, num1, num2) {
      let sliceArray = [];
      sliceArray = clientArray.slice(num1, num2);
      console.log(sliceArray);
      for(let s = 0; s < sliceArray.length;s++){
      sliceArray[s].style.display = BLOCK;
    }
  
   }

   // 플러스 버튼 눌렀을때 나머지 로고 표시
   const clickButtonEvent = () => {
      buttonClickWidth1218($BLOCK);
      let e =1;
      for(let v = 24;v<clientsImg.length;v++){
         e++;
         setTimeout(function () {
            clientsImg[v].style.opacity = 1;
         }, e * 200)
      }
      plusButton.classList.add('noshow');
    
   }


   // console.log(buttonClickWidth1218);
   plusButton.addEventListener("click", clickButtonEvent);
   // window.addEventListener("resize", clientListAni);
   // plusButton.removeEventListener("click", clickButtonEvent);
   window.clearTimeout(clientListAni);
   

// if(){
//    plusButton.classList.add('noshow');
// }