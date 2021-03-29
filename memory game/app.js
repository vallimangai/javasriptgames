document.addEventListener('DOMContentLoaded',()=>{

        const CardArray=[
            {
                name:'fries',
                img:'images/fries.png'
            },
            {
                name:'fries',
                img:'images/fries.png'
            },
            {
                name:'cheeseburger',
                img:'images/cheeseburger.png'
            },
            {
                name:'cheeseburger',
                img:'images/cheeseburger.png'
            },
            {
                name:'ice-cream',
                img:'images/ice-cream.png'
            },
            {
                name:'ice-cream',
                img:'images/ice-cream.png'
            },
            {
                name:'milkshake',
                img:'images/milkshake.png'
            },
            {
                name:'milkshake',
                img:'images/milkshake.png'
            },
            {
                name:'hotdog',
                img:'images/hotdog.png'
            },
            {
                name:'hotdog',
                img:'images/hotdog.png'
            },
            {
                name:'pizza',
                img:'images/pizza.png'
            },
            {
                name:'pizza',
                img:'images/pizza.png'
            }
        ]
        CardArray.sort(()=>0.5-Math.random())
        const grid=document.querySelector('.grid')
        const resultDisplay = document.querySelector('#result')
        let cardsChosen=[]
        let cardsChosenId=[]
        let cardsWon=[]
        let val=0;

        function createBoard(){
            for(let i=0;i<CardArray.length;i++)
            {
                var card=document.createElement('img')
                card.setAttribute('src','images/blank.png')
                card.setAttribute('data-id',i);
                card.addEventListener('click', flipCard)
                grid.appendChild(card)
            }
        }

        createBoard()
        function checkForMatch(){
            var cards=document.querySelectorAll('img')
            const optionOneId= cardsChosenId[0]
            const optionTwoId=cardsChosenId[1]
            if (cardsChosen[0] === cardsChosen[1]) {
                alert('You found a match')
                cards[optionOneId].setAttribute('src', 'images/white.png')
                cards[optionTwoId].setAttribute('src', 'images/white.png')
                cards[optionOneId].removeEventListener('click', flipCard)
                cards[optionTwoId].removeEventListener('click', flipCard)
                cardsWon.push(cardsChosen)
                val=val+1;
              }
            else{
                cards[optionOneId].setAttribute('src','images/blank.png')
                cards[optionTwoId].setAttribute('src','images/blank.png')
                 alert('Sorry,try again')
                 val=val-1;
            }
            cardsChosen=[]
            cardsChosenId=[]
            resultDisplay.textContent=val
            if(cardsWon.length==CardArray.length/2){
                resultDisplay.textContent='Congratulation'
            }

        }
        function flipCard(){
            var cardId=this.getAttribute('data-id');
            if(!cardsChosenId.includes(cardId)){
                    cardsChosen.push(CardArray[cardId].name);
                    cardsChosenId.push(cardId);
                    this.setAttribute('src',CardArray[cardId].img)
                    if(cardsChosen.length===2){
                        setTimeout(checkForMatch,100)
                    }
            }
        }





})
