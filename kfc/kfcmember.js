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