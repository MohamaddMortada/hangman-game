var attemptss=6;
var gameOver = false;
var letters=document.querySelectorAll(".letter");
letters.forEach(letterElement=>{
    letterElement.addEventListener("click",()=>{
        if (!gameOver) {
            const letterr=letterElement.textContent;
            checkLetterr(letterr);
            isWin();
    }});
});
function checkLetterr(letterr){

      if(randomCity.includes(letterr)){
        index=[];
        var i=0;
        while(i<answer.length){
            if(randomCity[i]===letterr){
                index.push(i);
            }
            i++;
        }
        i=0;
        while(i<index.length){
                    answer=answer.slice(0,index[i])+letterr+answer.slice(index[i]+1);
                    i++;
        }
        console.log(answer)
        answerSection.textContent=answer;     
    }
}
function isWin(){
    if(attempts===0) {
        gameOver = true;
        setTimeout(() => {
        alert('Game Over, you lost');
    }, 1000);//for some reason the alert is being shown before the head is loaded, so I delayed it

}
    answerSection.textContent=answer;
    answer=document.getElementById('answer-section').textContent;
    if(!answer.includes('-')  )setTimeout(() => {
        alert('Game Over, you lost');
    }, 1000);//for some reason the alert is being shown before the Answer is loaded, so I delayed it
}



