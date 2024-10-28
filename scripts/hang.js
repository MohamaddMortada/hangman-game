var cities=["BEIRUT","PARIS","NABATIEH","PRAGUE","NAPOLI","BARCELONA"];
let letter='';
//var randomCity="BEIRUT";
var randomCity=cities[Math.floor(Math.random() * cities.length)];
console.log(randomCity);
var attempts=6;
//var answer='-'.repeat(randomCity.length);
var answerSection=document.getElementById("answer-section");
var answer='-'.repeat(randomCity.length);
answerSection.textContent=answer;

//answerSection.textContent=answer;
//console.log('from game: '+answerSection);
var letters=document.querySelectorAll(".letter");
letters.forEach(letterElement=>{
    letterElement.addEventListener("click",()=>{
        const letter=letterElement.textContent;
        checkLetter(letter)
    });
});

function checkLetter(letterr){
    
  if(!randomCity.includes(letterr)){
      attempts--;
      console.log(attempts);
  }
const hangElement = document.getElementById('hang');
  if(attempts===0) {
    createImage('./assets/head.svg', 'head', hangElement);
    }
  
  if(attempts===5) createImage('./assets/body.svg', 'body', hangElement);
  if(attempts===1) createImage('./assets/left-hand.svg', 'left-hand', hangElement);
  if(attempts===2) createImage('./assets/right-hand.svg', 'right-hand', hangElement);
  if(attempts===3) createImage('./assets/left-leg.svg', 'left-leg', hangElement);
  if(attempts===4) createImage('./assets/right-leg.svg', 'right-leg', hangElement);
}
function createImage(src, className, parent) {
    const img = document.createElement('img');
    img.src = src;
    img.className = className;
    parent.appendChild(img);
  }

  


