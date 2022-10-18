
let deckId;
function start(){
  fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    deckId = data.deck_id;
  });
}
start();

const visaKort = () =>{
  
  fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
  .then((response) => response.json())
  .then((kort) => {
    console.log(document.getElementById("kortData").innerHTML = kort.cards[0].value +" "+ kort.cards[0].suit);
    
    let imageElement = document.
    createElement('img');
    imageElement.setAttribute("src",kort.cards[0].image);
        
    let div = document.getElementById("kortData");
    //div.innerHTML = '';

    div.appendChild(imageElement);
    document.getElementById("kortData").appendChild(imageElement);          
});
}
const btn = document.querySelector('button');
btn.addEventListener('click',visaKort);

