//1.play를 누르면 클래스가 추가되고 정지 에 클래스가 사라짐 
// 변수 생성 bott안에 a태그가 4개있으며 클래스를 지정해야함 (playmovie, Sound)
// 재생과 정지는 같은 클래스이며 해당클래스에 xx를 넣었다가 빼기만 하면 될것같음
// 음소거도 마찬가지로 같은 클래스에 있으며 클릭시 xx 클래스가 전체적으로 들어가고 
// 선택된 a태그에 효과를 주면 될것같다.
// 변수는 각각 클래스 2개마다 하나씩 잡고
// 함수는 클래스를 추가하고   클래스르 ㄹ빼주는 함수와
// 클릭이벤트  두가지만 만들면 됨

var Playmovie = document.querySelectorAll('.play_stop a')
var Sound = document.querySelectorAll('.playmusic') 

var video1 = document.getElementById('moving1')


// 함수 생성   플레이를 클릭시  moviestop에  xx클래스가 추가되며 기존에 xx가 있는 클래스에서는 xx클래스가 삭제됨
// 내가 클릭을 할때 마다 나타나고 사라지게 하면 되서 반복문은 필요 없어보임
// 클릭이벤트 정리 배열에 값이 2개 뿐이니 반복문은 사용하지 않고 바로 수정

Playmovie[0].addEventListener('click',function(){
    removie(0);
    video1.play();
})


Playmovie[1].addEventListener('click',function(){
    removie(1);
    video1.pause();
})
Sound[0].addEventListener('click',function(){
    resound(0);
    video1.muted = 0;
})
Sound[1].addEventListener('click',function(){
    resound(1);
    video1.muted = 1;
})
//  classname으로 remove를 대신해서 처리하고 classlist로 해당 클래스에 xx클래스를 추가함  
function removie(num){
    if(num==0){
        Playmovie[num].className = 'moviestop'
        Playmovie[num].classList.add('xx')
        Playmovie[num+1].className = 'moviestop'
       }else{
        Playmovie[num].className = 'moviestop'
        Playmovie[num].classList.add('xx')
        Playmovie[num-1].className = 'moviestop'
       }
}
function resound(num){
    if(num==0){
        Sound[num].className = 'playmusic'
        Sound[num].classList.add('xx')
        Sound[num+1].className = 'playmusic'
       }else{
        Sound[num].className = 'playmusic'
        Sound[num].classList.add('xx')
        Sound[num-1].className = 'playmusic'
       }
}
//   무비차트 화살표 
// 화살표는 2개를 각각 지정해야함 왼쪽 화살표 오른쪽 화살표이며
// 오른쪽 화살표를 클릭하기 이전에는 왼쪽 화살표는 안보여야함
// 화살표 각각 방향마다 변수로 지정하고
// slidebox의 li가 10개가 존재하며 우측 화살표를 누르면 
// slide box에 li가 왼쪽 방향으로  position이 이동 약 1040px정도?
// 다시 왼쪽 화살표를 누르면 원래위치로 position이 오도록 해야함
//기존 태그에 transition을 추가하자
//만약 우클릭을 3번 눌

var chart1Left = document.querySelector('.chart1 .lefta')
var chart1Right = document.querySelector('.chart1 .righta')
var slidebox1 = document.querySelector('.chart1>.slidebox>ul')


chart1Left.style.visibility = 'hidden'  
var styleposition = 0;
chart1Right.addEventListener('click',function(){
    styleposition = styleposition -1000
    if(styleposition <= -2000){
        chart1Right.style.visibility = 'hidden' 
    }else{
        chart1Right.style.visibility = 'visible' 
    }
    slidebox1.style.left = styleposition + 'px'
    chart1Left.style.visibility = 'visible' 
    chart1Left.style.display = 'block' 

    console.log(styleposition)
})



