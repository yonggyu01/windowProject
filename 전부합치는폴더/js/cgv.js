function imgchange(url){
   document.querySelector('#special_img').src = url 
}
window.onload =function(){
    let chartnum=0,chartnum2=0,eventnum=0,automode=0,eventtime=0,autotimer;
    document.querySelector('.familysite_list').style.display ='none'
    window.onclick = function(e){
    //    e.target.draggable = false
        let slider = document.querySelector('.chart_wrap .slide_list'),//
        sliderli2 =document.querySelector('.chart2_wrap .slide_list li').getBoundingClientRect().width,//
        sliderli =document.querySelector('.chart_wrap .slide_list li').getBoundingClientRect().width,//
        eventslide =document.querySelector('.event_list'),//
        slider2 = document.querySelector('.chart2_wrap .slide_list'),//
        eventli =document.querySelector('.event_list li').getBoundingClientRect().width,//      
        idchecker = e.target.id || e.target.classList.value;
        // console.log(idchecker)
        switch (idchecker){
            case 'btn_close' :
                document.querySelector('.adTop').style.display = 'none'
                break;
            case 'btn_play' :
                document.querySelector('.video1').play();
                break;
            case 'btn_Stop' :
                document.querySelector('.video1').pause();
                break;
            case 'btn_soundOn' :
                document.querySelector('.video1').muted = 0;
                break;
            case 'btn_soundOff' :
                document.querySelector('.video1').muted = 1;
                break;
            case 'mchart':

                e.target.parentElement.nextElementSibling.children[0].style.color = 'gray'
                e.target.style.color='black'
               document.querySelector('.chart_wrap .slide_wrap').style.width = '1000px'
               document.querySelector('.chart2_wrap').style.display = 'none'
               document.querySelector('.chart_wrap .slide_btn').style.display = 'block'
            break;
            case 'm2chart':
            
                e.target.parentElement.previousElementSibling.children[0].style.color = 'gray'
                e.target.style.color='black'
                document.querySelector('.chart2_wrap').style.display = 'block'
                document.querySelector('.chart_wrap .slide_btn').style.display = 'none'
                document.querySelector('.chart_wrap .slide_wrap').style.width = '0px'
            break;
            case 'chartpreb' : //차트 슬라이드 버튼  gap 30px임
                ++chartnum
                if(chartnum==0){ e.target.style.display = 'none'}
                slider.style.left =chartnum*((sliderli+30)*5)+'px';
                e.target.nextElementSibling.style.display ='block'
                break;
            case 'chartnextb' :
                --chartnum
                if(chartnum==-3){ e.target.style.display = 'none'
                slider.style.left = chartnum*((sliderli+30)*5)+'px'}else{
                    slider.style.left = chartnum*((sliderli+30)*5)+'px'
                }
                    e.target.previousElementSibling.style.display ='block'
                break;
            case 'chartpreb2' : //차트 슬라이드 버튼  gap 30px임
                ++chartnum2
                if(chartnum2==0){ e.target.style.display = 'none'}
                slider2.style.left =chartnum2*((sliderli2+30)*5)+'px';
                e.target.nextElementSibling.style.display ='block'
                break;
            case 'chartnextb2' :
                --chartnum2
                if(chartnum2==-3){ e.target.style.display = 'none'
                slider2.style.left = chartnum2*((sliderli2+30)*5)+'px'}else{
                    slider2.style.left = chartnum2*((sliderli2+30)*5)+'px'
                }
                    e.target.previousElementSibling.style.display ='block'
                break;
            case 'eventprevb':  //이벤트 버튼  gap 24px임
            if(eventnum==(eventli +24)*-1){
                e.target.style.display = 'none'
                eventnum = eventnum +eventli +24
                eventslide.style.transform = `translate(${eventnum}px)`
            }else{
                eventnum = eventnum +eventli +24
                eventslide.style.transform = `translate(${eventnum}px)`
            }
                e.target.nextElementSibling.style.display ='block'
                break;
            case 'eventnextb' :
                if(eventnum==(((eventli+24)*-1)*2)){
                    eventnum = eventnum -eventli-24
                    eventslide.style.transform = `translate(${eventnum}px)`
                    e.target.style.display = 'none'
                }else{
                    eventnum = eventnum -eventli-24
                    eventslide.style.transform = `translate(${eventnum}px)`
                }
                e.target.previousElementSibling.style.display ='block'
                break;
                case 'btn_eventControl': //event auto play버튼 처음 브라우저 시작시 플레이 상태임  클릭시 사진 전환필요함
                automode++
                e.preventDefault();
                // 0일때는 스탑임 하자
                e.target.style.backgroundImage = automode%2 > 0 ?   `url(img/stop.png)` : `url(img/play_d.png)`
                if(automode%2 > 0){ // 플레이시 할일
                    autotimer =  setInterval(() => {
                        //  if와 else로  구성해서  중간에 정지버튼 클릭시 버그 발생가능성 높음
                         if(eventtime != 0){
                             if(eventnum==(eventli +24)*-1){
                                 document.querySelector('#eventnextb').previousElementSibling.style.display = 'none'
                                 eventnum = eventnum +eventli +24
                                 eventslide.style.transform = `translate(${eventnum}px)`
                                 eventtime = 0
 
                             }else{
                                 eventnum = eventnum +eventli +24
                                 eventslide.style.transform = `translate(${eventnum}px)`
                                 document.querySelector('#eventnextb').style.display ='block'
                             }
                         }else{
                             if(eventnum==(((eventli+24)*-1)*2)){
                                 eventnum = eventnum -eventli-24
                                 eventslide.style.transform = `translate(${eventnum}px)`
                                 document.querySelector('#eventnextb').style.display = 'none'
                                 eventtime = 1 
                             }else{
                                 eventnum = eventnum -eventli-24
                                 eventslide.style.transform = `translate(${eventnum}px)`
                             }
                             document.querySelector('#eventnextb').previousElementSibling.style.display ='block'
                         }
                     }, 5000) // 버그 가능성이 있으니 추가수정 한번 할것임
                }else{ // 스탑시
                    clearInterval(autotimer)
                    eventtime = 0;
                    }
                    
                        // 추가로 수정 방향은 -> 이벤트 부분은 이렇게 id체커로  이벤트를 직접 주는게 아니라 
                        //이벤트 리스너로 이벤트를 직접 해당태그에 등록하고 오토플레이시 변수.dispatchEvent(new Event('click'))
                        //이런식으로 구동시켜도 될것같음
                break;
        }
    }
    //이벤트 리스트 마우스 호버효과
    let eventHall = document.querySelectorAll('.specialHall_list li')
    eventHall.forEach(function(item,idx){
        item.onmouseenter= function(){
            item.classList.add('active')
            imgchange(item.dataset.id)
            for(i=0;i<eventHall.length; i++){
                if(idx!=i){
                    eventHall[i].classList.remove('active')
                }
            }
        }
        item.onmouseleave = function(){
            for(i=0;i<eventHall.length; i++){
                if(idx!=i){
                    eventHall[i].classList.remove('active')
                }
            }
        }
    })


    document.querySelector('.familysite_wrap h3').onclick = function(){
        document.querySelector('.familysite_list').style.display =  document.querySelector('.familysite_list').style.display =='none'? 'block' : 'none'
    }
    let windowYscroll=''
    window.onscroll = function(){
        let fixnav = document.querySelector('.fixedNav')
        let footertopbtn = document.querySelector('.fixedBtn')
        windowYscroll=window.pageYOffset;
        if(document.querySelector('.adTop').style.display!='none' && windowYscroll > 250){
            fixnav.style.display = 'block'
            fixnav.style.position = 'fixed'
            footertopbtn.style.display = 'flex'
        }else if(document.querySelector('.adTop').style.display=='none' && windowYscroll > 160){
            fixnav.style.display = 'block'
            fixnav.style.position = 'fixed'
            footertopbtn.style.display = 'block'
        }else{
            fixnav.style.display = 'none'
            fixnav.style.position = 'fixed'
            footertopbtn.style.display = 'none'
        }
    }
  // 로컬에 자료저장해야함 .giftcon 태그 속에 무언갈 클릭했을때
  document.querySelector('.giftcon_wrap').onclick = function(e){
    // console.log(e)
    // e.preventDefault();
    let targetselect,replacetxt=/\n/g;
    let p = /^..../g;
    let t =/0[0-9]?.jpg$/g;


    switch (e.target.nodeName) {
        case 'SPAN':
            targetselect=e.target.parentElement.parentElement
        break;
        case 'STRONG':
            targetselect=e.target.parentElement.parentElement
        break;
        case 'A':
            targetselect=e.target
        break; 
        default: 
        console.log('선택없음')
        break;
    }
    if(targetselect.children[0].localName=='img'){
        let getsrc =  targetselect.children[0]?.attributes[0].nodeValue
        let gettext = targetselect.children[1].innerText
        let resulttxt = gettext.split(replacetxt) 
        let part = getsrc.replace(p,'');
        let mid1 = part.replace(t,'');

             console.log(resulttxt)
        savelocal(getsrc,resulttxt,mid1)
    }
    function savelocal(a1,b1,c1){
        window.localStorage.setItem ('src',a1)
        window.localStorage.setItem ('text',b1)
        window.localStorage.setItem ('part',c1)
        
    }
  }
     
}