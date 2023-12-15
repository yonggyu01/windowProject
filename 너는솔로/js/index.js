let start_box = document.querySelector('.start_box')
let first_yes = document.querySelector('.first_select_yes')
let first_no = document.querySelector('.first_select_no')
start_box.addEventListener('click',function(event){
    let classselect = event.target.className || event.target.parentElement.className
    console.log(classselect)
    switch(classselect){
        case 'fir_txt' :
            start_box.style.display = 'none'
            first_yes.style.display = 'block'
            break;
        case 'sec_txt' :
             start_box.style.display = 'none'
             first_no.style.display = 'block'
            break;
        default : 
        alert ('"예"와 "아니오"를 정확하게 선택해 주세요')        
    }
})
let Yscroll;
window.addEventListener('scroll',function(event){
    Yscroll = window.pageYOffset;
})


// 회원가입기능 구현


fetch('https://jsonplaceholder.typicode.com/posts',{
     method : 'POST', body :JSON.stringify({
        title : 'ninanos',
        name : 'paparazzi',
        index : 15
     }), headers : {'Content-type' : 'application/json'}

    }).then(res=>res.json()).then(data=>console.log(data,data))