chart1Left.addEventListener('click',function(){
    styleposition = styleposition + 1000
    slidebox1.style.left = styleposition + 'px'
    if(styleposition == 0){
    chart1Left.style.visibility = 'hidden' 
    chart1Right.style.visibility = 'visible' 
    }else{chart1Left.style.visibility = 'visible' 
    chart1Right.style.visibility = 'visible'
    }
    console.log(styleposition)
})





/*
무비차트 클릭시 상영예정작에 class를 추가해서 숨기고 상영예정작 제목 색상이 회색으로 변경
 상영예정작 클릭시 무비차트 제목이 회색이 되며 상영예정작 색상은 검은색으로 변경 
 슬라이드박스를 똑같이 움직이게 만들고 기존 화살표는 숨기고 해당 옵션에 
 */

var char1 = document.querySelectorAll('.slidebox, .chart1 .lefta,.chart1 .righta, .sang1')
var char2 = document.querySelectorAll('.slidebox2, .chart2 .lefta,.chart2 .righta, .sang2')
var char1Name = document.querySelector('.chart1 h2 a')
var char2Name = document.querySelector('.chart2 h2 a')

char2Name.style.color = 'gray'
for(i=0; i<char2.length; i++){
char2[i].style.height = 0 + 'px'

}

var chart2Left = document.querySelector('.chart2>.lefta')
var chart2Right = document.querySelector('.chart2>.righta')
var slidebox2 = document.querySelector('.chart2>.slidebox2>ul')
var boxSize = [480,32,50,50]
char2[1].style.display = 'none'

char1Name.addEventListener('click',function(){
    char2Name.style.color = 'gray'
    char1Name.style.color = 'black'
    for(i=0; i<char1.length; i++){
    char1[i].style.height = boxSize[i] + 'px'
    char1[i].style.display = 'block'
    char2[i].style.height =0 + 'px'
    char2[i].style.display = 'none'
    console.log(boxSize[i])
}
chart1Left.style.visibility = 'hidden' 
styleposition = 0;
slidebox1.style.left = styleposition + 'px'
chart1Right.style.visibility = 'visible'
})
var styleposition2 = 0;
char2Name.addEventListener('click',function(){
    char1Name.style.color = 'gray'
    char2Name.style.color = 'black'
    for(i=0; i<char2.length; i++){
    char2[i].style.height = boxSize[i] + 'px'
    char2[i].style.display = 'block'
    char1[i].style.height = 0 + 'px'
    char1[i].style.display = 'none'
    }
    chart2Left.style.visibility = 'hidden'  
    styleposition2 = 0;
    slidebox2.style.left = styleposition2 + 'px'
    chart2Right.style.visibility = 'visible'
})


chart2Right.addEventListener('click',function(){
    styleposition2 = styleposition2 -1000
    if(styleposition2 == -2000){
        chart2Right.style.visibility = 'hidden' 
    }else{
        chart2Right.style.visibility = 'visible' 
    }
    slidebox2.style.left = styleposition2 + 'px'
    chart2Left.style.visibility = 'visible'
    console.log(styleposition2+'상영예정작쪽')
})

chart2Left.addEventListener('click',function(){
    styleposition2 = styleposition2 + 1000
    slidebox2.style.left = styleposition2 + 'px'
    if(styleposition2 == 0){
    chart2Left.style.visibility = 'hidden' 
    chart2Right.style.visibility = 'visible' 
    }else{chart2Left.style.visibility = 'visible' 
    chart2Right.style.visibility = 'visible'
    }
    console.log(styleposition2 + '상영예정작쪽')
})

