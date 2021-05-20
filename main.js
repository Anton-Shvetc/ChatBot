let askButton = document.getElementById('myButton');
//console.log(askButton);




askButton.addEventListener('click', function() {

 

let text = document.getElementById('question').value; //toLowerCase();
console.log(text);

let questionBox = document.getElementById('question-box');


let myQuestion = document.createElement('div');
myQuestion.id = 'human';

myQuestion.innerText = text; 

console.log(myQuestion);
let answerSection = document.getElementById('answer'); 


if (text !== '') {
answerSection.appendChild(myQuestion); 





console.log(myQuestion);

let botAnswer = document.createElement('div');




answerSection.appendChild(botAnswer);


 let AnimationAnswer = document.getElementById('fountainG');
 
 AnimationAnswer.classList.remove('hide')
 questionBox.classList.remove("emptyvalue");

 

  
//   switch (text) {
   
//     case 'Москва': 
    
 
//     botAnswer.innerText = 'Верно!'; 
//      document.getElementById('question').value = '';
//     break;

//     case 'Не Москва': 
    
//     botAnswer.innerText = 'Уверен?';
    
//     //document.getElementById('question').value = '';
//     break;

//     default: botAnswer.innerText = 'Это не столица России, попробуй еще';
//     document.getElementById('question').value = '';
// }

if (text == 'Москва') {
  document.getElementById('question').value = '';
  function answ () {
    botAnswer.id = 'bot';
    botAnswer.innerText = "Верно"
    
    document.getElementById('question').value = '';
    AnimationAnswer.classList.add('hide')
     block.scrollTop = 9999;
  }
  setTimeout(answ, 2000) 
} else {
   document.getElementById('question').value = '';
  function answ () {
    botAnswer.id = 'bot';
    botAnswer.innerText = "Попробуй еще"
    
    document.getElementById('question').value = '';
    AnimationAnswer.classList.add('hide')
    block.scrollTop = 9999;
  }
  setTimeout(answ, 2000)

 }




let block = document.getElementById("answer");
  block.scrollTop = block.scrollHeight;
} else {
  questionBox.classList.add("emptyvalue");

}

} );









