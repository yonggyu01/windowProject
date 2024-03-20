document.addEventListener('DOMContentLoaded',function(){
    let work_line= document.querySelectorAll('.work_line')
// 윈도우 부팅느낌 나게 해주려고 추가함
    let booting = document.querySelector('.loading')
    let header = document.querySelector('.header')
    let footer = document.querySelector('.footer')
    let main = document.querySelector('.main')
let auto1 = setTimeout(() => {
    booting.style.opacity = 0; 
}, 800);
let auto2 = setTimeout(() => {
booting.style.display = 'none'
booting.style.zIndex= 0; 
header.style.opacity =1;
footer.style.opacity =1;
main.style.opacity =1;

}, 2000);

// 메인의 내컴퓨터 작동부터 시작하겠음
// x버튼들으 ㅣ컨트롤관련해서 현재 html작성순서가 내컴퓨터, html, css, java 순임
//여기서 세부적으로 html작성시 태그 수정하기 귀찮으니 x버튼과 순서 맞춰서 제작하자..

var bricon = document.querySelectorAll('.iconwrapbox>ul>li>a')
var mycom = document.querySelector('.mycomputer')
let xbutton = document.querySelectorAll('.xbutton, .xb')
let tmycom = document.querySelectorAll('.mycomputericon>ul>li>a')
let mycommenu = document.querySelectorAll('#mycom')
let killmenu =document.querySelectorAll('#screenmenu, #mycom, #javanote ,.memobox,.calcul,.paint,.kakaotalk,.korean,.internet,.bomb,.html_note1,.html_note2,.css_note1,.css_note2')
// killmenu에 아이템 새로 등록시 추가로 등록시키기만 하면됨. 단 자바 노트부분에 컨텐츠 추가시 html태그에서 위치를 잘 고민해야함
// kill메뉴 이제 필요는 없긴 함...
bricon.forEach(function(item,idx){
    item.onclick =function(){
        zindexnum++
        switch(idx){
            case 0:
                mycom.style.display ='block';
                work_line[0].style.display = 'block';
                mycom.style.zIndex = zindexnum;
                break;
            case 1:
                let bimg = document.querySelector('#rec')
                bimg.setAttribute('src','image/27.png')
                setTimeout(function(){
                    bimg.setAttribute('src','image/28.png')
                }, 3000)
            break;
            case 7 :
                killmenu[idx+8].style.display = 'block'
                killmenu[idx+8].style.zIndex = zindexnum;
                work_line[idx+8].style.display = 'block'
                let internetboottimer = setTimeout(function(){
                    internetbooting.style.opacity = 0;
                    setTimeout(function(){
                    internetbooting.style.display = 'none';
                    siteview[0].style.display = 'block';
                    siteview[0].style.opacity = 1;
                    },1000)
                },2000)
                // 인터넷창 오픈시 로딩화면 뜨게함
            break;
            default: 
            // console.log(idx)
                killmenu[idx+8].style.display = 'block'
                killmenu[idx+8].style.zIndex = zindexnum;
                work_line[idx+8].style.display = 'block';
        }
    }
    item.ondragstart = function(){
        // return false;
    }
})
//  네비게이션바 메뉴들 눌렀을때 실행함수
// 현재 창의 순서가 뒤죽박죽이라 foreach로 사용하기에는 애매함
// 태그에 onclick을 넣어두고 클릭시 본인의  특정값을 넣어서 실행하는 함수를 만들고
// 그 함수는 그값을 받아서 창을 키는식으로 할까 생각중
function nowopenwindow(value){
    killmenu[value].style.display = 'block'
    work_line[value].style.display = 'block';
    killmenu[value].style.zIndex = zindexnum;
    startmenu.style.height = 0;
    startmenu.style.overflow = 'hidden'
    mode=0;
    startmenu.style.zIndex = 0;
}
let opennavi1=document.querySelectorAll('.depth ul li') 
 // CSS HTML 페이지등이 나중에 내용추가를 해서... 전체적으로 좀 ... 
opennavi1.forEach(function(item,idx){
    item.onclick =function(){
        zindexnum++
        switch (idx){
            case 0:
                nowopenwindow(12);
                break;
            case 1:
                nowopenwindow(11);
                break;
            case 2:
                nowopenwindow(13);
                break;
            case 3:
                nowopenwindow(16);
                break;
            case 4:
                nowopenwindow(14);
                break;
            case 5:
                nowopenwindow(15);
                //인터넷 오픈창은
                setTimeout(function(){
                    internetbooting.style.opacity = 0;
                    setTimeout(function(){
                    internetbooting.style.display = 'none';
                    siteview[0].style.display = 'block';
                    siteview[0].style.opacity = 1;
                    },1000)
                },2000)
                // 인터넷창 오픈시 로딩화면 뜨게함     
           
                break;
            case 6:
                // 문서파일 시작
                nowopenmycom(0);
                break;
            case 7:
                nowopenmycom(1);
                break;
            case 8:
                nowopenmycom(2);
                break;
            

        }
    }
})
function nowopenmycom(value){
    mycommenu[value].style.display = 'block'
    work_line[value+1].style.display = 'block';
    mycommenu[value].style.zIndex = zindexnum;
    startmenu.style.height = 0;
    startmenu.style.overflow = 'hidden'
    mode=0;
    startmenu.style.zIndex = 0;
}
//
    /**
    *인덱스 체커
    *window에 클릭이벤트를 걸어둬야 하며 내가 클릭한 태그가 부모요소가 있는 경우 내가 선택한 태그의 index값을 
    *가져올 수 있음, 동일하게 인덱스요소를 사용하는 태그를 열고 닫고싶을때 사용하기 위해 만듬
    */
    function indexcheck(e){
        let targetcount = e.target?.parentElement?.childElementCount 
        let allindexnum = 0;
        for(let i=0; i<targetcount; i++){
            if(e.target?.parentElement.children[i] == e.target){
                allindexnum = i
            }
        }
        return allindexnum;
    }
    // 간단한 버튼들은 변수로 지정하지 않고 그냥 사용하기위해 윈도우의 클릭이벤트를 선택자로 활용해서
    // 스위치문으로 작성_ 선택하고싶은 태그요소에  클래스나 아이디값이 있는 버튼의 경우 그냥 사용하면되며 인덱스 값도 받아 올 수 있기 때문에
    // 인덱스가 필요한 경우 인덱스 체커를 활용해서 하드코딩
        let recycle ;
    window.onmousedown =function(e){
        indexcheck(e)
        if (e.target.parentElement.parentElement?.classList?.value=='newnote'){
            recycle = e.target.parentElement.parentElement
            //임시로 메모장기능 추가함 바로바로 뜨니깐 좀 정신사나움 1.5초후 뜨는거로
            let datachecker = e.target.nextElementSibling?.nextElementSibling == null ?  e.target.dataset.id : e.target.nextElementSibling.nextSibling.dataset.id
            // console.log(datachecker)
            let dialogselect = document.querySelector(`dialog[data-id="${datachecker}"]`)
                dialogselect.open =dialogselect.open == true ? false : '';
                dialogselect.style.left = Math.random()*1000+'px'
                dialogselect.style.top = Math.random()*500+'px'
                dialogselect.style.width = 300+'px'
                dialogselect.style.height = 300 + 'px'
                dialogselect.style.overflow = 'scroll'
          
            
        }else if(e.target.parentElement.parentElement?.classList?.value=='moving'){
            recycle = e.target.parentElement.parentElement
        }else if(e.target.parentElement.parentElement?.classList?.value=='nonep'){
            recycle = '';
        }
        // console.log(e)
        // console.log(indexcheck(e))
    //    let tt =  e.target.id || e.target.classList.value
    //console.log(tt) 
    //    switch (tt){
    //     case 'f1':
    //         break; 
    //    }
    }

    // 더블클릭시 켜지도록 바꿔봄
window.ondblclick=function(e){
    let datachecker = e.target.nextElementSibling?.nextElementSibling == null ?  e.target.dataset.id : e.target.nextElementSibling.nextSibling.dataset.id
    // console.log(datachecker)
    let dialogselect = document.querySelector(`dialog[data-id="${datachecker}"]`)
    setTimeout(function(){
        dialogselect.open =dialogselect.open == false ?  true : false;
        dialogselect.style.left = Math.random()*1000+'px'
        dialogselect.style.top = Math.random()*500+'px'
        dialogselect.style.width = 300+'px'
        dialogselect.style.height = 300 + 'px'
        dialogselect.style.overflow = 'scroll'
    },1000)
}

// 휴지통기능 임시로 구현  새로 만든 파일들은 드래그해서 넣으면 사라짐
window.ondragend=function(e){
 
    let x = e.clientX
    let y = e.clientY
   function dropClick(x, y){
    let cb = document.elementFromPoint(x, y);
    // console.log(cb)
    // console.log(cb.nodeName)
    // document.elementFromPoint(x, y); 내 마우스가 어디 태그 위에 있는지를 알려줌
    if(cb.id=='rec'){
    recycle.style='display:none'
    }else{
        switch(cb.nodeName){
            case 'UL':
                cb.append(recycle)
            break;
        }
        // 수정해서 파일 드래그 드롭기능으로 변경함 (사소한 버그가 존재함... 근데 재밌으니 뭐..)
        // 추가수정사항으로 폴더에 직접 드래그시 해당폴더로 삽입되는 기능
    }
    }
dropClick(x,y)
}

// 문제점 발견  각 창별로 드래그드롭으로 아이콘 이동시 크기를 매번 계산해서 재반영해야함
// 태그별로 전부 width는 본인의 li 갯수별 * ?? px로 늘리게 할까... 고민해보자




/*
// bricon[0].addEventListener('click',function(){
//     mycom.style.display ='block';
//     work_line[0].style.display = 'block';
// })
bricon[2].onclick = function(){
    killmenu[6].style.display = 'block'
    work_line[6].style.display = 'block';
}
bricon[3].onclick = function(){
    killmenu[7].style.display = 'block'
    work_line[7].style.display = 'block';
}
bricon[1].onclick = function(){
    let bimg = document.querySelector('#rec')
    bimg.setAttribute('src','image/27.png')
    setTimeout(function(){
        bimg.setAttribute('src','image/28.png')
    }, 3000)
    
}*/
// bricon.forEach(function(item,idx){
//     item.addEventListener('dbclick',function(){
//         if(idx==0){
//             mycom[idx].style.display ='block';
//         }
//     })
// })


tmycom.forEach(function(menu,idx){
    menu.addEventListener('click',function(){
        zindexnum++
        switch (idx){
            case 0:
            mycommenu[idx].style.display = 'block'
            mycommenu[idx].style.zIndex = zindexnum;
            work_line[idx+1].style.display = 'block'
            break;
            case 1:
            mycommenu[idx].style.display = 'block'
            mycommenu[idx].style.zIndex = zindexnum;
            work_line[idx+3].style.display = 'block'
            break;
            case 2:
            mycommenu[idx].style.display = 'block'
            mycommenu[idx].style.zIndex = zindexnum;
            work_line[idx+5].style.display = 'block'
            break;
        }
        
        
    })
    menu.ondragstart = function(){
        return false;
    }
})
// 닫기

xbutton.forEach(function(item,idx){
    item.addEventListener('click',function(e){
        let selector = e.target.classList.value
        switch (selector) {
            case 'xbutton' : 
            e.target.parentElement.parentElement.parentElement.parentElement.style.display = 'none'
            zindexnum = 0;
            break;

            case 'xb' :
            e.target.parentElement.parentElement.parentElement.style.display = 'none'
            zindexnum = 0;
            break;
        }
        // killmenu[idx].style.display='none'
       
        work_line[idx].style.display='none' // 이건 인덱스가 일치해서 그냥 씀...
    })
})

//자바 노트부분만 먼저 작성/ 현재 2페이지만 작성

//코드를 수정해서 켜지는 창을 오픈시키는 코드들의 변수명을 전부 배열에 저장해서
// 내가 원하는 인덱스를 지정하게 되면 화면 개발시 순서가 꼬여서 발생하는 문제가 
// 해결이 가능해짐



// 눌렀을때 켜야하고 꺼야하는 클릭이벤트의  버튼은 전부 다르지만 
//  결국 켜져야 하는  행위는 모두 동일함  함수로 작성해서  클릭시 인자를 보내서
// 해당함수를 실행하도록 작성하는게 훨씬 나을것으로 판단됨

let javanote = document.querySelectorAll('.mycomputericon3>ul>li')
javanote.forEach(function(item,idx){
    item.addEventListener('click',function(){
        if(idx <2){
            zindexnum++
            killmenu[idx+8].style.zIndex = zindexnum;      
        killmenu[idx+8].style.display ='block'
        work_line[idx+8].style.display= 'block'
     }// 현재 파일이 2개 뿐이라 이렇게 임시로 땜방해둠 
    })
    item.ondragstart = function(){
        return false;
    }   
})



// 우측상단 컨트롤 버튼들 작동시키려고함

// 시작버튼 누르면 시작메뉴 활성화 /클릭시 오픈, 마우스 가 wrap1에서 나가면 종료
var startmenu = document.querySelector('.wrap1')
var startbutton = document.querySelector('.navi_title')
var mode =0;
startbutton.addEventListener('click',function(e){

    switch(mode){
        case 0 :     
    startmenu.style.height = '352px'
    startmenu.style.overflow = 'visible'
    startmenu.style.zIndex = 999;

    mode = 1
        break;
        case 1:
            startmenu.style.height = 0;
        startmenu.style.overflow = 'hidden'
        mode=0;
        break;
}
})

// 꺼지는 효과는 제일 바깥 상자에 mouse leave 효과를 줘야함

// startmenu.addEventListener('click',function(){
//     startmenu.style.height = 0;
//     startmenu.style.overflow = 'hidden'

// })
// 창 클릭후 포지션 변경은 마우스 업과 마우스 다운으로 해결하면됨
// 창 클릭후 포지션 변경시 내가 알아야 할것
//wheadwrap1 를 클릭해서 마우스를 움직이면  예를들면 htmlstudy의 포지션이 와리가리 해야함
//마우스를 다운 하는순간 htmlstudy의 left값과 top값을 받아와야함
// getComputedStyle 으로 타겟의 전체 스타일을 가져온뒤에 (변수 하나에 저장해야함)
// 그렇게 저장한 변수에서 또 left값만 getPropertyValue('left')를 사용해서 따로 빼와야함
// 이것도 변수에 저장해야함 생각보다 과정이 복잡함/

// HTML 창 위치변경코드
/*
var htmlStudy1 = document.querySelector('.htmlStudy')
// let style1 = getComputedStyle(htmlStudy1);
// var htmlStudy1Left = style1.getPropertyValue('left');
// var htmlStudy1top = style1.getPropertyValue('top');
// console.log('htmlStudy1Left') // left값 가져옴 -> 30px이라고 뜸
// 값 뒤에 px를 분리해야할듯함 
let wheadwrap1 = document.querySelector('.wheadwrap1')
// getBoundingClientRect() 이 명령어는 객체형식으로 요소의 위치값등을 ㄱ가져옴, 객체 값 호출하듯 뒤에 
// 값을 찍어오면 사용 가능함
// 창을 조종하는 이벤트 형식은 마우스 다운과, 도큐먼트.마우스 무브, 마우스 업/ 도큐먼트의 이벤트 삭제 이렇게 해야  정상 작동됨.
wheadwrap1.addEventListener('mousedown',function(e){
    e.preventDefault();
    let onmousedownX = e.clientX-wheadwrap1.getBoundingClientRect().left;
    let onmousedownY = e.clientY-wheadwrap1.getBoundingClientRect().top;
console.log(onmousedownX)
console.log(onmousedownY)
moveAt(e.pageX, e.pageY);

function moveAt(X, Y) {
    htmlStudy1.style.left = X - onmousedownX + 'px';
    htmlStudy1.style.top = Y - onmousedownY + 'px';
  }
  function onMouseMove(e) {
    moveAt(e.pageX, e.pageY);
  }
  document.addEventListener('mousemove', onMouseMove)
  wheadwrap1.onmouseup = function() {
    document.removeEventListener('mousemove', onMouseMove);
    wheadwrap1.onmouseup = null;
  };

})
wheadwrap1.ondragstart = function() {
    return false;
  };*/
/*

//left값 등을 받아, px지우고 bb변수에 숫자로 저장해주는 함수임  
function nonepx(aa){
    let bb = '';
for(i=0; i<aa.length; i++){
    if(isNaN(aa.charAt(i))==false){
        bb += aa.charAt(i)
    }
}
// console.log(bb)
return bb;
// console.log(aa, bb)
}
위 과정을 통해 html을 이동시키는게 가능해졌음 정리해서 이 작업은 모든 창에 가능하게 하고싶은데
반복작업을 원활하게 하려면 반복문으로 처리하는게 나아보임
단순하게 반복문으로 처리하려면, 현재 움직여야하는 창은 4개이고 (앞으로 늘어날수도 있겠지만) 
순서대로 창과 움직일 대상을 지정한뒤
forEach 반복문을 활용해서  item과 idx를 받아와서 코드 수정하면 코드 한방에 처리 가능함
 오늘 처음 써보는 함수들이 존재함으로 그냥 반복작업하겠음.. 
반복문으로 작성시
let whead = document.queryselectorAll('.wheadwrap,.wheadwrap1,.wheadwrap2,.wheadwrap3')
움직일 대상
let movewin = document.queryselectorAll('.mycomputer,.Htmlstudy,.css,.java....이렇게 지정해서 )
whead.forEach(function(item,idx){
    item.addEventListener('mousedown',function(){
        movewin[idx]......
    })
})
 반복작업 해보고 다시 코드수정해서 반복문 하나로 줄이는게 낫겠음..;; 너무 코드가 길어지네

let wheadwrap = document.querySelector('.wheadwrap')
let mycomputer = document.querySelector('.mycomputer')

wheadwrap.onmousedown = function(e){
    let mouseX = e.clientX - wheadwrap.getBoundingClientRect().left;
    let mouseY = e.clientY - wheadwrap.getBoundingClientRect().top;

    moveAt(e.pageX, e.pageY)
    function moveAt(X,Y){
        mycomputer.style.left = X - mouseX +'px';
        mycomputer.style.top = Y - mouseY +'px';
    }
    function onMouseMove(e) {
        moveAt(e.pageX, e.pageY);
      }
      document.addEventListener('mousemove', onMouseMove)
      wheadwrap.onmouseup=function(){
        document.removeEventListener('mousemove',onMouseMove)
        wheadwrap.onmouseup = null;
      }
}
// wheadwrap.ondragstart = function() {
//     return false;
//   };
*/

let whead = document.querySelectorAll('.wheadwrap,.wheadwrap1,.wheadwrap2,.wheadwrap3,.wheadwrap4,.wheadwrap5,.subprogram')
let movewin = document.querySelectorAll('.mycomputer,.htmlStudy,.cssStudy,.javaStudy,.javanote,.javanote1,.memobox,.calcul,.paint,.kakaotalk,.korean,.internet,.bomb,.html_note1,.html_note2,.css_note2,.css_note1,.cmd,.help')
    whead.forEach(function(item,idx){
        item.addEventListener('mousedown',function(e){
            movewin[idx].style.zIndex = 10000;
                let mouseX = e.clientX - item.getBoundingClientRect().left;
                let mouseY = e.clientY - item.getBoundingClientRect().top;
                moveee(e.pageX, e.pageY)
                function moveee(X,Y){
                    movewin[idx].style.left = X - mouseX + 'px';
                    movewin[idx].style.top = Y - mouseY + 'px';
                }
                function movingmouse(e){
                    moveee(e.pageX, e.pageY)
                }
                document.addEventListener('mousemove',movingmouse)
                item.onmouseup = function(){
                    movewin[idx].style.zIndex = zindexnum;
                    document.removeEventListener('mousemove',movingmouse)
                    item.onmouseup = null;
                }
            })
            item.ondragstart = function(){
                return false;
            }
    })  
// 반복문으로 위 수식을 한번에 정리함

// https://ko.javascript.info/mouse-drag-and-drop 이 사이트에서 드래그앤 드롭 관련 정리 도움받음
// 화면에 여러 화면을 표기해야해서 발행하는 문제
// zindex값으로 조절해야할것 같음
// 방향성, -> 내가 켠 창중에 movewin 지정된 애들중에 아무곳이나 클릭하면
// zindex가 누른애가 가장 높아서 위로 올라오는게 좋을것 같음
// close버튼에 zindex를 0으로 초기화 시키면 될것같고
// 그냥애들 눌러줄때매다 zindex 값이 계속 올라가게 해야겠음
let zindexnum =0;
movewin.forEach(function(item,idx){
    item.addEventListener('click',function(){
        zindexnum++
        item.style.zIndex = zindexnum;
    })
    
})

//하단 푸터버튼 관련 - 최소화 버튼을 누르면 화면하단에 작업표시줄에
// 글자가 생성됨,  이거 생성시 기존 창은 꺼버리는게 낫겠음

let minbutton = document.querySelectorAll('.minbutton, .mb')
minbutton.forEach(function(item,idx){
    item.addEventListener('click',function(){
        killmenu[idx].style.display='none';// 푸터에 생성되고 다시 불러오고 싶은데..
    })
})
// 작업표시줄 누르면 켜지기
work_line.forEach(function(item,idx){
    item.onclick = function(){
        killmenu[idx].style.display='block'
    }
})
// 풀스크린 버튼  2가지 기능 필요  한번누르면 최대화  다시 누르면 원래사이즈로
// fullbutton하고 fb랑 구조가 좀 다름  스위치문으로 작성하면 될거같음
// fullbutton은 구조상 키워야할것들
let fullbtn = document.querySelectorAll('.fullbutton,.fb'),fullswitch=0;
function fullandmin(item,selected,maxormin){
   if (selected == 'fullbutton' &&  maxormin== 'max'){
       item.parentElement.parentElement.style.width = '100vw'
       item.parentElement.parentElement.parentElement.parentElement.style.width = '100vw'
       item.parentElement.parentElement.parentElement.parentElement.style.top = '0px'
       item.parentElement.parentElement.parentElement.parentElement.style.left = '0px'
       item.parentElement.parentElement.parentElement.nextElementSibling.children[0].style.height = '100vh'
   }else if(selected == 'fullbutton' &&  maxormin== 'min'){
    item.parentElement.parentElement.style.width = '50vw'
    item.parentElement.parentElement.parentElement.parentElement.style.width = '50vw'
    item.parentElement.parentElement.parentElement.parentElement.style.top = (Math.random()*20)+'px'
    item.parentElement.parentElement.parentElement.parentElement.style.left = (Math.random()*20) +'px'
    item.parentElement.parentElement.parentElement.nextElementSibling.children[0].style.height = '50vh'}
    else if(selected == 'fb' && maxormin == 'max' && item.parentElement.parentElement.parentElement.className =='internet' ){
    item.parentElement.parentElement.style.width = '100vw'
    item.parentElement.parentElement.parentElement.style.top = '0px'
    item.parentElement.parentElement.parentElement.style.left = '0px'
    item.parentElement.parentElement.parentElement.children[item.parentElement.parentElement.parentElement.children.length-1].style.height = '100vh'
    item.parentElement.parentElement.parentElement.children[item.parentElement.parentElement.parentElement.children.length-1].style.width = '100vw'
   }else if(selected == 'fb' && maxormin == 'min' && item.parentElement.parentElement.parentElement.className =='internet'){
    item.parentElement.parentElement.style.width = '50vw'
    item.parentElement.parentElement.parentElement.style.top =  (Math.random()*500)+'px'
    item.parentElement.parentElement.parentElement.style.left =  (Math.random()*600)+'px'
    item.parentElement.parentElement.parentElement.children[item.parentElement.parentElement.parentElement.children.length-1].style.height = '50vh'
    item.parentElement.parentElement.parentElement.children[item.parentElement.parentElement.parentElement.children.length-1].style.width = '50vw'
   }else if(selected == 'fb' && maxormin == 'max' && item.parentElement.parentElement.parentElement.className =='cmd' ){
   item.parentElement.parentElement.style.width = '100vw'
   item.parentElement.parentElement.parentElement.style.top = '0px'
   item.parentElement.parentElement.parentElement.style.left = '0px'
   item.parentElement.parentElement.parentElement.children[item.parentElement.parentElement.parentElement.children.length-1].style.height = '100vh'
   item.parentElement.parentElement.parentElement.children[item.parentElement.parentElement.parentElement.children.length-1].style.width = '100vw'
  }else if(selected == 'fb' && maxormin == 'min' && item.parentElement.parentElement.parentElement.className =='cmd'){
   item.parentElement.parentElement.style.width = '50vw'
   item.parentElement.parentElement.parentElement.style.top =  (Math.random()*500)+'px'
   item.parentElement.parentElement.parentElement.style.left =  (Math.random()*600)+'px'
   item.parentElement.parentElement.parentElement.children[item.parentElement.parentElement.parentElement.children.length-1].style.height = '50vh'
   item.parentElement.parentElement.parentElement.children[item.parentElement.parentElement.parentElement.children.length-1].style.width = '50vw'
  }  
}

fullbtn.forEach(function(item){
    item.addEventListener('click',function(e){
        let classname = e.target.className
        if (fullswitch == 0){
            fullandmin(e.target,classname,'max')
            fullswitch = 1
        }else{
            fullandmin(e.target,classname,'min')
            fullswitch = 0
        }
                   
            //    console.log(e)
    })
})
let savebt = document.querySelector('.savebt'),newnote,dialognum=0;
savebt.onclick =function(e){
    let h3name = prompt('저장할 파일명을 입력해주세요')

    let mainmemo = document.querySelector('#memo')
    let newli = document.createElement('li')
    newli.classList.add('newnote')
    let newa = document.createElement('a')
    let newimg = document.createElement('img')
    let newh3 = document.createElement('h3')
    newh3.innerText = h3name
    newimg.setAttribute('src','image/note.png')
    let dia = document.createElement('dialog');

    dia.setAttribute('data-id',dialognum)
    dia.innerHTML = `<div style="display:flex;flex-direction: column;justify-content: space-between;box-sizing: border-box; position: relative;"><p style="padding-left:10px">${mainmemo.value}</p><br><br><br><br><br><p style="color : gray;position:absolute;bottom:-10px;left : 10%">이 창을 클릭시 종료됩니다.</p></div>`
    dialognum++
    mainmemo.value = '';
    newa.append(newimg)
    newa.append(newh3)
    newa.append(dia)
    newli.append(newa)
    document.querySelector('.iconwrapbox ul').appendChild(newli)
    document.querySelector('.memobox').style.display = 'none'
    document.querySelectorAll('.work_line')[10].style.display = 'none'
    setTimeout(function(){
        notelicheck() // 이거 만든이유는 저장버튼이 눌린 이후에 newnote 클래스를 가진 요소가  생성되기 때문에
        // 해당 클래스를 가진 녀석에게 이벤트를 등록시키려면 아무리 생각해도 세이브 버틴이 눌린 이후 셋타이머로 몇초 후에 newnote변수에
        // 쿼리 셀렉트 값을 전송한는게 나을것 같음..안되네.. 윈도우 클릭이벤트로 전역적으로 잡아서 해당 클래스에 직접 이벤트를 적용하는게 나을것 같음

    }
    ,1000)
}
 function notelicheck(){
    newnote= document.querySelectorAll('.newnote')
}







//   여기는 자바스크립트 내용1번이 좀 길어서 갖고옴
var tapb = document.querySelectorAll('.tapmenu>ul>li>h3')
var tapshow = document.querySelectorAll('.tapmenu>ul>li>a')
var widthwindow = '';
var nowwindowwidth = window.innerWidth;
var windowhalf = nowwindowwidth/2
var movinghalf = widthwindow/2
for(i=0; i<tapshow.length; i++){
          tapshow[i].style.display = 'none'
            }
            tapshow[0].style.display = 'block'
tapb.forEach(function(item,idx){
    item.addEventListener('click',function(){
        for(i=0; i<tapshow.length; i++){
            if(i == idx){
                tapshow[i].style.display= 'block'
                item.style.background= 'orange'
            }else{
                tapshow[i].style.display = 'none'
                tapb[i].style.background = 'white'
            }
        }
    })

}) 
var tapboxh3 = document.querySelectorAll('.tapbox h3')
var tapboxp = document.querySelectorAll('.tapbox p')
for(i=0; i<tapboxh3.length; i++){
          tapboxp[i].style.display = 'none'
            }
            tapboxp[0].style.display = 'block'
tapboxh3.forEach(function(item,idx){
    item.addEventListener('click',function(e){
        e.preventDefault();
        for(i=0; i<tapboxp.length; i++){
            if(i == idx){
                tapboxp[i].style.display = 'block'
                item.style.background = 'orange'
            }else{
                tapboxp[i].style.display = 'none'
                tapboxh3[i].style.background = 'white'
            }

        }
    })
}) 
// 계산기
function go(value){
   let calcul = Number(value)
}
let calcul = document.getElementById('calcul')
let numb = document.querySelectorAll('.numb')
let cnumber='';
let sumvalue,equalMode = '';
let clearc= document.querySelector('.clearc')
let sum1 = document.querySelector('.sum')
let equalb = document.querySelector('.equalb')
let minus = document.querySelector('.minus')
let multiplication = document.querySelector('.multiplication')
let half = document.querySelector('.half')
let division = document.querySelector('.division')
let memorybtn,memoryNum;
let back = document.querySelector('.back')
let plmn = document.querySelector('.plmn')
//mr mc m+ m- 기능을 구현하기 되게 간단함  현재 result값을 저장해주고 다시 반환하거나  빼거나 하면 됨
//난 거의 써본적은 없는 기능이나 변수 하나에 저장했다가 뺐다가만 하면될듯함
memorybtn = document.querySelectorAll('.MC,.Lpading')
memorybtn.forEach(function(item,idx){
// index  0 = 메모리 클리어 mc / 1 = ms메모리 세이브(변수저장) / 2 = mr 인풋창에 저장값 반환 // 3 m+ = 저장된 값에 새로입력한 값 합산 // 4 m- 저장된 변수에 새로 입력한 값 마이너스함
item.addEventListener('click',function(){
    switch (idx){
        case 0: 
        memoryNum = '';
        calcul.value = cnumber ;
        break;
        case 1:
            memoryNum=Number(calcul.value);
        break;
        case 2:
            if(memoryNum == undefined){
                calcul.value = '';
            }else{calcul.value = memoryNum;}
          
            break;
        case 3:
            if(isNaN(memoryNum)==false){
            memoryNum =Number(memoryNum) + Number(calcul.value);
            calcul.value=memoryNum;

            }else{
                calcul.value = '';
                cnumber = '';
            }
            break;
        case 4:
            if(isNaN(memoryNum)==false){
            memoryNum =Number(memoryNum) - Number(calcul.value);
            calcul.value=memoryNum;

            }else{
                calcul.value = ''; 
                cnumber = '';
            }
        break;
    }
})
})

clearc.onclick = function(){
    calcul.value='';
    cnumber = '';
    sumvalue = '';
}
numb.forEach(function(item,idx){
    item.onclick = function(){

        if(idx <9){
        cnumber = cnumber + String(idx + 1)   
        calcul.value = cnumber;
        }else{
            cnumber = cnumber + String(0)
            calcul.value = cnumber;
        }
    }
})

// 아이디어 1 : mode 가 4종류인거고
// 각각 모드마다 결과값을 도출해주는 방식이 달라짐  
// switch 문으로 해서 짜도 괜찮아보임
// 0일때는 합치기  1일때는 빼기 2일때는 나누기 3일때는 곱하기
// 이런식인데   우리가 더하기 빼기를 할때  sum버튼을 누르면  d이퀄 버튼을 누를시
// 이 모드선택자으 ㅣ값에 따라 다른 계산을 하게하자.
equalb.onclick = function(){
    let qq;
    let a = Number(calcul.value)
    switch (equalMode){
        case 0 : 
        // 덧셈
        qq = Number(sumvalue) + Number(a);
        sumvalue = a;
        calcul.value= qq;
        break;
        case 1 : 
        // 뺄셈
        qq = Number(sumvalue) - Number(a);
        sumvalue = a;
        calcul.value= qq;
        break;
        case 2 : 
        // 곱셉
        qq = Number(sumvalue) * Number(a);
        sumvalue = a;
        calcul.value= qq;
        break;
        case 3 : 
        // 나누기
        qq = Number(sumvalue)/Number(a);
        sumvalue = a;
        calcul.value= qq;
        break;
        case 4 : 
        //백분률
        qq = (Number(a)/100)+'%';
        sumvalue = a;
        calcul.value= qq;
        break;
        default : calcul.value=calcul.value;
    }
}
sum1.onclick = function(){
    savevalue();
    equalMode = 0;
}
minus.onclick = function(){
    savevalue();
    equalMode = 1;
}
multiplication.onclick = function(){
    savevalue();
    equalMode = 2;
}
half.onclick = function(){ 
    savevalue();
    equalMode = 3;
}
division.onclick = function(){ 
    savevalue();
    equalMode = 4;
}
function savevalue(){
    sumvalue = calcul.value
    calcul.value = '';
    cnumber='';
}

// back기능 구현  입력한 숫자 하나 맨뒤에꺼를 지워줘야함
back.onclick =function(){
    let deleteNum = calcul.value
    let resultNumber ='';
    for(i=0; i<deleteNum.length-1; i++){
        resultNumber=resultNumber+deleteNum.charAt(i)
    }
    calcul.value = resultNumber
    cnumber = resultNumber
         //cnumber 현재 calcul의 값이 연속적으로 저장되는곳임
    // calcul은 현재 인풋태그위에 표시되는 값임 -> 이 값의 맨뒷자리가 한번씩 삭제되어야함
}
//플러스 마이너스 구현  그냥 현재값에 - 해주면 되는거 아님?
plmn.onclick = ()=>{
    calcul.value = -calcul.value
    cnumber =-calcul.value
}
// 흠 위에꺼는 좀 이상하네 수정좀 해야할듯?



// 그림판 기능 구현하기
// 태그에 canvas 태그를 사용해서 그림판 기능 혹은 게임들도 구현이 가능하다고 함
// 해당기능으로 게임하나와 그림판을 완성해보려고 함
const mypainter = document.getElementById('mypainter')
const ctx = mypainter.getContext('2d');
mypainter.width = 1000;
mypainter.height = 600;
let painting = false,canvasX,canvasY,lineWidth = 1,paintercolor='black';
let fillcolor = ['white','black','blue','red','yellow','green','orange']
let tools = document.querySelectorAll('.tools ul li a')
let colorselect = document.querySelectorAll('.colorselect ul li a')
strokeStyle = paintercolor;

colorselect.forEach(function(item,idx){
    item.onclick =function(){
        paintercolor = fillcolor[idx]
     
    }
})
tools.forEach(function(item,idx){
    item.onclick = function(){
        switch(idx) {
            case 0 :
                lineWidth = 1; 
            break;
            case 1 : 
              lineWidth = 15;
            break;
            case 2:
                ctx.clearRect(0,0, mypainter.width, mypainter.height)
                break;
            }
    }
    
})
mypainter.onmousedown = function(event){ 
    // 사이즈를 2배로 키워서 해상도를 올리고 싶으나.. css로 크기 조절시
    // 좌표가 인식이 안됨...  해결방안으로는 투명한 그림판을 위에 깔고(일반해상도)
    // 바로 아래에 2배 해상도 그림판을 깐뒤  위에 있는 투명한  원본 해상도에 그리는걸 뒤에 2배 해상도에도 같이 그려지게 하면
    // 해상도 올릴 수 있을것 같음.. 아이디어 1번임
    // canvasX=event.clientX-mypainter.getBoundingClientRect().left
    // canvasY=event.clientY-mypainter.getBoundingClientRect().top
    canvasX=event.offsetX
    canvasY=event.offsetY
    painting = true;
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY)
    // console.log(event.offsetX,event.offsetY)
}
// 마우스의 현재 위치는 event.offsetx 와 offsety로 잡았음
mypainter.onmouseup = function(event){
    painting =false;
}
mypainter.onmousemove = function(event){
    if(!painting){
        return;
    }
    ctx.lineWidth = lineWidth;
    ctx.lineCap = 'round'
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.strokeStyle = paintercolor;
}


// 함수로  작성하는것도 방법같음 함수에는 action, 파라매터 이렇게 2개는 받아와야할것 같다
// function resultF(ab,action){
//     action(ab);

// }
// function sum (qq){

// }
// function minus(q1){

// }
// function multiplication(q2){

// }
// function division(q3){

// }

// 값을 가져올때  +=을 처리해줄 변수가 하나 필요함
//합치는 계산은 간단하게 처리하자  +버튼을 누를때마다 sum이라는 배열에 추가하고
// 값을 넣는 순서를 기록하는 배열에 sum , minus 등을 기록해준뒤
// 이 배열의 순서를 기반으로 연산을 해주는 방향이 나을것 같다.
// 결과 누르기를 하면 답을 출력하게
//만약 빼기의 배열에 값이 들어있다면 배열

// 푸터에 생성된 녀석들의 문제
//최소화 버튼을 누르면  기존창이 display none이 되어야하고
// 최소화 되면 밑에 박스가 생성되는데 이 박스를 누르면 박스가 사라지면서
// 다시 창으로 떴으면 좋겠음
// 아이디어 1 : 이 창들은 생성될때 클릭시 함수를 실행하도록 짜면 좋겠음
// 그래서 다시 누르면 본인이 갖고있는 값(숫자같은) 그거로 다시 display 를 block으로 시키는 방향이 어떤지
// 어떤식으로 값을 가져와야할지 당장 아이디어가 없음;;

//현재시간
let timebox = document.querySelector('.timebox p')
let nowtime = new Date();
let nowhour = nowtime.getHours();
let nowmi= nowtime.getMinutes();
timebox.innerHTML= nowhour + " : " + nowmi;
setInterval(function(){
    nowtime = new Date();
 nowhour = nowtime.getHours();
 nowmi= nowtime.getMinutes();
 if(String(nowmi).length == 1){
    timebox.innerHTML= nowhour + " : " +'0'+nowmi;
 }else{
    timebox.innerHTML= nowhour + " : " +nowmi;
 }
},(1000*30))


// 카카오톡 : 추후구현 기능 -> 카카오gpt api삽입하여 채팅기능 구현, 카카오톡 로그인기능 추가 (실게 카톡으로도 대화내용 전송되도록 해보고 싶음)

let kakaouserID = document.querySelector('#userID')
let kakaouserPass = document.querySelector('#userPass')
let userloginbtn = document.querySelector('#userloginbtn')
kakaouserPass.addEventListener('keydown',function(e){
    if(e.code == 'Enter'){
        kakaouserID.value
        kakaouserPass.value
    }
})
userloginbtn.addEventListener('click',function(){
    document.querySelector('.loginsuccess').style.display ='block'
    document.querySelector('.kakaobg').style.display = 'none'
})




// 한글과 컴퓨터 자리연습 구현

let jari = document.querySelector('#jari')
let jari1a = document.querySelector('#jari1a')
let jariviewbox = document.querySelector('.jariviewbox')
let jariviewbox1 = document.querySelector('.jariviewbox1')
let jaristart = document.querySelector('.jariviewbox>p,.jariviewbox>h1')
let jaristart1 = document.querySelector('.jariviewbox1>p,.jariviewbox1>h1')
let jarigame= "ㅂㅏㅁㅑㅈㅣㅕㅗㅔㅇㅕㄷㅓㅎㅇㅏㅂㅏㄱㅓㅂㅏㅋㅑㅊㅕㅌㅛㅋㅈㄱㄷㅋㅠㄱㅜㅡㅁㅇㅣㅣㅔㅑㅕㅓㄹㅗㅠㅈㄹㄷㅅㅕㅎㅂㅍㅊㅋ";
let jarigame2 = ['계절이 지나가는 하늘에는','가을로 가득 차 있습니다.','나는 아무 걱정도 없이','가을 속의 별들을 다 헤일 듯합니다.','가슴속에 하나둘 새겨지는 별을','이제 다 못 헤는 것은','쉬이 아침이 오는 까닭이요,','내일 밤이 남은 까닭이요,','아직 나의 청춘이 다하지 않은 까닭입니다.','별 하나에 추억과','별 하나에 사랑과','별 하나에 쓸쓸함과']
let jari1 = jarigame.split('');
let jarinum = 0;
let pp = document.createElement('h1')
let pp1 = document.createElement('h1')
let changetext = document.querySelector('.changetext')
jaristart.style.color= 'red';
let jariscore = 0;
let jariscore1=document.querySelector('.jariscore1>span')
let jariscore2=document.querySelector('.jariscore2>span')
let gnnn = document.querySelector('.accur>p>span')
jaristart.onclick = function(){
    changetext.innerHTML = '네모 속에 들어있는 글자를 입력하세요';
    gnnn.innerHTML = jari1.length
    let jaritimer0 = setInterval(function(){
        jarigamestart()
        // console.log(jarinum)
        if(jarinum>=jari1.length){
            clearInterval(jaritimer0)
            jarinum = 0;
        }
    },4000)
}
jaristart1.onclick = function(){
    jarinum = 0;
    changetext.innerHTML = '문장을 정확하게 따라서 입력하세요';

setTimeout(() => {
    jarigamestart1()
    let jaritimer1 = setInterval(function(){
        jarigamestart1()
        if(jarinum>=jarigame2.length){
            clearInterval(jaritimer1)
            jarinum = 0;
        }
    },10000)
}, 3000);


}

jari.onchange =function(){
    let jj = pp.innerHTML
    if(jj==jari.value){
        pp.innerHTML =  '정답'
        jariviewbox.appendChild(pp)
        jari.value = '';
        jariscore += 1;
    }else{
        jari.value = '';
        pp.innerHTML =  '오답'
        jariviewbox.appendChild(pp)
    } 
   
}
jari1a.onchange =function(){
    let jj = pp1.innerHTML
    if(jj==jari1a.value){
        pp1.innerHTML =  '정답'
        jariviewbox1.appendChild(pp1)
        jari1a.value = '';
        jariscore += 1;
    }else{
        jari1a.value = '';
        pp1.innerHTML =  '오답'
        jariviewbox1.appendChild(pp1)
    } 
   
}

function jarigamestart(time){
    pp.innerHTML = jari1[jarinum]
    jariviewbox.innerHTML = '';
    jariviewbox.appendChild(pp)
        jarinum=jarinum+1 
        jariscore1.innerHTML = Math.round((jariscore/jari1.length)*100) +'%'
        gnnn.innerHTML = Number(gnnn.innerHTML) - 1;
        }

        function jarigamestart1(time){
            pp1.innerHTML = jarigame2[jarinum]
    jariviewbox1.innerHTML = '';
    jariviewbox1.appendChild(pp1)
        jarinum=jarinum+1 
        jariscore2.innerHTML = Math.round((jariscore/jarigame2.length)*100) +'%'
        gnnn.innerHTML = Number(gnnn.innerHTML) - 1;
        }
        // 한컴 탭메뉴
        let hancombg =document.querySelector('.hancommain') ;
let hancom = document.querySelectorAll('#hancom')
let hancomtap = document.querySelectorAll('.bbt')
hancomtap.forEach(function(item,idx){
    item.onclick=function(){
        // console.log(idx)
    for(i=0; i<hancomtap.length; i++){
       if(i==idx){
        hancom[i].style.display = 'block'
        hancombg.style.background = 'none'
        jariscore = 0;
        changetext.innerHTML = '시작 버튼을 누르세요'
       }else{
        hancom[i].style.display = 'none'
        hancombg.style.background = 'none'

       }
    }
    }

})

// 놀이  -> 기능구성
// p태그 무더기로 생성  변수에 배열 글자들 정리
// 같은순서로 p태그 무더기로 생성해서 변수에 존재하는 배열 순으로 기입
//  
let jariviewbox2=  document.querySelector('.jariviewbox2 .noridownbox')
let sonagilist = [
    ['강남구청','종로스타일','연봉구','프로그래밍','백엔드','개발','공부는','열심히','해라고','알겠냐고','오늘','눈온다','밥','배고파','점심','먹어','보다','자바스크립트','자바','언어','학사','티비'],
    ['강남','스타일','연봉','프로그래머','프론트엔드','개발자','공부','열심히','해라','알겠냐','오늘은','눈온다','밥','배고파','점심','먹어','보다','자바스크립트','자바','언어','학사','티비']
]
let jari2a = document.getElementById('jari2a') // 인풋 입력
let noridownbox = document.querySelector('.noridownbox')  // 놀이 글자 밑으로 내려주는 박스
let noristart = document.querySelector('.jariviewbox2 p')  // 처음 시작버튼용도?  나중에 버튼으로 바꾸던지 해야지...
let noriplay = sonagi(0);  // 원래 의도는 난이도 조절하려고 했는데 일단 기능구현만 해봄... 배열에 0번꺼만 바로 실행해보도록 만듬
let noritimer = sonagilist[0].length
let noriinter,norih4;
let noriYposition = 0;
let noriXposition = 0;  // -2% ~ 10% 까지 가능함
let noripositionmode = 0; // mode 0일때는 12까지 증가 mode 1일때  0까지 감소
let noriboxheight;
let noriscore11 = 0;
let jariscore3 = document.querySelector('.jariscore3>span')

noristart.onclick = function(){
    noristart.style.display = 'none'
    if(noritimer > 0 && noriYposition < 250){
        noriinter= setInterval(() => {
            noriplay.next();
            noritimer--  
          
            noridownbox.style.top = noriYposition +'px'
            switch(noripositionmode){
                case 0:
                    if(noriXposition<10){
                        noriXposition+=2
                        noridownbox.style.left = noriXposition-2+'%'
                    }else{
                        noripositionmode = 1 
                        noriYposition+= 70;
                    }
                break;
                case 1:
                    if(noriXposition!=0){
                        noriXposition-= 2
                        noridownbox.style.left = noriXposition-2 + '%'
                    }else{
                        noripositionmode = 0;
                        noriYposition+= 70;
                    }
                    break;    
            }
        },1000)}else{ clearInterval(noriinter)
            noritimer = sonagilist[0].length
            noriYposition = 0;

    }
}

jari2a.onchange=function(){
    noriboxheight = noridownbox.getBoundingClientRect().height;
    norih4 = document.querySelectorAll('.jariviewbox2 .noridownbox h4')
   let value = jari2a.value

//    console.log(value)
   if(noriboxheight==126 && noriYposition >270){
    clearInterval(noriinter)
    noritimer = sonagilist[0].length
    noriYposition = 0;
   }else if(noriboxheight==105&&noriYposition >270){
    clearInterval(noriinter)
   }
   else if(noriboxheight==63&&noriYposition >290){
    clearInterval(noriinter)
   }
   else if(noriboxheight==84&&noriYposition >310){
    clearInterval(noriinter)
   }
   else if(noriboxheight==42 && noriYposition >350){
    clearInterval(noriinter)
   }
   else if(noriboxheight==21 && noriYposition >375){
    clearInterval(noriinter)
   }
    norih4.forEach(function(item){
        if(value == item.innerHTML){
            item.classList.add('displayxx')
            noriscore11++
            jariscore3.innerHTML = Math.round(noriscore11/sonagilist[0].length*100) + '%'
        }
    })
    jari2a.value = '';
}


function* sonagi(num){
    for(i=0; i<sonagilist[0].length; i++){
        let h4box = document.createElement('h4')
        h4box.innerHTML = sonagilist[num][i] ;
     yield jariviewbox2.appendChild(h4box)
    }
}


// 인터넷 익스플로러 사이트
// 부팅시 화면구성
let internetbooting = document.querySelector('.internetbooting')
let siteview = document.querySelectorAll('.internetmain section')
let sitebookmark = document.querySelectorAll('.yahoo_bookmark a')
let internetB =document.getElementById('internetB')
internetB.onclick = function(){
    siteview[0].style.display = 'block';
    siteview[1].style.display = 'none'
    siteview[2].style.display = 'none'
    siteview[3].style.display = 'none'
    history.back();
    webaddress.value = '메인 포트폴리오 화면'
}

sitebookmark.forEach(function(item,idx){
    item.onclick=function(){
        // 인덱스 0번이 메인페이지라 일부러 실제 인덱스 값보다 1높은 순위로  설정함
                switch (idx){
                case 0 : 
                siteview[0].style.display = 'none'
                siteview[3].style.display = 'none'
                siteview[1].style.display = 'block'
                siteview[2].style.display = 'none'
                webaddress.value = 'CGV 홈페이지'
                break;
                case 1 : 
                siteview[2].style.display = 'block'
                siteview[0].style.display = 'none'
                siteview[1].style.display = 'none'
                siteview[3].style.display = 'none'
                webaddress.value = 'KFC 홈페이지'
                break;
                case 2:
               siteview[0].style.display = 'none';
              siteview[1].style.display = 'none';
              siteview[3].style.display = 'block';
              siteview[2].style.display = 'none';
              webaddress.value ='슈퍼마리오'
         }
         item.ondragstart = function(){
            return false;
        }
        }
        
    
})

//주소입력창
let webaddress = document.querySelector('.internetrowwrap input')
let yahooinput = document.querySelector('.yahoo_main input')
let yahoo_sbtn = document.getElementById('yahoo_sbtn')
let yah;
// yahooinput.onchange =function(){
//      yah = yah + yahooinput.value;
//      console.log(yah)
// }
yahoo_sbtn.onclick = function(){
    yah = yahooinput.value;
    let result ='';
    function dooooo(a){
        var tarray = new Array(2);
        if(a.search(/KFC/i) > 0){
            tarray[0] = a.search(/KFC/i)

            // console.log(tarray)
       }else if(a.search(/CGV/i)>0){
            tarray[1] = a.search(/CGV/i)
            // console.log(tarray) 
        }
        for(i=0;i<tarray.length; i++){
            if((tarray[i])!=undefined){
                result = i
            }
        }
        // console.log(result)
        switch(result){
            case 0:
                siteview[2].style.display = 'block'
                siteview[0].style.display = 'none'
                siteview[1].style.display = 'none'
                webaddress.value = 'KFC 홈페이지'
                break;
                case 1:
                    siteview[0].style.display = 'none'
                    siteview[1].style.display = 'block'
                    siteview[2].style.display = 'none'
                    webaddress.value = 'CGV 홈페이지'
                    break;
                    default : 
                    yahooinput.value =''
                    yahooinput.placeholder = '키워드를 다시 입력하세요'

        }
  
    }
    dooooo(yah)
        yah = '';
        yahooinput.value ='';
}


// 지뢰찾기 아이디어

let ul = document.querySelector('.gameplaybox>ul')
init()

function init(){
    for(let i=0 ; i<17; i++){
        let li = document.createElement('li')
        let ul_sub = document.createElement('ul')
        for(let a=0; a<24; a++){
            let li_sub = document.createElement('li')
            ul_sub.prepend(li_sub)
        }
        li.prepend(ul_sub)
        ul.prepend(li)
    }
}

 // 상자생성

 let blocks = {
    type : 'box',
    x : 0,
    y:0,
    positionX : [
    [0],
    [0],
    [0],
    [0]
    ],
    positionY : [
        [0],
        [0],
        [0],
        [0]
        ],
    color : 'blue'
} 
let tempBox = {
    ...blocks
}
function renderbox(){
   let {type,x,y,positionX,positionY,color} = tempBox
//    for(let i =0; i<positionX.length; i++){
//         for(let a = 0; a<positionX[i].length; a++){
//             ul.children[positionY[i][a]+y ].children[0].children[positionX[i][a]+x].className = snake;
//         }
//    }
ul.children[y].children[0].children[x].className = 'snake';
}
window.onkeydown = function(e){
        // console.log(e.code)
        // console.log(tempBox.x,tempBox.y)
        switch (e.code){
            case 'KeyA':
                tempBox.x -=1 
                break;
            case 'KeyD':
                tempBox.x +=1 
                break;
            case 'KeyW':
                tempBox.y -=1
                break;
            case 'KeyS':
                tempBox.y +=1    
                break;
        }
    renderbox()
    
}



//html 노트
  // html페이지를 탭메뉴로 구성함

  let htmllist_li = document.querySelectorAll('.htmltaglist li')
  let html_tagnotebox = document.querySelectorAll('.html_tagnotebox>ul>li')
  html_tagnotebox[0].style.display = 'block'
  htmllist_li.forEach(function(item,idx){
      item.onclick= function(){
          for(let i = 0; i<htmllist_li.length; i++){
              if(idx == i){
                  htmllist_li[i].style.background= 'orange'
                  html_tagnotebox[i].style.display = 'block'
              }else{
                  htmllist_li[i].style.background= 'white'
                  html_tagnotebox[i].style.display = 'none'
              }
          }
      }
      item.ondragstart = function(){
        return false;
    }
  })
// css 노트부분

let css_basic_list =document.querySelectorAll('.css_basic_list ol li')
let css_basic_note = document.querySelectorAll('.css_basic_note ul li')
css_basic_note[0].style.display='block'
css_basic_list.forEach(function(item,idx){
    item.onclick = function(){
            for(let i = 0 ; i<css_basic_note.length; i++){
                if(idx==i){
                    item.style.background = 'orange'
                    css_basic_note[i].style.display='block'
                }else{
                    css_basic_list[i].style.background = 'white'
                    css_basic_note[i].style.display='none'
                }
            }
    }
    item.ondragstart = function(){
        return false;
    }
})
let css_media_list = document.querySelectorAll('.css_media_list ul li')
let css_media_use = document.querySelectorAll('.css_media_use ul li')
css_media_use[0].style.display='block'
css_media_list[0].style.background='orange'
css_media_list.forEach(function(item,idx){
    item.onclick=function(){
        for(let i=0; i<css_media_list.length; i++){
            if(idx==i){
                item.style.background='orange'
                css_media_use[i].style.display='block'
            }else{
                css_media_list[i].style.background='white'
                css_media_use[i].style.display='none'
            }
        }
        
    }
    item.ondragstart = function(){
        return false;
    }
})

//  html 문서 오픈
document.querySelectorAll('.mycomputericon1 li').forEach(function(item,idx){
   item.onclick = function(){
   document.querySelectorAll('.html_note1,.html_note2')[idx].style.display = 'block'
   work_line[idx+2].style.display = 'block' 
   document.querySelectorAll('.html_note1,.html_note2')[idx].style.left = Math.random()*200 +'px'  
   document.querySelectorAll('.html_note1,.html_note2')[idx].style.top = Math.random()*150 +'px'
}
});
// css도 똑같음
document.querySelectorAll('.mycomputericon2 li').forEach(function(item,idx){
    item.onclick = function(){
    document.querySelectorAll('.css_note1,.css_note2')[idx].style.display = 'block'
    work_line[idx+5].style.display = 'block' 
    document.querySelectorAll('.css_note1,.css_note2')[idx].style.left = Math.random()*200 +'px'  
    document.querySelectorAll('.css_note1,.css_note2')[idx].style.top = Math.random()*150 +'px'  
    }
 });

// cmd 창
let cmdenter = document.querySelector('#cmdenter'),mm=2,cmdwrap=document.querySelector('.cmdwrap');
document.querySelector('.cmdopen').onclick=function(){
    document.querySelector('.cmd').style.display = 'block'

    startbutton.dispatchEvent(new Event('click'))
    work_line[17].style.display='block'

    
}
//help 오픈
let helpopen = document.querySelector('.helpopen')
helpopen.onclick=function(){
    document.querySelector('.help').style.display = 'block'

    startbutton.dispatchEvent(new Event('click'))
    work_line[18].style.display='block'
}
// help 창 슬라이드 효과주기
let mymodal = document.querySelectorAll('.modal')
let helpbtn = document.querySelectorAll('.helplt,.helprt'),helpnum=0
//왼쪽 클릭
helpbtn[0].onclick=function(){
if(helpnum>0){
    helpnum--
    mymodal[helpnum].scrollIntoView({behavior : 'smooth',
    block : 'nearest',  inline : 'start'
})
}else{
    return false
}
}
// 오른쪽 클릭
helpbtn[1].onclick=function(){
    if(helpnum<mymodal.length){
        helpnum++
        mymodal[helpnum].scrollIntoView({behavior : 'smooth',
        block : 'nearest',  inline : 'start'
    })
    }else{
        return false
    }
    }

//인풋창 클릭시 자동포커스
document.querySelector('.cmd_view').onclick=function(){
    cmdenter.focus()
}
//cmd창 인풋 구현

cmdenter.onkeyup=function(e){
    // console.log(e)
    let enter1 = e.code,evalue=cmdenter.value;
    let pu,pt;
    pt = document.createElement('p')
    pt.innerHTML = '파일이 존재하지 않습니다.'
    if(enter1=='Enter'){
        let br = document.createElement('br')
        switch (evalue) {
            case 'cd..':
            if(mm==2){
                mm--
                pu= document.querySelector('.cmd_linewrap p').innerText 
                cmdwrap.append(pu)
                cmdwrap.append(br)
                document.querySelector('.cmd_linewrap p').innerText = "C:\\Users\\"
                cmdenter.value = ''
            }else if(mm==1){
                mm--
                let pu1 = document.querySelector('.cmd_linewrap p').innerText 
                cmdwrap.append(pu1)
                cmdwrap.append(br)
                document.querySelector('.cmd_linewrap p').innerText = "C:\\"
                cmdenter.value = ''
            }else if(mm==0){
                let text1 = document.createElement('p')
                text1.innerHTML = '이미 최상위 폴더입니다.'
                cmdenter.value = ''
                cmdwrap.append(text1)
                cmdwrap.append(br)
            }
            break;
            case 'dir' : 
            if(document.querySelector('.cmd_linewrap p').innerText=='C:\\html\\'){
                let logt = document.createElement('p')
                logt.innerHTML = '\<폴더\> html'+'<br>'+'html.exe'
                cmdenter.value = ''
                cmdwrap.append(logt)
              cmdwrap.append(br)
            }else if(document.querySelector('.cmd_linewrap p').innerText=='C:\\css\\'){
                let logt1 = document.createElement('p')
                logt1.innerHTML = '\<폴더\> css'+'<br>'+'css.exe'
                cmdenter.value = ''
                cmdwrap.append(logt1)
                cmdwrap.append(br)
            }else if(document.querySelector('.cmd_linewrap p').innerText=='C:\\javascript\\'){
                let logt2 = document.createElement('p')
                logt1.innerHTML = '\<폴더\> javascript'+'<br>'+'javascript.exe'
                cmdenter.value = ''
                cmdwrap.append(logt2)
                cmdwrap.append(br)
            }else{
                let text2 = document.createElement('p')
                text2.innerHTML = 'html, css, javascript 폴더가 존재합니다.'
                cmdenter.value = ''
                cmdwrap.append(text2)
                cmdwrap.append(br)
            }
            break;
            case 'ipconfig' : 
            let text3 = document.createElement('p')
            text3.innerHTML = '127.0.0.1'
            cmdenter.value = ''
            cmdwrap.append(text3)
            cmdwrap.append(br)
            break;
            case 'cd html' : 
            mm=1
            pu = document.querySelector('.cmd_linewrap p').innerText 
                cmdwrap.append(pu)
                cmdwrap.append(br)
            document.querySelector('.cmd_linewrap p').innerText = "C:\\html\\"
            cmdenter.value = ''
            break;
            case 'cd css' : 
            mm=1
            pu = document.querySelector('.cmd_linewrap p').innerText 
                cmdwrap.append(pu)
                cmdwrap.append(br)
            document.querySelector('.cmd_linewrap p').innerText = "C:\\css\\"
            cmdenter.value = ''
            break;
            case 'cd javascript' : 
            mm=1
           pu = document.querySelector('.cmd_linewrap p').innerText 
                cmdwrap.append(pu)
                cmdwrap.append(br)
            document.querySelector('.cmd_linewrap p').innerText = "C:\\javascript\\"
            cmdenter.value = ''
            break;
            case 'html.exe' :
                if(document.querySelector('.cmd_linewrap p').innerText=='C:\\html\\'){
                  setTimeout(function(){
                      document.querySelectorAll('#mycom')[0].style.display ='block'
                      document.querySelectorAll('.work_line')[1].style.display ='block'
                      cmdenter.value = ''
                    },1000)
                }else{
                    cmdenter.value = '';
                    cmdwrap.append(pt)
                    cmdwrap.append(br)
                }
                break;
            case 'css.exe' :
                if(document.querySelector('.cmd_linewrap p').innerText=='C:\\css\\'){
                    setTimeout(function(){
                        document.querySelectorAll('#mycom')[1].style.display ='block'
                        document.querySelectorAll('.work_line')[4].style.display ='block'
                        cmdenter.value = ''
                    },1000)
                }else{
                    cmdenter.value = '';
                    cmdwrap.append(pt)
                    cmdwrap.append(br)
                }
                break;
            case 'javascript.exe' :
                if(document.querySelector('.cmd_linewrap p').innerText=='C:\\javascript\\'){
                    setTimeout(function(){
                        document.querySelectorAll('#mycom')[2].style.display ='block'
                        document.querySelectorAll('.work_line')[7].style.display ='block'
                        cmdenter.value = ''
                    },1000) 
                }else{
                    cmdenter.value = '';
                    cmdwrap.append(pt)
                    cmdwrap.append(br)
                }
                break;
            default:
                let textline = document.createElement('p')
                textline.innerHTML = cmdenter.value
                cmdenter.value = ''
                cmdwrap.append(textline)
                cmdwrap.append(br)
            }
        }
       
}
// 종료버튼은 스크립트로 진행 , 버튼누를시 wrapingfull 을 display none하고
// 그냥 바디에 종료화면 백그라운드로 띄워주면 될듯?
document.querySelectorAll('.wrap1>ul>li')[6].onclick = function(){
    document.querySelector('.wrapingfull').style.display='none'
    document.querySelector('.ending').style.display ='flex'
}
document.querySelector('.ending').onclick=function(){
    window.location='index.html'
}

})