"use strict";

var svg_pics = ["img/K-03.svg", "img/K-04.svg", "img/K-06.svg", "img/K-09.svg", "img/K-10.svg", "img/K-13.svg", "img/K-16.svg", "img/K-17.svg", "img/K-22.svg", "img/K-23.svg", "img/K-24.svg", "img/K-25.svg", "img/K-26.svg", "img/K-33.svg", "img/K-34.svg", "img/K-35.svg"];
const board = document.querySelector('.game-board');
const container = document.getElementById('container');
const reset = document.getElementById('resetB');
const replay = document.getElementById('replay');
const form = document.getElementById('form');
const submit = document.getElementById('submit');
const difficulties = document.querySelectorAll("input[name='difficulty']");
const timer = document.getElementById('timer');
const timer2 = document.createElement('div');
const timer3 = document.createElement('div');
const cardContainers = document.querySelectorAll('.card-container');
const dashboard = document.getElementById('dashboard');
const modal = document.querySelector('.modal');
let clickCount = 0;
let selectedCards = [];
let iconClasses, sec,  moves,  wrongMoves, correctMoves, difficulty, dC, setTimer;
//const ts = Math.round(Date.now() / 1000);


//Preloader
function hidePre(){
	document.getElementById('preloader').style.visibility='hidden';
}
   setTimeout('hidePre()', 4000);



document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);





//shuffle function from https://bost.ocks.org/mike/shuffle/
function shuffle1(array) {
	var m = array.length, t, i;
	while (m) {
		i = Math.floor(Math.random() * m--);
		t = array[m];
		array[m] = array[i];
		array[i] = t;
	}
}

// go over the radio buttons and check the difficulty selection


 function checkDifficulty(){
	[].forEach.call(difficulties, async function(input){
		input.nextElementSibling.classList.remove('checked');
		if (input.value === 'easy' && input.checked === true) {
			difficulty = 16;
			dC = 'easy';
			input.nextElementSibling.classList.add('checked');

			localStorage.setDiff = ("easy");
			// chrome.storage.sync.set({'setItem': 'easy'}, function(){});
	 	   board.classList.toggle('activeE')
			 board.classList.remove('activeN');
			 board.classList.remove('activeH');

			 dashboard.classList.toggle('activeE');
			 dashboard.classList.remove('activeN');
			 dashboard.classList.remove('activeH');


		} else if (input.value === 'normal' && input.checked === true) {
			difficulty = 24;
			dC = 'normal';
			input.nextElementSibling.classList.add('checked');

      localStorage.setDiff = ("normal");
			  board.classList.toggle('activeN')
			  board.classList.remove('activeE');
			  board.classList.remove('activeH');

			  dashboard.classList.toggle('activeN');
			  dashboard.classList.remove('activeE');
			  dashboard.classList.remove('activeH');

		} else if (input.value === 'hard' && input.checked === true) {
			difficulty = 32;
			dC = 'hard';
			input.nextElementSibling.classList.add('checked');

      localStorage.setDiff = ("hard");
			 board.classList.toggle('activeH')
			 board.classList.remove('activeN');
			 board.classList.remove('activeE');

			 dashboard.classList.toggle('activeH');
			 dashboard.classList.remove('activeE');
			 dashboard.classList.remove('activeN');

		}
	});
}