/* 특별관 스크립트 
1. 4개의 클래스를 마우스가 진입할때마다 
사진에 클래스 xx를 추가하고 빼줘서 사진이 따라서 바뀌는 형태로 변경
2. 이벤트는 마우스 엔터시에만 바뀌는 형태로  잡으면 될것 같다.
3. 마우스가 마지막으로 들어갔던 글자의 사진이 남아있으면됨
4. 두가지 작업을 해야하는데 specialList의 글자에 마우스 포인터가 들어가면
 글자와 동일한 클래스인 imgs에 사진이 출력되고  글자부분은 태두리가 생기고 글자가 약간 커진다.
  마우스가 아웃되어도 효과는 남아있어야함
  5.글자에  마우스가 인입되면  같은 아이디를 갖고있는 이미지에 태그에 클래스 추가되고
   글자는 크기등이 변경된다.

   또다른 방법으로 임이의 클래스에 아래의 효과를 지정해두고
   클래스를 넣고 빼는 방식으로 적용시키면 마우스가 떠나도 해당효과가 남아있어
   선택 되어진 효과로 보일 것 같다.

*/
var mouseS = document.querySelectorAll('.specialList a')
var imgs = document.querySelectorAll('.imgs a img')

mouseS.forEach(function(item,idx){
    item.addEventListener('mouseover',function(){
      
        for(i=0; i<imgs.length; i++){
            if(i == idx){
                imgs[i].className= 'so'
                item.classList.add('spSelect')
            }else{
                imgs[i].classList.add('xx')
                mouseS[i].classList.remove('spSelect')
            }
        }
    })
})

mouseS.forEach(function(item,idx){
    item.addEventListener('mouseout',function(){     
        for(i=0; i<mouseS.length; i++){
          if(idx != i){
         mouseS[i].classList.remove('spSelect')
            }
        }
        console.log(idx)
             })
    })
/*이벤트 스크립트도 좌우로 움직여야함
1. 변수지정
 왼쪽 오른쪽 화살표 각각 지정
 이벤트 메뉴 속에 슬라이딩화면  pageslide2 변수로 지정
 화살표 클릭에 따른 초기값 변수로 지정
 */
var eventLeft = document.querySelector('.page>.Arrow>a:first-child')
var eventRight = document.querySelector('.page>.Arrow>a:last-child')
var SlideEvent = document.getElementsByClassName('pageslide2')
var eventp = 0;
eventLeft.style.visibility= 'hidden'

eventRight.addEventListener('click',function(){
    rigthEventclick();
    })
eventLeft.addEventListener('click', function(){
    leftEventclick();
    })

function rigthEventclick(){
    if(eventp == 0 ){
        eventp = eventp - 990
        SlideEvent[0].style.left = eventp + 'px'
        eventLeft.style.visibility= 'visible'
        eventRight.style.visibility= 'hidden'
    }}
function leftEventclick(){
    if(eventp == -990 ){
        eventp = eventp + 990
        SlideEvent[0].style.left = eventp + 'px'
        eventRight.style.visibility= 'visible'
        eventLeft.style.visibility= 'hidden'
    }}

/*이벤트 특별관의 버튼 2개  
1각 버튼 변수로 지정하고 클릭 이벤트로 클릭하는 변수에 display none을 넣고
반대의 버튼은 block를 넣어서 표시되게 변경
*/
var eventPlay = document.querySelector('.control3>.controlbox a:first-child')
var eventStop = document.querySelector('.control3>.controlbox a:nth-child(2)')

eventPlay.addEventListener('click',function(){
    eventPlay.style.display = 'none'
    eventStop.style.display = 'block'
    autop();
})
eventStop.addEventListener('click',function(){
    eventPlay.style.display = 'block'
    eventStop.style.display = 'none'
    clearInterval(timelooping);
})

