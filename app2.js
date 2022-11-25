const formBtn = document.querySelector('form')
const inputBtn = document.querySelector('.input')
const subBtn = document.querySelector('.subBtn')
const subBtn2 = document.querySelector('.subBtn2')
const circleBtn = document.querySelector('.circle')

const r = Math.round(Math.random() * 255)
const g = Math.round(Math.random() * 255)
const b = Math.round(Math.random() * 255)

const rgb = `rgb(${r},${g},${b})`

formBtn.addEventListener('submit', function(e){
    e.preventDefault()

    function circleBtn1(){
        circleBtn.style = `
        width:${inputBtn.value}px;
        height:${inputBtn.value}px;
        `

        circleBtn.style.backgroundColor = rgb
        circleBtn.style.borderRadius = ('50%')
    }

    function error(){
        if(inputBtn.value == 0){
            alert("Siz 0 soni kirita olmaysiz")
        }else if(inputBtn.value >= 1000){
            alert("Siz 1000 sonidan katta qiymat lirita olmaysiz")
        }else{
            circleBtn1()
        }
        if(subBtn2.addEventListener('click', function(){
            circleBtn.style.display = 'none'
        }))
        circleBtn1()
    }

    error()
})