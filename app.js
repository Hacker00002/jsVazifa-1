const formBtn = document.querySelector('form')
const num1Btn = document.querySelector('#num1')
const num2Btn = document.querySelector('#num2')
const squareBtn = document.querySelector('.square')

const r = Math.round(Math.random() * 255)
const g = Math.round(Math.random() * 255)
const b = Math.round(Math.random() * 255)

const RGB = `rgb(${r}, ${g}, ${b})`

formBtn.addEventListener('submit', function(e){
    e.preventDefault()
    
    function allBtn(){
        
        squareBtn.style = `
        width:${num1Btn.value}px;
        height:${num2Btn.value}px
        `
        squareBtn.style.backgroundColor = RGB
    }

    function error(){
        if(num1Btn.value == '' && num2Btn.value == ''){
            alert("Eltimos qiymat kiriting !!!")
        }
    }
    

    error()
    allBtn()

    // num2Btn.style.backgroundColor = ("yellow")
})