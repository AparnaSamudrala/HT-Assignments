//Decalring all DOM elements to access
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const restart_btn =document.querySelector(".restart_quiz");
const next_btn = document.querySelector('.next_btn');
const skip_btn = document.querySelector('.skip_btn');
const result_box = document.querySelector('.result_box');
const restart_quiz = result_box.querySelector('buttons .restart');
const question_section = document.querySelector(".questions-answered");
const quit_quiz =result_box.querySelector('buttons .quit');
var correctAnsQues = [];//stores all right answered questions.
var wrongAnsQues =[];//stores all wrongly answered questions.
var skippedQues = [];//stores all user skipped questions.

let que_count =0;
let que_numb = 1;
let userScore = 0;
let skippedScore = 0;

//By default hide the next button. 
//Display next button when user has selected option only.
next_btn.style.display = "none";

//if Start Quiz Button is clicked
start_btn.onclick =()=>{
    info_box.classList.add("activeInfo"); //show the info box;
	document.querySelector(".info_box .info span.total_questions").innerHTML = questions.length;
}

//If skip quiz button is clicked, takes user back to start quiz screen.
exit_btn.onclick =()=>{
	info_box.classList.remove("activeInfo"); //Hide the info box;
}

//If Start Quiz button is clicked. Shows questions from questions.js
continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo"); //hide info box
    quiz_box.classList.add("activeQuiz"); //show quiz box
    showQuestions(0);
    queCounter(1);
}

//If Next Button is clicked, it navigates to next question.
//Once all questions are done displays the result screen
next_btn.onclick=()=>{
    if(que_count < questions.length -1)
	{ 
        que_count++;
        que_numb++;
        showQuestions(que_count); 
        queCounter(que_numb);
        next_btn.style.display ='none';
	}
	else{
		console.log("Questions Completed");
		showResultBox();
	}
}

//skip button handler (Hide skip button once user has selected choice, and display next button to move to next question.)
//same as next btn functionality but will have questions that have not been selected by user
skip_btn.onclick=()=>{
	if(que_count < questions.length - 1)
	{ 
        que_count++;
        que_numb++;
        showQuestions(que_count); 
        queCounter(que_numb);
        next_btn.style.display ='none';
		skippedQues.push(questions[que_count - 1].question);
		console.log("que count: "+que_count);
		console.log(skippedScore = skippedScore+1);
		console.log("Skipped Questions: "+skippedQues);
	}
	
	else{
		console.log("Questions Completed");
		skippedQues.push(questions[que_count].question);
		console.log(skippedScore = skippedScore+1);
		showResultBox();
		
	}
	
}


//getting questions and options from array in questions.js
function showQuestions(index){
    const que_text = document.querySelector(".que_text");
    let option_list = document.querySelector('.option_list');
	document.querySelector(".quiz_box header").style.display = "none";
	skip_btn.style.display = 'inline-block';
    var que_tag=  '<p>'+ questions[index].numb + "." + questions[index].question+'</p>';
    let option_tag =  '<div class="option"> <input type="radio" name="ans" id="one"><label for="one">'+questions[index].options[0]+ '</label></div>'
                       +'<div class="option"> <input type="radio" name="ans" id="two"><label for="two">'+ questions[index].options[1]+'</label></div>'
                       +'<div class="option"> <input type="radio" name="ans" id="three"><label for="three">'+ questions[index].options[2]+'</label></div>'
                       +'<div class="option"> <input type="radio" name="ans" id="four"><label for="four">'+ questions[index].options[3]+'</label></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML =option_tag;
    const option = option_list.querySelectorAll(".option label");
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

// Validating useroption with correct option.

function optionSelected(answer){
    
	let userAns = answer.textContent.trim(); //removes whitespaces trailing and leading.
    console.log("userAns"+userAns);
    let allOptions = option_list.children.length;
    let correctAns = questions[que_count].answer; 
	document.querySelector(".quiz_box header").style.display = "none";
    if(userAns === correctAns){
	  correctAnsQues.push(questions[que_count].question);
	  console.log(correctAnsQues);
      answer.closest(".option").classList.add("correct");
      userScore += 1;
	  document.querySelector(".quiz_box header").style.display = "block";
      document.getElementById('icon-1').style.display='block';
      document.getElementById('icon-2').style.display='';
      console.log(userScore);
    } 
    else {
        answer.closest(".option").classList.add("incorrect");
		wrongAnsQues.push(questions[que_count].question);
		console.log("worng questions list: "+wrongAnsQues);
        console.log("wrong");
		document.querySelector(".quiz_box header").style.display = "block";
        document.getElementById('icon-2').style.display='block';
        document.getElementById('icon-1').style.display=''; 
    }
	
	for(let i=0;i< allOptions; i++){
        option_list.children[i].classList.add("disabled");
       }
       next_btn.style.display = 'inline-block';
	   skip_btn.style.display = 'none';
}

// Count of Present question from Total questions.

function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = 'Question <span>'+ index +' of '+ questions.length +'</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}


// Result box 

function showResultBox(){
    
	info_box.classList.remove("activeInfo"); //hide info box
	
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
	
    result_box.classList.add('activeResult');// shows the result box
	
    const scoreText= result_box.querySelector(".score_text");
   
    let scoreTag = ' <h3>Complete the quiz to see your results</h3><p style="text-align: center"> you got <strong>'+ userScore +'</strong> out of <strong>'+ questions.length +'</strong>correct. <strong>'+(skippedScore)+'</strong> questions are skipped</p>';
        
	scoreText.innerHTML =scoreTag;
    	
	question_section.innerHTML = `<br><br><div class="skipped-answer-ques"><p><i class="fa fa-repeat" aria-hidden="true"></i><strong>What you skipped</strong></p><br/><p>${skippedQues.join('<br><br>')}</p><br><br></div>`;
	
	question_section.innerHTML += `<div class="right-answer-ques"><p><i class="fa-solid fa-check" aria-hidden="true"></i><strong>What you know</strong></p><br/><p>${correctAnsQues.join('<br><br>')}</p><br><br></div>`;

	question_section.innerHTML += `<div class="wrong-answer-ques"><p><i class="fa-solid fa-x" aria-hidden="true"></i><strong>What you need to know</strong></p><br/><p>${wrongAnsQues.join('<br><br>')}</p><br><br></div>`;
}