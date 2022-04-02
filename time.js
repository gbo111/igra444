 function stopwatch(){

	sec+=1;

 	let minutes = Math.floor(sec/60);
 	let seconds = sec % 60;

	 timer.innerText = nf(minutes, 2)+" : "+ nf(seconds, 2);

 }
