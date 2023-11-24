/*메인메뉴의 사진 슬라이드 
mask박스의 ul을 left -1920 px정도 밀면 사진이 한장씩 이동하는 느낌이 가능할듯함
사진은 총 4장으로  변수를 생성해서 0이고  클릭 이벤트가 발생할때마다
이 변수에 -1920을 계속해서 저장시키고 사진이 총 4장이 있으니 우클릭 최대 3번까지 가능하고
우클릭 3번을 하게되면 5760이 된느데  이때 우클릭 버튼은 사라지고 좌클릭만 남도록 하면 될것 같고
좌클릭은 첫 화면에서는 없어도 괜찮다.
변수는 좌 우 클릭버튼과 maskbox의 ul을 지정하고, 포지션 값을 저장할 변수 3개를 잡으면 될것 같음
*/
document.addEventListener('DOMContentLoaded',function(){
    var leftA = document.querySelector('.arrow .left')
    var rightA = document.querySelector('.arrow .right')
    var maskbox = document.querySelector('.maskbox>ul') 
    var maskposition = 0;
    leftA.style.display = 'none'
    
    
    rightA.addEventListener('click', function(){
      rightC();
      clearInterval(inloop)
     
    })
    leftA.addEventListener('click', function(){
        leftC();
        clearInterval(inloop)
    })

    function rightC(){
        maskposition = maskposition -1920 
        console.log(maskposition)

        if(maskposition == 0){
            leftA.style.display = 'none'
            rightA.style.display = 'block'
        }else{
            leftA.style.display = 'block'
            rightA.style.display = 'block'
            maskbox.style.left = maskposition + 'px'
        }
        if(maskposition <= -5760){
            rightA.style.display = 'none'
            maskposition = -5760
        }           
    }
    function leftC(){
        maskposition = maskposition +1920
        console.log(maskposition)
        if(maskposition == 0){
            
            leftA.style.display = 'none'
            rightA.style.display = 'block'
            maskbox.style.left = maskposition + 'px'
            
        }else{
            
            leftA.style.display = 'block'
            rightA.style.display = 'block'
            maskbox.style.left = maskposition + 'px'
        }
        
    } 

/*메인사진 5초정도에 좌우로 한번씩 움직이게 하는 기능 추가
일단   윈도우 화면이 스크롤로 내려가서 900이상 내려가면 어차피 메인화면이 보이지 않으니 멈추도록 하면 될것같고
그 이전 값에서는
5초마다 한번씩 좌우로 반복
마우스 스크롤이 내려가는것을 확인을 위해 값을 변수에 저장한다.

*/
var inloop;
var yscroll = 0;
var timelooping = 3;
var loop1 = 0;
var set1 = setTimeout(function(){
    if(yscroll < 610){
        loop();
    }}, 1000)

    /* 화살표 좌 혹은 우 클릭 후 아무 동작을 안하는 경우 10초간 멈췄다가  10초후 다시 시작하는
     기능이 있으면 좋을것 같은데.. 해당 기능은 구현이 어려우니   마우스 스크롤이 700보다 낮아지면 
     set1을 다시 실행하는 방향으로 해야겠음 ...

     
    */


function loop(){
    inloop =setInterval(function(){
        if(timelooping > 0){
            timelooping = timelooping - 1
        }else if(timelooping == 0){ 
         timelooping = 2
         loop1 += 1
       }
       if(loop1%2==0){
        rightC();  
       }else if(loop1%2!=0){
        leftC();
       } 
      },5000)
 
}






  /* 베스트 메뉴도 옆으로 이동하는 메뉴이다
  위와 동일하게 작동하면 됨  다만 이동하는 거리가 한 박스단위이다.
  화면 사이즈가 정확하지가 않은 상태라서 정확하게 한 박스씩 옮기는게 어려운 상태로
  대략 450px로 이동하기로 했음
  위치를 저장할 변수하나와   각 방향키를 변수로 지정하고
    움직일 swifeul을 변수로 지정한뒤  똑같이 반복한다.
  */
 var menuL = document.querySelector('.titled a:first-child')
 var menuR = document.querySelector('.titled a:last-child')
 var swifeul = document.querySelector('.swifebox1>ul')
 var ulpo = 0;

    menuR.addEventListener('click',function(){    
        if(ulpo <= -450 ){
            ulpo = ulpo + 450
            swifeul.style.left = ulpo + 'px'
        }
    })   
    
        menuL.addEventListener('click',function(){       
        ulpo = ulpo - 450
        if(ulpo != 0){
          swifeul.style.left = ulpo + 'px'
        }
    })

/* kfc 헤더부분
    헤더는 할일이 여러가지 있다.
    화면 상단 전체를 가리는 하얀색 바가 필요하며 이 바는 네비 리스트에 마우스를 오버하면
    2뎁스 메뉴가 표시될때 바탕색으로 나와야 한다.
    그리고 마우스를 떠날시 원래대로 작아져야함
    그리고 원래 사이트에서는 선택한 메뉴만 밑줄이 작성되는데
    이 밑줄은 for each의 index 값을 활용해서  처리하면 될것임
    밑줄의 길이가 각각 다르기 때문에
    변수로 해당 값을 지정해서 배열에 저장한다.

     변수로 지정할 것들
     마우스가 2뎁스메뉴를 움직일때는 화이트 바가 생성되어 있어야 함으로
     이벤트중 하나는 네비 전체에서 반응해야함


*/
var whitebar = document.querySelector('.whitebar')
var navilist = document.querySelectorAll('#nonelist>li') 
var whitebarheight = 0;
var nav1 = document.querySelector('.nav')
var line = document.querySelectorAll('.line')
var lit1 = document.querySelectorAll('.lit1')
var linewidth = [80,80,80,120,140]

navilist.forEach(function(item,idx){
    item.addEventListener('mouseover',function(){
        baropen();
        
        for(i=0; i<lit1.length; i++){
            lit1[i].style.height = 180 + 'px'
            lit1[i].style.opacity = 1
            if(idx == i){
                line[i].style.width = linewidth[i] + 'px'
            }else{
                line[i].style.width = 0 + 'px';
            }
        } 
        console.log(whitebarheight)
    })
})

nav1.addEventListener('mouseleave',function(){
    barclose();
    for(i=0; i<lit1.length; i++){
        lit1[i].style.height = 0 + 'px'
        lit1[i].style.opacity = 0
    } 
    setTimeout(function(){
            for(i=0; i<linewidth.length; i++){
                line[i].style.width = 0 + 'px'
            }
    }, 500)
    
    console.log(whitebarheight)
})

function baropen(){
    if(whitebarheight == 0){
        whitebarheight = whitebarheight + 240 
        whitebar.style.height = whitebarheight + 'px'
    }
}
function barclose(){
    if(whitebarheight != 0 ){
        whitebarheight = whitebarheight - 240
        whitebar.style.height = whitebarheight + 'px'
    }
}

/*화면 스크롤시 */
var header = document.querySelector('.header')

window.addEventListener('scroll',function(){
    yscroll = window.pageYOffset
   
    if(yscroll>=100){
    header.style.position ='fixed' 
    header.style.width = 100+'%';
    }else{
        header.style.position = 'relative'
    }
})
})





