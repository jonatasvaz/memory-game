const input = document.querySelector('.login__input')
const  button = document.querySelector('.login__button')
const form = document.querySelector('.login-form')


const ValidatoInput=({target})=>{
   if(target.value.length > 2 ){
       button.removeAttribute('disabled')
       return
   }
    button.setAttribute('disabled','')
}

const HandleSubmit=(e)=>{
  e.preventDefault()
   localStorage.setItem('player',input.value)
   window.location ='./page/game.html'
} 

input.addEventListener('input',ValidatoInput)
form.addEventListener('submit',HandleSubmit)