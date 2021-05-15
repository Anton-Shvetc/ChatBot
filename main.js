let askButton = document.getElementById('myButton');
//console.log(askButton);




askButton.addEventListener('click', function() {

 

let text = document.getElementById('question').value; //toLowerCase();
console.log(text);

let myQuestion = document.createElement('div');
myQuestion.id = 'pes';

myQuestion.innerText = text; 

console.log(myQuestion);
let answerSection = document.getElementById('answer'); 


answerSection.appendChild(myQuestion); 



console.log(myQuestion);

let botAnswer = document.createElement('div');

botAnswer.id = 'cat';


answerSection.appendChild(botAnswer);


switch (text) {
    case 'Москва': 
    botAnswer.innerText = 'Верно!'; 
    break;

    case 'Не Москва': 
    botAnswer.innerText = 'Уверен?'; 
    break;

    default: botAnswer.innerText = 'Это не столица России, попробуй еще';
} 


let block = document.getElementById("answer");
  block.scrollTop = block.scrollHeight;

} ); 






