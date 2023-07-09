const questions = [
	[
		"Which of the following statement assigns the value 55 to the variable x in Python:",
		[
			"x = 55",
			"x := 55",
			"let x = 55",
			"x << 55"			
		]
	],
	[
		"Which of the following is a valid Python variable name:",
		[
			"1name",
			"def",
			"$age",
			"index"
		]
	],
	[
		"Which of the following is considered as comment in Python:",
		[
			"# this is a comment",
			"// this is a comment",
			"/* this is a comment */",
			"<!-- this is a comment -->"
		]
	],
	[
		"Which value does this Python expression evaluate to:<br><br>print(987 == '987')",
		[
			"True",
			"true",
			"false",
			"False"			
		]
	],
	[
		"Which of the following data types is immutable in Python:",
		[
			"list",
			"string",
			"dictionary",
			"set"			
		]
	],
	[
		"What is the output of this Python code:<br><br>print(100 or 200 and 0)",
		[
			"False",
			"100",
			"True",
			"0"			
		]
	],
	[
		"What is the output of this Python code:<br><br>my_list = [1, 2, 3, 4, 5]<br>print(my_list[2:5:2])",
		[
			"[2, 3, 4, 5]",
			"[2, 3, 4]",
			"[3, 4, 5]",
			"[3, 5]"			
		]
	],
	[
		"What is the output of this Python code:<br>" + 
`<pre>
for i in range(2, 10, 3):
	print(i, end=' ')
	if (i == 7):
		break
else:
	print(11)
</pre>`,
		[
			"2 3 4 5 6",
			"2 5 8 11",
			"2 5 11",
			"2 5"			
		]
	],
	[
		"Which keyword is used to start a function in Python:",
		[
			"func",
			"function",
			"def",
			"fn"			
		]
	],
	[
		"Find the output of the following code:<br>" + 
`<pre>
def add(a, b=10):
	return a + b

print(add(20))
</pre>`,
		[
			"10",
			"20",
			"30",
			"SyntaxError"			
		]
	]
];

const correctAnswers = [0, 3, 0, 3, 1, 1, 3, 1, 2, 2];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementsByClassName("answer");
const nextButton = document.getElementById("next");
const scoreText = document.getElementById("score");

let score = 0;
let questionNumber = 0;
printFirstQuestion();

function printFirstQuestion() {
	questionElement.innerHTML = "1. " + questions[0][0];
	printAnswers(0);	
	nextButton.innerText = "Next";
}

function reset() {
	scoreText.style.visibility = "hidden";
	questionNumber = 0;
	score = 0;
	for (let index = 0; index < answerButtons.length; ++index) {
		answerButtons[index].style.visibility = "visible";
	}	
}

function printNextQuestion() {
	if (nextButton.innerText == "Start again") {
		reset();
		printFirstQuestion();
		return;
	}
	++questionNumber;
	if (questionNumber < questions.length) {
		if (questionNumber == questions.length - 1) {
			nextButton.innerText = "Submit";
		}
		questionElement.innerHTML = questionNumber + 1 + ". " + questions[questionNumber][0];
		printAnswers(questionNumber);	
	} else {
		calculateScore();
	}
}

function printAnswers(questionNumber) {
	for (let index = 0; index < answerButtons.length; ++index) {
		answerButtons[index].disabled = false;
		answerButtons[index].style.background = "#FFFFFF";
		answerButtons[index].innerText = questions[questionNumber][1][index];
	}	
}

function getCorrectAnswerId() {
	let correctAnswer = "";
	switch (correctAnswers[questionNumber]) {
		case 0:
		{
			correctAnswer = "btn1";
			break;
		}
		case 1:
		{
			correctAnswer = "btn2";
			break;
		}
		case 2:
		{
			correctAnswer = "btn3";
			break;
		}
		case 3:
		{
			correctAnswer = "btn4";
			break;
		}
	}
	return correctAnswer;
}

function checkAnswer(id) {
	correctAnswer = getCorrectAnswerId();
	if (correctAnswer == id) {
		++score;
		document.getElementById(id).style.background = "rgba(20, 255, 20, 0.2)";
	} else {
		document.getElementById(id).style.background = "rgba(255, 20, 20, 0.2)";
		document.getElementById(correctAnswer).style.background = "rgba(20, 255, 20, 0.2)";
	}
	for (let index = 0; index < answerButtons.length; ++index) {
		answerButtons[index].disabled = true;
	}	
}

function calculateScore() {
	questionElement.innerHTML = "";
	scoreText.style.visibility = "visible";
	for (let index = 0; index < answerButtons.length; ++index) {
		answerButtons[index].style.visibility = "hidden";
	}	
	scoreText.innerHTML = "Your score is " + score + " out of 10.";
	nextButton.innerText = "Start again";
	questionNumber = 0;
}
