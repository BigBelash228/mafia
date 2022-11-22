let inputPlayers = document.getElementsByClassName('number-of-players-input')[0];
let inputMafia = document.getElementsByClassName('number-of-mafia-input')[0];
let background = document.getElementsByClassName('background')[0];
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i
.test(navigator.userAgent)) {
	background.style.display = 'none';
}	else {
	background.style.display = 'flex';
}
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

//кнопки и секции
let startSection = document.getElementsByClassName('start-section')[0];
let gameSection = document.getElementsByClassName('game-section')[0];
let playBtn = document.getElementsByClassName('play-btn')[0];
let finishBtn = document.getElementsByClassName('finish-btn')[0];
let getRoleBtn = document.getElementsByClassName('get-role')[0];
let hideCardBtn = document.getElementsByClassName('hide-card')[0];
let rolesSection = document.getElementsByClassName('roles-section')[0];
let playerNumber = 1;

//чекбоксы
let bossCheckbox = document.getElementById('boss-choice-checkbox');
let doctorCheckbox = document.getElementById('doctor-choice-checkbox');
let prostituteCheckbox = document.getElementById('prostitute-choice-checkbox');
let officerCheckbox = document.getElementById('officer-choice-checkbox');
let maniacCheckbox = document.getElementById('maniac-choice-checkbox')

// роли
let boss = `<img src="./img/boss.svg" class="card"> <p class="card-p">Дон</p>`;
let mafia = `<img src="./img/mafia.svg" class="card"> <p class="card-p">Мафия</p>`;
let civilian = `<img src="./img/civilian.svg" class="card"> <p class="card-p">Мирный житель</p>`;
let doctor = `<img src="./img/doctor.svg" class="card"> <p class="card-p">Доктор</p>`;
let prostitute = `<img src="./img/prostitute.svg" class="card"> <p class="card-p">Путана</p>`;
let officer = `<img src="./img/officer.svg" class="card"> <p class="card-p">Шериф</p>`;
let maniac = `<img src="./img/maniac.svg" class="card"> <p class="card-p">Маньяк</p>`;
let questionCard = `<img src="./img/question-mark.svg" class="card">`;



let arrayRoles = [];
let randomRole;
let numberSpecialRedCards = 0;
let numberSpecialBlackCards = 0;



playBtn.addEventListener('click', ()=>{
	gameSection.style.display = 'flex';
	startSection.style.display = 'none';
	document.getElementsByClassName('player-number')[0].innerHTML = playerNumber;
	if(bossCheckbox.checked){
		arrayRoles.push(boss);
		numberSpecialBlackCards++;
	}
	if(maniacCheckbox.checked){
		arrayRoles.push(maniac);
		numberSpecialRedCards++;
	}
	if(doctorCheckbox.checked){
		arrayRoles.push(doctor);
		numberSpecialRedCards++;
	}
	if(prostituteCheckbox.checked){
		arrayRoles.push(prostitute);
		numberSpecialRedCards++;
	}
	if(officerCheckbox.checked){
		arrayRoles.push(officer);
		numberSpecialRedCards++;
	}
	for(i=0; i<inputPlayers.value - numberSpecialRedCards - inputMafia.value; i++){
		arrayRoles.push(civilian);
	}
	for(i=0; i<inputMafia.value - numberSpecialBlackCards; i++){
		arrayRoles.push(mafia);
	}
	rolesSection.innerHTML = questionCard;
})
finishBtn.addEventListener('click', ()=>{
	document.getElementsByClassName('are-you-sure-holer')[0].style.display = 'flex';    
})
document.getElementsByClassName('yes-btn')[0].addEventListener('click', ()=>{
	gameSection.style.display = 'none';
	startSection.style.display = 'flex';
	hideCardBtn.style.display = 'none';
	getRoleBtn.style.display = 'block';
	playerNumber = 1;
    numberSpecialRedCards = 0;
    numberSpecialBlackCards = 0;
	arrayRoles = [];
	document.getElementsByClassName('player-number-holder')[0].style.display = 'flex';
	rolesSection.style.display = 'flex';
	document.getElementsByClassName('are-you-sure-holer')[0].style.display = 'none';
	document.getElementsByClassName('players-and-roles-section')[0].style.display = 'none';
})
document.getElementsByClassName('cancel-btn')[0].addEventListener('click', ()=>{
	document.getElementsByClassName('are-you-sure-holer')[0].style.display = 'none';
})


getRoleBtn.addEventListener('click', ()=>{
	hideCardBtn.style.display = 'block';
	getRoleBtn.style.display = 'none';
	randomRole = Math.floor(Math.random() * arrayRoles.length);
	rolesSection.innerHTML = arrayRoles[randomRole];
	arrayRoles.splice(randomRole, 1);
})
hideCardBtn.addEventListener('click', ()=>{
	hideCardBtn.style.display = 'none';
	if(arrayRoles == ''){
		gameSection.style.display = 'none';
		startSection.style.display = 'flex';
		hideCardBtn.style.display = 'none';
		getRoleBtn.style.display = 'block';
		playerNumber = 1;
		numberSpecialRedCards = 0;
		numberSpecialBlackCards = 0;
		arrayRoles = [];
		document.getElementsByClassName('player-number-holder')[0].style.display = 'flex';
		rolesSection.style.display = 'flex';
		document.getElementsByClassName('are-you-sure-holer')[0].style.display = 'none';
		document.getElementsByClassName('players-and-roles-section')[0].style.display = 'none';
	}
	else{playerNumber++;
		document.getElementsByClassName('player-number')[0].innerHTML = playerNumber;
		getRoleBtn.style.display = 'block';
		rolesSection.innerHTML = questionCard;
	}
})