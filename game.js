const grid= document.querySelector('.grid')
const spanPlayer = document.querySelector('.player');
const timer = document.querySelector('.timer');

const characters = [
    'beth',
    'jerry',
    'jessica',
    'morty',
    'pessoa-passaro',
    'pickle-rick',
    'rick',
    'summer',
    'meeseeks',
    'scroopy',
  ];
  

      



const createElement=(tag,className)=>{
    const element = document.createElement(tag)
      element.className=className
 
    return element
}

let playerOne=""
let playerTwo=""
   
 const chekedWins=()=>{
   const disabled= document.querySelectorAll('.disabled-card')
   if(disabled.length === 20){
    clearInterval(this.loop);
    alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);
   }
 }
   

  const checked=()=>{
      let firstCard= playerOne.getAttribute("data-character")
      let secondCard= playerTwo.getAttribute("data-character")

      if(firstCard===secondCard){
       playerOne.firstChild.classList.add('disabled-card')
       playerTwo.firstChild.classList.add('disabled-card')

       playerOne=""
       playerTwo=""

       chekedWins()
      }else{
       

        setTimeout(()=>{
          playerOne.classList.remove('reveal-card')
          playerTwo.classList.remove('reveal-card')

          playerOne=""
          playerTwo=""

         },500)
       
      
      }
  
    }



 const revealCard=({target})=>{
   if(target.parentNode.className.includes('reveal-card')){
     return
   }
    if(playerOne ===""){
      target.parentNode.classList.add('reveal-card') 
      playerOne=target.parentNode
    } else if(playerTwo ===""){
      target.parentNode.classList.add('reveal-card') 
      playerTwo=target.parentNode
      checked()
    }
    console.log(target.parentNode)  
 }
 

const createCard=(character)=>{
    const card = createElement('div','card')
    const front= createElement('div','face front')
    const back= createElement('div','face back')

    front.style.backgroundImage = `url('../images/${character}.png')`
   
     card.appendChild(front)
     card.appendChild(back)
      card.addEventListener('click',revealCard)
      card.setAttribute("data-character",character)
         return card
}



   



const loadGame=()=>{
    const duplicateArray=[...characters,...characters]

    const shuffledArray = duplicateArray.sort(() => Math.random() - 0.5);
    shuffledArray.forEach((character)=>{
       const card =createCard(character)
       grid.appendChild(card)
      //console.log(shuffledArray)
    })
  
}

const startTimer = () => {

  this.loop = setInterval(() => {
    const currentTime = +timer.innerHTML;
    timer.innerHTML = currentTime + 1;
  }, 1000);

}

window.onload = () => {
  spanPlayer.innerHTML = localStorage.getItem('player');
  startTimer();
  loadGame();
}