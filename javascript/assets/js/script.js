//경고창
// document.querySelectorAll(".result h4").forEach(function(a){
//     a.addEventListener("click", function(){
//         document.querySelectorAll(".result > div").forEach(function(b){
//             if(true){
//                 b.after("oo")
//             }
//         })
//     })
// })
    
// //결과보기
// document.querySelectorAll(".result h4").forEach(function(a){
//     a.addEventListener("click", function(){
//         document.querySelectorAll(".result > div").forEach(function(b){
//             if(true){
//                 b.style.display = "block";
//             }
//         })
//     })
// })


//이 버튼을 클릭하면 선택된 클래스(selected)를 찾은 후 클래스를 삭제합니다.
// document.querySelector("#sample3 .btn1").addEventListener("click", function(){
//     document.querySelectorAll("#sample3 .view > div").forEach(function(el){
//         if(el.classList.contains("selected")){
//             el.classList.remove("selected");
//         }
//     });
// });




// 클릭 resultOff -> resultOn
// document.querySelectorAll(".result h4").forEach(function(a){
//     a.addEventListener("click", function(){
        
//     })
// })


// //버튼을 클릭하면 선택된 클래스(selected)를 찾은 후 색을 파란색으로 나오게 하세요!
// document.querySelector("#sample4 .btn3").addEventListener("click", function(){
//     document.querySelectorAll("#sample4 .view > div").forEach(function(el){
//         if(el.classList.contains("selected")){
//             el.classList.add("selected2");
//         }
//     });
// });








//결과보기
document.querySelectorAll(".result").forEach(function(el){
    el.addEventListener("click", function(){
        el.classList.toggle("active");
    });
});

