

const nav = document.getElementById('nav');
const highScore = document.getElementById('highScore');
const toggle = document.getElementById('toggle');
const highScoreB = document.getElementById('highScoreB');
const closeHS = document.getElementById('closeHS');


toggle.addEventListener('click', () => {
   nav.classList.toggle('active');
	 });

highScoreB.addEventListener('click', () => {
   highScore.classList.toggle('active');
	 nav.classList.toggle('active');

});

closeHS.addEventListener('click', () => {
   highScore.classList.toggle('active');

});




 getHSeasy();
async function getHSeasy() {
	const responseHSeasy = await fetch('/apiEasy');
	const dataHSeasy = await responseHSeasy.json();
	sortE();

	 function sortE() {
	 dataHSeasy.sort((a, b) => {
	 		if ((a.time > b.time) || ((a.time == b.time) && (a.moves > b.moves)))  {
	 			return 1
	 		} else {
	 			return -1
	 		}
		});

     dataHSeasy.splice(3);


		for (item of dataHSeasy) {
		  // const easyTop3 = document.getElementById('easyTop3');
			const easyTime1text = document.getElementById('easyTime1text');
			const easyTime1 = document.getElementById('easyTime1');
			const easyMoves1text = document.getElementById('easyMoves1text');
			const easyMoves1 = document.getElementById('easyMoves1');
			const easyName1text = document.getElementById('easyName1text');
			const easyName1 = document.getElementById('easyName1');
			const easyTimetext = document.createElement('div');
			const easyTime = document.createElement('div');
			const easyMovestext = document.createElement('div');
			const easyMoves = document.createElement('div');
			const easyNametext = document.createElement('div');
			const easyName = document.createElement('div');
			const easyScore = document.createElement('div');
			// easyContainer.className = "easyContainer";
			easyTime.className = "easyTime";
			easyMoves.className = "easyMoves";
			easyName.className = "easyName";
		  // easyTop3.append(easyTime);
			easyTime1text.append(easyTimetext);
			easyTime1.append(easyTime);
			easyMoves1text.append(easyMovestext);
			easyMoves1.append(easyMoves);
			easyName1text.append(easyNametext);
			easyName1.append(easyName);
			 // highScore.append(easyTime1, easyMoves);
			easyTimetext.textContent = `TIME:`;
			easyTime.textContent = `${item.time}`;
			easyMovestext.textContent = `MOVES:`;
			easyMoves.textContent = `${item.moves}`;
			easyNametext.textContent = `NAME:`;
			easyName.textContent = `${item.name}`;
			// easyScore.textContent = `'TIME' ${item.time} 'MOVES'${item.moves} 'NAME'${item.name}`;

	 }

 }
}

getHSnormal();
async function getHSnormal() {
	const responseHSnormal = await fetch('/apiNormal');
	const dataHSnormal = await responseHSnormal.json();
	sortN();

	 function sortN() {
	 dataHSnormal.sort((a, b) => {
	 		if ((a.time > b.time) || ((a.time == b.time) && (a.moves > b.moves)))  {
	 			return 1
	 		} else {
	 			return -1
	 		}
		});

		dataHSnormal.splice(3);


	 for (item of dataHSnormal) {
		 // const easyTop3 = document.getElementById('easyTop3');
		 const normalTime1text = document.getElementById('normalTime1text');
		 const normalTime1 = document.getElementById('normalTime1');
		 const normalMoves1text = document.getElementById('normalMoves1text');
		 const normalMoves1 = document.getElementById('normalMoves1');
		 const normalName1text = document.getElementById('normalName1text');
		 const normalName1 = document.getElementById('normalName1');
		 const normalTimetext = document.createElement('div');
		 const normalTime = document.createElement('div');
		 const normalMovestext = document.createElement('div');
		 const normalMoves = document.createElement('div');
		 const normalNametext = document.createElement('div');
		 const normalName = document.createElement('div');
		 const normalScore = document.createElement('div');
		 // easyContainer.className = "easyContainer";
		 normalTime.className = "normalTime";
		 normalMoves.className = "normalMoves";
		 normalName.className = "normalName";
		 // easyTop3.append(easyTime);
		 normalTime1text.append(normalTimetext);
		 normalTime1.append(normalTime);
		 normalMoves1text.append(normalMovestext);
		 normalMoves1.append(normalMoves);
		 normalName1text.append(normalNametext);
		 normalName1.append(normalName);
			// highScore.append(easyTime1, easyMoves);
		 normalTimetext.textContent = `TIME:`;
		 normalTime.textContent = `${item.time}`;
		 normalMovestext.textContent = `MOVES:`;
		 normalMoves.textContent = `${item.moves}`;
		 normalNametext.textContent = `NAME:`;
		 normalName.textContent = `${item.name}`;
		 // easyScore.textContent = `'TIME' ${item.time} 'MOVES'${item.moves} 'NAME'${item.name}`;

	}

}
}



getHShard();
async function getHShard() {
	const responseHShard = await fetch('/apiHard');
	const dataHShard = await responseHShard.json();
	sortH();

	 function sortH() {
	 dataHShard.sort((a, b) => {
	 		if ((a.time > b.time) || ((a.time == b.time) && (a.moves > b.moves)))  {
	 			return 1
	 		} else {
	 			return -1
	 		}
		});

		dataHShard.splice(3);


	 for (item of dataHShard) {
		 // const easyTop3 = document.getElementById('easyTop3');
		 const hardTime1text = document.getElementById('hardTime1text');
		 const hardTime1 = document.getElementById('hardTime1');
		 const hardMoves1text = document.getElementById('hardMoves1text');
		 const hardMoves1 = document.getElementById('hardMoves1');
		 const hardName1text = document.getElementById('hardName1text');
		 const hardName1 = document.getElementById('hardName1');
		 const hardTimetext = document.createElement('div');
		 const hardTime = document.createElement('div');
		 const hardMovestext = document.createElement('div');
		 const hardMoves = document.createElement('div');
		 const hardNametext = document.createElement('div');
		 const hardName = document.createElement('div');
		 const hardScore = document.createElement('div');
		 // easyContainer.className = "easyContainer";
		 hardTime.className = "hardTime";
		 hardMoves.className = "hardMoves";
		 hardName.className = "hardName";
		 // easyTop3.append(easyTime);
		 hardTime1text.append(hardTimetext);
		 hardTime1.append(hardTime);
		 hardMoves1text.append(hardMovestext);
		 hardMoves1.append(hardMoves);
		 hardName1text.append(hardNametext);
		 hardName1.append(hardName);
			// highScore.append(easyTime1, easyMoves);
		 hardTimetext.textContent = `TIME:`;
		 hardTime.textContent = `${item.time}`;
		 hardMovestext.textContent = `MOVES:`;
		 hardMoves.textContent = `${item.moves}`;
		 hardNametext.textContent = `NAME:`;
		 hardName.textContent = `${item.name}`;
		 // easyScore.textContent = `'TIME' ${item.time} 'MOVES'${item.moves} 'NAME'${item.name}`;

	}

}
}
