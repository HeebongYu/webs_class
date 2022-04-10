// 변수저장
const cursor = document.querySelector(".cursor");
const playerLogo = document.querySelector(".player__logo .logo");
const asidePlay = document.querySelectorAll(".aside__play .play__list");

// 마우스 효과
window.addEventListener("mousemove", e => {
    // 마우스 효과 위치 조정
    const mouseX = e.pageX;
    const mouseY = e.pageY;
    cursor.style.left = mouseX -25 + 'px';
    cursor.style.top = mouseY -25 + 'px';

    // playerLogo 마우스 효과
    playerLogo.addEventListener("mouseenter", () => {
        cursor.classList.add("active");
        cursor.querySelector(".text").innerText = "Top";
    });
    playerLogo.addEventListener("mouseleave", () => {
        cursor.classList.remove("active");
    });

    // asidePlay 마우스 효과
    for(let i=0; i<asidePlay.length; i++){
        asidePlay[i].addEventListener("mouseenter", () => {
            cursor.classList.add("active");
            cursor.querySelector(".text").innerText = "Play";
        });
        asidePlay[i].addEventListener("mouseleave", () => {
            cursor.classList.remove("active");
        });
    }
})