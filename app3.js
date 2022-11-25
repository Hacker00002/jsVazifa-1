const formBtn = document.querySelector('form')
const numBtn1 = document.querySelector('#numBtn1')
const numBtn2 = document.querySelector('#numBtn2')
const numBtn3 = document.querySelector('#numBtn3')
const subBtn = document.querySelector('#subBtn')
const starBtn = document.querySelector('.star')
const starBtnRes = document.querySelector('#subBtnRes')

formBtn.addEventListener('submit', function(e){
    e.preventDefault()

    function allForm(){
        starBtn.style = `
        border-left: ${numBtn1.value}px solid transparent;
        border-right: ${numBtn2.value}px solid transparent;
        border-bottom: ${numBtn3.value}px solid blue;
        `
    }

    if(numBtn1.value == '' && numBtn2.value == '' && numBtn3.value == ''){
        alert("Qiymat kiriting")
    }else{
        allForm()
    }

    function allError(){
        if(starBtnRes.addEventListener('click', function(){
            starBtn.style.display = 'none'
        }))
        allForm()
    }

    allForm()  
    allError()
})