// 변수설정
const newAlbumWrap = document.querySelector(".newAlbum__wrap")         //슬라이드
const newAlbumImg = newAlbumWrap.querySelector(".newAlbum__img");      //슬라이드 보이는 영역
const newAlbumSlider = newAlbumImg.querySelector(".newAlbum__slider"); //슬라이드 움직이는 영역
const slider = newAlbumImg.querySelectorAll(".slider");                //슬라이들
const newAlbumDot = newAlbumWrap.querySelector(".newAlbum__dot");      //닷 버튼 메뉴

let currentIndex = 0                            //현재 슬라이드
let sliderWidth = 100;                          //슬라이드 가로 값
let sliderLength = slider.length;               //슬라이드 갯수
let sliderFirst = slider[0];                    //첫번째 슬라이드
let sliderLast = slider[sliderLength - 1];      //마지막 슬라이드
let cloneFirst = sliderFirst.cloneNode(true);   //첫번째 슬라이드 복사
let cloneLast = sliderLast.cloneNode(true);     //마지막 슬라이드 복사
// let posInitial ="";
let dotIndex = "";                               //닷 메뉴
let sliderTimer = "";                            //자동 플레이
let interval = 3000;                             //setInterval 간격

// 슬라이드 복사
newAlbumSlider.appendChild(cloneFirst);
newAlbumSlider.insertBefore(cloneLast, sliderFirst);

// 슬라이드 움직이지
function gotoSlider(index){
    // 1 2 3
    // 첫번째 슬라이드 : left = -100%
    // 두번째 슬라이드 : left = -200%
    // 세번째 슬라이드 : left = -300%
    newAlbumSlider.style.left = -sliderWidth * (index + 1) + "%";
    currentIndex = index;
    if(currentIndex!=1 && currentIndex!=2){
        dotChange(0);
    } else {
        dotChange(currentIndex);
    }
    
    // 애니메이션 추가
    newAlbumSlider.classList.add("transition");
}

// 슬라이드 무한
newAlbumSlider.addEventListener("transitionend", () => {
    // 트레이션 제거
    newAlbumSlider.classList.remove("transition");
    //처음 슬라이드일 때
    if(currentIndex == -1){
        newAlbumSlider.style.left = -(sliderLength * sliderWidth) + "%";
        currentIndex = sliderLength -1;
    }
    //마지막 슬라이드일 때
    if(currentIndex == sliderLength){
        newAlbumSlider.style.left = -(1 * sliderWidth) + "%";
        currentIndex = 0;
        // dotChange(0);
    }
});

// 자동 플레이 시작
function autoPlay(){
    sliderTimer = setInterval(() => {
        gotoSlider(currentIndex + 1);
    }, interval);
}
autoPlay();

// 자동 플레이 정지
function stopPlay(){
    clearInterval(sliderTimer);
}

// 닷 메뉴 추가
function dotInit(){
    dotIndex += "<span class='material-icons dot'>radio_button_checked</span>";
    for(let i=1; i<slider.length; i++){
        dotIndex += "<span class='material-icons dot'>radio_button_unchecked</span>";
    }
    dotIndex += "<span class='material-icons play'>play_arrow</span>";
    newAlbumDot.innerHTML = dotIndex;
}
dotInit();

// 변수 저장
const newAlbumDotDot = newAlbumDot.querySelectorAll(".dot");   //닷 버튼들
const newAlbumDotPlay = newAlbumDot.querySelector(".play");    //플레이 버튼

// 닷 메뉴 체인지
function dotChange(e){
    for(let i=0; i<newAlbumDotDot.length; i++){
        newAlbumDotDot[i].innerText = "radio_button_unchecked";
    }
    if(slider[e]){
        newAlbumDotDot[e].innerText = "radio_button_checked";
    }
}

// 닷 메뉴 이동
for(let i=0; i<newAlbumDotDot.length; i++){
    newAlbumDotDot[i].addEventListener("click", () => {
        newAlbumSlider.style.left = -sliderWidth * (i + 1) + "%";
        currentIndex = i
        dotChange(i);
    })
}

// 닷 메뉴 플레이
newAlbumDotPlay.addEventListener("click", () => {
    if(newAlbumDotPlay.innerText == "play_arrow"){
        newAlbumDotPlay.innerText = "pause";
        stopPlay();
    } else {
        newAlbumDotPlay.innerText = "play_arrow";
        autoPlay();
    }
})

// 마우스 올라갔을때 자동 플레이 정지
newAlbumWrap.addEventListener("mouseenter", ( )=> {
    stopPlay();
})

// 마우스 떠낫을때 자동 플레이 시작
newAlbumWrap.addEventListener("mouseleave", ( )=> {
    if(newAlbumDotPlay.innerText == "play_arrow"){
        autoPlay();
    } else {
        stopPlay();
    }
})