function populate(ghjkl) {
	iconClasses = [];
	 clickCount = 0;
	board.innerHTML = '';
	//LOGIC IS: shuffle the main array and slice half the number of cards
	//this is to always get a random selection of pics
	shuffle1(svg_pics);
	let boardPics = svg_pics.slice(0, ghjkl/2);
	//duplicate the array values to make pairs and shuffle this new array
	boardPics = boardPics.concat(boardPics);
	shuffle1(boardPics);
	//actually populate HTML
	const fragment = document.createDocumentFragment();
	for (let x = 0; x < ghjkl; x++) {
		const cardContainer = document.createElement('div');
		cardContainer.classList.add('card-container', dC);
		const front = document.createElement('div');
		const back = document.createElement('div');

		    front.classList.add('card', 'front');
		var front_img = document.createElement('img');
		front_img.setAttribute("src", "img/K-01_Front.svg");
		front.appendChild(front_img);

			back.classList.add('card', 'back');
		var back_img = document.createElement('img');
		var cls = boardPics[x].replace(/(^img\/)|(\.svg$)/gi, "");
		back_img.setAttribute("src", boardPics[x]);
		back_img.classList.add('icon','fas', cls);

		back.appendChild(back_img);
		cardContainer.appendChild(front);
		cardContainer.appendChild(back);
		fragment.appendChild(cardContainer);
	}
	board.appendChild(fragment);
}


//var counter = 0;

function stopwatch(){
	sec+=1;
	let minutes = Math.floor(sec/60);
	let seconds = sec % 60;
  timer.innerText = nf(minutes, 2)+" : "+ nf(seconds, 2);
	timer2.innerText = minutes +"min : "+ seconds + "sec";
  timer3.innerText =  nf(minutes, 2) + nf(seconds, 2);

}


//async function startLoad()

 async function startLoad() {

	  function startGame() {
	  //cleanup board and reset everything
	  sec = 0;
	  moves = 0;
	  wrongMoves = 0;
	  correctMoves = 0;
	  timer.innerText = '00 : 00';
		document.getElementById('moves').innerHTML = '0';
	  modal.classList.add('hide');
	  clearInterval(setTimer);
	  //restart game logic
	  checkDifficulty();
	  populate(difficulty);
	  //start the timer on first click
		board.addEventListener('click', async function clickOnce(){
		 clearInterval(setTimer);
		 setTimer = setInterval(stopwatch, 1000);

			localStorage.mytime = Math.round(Date.now() / 1000);


		 board.removeEventListener('click', clickOnce)
		});
	 }
	 startGame();

	const start = {action: 123456789}
	const options2 = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
		body: JSON.stringify(start)
	};

	const response2 = await fetch('/api', options2);
	const wqdffsdfs = await response2.json();

	var gbnjklopp = wqdffsdfs.sfth
	var grupthlkj = wqdffsdfs.gfhthzuj
	var gbnjfzjjjp = wqdffsdfs.dgghg




	 function checkwin(ghjkl) {
	 let wefvbvgfbg;

	switch (dC) {
		case 'easy' :
			if (ghjkl === gbnjklopp) {
				wefvbvgfbg = true;
			};
			break;
		case 'normal' :
			if (ghjkl === grupthlkj) {
				wefvbvgfbg = true;
			};
			break;
		case 'hard' :
			if (ghjkl === gbnjfzjjjp) {
				wefvbvgfbg = true;
			};
			break;
	};
	if (wefvbvgfbg === true) {
		//wait 1 sec for the cards to flip right side up
		setTimeout(async function (){
			//fill in and display modal
			document.getElementById('final-time').innerText = timer2.innerText;
			document.getElementById('final-moves').innerText = moves;
				modal.classList.remove('hide');

			//security1

			const tsE = Math.round(Date.now() / 1000);
			var getTime = localStorage.getItem("mytime");


			 const all = { timeStampEnd: tsE, time: timer3.innerText, timeStampStart: getTime, timeF: timer2.innerText, m1: moves }
			 const options = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
					body: JSON.stringify(all)
			 };

			 const response = await fetch('/api', options);
			 const back = await response.json();



			 //add/remove Event Listener

				let f;
				myForm.addEventListener('submit', f=function(event) {
				event.preventDefault()


				 if (confirm("Pritisni OK za potrditev ali Cancel za popravke")) {
							this.removeEventListener('submit',f)
					submitted(event.target)


						} else {
					 }
			 })



			  async function submitted(el) {
				 //localStorage.test = 'test test2';

        var diff = localStorage.getItem("setDiff");
				const getDiff = { diff: diff }

				let myForm = document.getElementById("myForm");
        let fd =new FormData(myForm);

 			 for (let key of fd.keys()) {
 				 console.log(key, fd.get(key));
 			 }

			 function convertFD2JSON(formData) {
				 let obj = {};
				 for (let key of formData.keys()) {
					 obj[key] = formData.get(key);
				 }
				 return obj;
			 }

			 let fdJ = convertFD2JSON(fd);
			 localStorage.lista = JSON.stringify(fdJ);

				// const name = myForm.elements['name'];
				// let fullName = name.value;
				// const formS = JSON.stringify(Object.fromEntries(myForm));

        const preComp = {timeSub: timer3.innerText, m2: moves}
			  const allSub = Object.assign(preComp, getDiff, back, fdJ);
				const optionsSub = {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
					body: JSON.stringify(allSub)
			 };

			 const responseSub = await fetch('/api', optionsSub);
			 const backSub = await responseSub.json();


				 localStorage.back38 = JSON.stringify(backSub);
				 console.log(tsE);


       // removeHandler();
			 location.reload();
       // startGame();
			 }


			 //stop the stopwatch
 			clearInterval(setTimer);



		}, 1000);
	}
}