/* 이벤트 페이지 자동으로 좌우로 재생되어야함 
    타이머 기능을 사용해서 플레이와 스탑버튼을 지정해두고
    스탑버튼을 누르기 전 까지 약 5초마다 좌우로 포지션을 움직여주는  기능을 구현한다
    1. 변수 :  플레이버튼, 스탑버튼은 이미 지정이 되어있어 위 메뉴의 클릭시
    타이머 기능까지 함께 조정되도록 기능을 추가하면 될것 같음
    타이머에 관한 변수 지정이 필요함
    2. 해당 버튼을 누르기 전까지 계속 반복해야함으로 인터벌 함수를 작성한다.
    3. 타이머에 관한 변수 지정에 앞서 5초 간격으로 우클릭 한번, 그 이후 다시 좌클릭 한번을 반복시킨다
    이렇게 반복하려면 변수를 하나 더 만들어서 버튼 클릭 이벤트가 한번 실행될때마다 1씩 더해지는  변수를 
    생성하고 이 변수가 짝수이면, 우클릭 홀수이면 좌클릭을 하도록 조건을 작성한다.
    스위치로 작업해도 상관없을것 같음
    4.화면 스크롤이 내려오기 전까지는 반복을 할 필요가 없기 때문에
        화면의 스크롤이 일정구간 내려오는 순간부터 자동으로 이벤트가 실행되서 좌우로
        움직이게 하는게 좀더 좋을것 같다.
    아래쪽에 윈도우의 스크롤을 담아둔 변수인 wscroll을 활용하면 되며 700부터 
    이벤트 페이지가 확인이 된다. 이게 확인되는 순간 1초 후부터 자동으로 시작되도록 
    작성한다.

*/
var timelooping ='';

var autoplayEvent = setTimeout(function(){
    autop();       
}, 1000);
function autop(){
    if(wscroll >= 600){  
        if(eventp ==0){
            rigthEventclick();
            looptime = looptime + 1 
        }else{
            leftEventclick();
            looptime = looptime + 1 
        }
    }
    timelooping = setInterval(function(){
        timedown();
        if(wscroll >= 600){
            if(looptime%2==0 && timera == 5){
                leftEventclick();
                looptime = looptime + 1 
            }else if(looptime%2!=0 && timera == 5){
                rigthEventclick();
                looptime = looptime + 1 
            }
        }
    }, 1000);

} 



function timedown(){
    var tm = timera
    if(tm > 0){
        timera = tm - 1
    }else{
        timera = 5
    }
}

var looptime = 0;
var timera = 5 ; 
    /*
        네비게이션 2번째 스크롤을 내렸을때 상단에 생성, 푸터에 top으로 가는 버튼 생성
        네비는 특정 값 이상 올라가면 숨김, 푸터에 탑 가는 버튼도 같이 동작 
        1. 윈도우의 스크롤을 내리면 내린만큼의 값을 받아올 변수를 생성한다.
        2. 스크롤을 내리면 나타나게 할  네비게이션바, 푸터에 탑버튼을 변수로 지정한다. 
        3. 스크롤을 내려서 특정값에 도달하면 나타나게 하고  일정 값에 도달하면 다시 숨긴다.
    */

    var wscroll = 0;
    var navi2 = document.querySelector('.navi2')
    var gotop = document.querySelector('.gotop')
    var blindb = document.querySelector('.blindb a')

    navi2.style.display = 'none'
    gotop.style.display = 'none'

    window.addEventListener('scroll',function(){
        wscroll = window.pageYOffset;
    
        if(wscroll >= 180){
            navi2.style.display = 'block'
        
        }else{
            navi2.style.display = 'none'
         
        }
        if(wscroll >=700){
            gotop.style.display = 'block'
            blindb.style.left = 0;
        }else{
            gotop.style.display = 'none'
            blindb.style.left = 300+'px';
        }

    })
    gotop.addEventListener('click',function(){
        window.scrollTo({
            left :0,top : 0,
            behavior:'smooth'
        });
    });

    /*
    네비2의 탭 기능 구현하기
    네비2는 기존 네비 1과는 다르게 마우스를 클릭해야만 메뉴가 표시되게 하고싶고
    마우스를 다시 클릭하거나 마우스 아웃하면 사라지게 하고싶음
    
    1. navi2의 main_menu2 클래스에  li들을 클릭할때마다 그 아래 depth3메뉴들이 나타나게 해야함
    2. main_menu2의 li를 변수로 지정하고, depth3의 ul을 변수로 지정한다.
    3. main_menu2에 li를  클릭 할 때마다 해당 li의 인덱스값과 일치하는  depth3의 ul 값에 hight 0에서 100% 로 
      변경되도록하고 다른 메뉴를 클릭하게되면 모든 클릭한 메뉴를 제외하고 모든 depth3의 ul값 높이가
      0이 되도록 하여
      선택한  메뉴만 출력되도록 한다.
    */
