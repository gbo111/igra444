"use strict";

 window.onload = (event) => {
   localStorage.clear();

   identifyLanguage();

   languageColor();

 };

 function identifyLanguage() {
   const lang = location.href;

   let resultEn = lang.includes("lang=en");
   let resultSlo = lang.includes("lang=slo");
   let resultSr = lang.includes("lang=sr");


   if (resultEn === true) {
  localStorage.languageSet = ("english");
    }
    if (resultSlo === true) {
   localStorage.languageSet = ("slovensko");
     }
     if (resultSr === true) {
    localStorage.languageSet = ("srbsko");
      }
      if ((resultEn === false)&&(resultSlo === false)&&(resultSr === false)) {
     localStorage.languageSet = ("english");
       }
     }



  function languageColor() {

    var languageColor = localStorage.getItem("languageSet");

    if (languageColor == 'slovensko' ){
      langText.textContent = "Izberi jezik";
       slo.classList.toggle('red');
       eng.classList.remove('red');
       srb.classList.remove('red');
    };
    if (languageColor == 'english' ){
      langText.textContent = "Select Language";
       eng.classList.toggle('red');
       slo.classList.remove('red');
       srb.classList.remove('red');
    };
    if (languageColor == 'srbsko' ){
      langText.textContent = "Izaberite jezik";
       srb.classList.toggle('red');
       eng.classList.remove('red');
       slo.classList.remove('red');
    };
    if (languageColor == null ){
      langText.textContent = "Select Language";
      eng.classList.toggle('red');
      slo.classList.remove('red');
      srb.classList.remove('red');
    };
  }

//preloade
function hidePre(){
	document.getElementById('preloader').style.visibility='hidden';
}
   setTimeout('hidePre()', 1000);

	 document.addEventListener("contextmenu", function(e){
	     e.preventDefault();
	 }, false);


/////////////////////////////////////////////////////////
const link = document.querySelectorAll('#languageSelect > p');
const langText = document.getElementById('langText');

link[0].addEventListener('click', () =>{
localStorage.languageSet = ("english");
langText.textContent = "Select Language";
eng.classList.toggle('red');
slo.classList.remove('red');
srb.classList.remove('red');

});


link[1].addEventListener('click', () =>{
 localStorage.languageSet = ("slovensko");
 langText.textContent = "Izberi jezik";
 slo.classList.toggle('red');
 eng.classList.remove('red');
 srb.classList.remove('red');

 });

 link[2].addEventListener('click', () =>{
 localStorage.languageSet = ("srbsko");
 langText.textContent = "Izaberite jezik";
 srb.classList.toggle('red');
 slo.classList.remove('red');
 eng.classList.remove('red');

 });
