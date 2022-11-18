let inputPlayers = document.getElementsByClassName('number-of-players-input')[0];
let inputMafia = document.getElementsByClassName('number-of-mafia-input')[0];
let selectPlayers = document.getElementsByClassName('number-of-players-select')[0];
let selectMafia = document.getElementsByClassName('number-of-mafia-select')[0];
// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
// .test(navigator.userAgent)) {
// selectPlayers.style.display = 'block';
// selectMafia.style.display = 'block';
// console.log('mobile')
// }	else {console.log('pc') 
	inputPlayers.style.display = 'block';
	inputMafia.style.display = 'block';
// }

selectPlayers.addEventListener('change', () => {
	alert(selectPlayers.value);
});
inputPlayers.addEventListener('change', () =>{
	if(inputPlayers.value > 40){
		inputPlayers.value = 40;
	}
	if(inputPlayers.value < 5){
		inputPlayers.value = 5;
	}
	
	if(inputPlayers.value[0] == 0){
		inputPlayers.value = inputPlayers.value.slice(1);
	}
	inputPlayers.value = inputPlayers.value.replace(/[+,-]/g, '');
	functionMaxMafia();
})
inputPlayers.addEventListener('input', () =>{
	if(inputPlayers.value > 40){
		inputPlayers.value = 40;
	}
	if(inputPlayers.value === '00'){
		inputPlayers.value = 5;
	}
	inputPlayers.value = inputPlayers.value.replace(/[+,-]/g, '');
	functionMaxMafia();
})

inputMafia.addEventListener('change', () =>{
	if(inputMafia.value > maxMafia){
		inputMafia.value = maxMafia;
	}
	if(inputMafia.value < 1){
		inputMafia.value = 1;
	}
	if(inputMafia.value === '00'){
		inputMafia.value = 1;
	}
	if(inputMafia.value[0] == 0){
		inputMafia.value = inputMafia.value.slice(1);
	}
	inputMafia.value = inputMafia.value.replace(/[+,-]/g, '');
})
inputMafia.addEventListener('input', () =>{
	if(inputMafia.value > maxMafia){
		inputMafia.value = maxMafia;
	}
	if(inputMafia.value === '00'){
		inputMafia.value = 1;
	}
	inputMafia.value = inputMafia.value.replace(/[+,-]/g, '');
})
let maxMafia = 3;
function functionMaxMafia(){
	if(inputPlayers.value == ''){
		maxMafia = 1;
	}
	if(7>inputPlayers.value && inputPlayers.value>0){
		maxMafia = 1;
	}  if(9>inputPlayers.value && inputPlayers.value>6){
		maxMafia = 2;
	} if(12>inputPlayers.value && inputPlayers.value>8){
		maxMafia = 3;
	} if(15>inputPlayers.value && inputPlayers.value>11){
		maxMafia = 4;
	} if(18>inputPlayers.value && inputPlayers.value>14){
		maxMafia = 5;
	} if(21>inputPlayers.value && inputPlayers.value>17){
		maxMafia = 6;
	} if(24>inputPlayers.value && inputPlayers.value>20){
		maxMafia = 7;
	} if(27>inputPlayers.value && inputPlayers.value>23){
		maxMafia = 8;
	} if(30>inputPlayers.value && inputPlayers.value>26){
		maxMafia = 9;
	} if(33>inputPlayers.value && inputPlayers.value>29){
		maxMafia = 10;
	} if(36>inputPlayers.value && inputPlayers.value>32){
		maxMafia = 11;
	} if(39>inputPlayers.value && inputPlayers.value>35){
		maxMafia = 12;
	} if(41>inputPlayers.value && inputPlayers.value>38){
		maxMafia = 13;
	}
	inputMafia.value = maxMafia;
}

let startSection = document.getElementsByClassName('start-section')[0];
let gameSection = document.getElementsByClassName('game-section')[0];
let playBtn = document.getElementsByClassName('play-btn')[0];
let finishBtn = document.getElementsByClassName('finish-btn')[0];
let getRoleBtn = document.getElementsByClassName('get-role')[0];
let hideCardBtn = document.getElementsByClassName('hide-card')[0];
playBtn.addEventListener('click', ()=>{
	gameSection.style.display = 'flex';
	startSection.style.display = 'none';
})
finishBtn.addEventListener('click', ()=>{
	gameSection.style.display = 'none';
	startSection.style.display = 'flex';
	hideCardBtn.style.display = 'none';
	getRoleBtn.style.display = 'block';
})


//раздача карт 

let boss = document.getElementsByClassName('boss-section')[0];
let mafia = document.getElementsByClassName('mafia-section')[0];
let civilian = document.getElementsByClassName('civilian-section')[0];
let doctor = document.getElementsByClassName('doctor-section')[0];
let officer = document.getElementsByClassName('officer-section')[0];
let prostitute = document.getElementsByClassName('prostitute-section')[0];
let arrayRoles = [];
let roles;
function getRoleFunction(){
	
	arrayRoles.push(roles)
	if(inputPlayers.value == '10'){
		console.log(1);
	}
	if(inputMafia.value == '3'){
		console.log(2);
	}
}
getRoleFunction();

getRoleBtn.addEventListener('click', ()=>{
	hideCardBtn.style.display = 'block';
	getRoleBtn.style.display = 'none';
	getRoleFunction();
})
hideCardBtn.addEventListener('click', ()=>{
	hideCardBtn.style.display = 'none';
	getRoleBtn.style.display = 'block';
})