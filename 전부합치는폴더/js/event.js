window.addEventListener('load',function(){
  this.setTimeout(function(){
    window.scrollTo({
        top:500,behavior : "smooth"
    })
  },300)
 let img_wrap =document.querySelector('.game'),
 img_wrapauto = document.querySelectorAll('.img_wrap');
this.setTimeout(function(){
    for(let x of img_wrapauto){
        x.style.transform =`rotateY(180deg)`
     }
},3000)
let a,b,mode=0;
 img_wrap.addEventListener('click',function(e){
     if(e.srcElement.offsetParent.classList.value== 'img_wrap' && mode < 2){ 
        e.target.parentElement.style.transform = e.target.parentElement.style.transform ==  `rotateY(180deg)` ? `rotateY(0deg)` :  `rotateY(180deg)`
    switch (mode){
        case 0 :
      a = e.target;
       mode = 1
        break;
        case 1 : 
      b = e.target;

      mode = 2
      setTimeout(function(){
          mode = 0
      },1500)
        break;
    }
    if( a.previousElementSibling.attributes[0].nodeValue==b.previousElementSibling.attributes[0].nodeValue){
        a.parentElement.classList.add('succ')
        b.parentElement.classList.add('succ')    
    }else{setTimeout(function(){
            a.parentElement.style.transform = `rotatey(180deg)`
            b.parentElement.style.transform = `rotatey(180deg)`
            a='';
            b='';
        },1000)
    }
    }
    let resulechecker = document.querySelectorAll('.event_list>li>a>div')
    let check1 = 0
    for(let x of resulechecker){
       if(x.classList.value == 'img_wrap succ' ){
        check1++
            if( check1 == 12){
                setTimeout(function(){
                    alert('성공하셨습니다.')
                    check1 = 0;
                },500)
            }
        console.log(check1)
       }
    }
 })
 document.querySelector('.familysite_wrap h3').onclick = function(){
    document.querySelector('.familysite_list').style.display =  document.querySelector('.familysite_list').style.display =='none'? 'block' : 'none'
}
//스크롤
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
})