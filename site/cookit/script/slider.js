const sliderInner = document.querySelector(".slider"); //.slider__inner를 변수(sliderInner)에 저장 //이미지 움직이는 영역
const slider = document.querySelectorAll(".slider li"); //.slider를 변수(slider)에 저장 //5개의 이미지
let currentIndex = 0; //첫번쨰 이미지 //현제 보이는 이미지
let sliderCount = slider.length //이미지의 갯수(slider.length)를 변수(sliderCount)에 저장

//setInterval(반복실행 할 함수,주기(딜레이))
setInterval(()=>{
    //console.log(currentIndex); //이미지 번호 확인

    //조건문 : 조건 [currentIndex < sliderCount-1]가 참이면 [currentIndex++]을 실행 거짓이면 [currentIndex = 0;]을 실행
    (currentIndex < sliderCount-1) ? currentIndex++ : currentIndex = 0;

    //gsap 슬라이더 애니메이션 이용
    gsap.to(sliderInner, { //gsap.js에 저장된 함수 gsap 실행
        duration: 0.4, //속도 0.4초
        left: -800 * currentIndex, //왼쪽으로 800px씩 이동
        ease: "slow(0.7, 0.7, false)" //슬라이더 애니메이션
    })
},2000)