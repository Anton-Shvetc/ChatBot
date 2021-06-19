let askButton = document.getElementById('myButton');
// let Test = document.querySelector('#myButton')
//console.log(askButton);


function Hello () {
  let botAnswer = document.createElement('div');
  botAnswer.id = 'bot'
  let answerSection = document.getElementById('answer'); 
  botAnswer.style.backgroundColor = 'white'
    botAnswer.innerText = "Привет, я бот"

answerSection.appendChild(botAnswer);

   
    
}

setTimeout(Hello , 500)




document.addEventListener('keydown', function(e){
  if (e.key === "Enter") {
    Start()
  }
})

function someFunc(event) {
    if (event.key == "Enter") {
        console.log(12)
    }
}


askButton.addEventListener('click',  Start);

 function Start() {

let text = document.getElementById('question').value; //toLowerCase();
console.log(text);

let questionBox = document.getElementById('question-box');


let myQuestion = document.createElement('div');
myQuestion.id = 'human';

myQuestion.innerText = text; 

// console.log(myQuestion);
let answerSection = document.getElementById('answer'); 


if (text !== '') {
answerSection.appendChild(myQuestion); 


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
    botAnswer.style.backgroundColor = 'white'
    botAnswer.innerText = "Верно"
    
    document.getElementById('question').value = '';
    AnimationAnswer.classList.add('hide')
     block.scrollTop = 9999;
  }
  setTimeout(answ, 1000) 
} else {
  botAnswer.id = 'bot';
   document.getElementById('question').value = '';
  function answ () {
    botAnswer.style.backgroundColor = 'white'
    botAnswer.innerText = "Попробуй еще"
    
    document.getElementById('question').value = '';
    AnimationAnswer.classList.add('hide')
    block.scrollTop = 9999;
  }
  setTimeout(answ, 10000)

 }




let block = document.getElementById("answer");
  block.scrollTop = block.scrollHeight;
} else {
  questionBox.classList.add("emptyvalue");

}
}










