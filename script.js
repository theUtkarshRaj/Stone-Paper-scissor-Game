let scoreStr =localStorage.getItem('score');
let score;
let result;
let computer_choice=GenerateComputerChoice();
function sound(){
  var snd = new Audio('click_sound.mp3');
  snd.play();
}
function afterClick(usermove){
  sound();
  computer_choice=GenerateComputerChoice();
    result=getresult(usermove,computer_choice);
    dikhao(usermove,computer_choice,result);
}
resetscore(scoreStr);
function resetscore(scoreStr){
      score=scoreStr ? JSON.parse(scoreStr):{
        win:0,
        lose:0,
        tie :0,
      };
     score.displayScore=function(){
       return `Score : Won : ${score.win}  ,  Lost : ${score.lose}  , Tie : ${score.tie}`;
       };
      dikhao();
  }
    
function GenerateComputerChoice(){
      let random_num = Math.random()*3;
      if(random_num>0 && random_num<=1){
       return 'stone';
      }
      else if(random_num>1 && random_num<=2){
        return 'paper';
       }
      else{
        return 'scissor';
       }
    }

function getresult(usermove,compmove){
      if(usermove==='stone'){
        if(compmove==='paper'){
          score.lose++;
          return 'you loose';
        }
        else if(compmove==='scissor'){
          score.win++;
          return 'You Won'; }
        else{
          score.tie++;
          return `it's a Tie`;
        }
        }
      if(usermove==='scissor'){
        if(compmove==='stone'){
          score.lose++;
          return 'you loose';
        }
        else if(compmove==='paper'){
          score.win++;
          return 'You Won'; }
        else{
          score.tie++;
          return `it's a Tie`;
        }
        }
      if(usermove==='paper'){
        if(compmove==='scissor'){
          score.lose++;
          return 'you loose';
        }
        else if(compmove==='stone'){
          score.win++;
          return 'You Won'; }
        else{
          score.tie++;
          return `it's a Tie`;
        }
        }
  }
    
function dikhao(usermove,computer_choice,result){
      localStorage.setItem('score',JSON.stringify(score));
      console.log(score);
      document.querySelector('#user-move').innerText=
      usermove!==undefined? `You choosed : ${usermove}`:" ";

      document.querySelector('#comp-move').innerText=
      computer_choice!==undefined? `Computer  choosed : ${computer_choice}`:" ";

      document.querySelector('#result').innerText=
      result!==undefined?`Result : ${result}`:" ";

      document.querySelector('#score').innerText=` ${score.displayScore()}`;

      
       //return alert(`You : ${userchoice}  computer : ${computer_choice} \nResult : ${result}
       // ${score.displayScore()}`);
  }