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
    /* 가맹점 신청버튼 키고 끄기 */
    var gamang = document.querySelector('.gamang')
    var form1 = document.querySelector('form') 
    var openclose = 0;
    form1.style.display= 'none'
    gamang.addEventListener('click', function(){
        if(openclose==0){
            openclose = 1
            form1.style.display = 'block'
        }else{
            openclose = 0
            form1.style.display='none'
        }
    })   
   /* 이메일 입력칸*/
   var textstr = document.querySelector('.textstr')
   var select1 = document.getElementById('emailname')
    select1.addEventListener('change',function(){
            var selectvalue = this.value
            console.log(selectvalue)
           if(selectvalue == 'none'){
                textstr.style.backgroundColor = 'white'
                textstr.removeAttribute('readonly')
                textstr.value = ''
              
           }else{
            textstr.value = selectvalue
            textstr.style.backgroundColor = 'gray'
            textstr.setAttribute('readonly','text')
           }
    })

/* input 입력칸 제어시 주의할점 select 태그에서 값을 가져올때
    가져오는 방법은 내가 선택할 메뉴를 미리 변수로 지정해두고
    change 이벤트로 해당변수가 변경되었을때의 값을 또다른 변수를 만들어서 함수내에서 저장한다
    이때 변수 = this.value (함수 내에서 선언하기 때문에 this는 함수의 객체를 의미함)
    이후 가져온 값을 input창에 다시 넣어주는 방법으로는
    내가 넣고싶은 태그를 선택하고 태그.value = 넣고싶은 문구를  작성하면
    값이 넣어진다.
    
    */
    

})