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

// ------ badgeEl ------ -

/*
const badgeEl = document.querySelector('header .badges');  //특정한 요소를 찾음(선택자)
window.addEventListener('scroll',function(){    // 익명의 함수
    console.log('scroll!');
});  
*/
//scroll이벤트가 발생하면 실행할 익명의 함수 
//window 브라우저의 탭을 의미 - 즉, 우리가 보고있는 화면 그 자체를 의미     //document : html그 자체 

const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll',_.throttle(function(){
    console.log(window.scrollY);
    if(window.scrollY>500){
        //배지 숨기기
        // gsap.to(요소, 지속시간, 옵션)  --자바스크립트에서 *** 애니메이션을 처리해주는 라이브러리!!
        // .to 메소드 -> ㅍㅍㅍㅍㅊㅊㅊㅊ(괄호안에 설정가능)
        gsap.to(badgeEl, .6, {  // 온셥은 {}객체 데이터로-여러속성을 넣고자 //
            opacity:0,                                       // opacity가 적용되어 보이지 않을 뿐 fixed되어 해당 위치에 그대로 존재 -> a링크와 영역은 모두 동일하게 갖고 있음 
            display:'none'  //css데이터 -> js 맞게 사용해야됨('~') //a링크가 먹히지 않도록 display:'none'해줘야 됨!!!
        })
        // badgeEl.style.display= 'none';
    }else{
        //배지 다시 보여주기
        gsap.to(badgeEl,.6,{
            opacity:1,
            display:'block'
        })
        // badgeEl.style.display= 'block';
    };
    // 화면이 스크롤 될 때 마다 윈도우 객체의 스크롤Y가 갱신될 것 - 스크롤Y로 현재 화면에 위에서부터 몇px에 위치하고 있는지 알게 될 것 
},300));    //scroll이벤트에 300만큼 부하를 줘서 계속 실행되는 것을 방지해줌  lodash의 _.throttle 기능
            //일정 시간에 한번씩 실행되게 해줌
//1000 :1초 300:0.3초
// _.throttle(함수, 시간)           : 작동할 함수와 시간을 지정
// lodash library를 연결해서 위와같은 기능의 사용이 가능해짐  

//gsap cdn


// section 하나의 계층, 


// ------ visual ------ 
