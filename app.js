document.addEventListener('DOMContentLoaded', () => {
const cardArray =[
    {
        name: 'c1',
        img:'c-1.png',
    },
    {
        name:'c2',
        img:'c-2.png',
    },
    {
        name:'c3',
        img:'c-3.png',
    },
    {
        name:'c4',
        img:'c-4.png',
    },
    {
        name:'c5',
        img:'c-5.png',
    },
    {
        name:'c6',
        img:'c6.png',
    },
    
    {
        name: 'c1',
        img:'c-1.png',
    },
    {
        name:'c2',
        img:'c-2.png',
    },
    {
        name:'c3',
        img:'c-3.png',
    },
    {
        name:'c4',
        img:'c-4.png',
    },
    {
        name:'c5',
        img:'c-5.png',
    },
    {
        name:'c6',
        img:'c6.png',
    },
]

// cardArray.sort(() => 0.5 - Math.random())//as math.random find value from -1 to 1 so we are using 0.5 - math random to compare weather the no is less than that or more than that
// console.log(cardArray)
// const scoredisplay = document.getElementById('result')

// const boarddisplay = document.querySelector('#board')
// let cardChoosen =[]
// let score = 0
// const cardChoosenId=[]
// function createBoard(){
// for(let i=0;i<cardArray.length;i++){
//  const card =document.createElement('img')
// card.setAttribute('src','kid.jpg')
// card.setAttribute('data-id',i)
// card.addEventListener('click',flipCard)
// boarddisplay.appendChild(card)
// }
// }
// function match(){
// document.querySelector('img')
// console.log('check the match')
// if(cardChoosen[0]==cardChoosen[1])
// {alert('ypu found the match')
// card[cardChoosenId[0]].setAttribute('src','white.png')
// card[cardChoosenId[1]].setAttribute('src','white.png')
// }
// }
// createBoard()
// function flipCard(){
//     console.log(cardArray)
// const cardId = this.getAttribute('data-id')
// cardChoosen.push('clicked',cardId)
// console.log('clicked',cardId)
// console.log(cardArray[cardId].name)
// this.setAttribute('src',cardArray[cardId].img)
// if(cardChoosen.length==2){
//     setTimeout(checkMatch,500)
// }
// }
// function winning(){
//     if(cardChoosen[0]==cardChoosen[1])
//     {
//         score = score +1
//     }
//     else{
//         score = score
//     }
//     scoredisplay.innerHTML=result
// }
cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenId = []
let cardsWon = []

//create your board
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img')
    card.setAttribute('src', 'kid.jpg')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.appendChild(card)
  }
}

//check for matches
function checkForMatch() {
  const cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardsChosenId[1]
  
  if(optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute('src', 'kid.jpg')
    cards[optionTwoId].setAttribute('src', 'kid.jpg')
    alert('You have clicked the same image!')
  }
  else if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match')
    cards[optionOneId].setAttribute('src', 'white.png')
    cards[optionTwoId].setAttribute('src', 'white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  } else {
    cards[optionOneId].setAttribute('src', 'kid.jpg')
    cards[optionTwoId].setAttribute('src', 'kid.jpg')
    alert('Sorry, try again')
  }
  cardsChosen = []
  cardsChosenId = []
  resultDisplay.textContent = cardsWon.length
  if  (cardsWon.length === cardArray.length/2) {
    resultDisplay.textContent = 'Congratulations! You found them all!'
  }
}

//flip your card
function flipCard() {
  let cardId = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardId].name)
  cardsChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)
  if (cardsChosen.length ===2) {
    setTimeout(checkForMatch, 500)
  }
}

createBoard()
})
