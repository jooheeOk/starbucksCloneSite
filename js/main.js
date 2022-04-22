const searchEl = document.querySelector('.search'); // El :element //document : doctype : html
const searchInputEl = searchEl.querySelector('input')   //위에 만들어둔 변수로 

searchEl.addEventListener('click', function() {  //.search -click이벤트 발생할 때  
    //logic 입력
    searchInputEl.focus(); 
}); 
searchInputEl.addEventListener('focus',function(){
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder','통합검색') //setAttribute:html속성 지정ㄴ
});

searchInputEl.addEventListener('blur',function(){   //blur포커스 해제시
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder','') 
});