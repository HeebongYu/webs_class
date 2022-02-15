// highlightAll
const highlightAll = function(){
    hljs.highlightAll();
}

//modal
const modal = function(){
    const modalWindow = document.querySelector(".source #modal");
    //버튼(소스보기)의 클릭하면 modal 창을 보이게 해주세요(show 추가)
    document.querySelector(".source .source-btn").addEventListener("click", el => {
        modalWindow.classList.add("show");
        modalWindow.classList.remove("hide");
    });
    //버튼(닫기)의 클릭하면 modal 창을 안보이게 해주세요(show 삭제)
    document.querySelector("#modal .modal-close").addEventListener("click", el => {
        modalWindow.classList.add("hide");
    });
}

//tabMenu
const tabMenu = function(){
    const tabBtn = document.querySelectorAll(".view-title > ul > li");
    const tabCont = document.querySelectorAll(".view-cont > div");

    tabBtn.forEach((btn, index) => {
        btn.addEventListener("click", () => {

            //내가 클릭하지 않은건 active 삭제
            tabBtn.forEach(el => {
                el.classList.remove("active");
            });
            //내가 클릭한건 active 추가
            btn.classList.add("active");

            //모든 컨텐츠 박스 안보이게
            tabCont.forEach(cont => {
                cont.style.display="none";
            });
            //내가 클릭한 컨텐츠 박스 보이게
            tabCont[index].style.display="block";
        })
    })
}