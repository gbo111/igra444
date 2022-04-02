"use strict";

//preloade
function hidePre(){
	document.getElementById('preloader').style.visibility='hidden';
}
   setTimeout('hidePre()', 1000);
/////////////////////////////////////////////////////////



//Image display
const cards = document.querySelectorAll('.image');
const desc = document.querySelectorAll('.desc');
const description = document.getElementById('description');
const display = document.getElementById('displayImage');
const container = document.getElementById('container');

const image0 = document.getElementById('image0');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');
const image9 = document.getElementById('image9');
const image10 = document.getElementById('image10');
const image11 = document.getElementById('image11');
const image12 = document.getElementById('image12');
const image13 = document.getElementById('image13');
const image14 = document.getElementById('image14');
const image15 = document.getElementById('image15');
const image16 = document.getElementById('image16');

const text0 = document.createElement("p");
text0.innerHTML =
'O tekmovanju'+'<br>\xa0<br>'+'Unior je eno največjih slovenskih podjetij in eden največjih zaposlovalcev v Sloveniji. Sodelujemo z najpomembnejšimi globalnimi proizvajalci visokotehnoloških rešitev ter se s številnimi projekti izjemno radi povezujemo z izobraževalnimi ustanovami. Z njimi želimo prenašati svoje znanje, izkušnje in rešitve neposredno na šolarje, jih z raznolikimi projekti spodbuditi, praktično izobraziti, ter jim z vpogledom v prakso pomagati pri izbiri prihodnje poklicne in karierne poti.';
const text1 = document.createElement("p");
text1.innerHTML =
'Profesionalni voziček linije Europlus je namenjen shranjevanju orodja. Voziček z anti-shok zaščito robov nudi varnost vozil pred poškodbami v delavnici. Z dodatki mu povečamo delovno površino in njegovo funkcionalnost.';
const text2 = document.createElement("p");
text2.innerHTML =
'Ključavničarski primež Irongator prestavlja nepogrešljivo orodje vsake delavnice. Namenjen vprijemanju različnih predmetov, ki jih obdelujemo. Hitri pomik zagotavlja hitrejše in enostavnejše delo pri večkratnem vpenjanju.';
const text3 = document.createElement("p");
text3.innerHTML =
'Viličasto obročni ključ Ibex s posebnim profilom na vilični strani za hitro vijačenje  matic in vijakov in life profilom na obročni strani.';
const text4 = document.createElement("p");
text4.innerHTML =
'Klešče betonske armaturo so namenje natančni izvedbi vezave betonskih armatur.';
const text5 = document.createElement("p");
text5.innerHTML =
'Samonastavljive klešče omogočajo popolno prijemanje predma dela ne glede na obliko in dimenzijo. ';
const text6 = document.createElement("p");
text6.innerHTML =
'Protiodbojno kladivo se uporablja za montažo ležajev, pri sestavljanju pohištva, pri polaganju notranjih in zunanjih talnih oblog in tlakov. Ima prednost, da ob udarcu preprečuje odbijanje od površine in tako poveča učinek udarne sile.';
const text7 = document.createElement("p");
text7.innerHTML =
'Multifunkcionalne klešče: Trpežne klešče za delo z elektroinštalacijami s 7 različnimi funkciami, ter obliko, ki nudi večjo oporo med delom, ter večjim, varnejšim in stabilnejšim prenosom moči.';
const text8 = document.createElement("p");
text8.innerHTML =
'Pregibna dvosmerna raglja z 1/2" štirikotom omogoča vijačenje s pregibom ročaja. Prav tako pa ima raglja varnostni sistem zaklepanja, ki preprečuje izpad nasadnega ključa s štirikota.';
const text9 = document.createElement("p");
text9.innerHTML =
'Kolesarsko stojalo Bikegator+ je enostavno za uporabo, vsebuje dve podporni nogi, ki sta zložljivi po višini, ter namensko vpenjalno roko za vpenjanje kolesa. Prednost zložljivega stojala je lažje skladiščenje oz. transport na terenu.';
const text10 = document.createElement("p");
text10.innerHTML =
'Izvijač ploščati z trikomponentnim ročajem je namenjem profesionalnim in amaterskim uporabnikom za učinkovito vijačenje vijakov.';
const text11 = document.createElement("p");
text11.innerHTML =
'Viličasti ključ omogoča vijačenje vijakov in matic.';
const text12 = document.createElement("p");
text12.innerHTML =
'Garnitura nasadnih ključev z dimenzijami od 10 do 32 mm nudi velik nabor nastavkov za vijačenje vijakov in matic v različnih industrijah in servisih.';
const text13 = document.createElement("p");
text13.innerHTML =
'Kombinirane klešče so namenjene za prijemanje in ščipanje predmetov dela. Predstavljajo osnovne klešče za večnamensko uporabo.';
const text14 = document.createElement("p");
text14.innerHTML =
'Ključavničarsko kladivo je eno izmed osnovnih orodij v vsaki delavnici, servisu ali gospodinjstvu s katerim lahko udarjamo zabijamo žeblje ali v kombinaciji z drugimi orodji opravimo najrazličnejša dela montaže in demontaže.';
const text15 = document.createElement("p");
text15.innerHTML =
'Trokraki snemalec je namenjen zunanjemu snemanju ležajev.';
const text16 = document.createElement("p");
text16.innerHTML =
'Modualrni delovni pult v delavnici predstavlja nepogrešljivo delovno površino, predalnike za shranjevanje orodja in peeforirano ozadje z dodatki za obešanje in odlaganje orodja.';


 function selectCard() {
 	console.log('I was clicked!');
 	console.log(this);

 	for (var i = 0; i < cards.length; i++) {
 		cards[i].classList.remove('img-selected');


 	  } 	  this.classList.add("img-selected");
		      display.src = this.src;

					// description.textContent = this.textContent;
     }

		 cards.forEach(card => card.addEventListener('click', selectCard));

		 function img0() {
		 				  description.innerHTML = text0.innerHTML;
		 		}
		 function img1() {
							description.innerHTML = text1.innerHTML;
				}
		 function img2() {
					 		description.innerHTML = text2.innerHTML;
				}
			function img3() {
							description.innerHTML = text3.innerHTML;
				}
		  function img4() {
	 		 				 description.innerHTML = text4.innerHTML;
	 		 	}
	 		function img5() {
	 						description.innerHTML = text5.innerHTML;
	 			}
	 		function img6() {
	 					 	description.innerHTML = text6.innerHTML;
	 			}
	 		function img7() {
	 						description.innerHTML = text7.innerHTML;
	 			}
			function img8() {
	 		 				 description.innerHTML = text8.innerHTML;
	 		 	}
	 		 function img9() {
	 						description.textContent = text9.textContent;
	 			}
	 		 function img10() {
	 					 	description.innerHTML = text10.innerHTML;
	 			}
	 		function img11() {
	 						description.innerHTML = text11.innerHTML;
	 			}
	 		 function img12() {
	 	 		 			description.innerHTML = text12.innerHTML;
	 	 		 }
	 	 	function img13() {
	 	 					description.innerHTML = text13.innerHTML;
	 	 		}
	 	 	function img14() {
	 	 					description.innerHTML = text14.innerHTML;
	 	 		}
	 	 	function img15() {
	 	 					description.innerHTML = text15.innerHTML;
	 	 		}
			function img16() {
		 	 				description.innerHTML = text16.innerHTML;
		 	 	}


		image0.addEventListener('click', img0);
		image1.addEventListener('click', img1);
		image2.addEventListener('click', img2);
		image3.addEventListener('click', img3);
		image4.addEventListener('click', img4);
		image5.addEventListener('click', img5);
		image6.addEventListener('click', img6);
		image7.addEventListener('click', img7);
		image8.addEventListener('click', img8);
		image9.addEventListener('click', img9);
		image10.addEventListener('click', img10);
		image11.addEventListener('click', img11);
		image12.addEventListener('click', img12);
		image13.addEventListener('click', img13);
		image14.addEventListener('click', img14);
		image15.addEventListener('click', img15);
		image16.addEventListener('click', img16);
		// desc.forEach(card => card.addEventListe
		// desc.forEach(card => card.addEventListener('click', selectCard));