var main_list = document.querySelectorAll('.main_menu2>li')
var depth = document.querySelectorAll('.depth3>ul')

main_list.forEach(function(list,idx){
    list.addEventListener('mouseover',function(){
        close(idx);
       depth[idx].style.display = 'block'
        })
})
depth.forEach(function(menu,idx){
    menu.addEventListener('mouseleave',function(){
        close(depth.lenght+1);
    })
})
function close(num1){
    for(i=0; i<depth.length; i++){
        if(num1 != i){
        depth[i].style.display = 'none'  
        }

    }
}

/* 배너탑 끄기버튼    
근데 배너탑은 배너탑 버튼이미지를 클릭시 배너div의 display none으로 변경하면 
자동으로 전체 화면이 조절될것으로 판단됨 
1. 변수는 배너div ,  배너 x 버튼 두개를 지정해서  클릭이벤트로 배너 x버튼 클릭시
  배너div 전체가 display none으로 변경처리.
*/
var bannertop = document.querySelector('.bannerfull')
var bannerclose = document.querySelector('.bannertop>a')

bannerclose.addEventListener('click',function(){
    bannertop.style.display = 'none'
})
/*푸터 바로가기버튼
계열사 바로가기에 마우스를 가져가 대면 or 클릭을 하게되면
wbox가 위로 올라온다   배경색은 wbox의 dl에 저장되어있음
wbox 내용물은 bottom으로 조정해서 0이되면 화면에 보이고 -999등으로 값을주면 사라짐
dl박스는 없다가 클릭시 나타나서 높이값을 0-> 
1. 변수 생성
계열사 바로가기 h3태그 (마우스 호버할 위치), 
wbox (높이조절), wbox dl (포지션 조정) , 
2. 이벤트 생성 
 클릭이벤트와, 마우스리브 두가지를 사용한다.
 클릭시 바가 올라와도 괜찮고 
 마우스가 떠나면 자동으로 꺼지도록 하고싶음
*/
var fquick = document.querySelector('.quick h3')
var wbox = document.querySelector('.wbox')
var wboxlist = document.querySelector('.wbox dl')


wbox.addEventListener('mouseleave',function(){
    wbox.style.height = 0 + 'px'
    wbox.style.visibility= 'hidden';
    wboxlist.style.bottom = -209 + 'px' ;  
    blindb.style.left = 0+'px';
})
fquick.addEventListener('mouseover',function(){
    wbox.style.height = 421 + 'px'
    wbox.style.visibility= 'visible';
    wboxlist.style.bottom = 0;  
    blindb.style.left = 300+'px';

})

/* 로그인 */

var logi = document.querySelector('.login')
var join = document.querySelector('.join')
var userid = ['kim', 'sang', 'bang']

join.addEventListener('click',function(){
    var guestid = prompt('아이디를 입력하세요')
    for(i=0; i<userid.length; i++){
        if(userid[i] != guestid ){
            userid.push(guestid)
            i= userid.length
        }

    }

})
logi.addEventListener('click',function(){
    var guestid = prompt('아이디를 입력하세요')
        for(i=0; i<userid.length; i++ ){
            if(guestid == userid[i]){
                alert(guestid + '님 로그인에 성공하셨습니다')
                i = userid.length
            }     
        }
})


// 푸터 바로가기 관련 -> 1안 태그 수정하여 링크를 직접건다
// 2안 dd를 불러와서 배열의 idx값 순으로 어떤 사이트를 선택했는지를 지정해서 해당 사이트로 보낸다
// 2안에 관해서는 진행하려면 다른 사이트로 이동시키는 방법을 알아봐야함