function matchChecker(e){
	//LOGIC IS: make sure the click target is a card and prevent doubleclicking

	if (e.target.parentNode.classList.contains('card') && !e.target.parentNode.classList.contains('front-open')) {
		//flip the card on click

		e.target.parentNode.classList.add('front-open');
		e.target.parentNode.nextElementSibling.classList.add('back-open');
		//keep track of the class of the icons in the clicked cards
		iconClasses.push(e.target.parentNode.nextElementSibling.firstChild.classList[2]);
		//collect the clicked card elements
		selectedCards.push(e.target.parentNode);
		clickCount += 1;
		//allow only two clicks and then verify the match
		if (clickCount === 2) {
			clickCount = 0;
			//2 clicks make 1 move
			moves +=1;
			document.getElementById('moves').innerHTML = moves;
			//remove the ability to click extra cards for 1 second while the 2 already clicked cards are checked
			board.removeEventListener('click', matchChecker);
			setTimeout(function(){
				board.addEventListener('click', matchChecker);
			}, 1000);
			if (iconClasses[0]===iconClasses[1]) {
				console.log('match');
				correctMoves += 1;
				//check if game is won
				checkwin(correctMoves);
				iconClasses = [];
				//add the class 'correct' to keep the matched cards open
				[].forEach.call(selectedCards, c =>{
					c.classList.add('front-correct');
					c.nextElementSibling.classList.add('back-correct');
				});
			} else {
				console.log('not match');
				//wait 1 second before closing mismatching cards, so the player can see what they were
				setTimeout(function(){
					iconClasses = [];
					[].forEach.call(selectedCards, c =>{
						c.classList.remove('front-open');
						c.nextElementSibling.classList.remove('back-open');
						selectedCards = [];
					});
				}, 1000);
			}
		}
	}
}



reset.addEventListener('click', () => {
	board.classList.toggle('activeN');
	board.classList.toggle('activeE');
	board.classList.toggle('activeH');

	dashboard.classList.toggle('activeN');
	dashboard.classList.toggle('activeE');
	dashboard.classList.toggle('activeH');
	startGame();
});
replay.addEventListener('click', () => {
	board.classList.toggle('activeN')
  board.classList.toggle('activeE');
	board.classList.toggle('activeH');

	dashboard.classList.toggle('activeN');
	dashboard.classList.toggle('activeE');
	dashboard.classList.toggle('activeH');
	startGame();
});
form.addEventListener('change', startGame);

window.addEventListener('click', function(e){
	if (e.target === modal) {
		startGame();
	}
});
board.addEventListener('click', matchChecker);
window.addEventListener('load', startGame);

};

       //window.onload = startGame;
			 window.onload = startLoad;
