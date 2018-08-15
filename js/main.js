
let score=0;
let isPlaying=true;


const levels = {
	easy:5, 
	medium:3,
	hard:2
};

var currentLevel=levels.medium;

function easy() {
	currentLevel=levels.easy;
    score=-1;
}

function medium() {

	currentLevel=levels.medium;
	score=-1;

}

function hard() {

	currentLevel=levels.hard;
	score=-1;
	
}

let time=currentLevel;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const button = document.querySelector('#play');

seconds.innerHTML=currentLevel;

const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'astronaut',
  'srkatela',
  'cowboy',
  'cluster',
  'generate',
  'stubborn',
  'cocktail',
  'runaway',
  'joke',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'nutrition',
  'revolver',
  'echo',
  'siblings',
  'investigate',
  'horrendous',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'definition'
];

function init() {
	
	isPlaying=true;
	showWord(words);
	wordInput.value="";
	document.getElementById("word-input").focus();

	wordInput.addEventListener('input', startMatch);
	time=currentLevel;
	timeDisplay.innerHTML=time;
	myVar = setInterval(countdown, 1000);
	setInterval(checkStatus, 15);
		


}

//Odabir rijeci

function showWord(words) {
	const Index=Math.floor(Math.random() * words.length);
	currentWord.innerHTML= words[Index];

}

function countdown() {
	if(time>0) {
		time--;
	} else {
		isPlaying=false;
	}

	seconds.innerHTML=currentLevel;

	timeDisplay.innerHTML=time;
}

function checkStatus() {
	if(!isPlaying && time === 0) {
		endgame();
	}
}

function startMatch() {

	if(matchWords() && isPlaying) {
		isPlaying=true;
		time=currentLevel+1;
		console.log('MATCH');
		console.log(currentLevel);
		showWord(words);
		wordInput.value="";
		score++;
	}

	if(score<0) {
	scoreDisplay.innerHTML=0;
} 
	else {
		scoreDisplay.innerHTML=score;
	}

}

function matchWords() {
	if(wordInput.value === currentWord.innerHTML) {
			message.innerHTML = "Correct";
			return true;
		}
		 
		message.innerHTML = "";
		return false;
	
}

function endgame() {
	message.innerHTML='Game Over :( <br><br> <p style="font-size:14px">In order to start a new game, press Play button</p>';
		score=0;
		window.clearInterval(myVar);
}

