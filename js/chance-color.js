window.onload = function(){
var heading = document.querySelector("#heading");
heading.onclick = function(){
    heading.style.color = "skyblue";
    heading.style.fontSize = "50px"
    heading.style.fontWeight = "bold"
}
//글자 바꾸기 토글
var heading = document.querySelector("#heading");
var isRed = false; //c초기 토글상태는 false입니다.
heading.onclick = function(){
    //isRed 변수값에따라 텍스트 색상을 변경합니다.
    if(isRed){
        heading.style.color = "blueviolet" //원래색생으로 변경
        isRed = false;
    }
    else{
        heading.style.color = "red"; //레드로변경
        isRed = true;
    }
}
var h2text = document.querySelector("#h2text");
h2text.onclick = function(){
    h2text.style.color = "green"
}  
}
