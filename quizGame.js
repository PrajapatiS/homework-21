//* quizGame */
let quizQuestion=[];
function getAllQuestion()
{
    let response= new XMLHttpRequest();
     response.open('get','http://jservice.io/api/random');
     response.addEventListener('load',function(){
         let quizresponse= JSON.parse(response.responseText);
         for(let i=0; i<quizresponse.length; i++){
         quizQuestion.push(quizresponse[i]);
        }
         console.log('hello', quizQuestion);
          displayQuestion();
     });
     response.send();
}
function displayQuestion(){
    console.log(quizQuestion);
    for(let i=0;i<quizQuestion.length; i++){
    let quest=document.querySelector('#quest1');
    quest.textContent=quizQuestion[i].question;
   
    let category=document.querySelector('#catgry1');
    category.textContent=quizQuestion[i].category.title;
}
}

window.addEventListener('load',function(){
 getAllQuestion();

 let btnGuess= document.querySelector('#btn_G');
    btnGuess.addEventListener('click', function(){
       console.log('click'); 
      let pointValue=document.querySelector('#pval1');
      let txtanswer= document.querySelector('#txt_ans');
      let total=pointValue.textContent;
    for(let i=0;i<quizQuestion.length;i++){
     console.log(quizQuestion[i].answer);
      if(quizQuestion[i].answer === txtanswer.value){
        
       
        total=parseInt(total)+quizQuestion[i].value;
        pointValue.textContent= total;
      }

    }
    txtanswer.value='';
     getAllQuestion();
    });

});
