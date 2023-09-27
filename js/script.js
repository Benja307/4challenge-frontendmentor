let numbers = document.querySelector('.numbers');
let rateNumber = document.querySelector('.rate');
let btn = document.querySelector('.submit-btn');
let raitingCard = document.querySelector('.rating-state');
let tyCard = document.querySelector('.thankyou-state');

numbers.addEventListener('click', (event)=>{
    let numberSelected = event.target.innerText;
    rateNumber.innerText = numberSelected;
    if(numberSelected >= 1 && numberSelected <= 5){
        btn.addEventListener('click', ()=>{
            raitingCard.style.display = 'none';
            tyCard.style.display = 'grid';
        })
    }
});