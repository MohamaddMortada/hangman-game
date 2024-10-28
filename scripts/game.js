var attemptss=6;
var letters=document.querySelectorAll(".letter");
letters.forEach(letterElement=>{
    letterElement.addEventListener("click",()=>{
        const letterr=letterElement.textContent;
        checkLetterr(letterr);
        isWin();
    });
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
    if(attempts===0) answer+="GAME OVER";
    answerSection.textContent=answer;
    answer=document.getElementById('answer-section').textContent;
    if(!answer.includes('-'))   alert('Congratulations, you win');
}



