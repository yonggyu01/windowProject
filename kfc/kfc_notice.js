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
document.addEventListener('DOMContentLoaded',function(){
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
var blackbar = document.querySelector('.blackbar')

window.addEventListener('scroll',function(){
    yscroll = window.pageYOffset
   
    if(yscroll>=100){
    header.style.position ='fixed' 
    header.style.width = 100+'%';
    blackbar.style.padding = 70+'px'
    }else{
        header.style.position = 'relative'
        blackbar.style.padding = 10+'px'
    }
})
})