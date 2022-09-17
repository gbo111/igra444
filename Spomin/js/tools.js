"use strict";


//preloade
function hidePre(){
	document.getElementById('preloader').style.visibility='hidden';
}
   setTimeout('hidePre()', 1000);
/////////////////////////////////////////////////////////


document.addEventListener("contextmenu", function(e){
    e.preventDefault();
}, false);


//Image display
const cards = document.querySelectorAll('.image');
const desc = document.querySelectorAll('.desc');
const description = document.getElementById('description');
const display = document.getElementById('displayImage');
const container = document.getElementById('container');
//const langBar = document.querySelector('.langBar');
const link = document.querySelectorAll('#langBar > p');
const images = document.querySelectorAll('image');

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


window.onload = function() {

	languageSet = localStorage.getItem("languageSet");

	description.classList.add('center');

	if (languageSet == 'slovensko' ){
			 description.textContent = setSlo0;
	}
	if (languageSet == 'english' ){
			 description.textContent = setEng0;
	}
	if (languageSet == 'srbsko' ){
			 description.textContent = setSrb0;
	}
	if (languageSet == null ){
			 description.textContent = setEng0;
    }
  };

var text0 = {
"slovensko":{"des":"UNIOR ORODJA"},
"english":{"des":"UNIOR TOOLS"},
"srbsko":{"des":"UNIOR ALATI"}
};


var text1 =  {
"slovensko":{"des":"Profesionalni voziček linije Europlus je namenjen shranjevanju orodja. Voziček z anti-shok zaščito robov nudi varnost vozil pred poškodbami v delavnici. Z dodatki mu povečamo delovno površino in njegovo funkcionalnost."},
"english":{"des":"Tool carriage Europlus"},
"srbsko":{"des":"Kolica za alat Europlus"}
};


var text2 = {
"slovensko":{"des":"Ključavničarski primež Irongator prestavlja nepogrešljivo orodje vsake delavnice. Namenjen vprijemanju različnih predmetov, ki jih obdelujemo. Hitri pomik zagotavlja hitrejše in enostavnejše delo pri večkratnem vpenjanju."},
"english":{"des":"IRONGATOR engineer's vice"},
"srbsko":{"des":"Stega bravarska IRONGATOR"}
};

var text3 = {
"slovensko":{"des":"Viličasto obročni ključ Ibex s posebnim profilom na vilični strani za hitro vijačenje  matic in vijakov in life profilom na obročni strani."},
"english":{"des":"Combination wrench IBEX"},
"srbsko":{"des":"Ključ viljuškasto-okasti IBEX"}
};

var text4 = {
"slovensko":{"des":"Klešče betonske armaturo so namenje natančni izvedbi vezave betonskih armatur."},
"english":{"des":"Tower pincers"},
"srbsko":{"des":"Klešta armiračka"}
};

var text5 = {
"slovensko":{"des":"Samonastavljive klešče omogočajo popolno prijemanje predma dela ne glede na obliko in dimenzijo."},
"english":{"des":"Variable joint" + "&nbsp;" + '"' + "HYPO" + '"' + "&nbsp;" + "pliers"},
"srbsko":{"des":"Klešta papagaj podešavajuća" + "&nbsp;" + '"' + "HYPO" + '"'}
};

var text6 = {
"slovensko":{"des":"Protiodbojno kladivo se uporablja za montažo ležajev, pri sestavljanju pohištva, pri polaganju notranjih in zunanjih talnih oblog in tlakov. Ima prednost, da ob udarcu preprečuje odbijanje od površine in tako poveča učinek udarne sile."},
"english":{"des":"Dead blow hammer"},
"srbsko":{"des":"Čekić plastični protivodbojni"}
};

var text7 = {
"slovensko":{"des":"Multifunkcionalne klešče: Trpežne klešče za delo z elektroinštalacijami s 7 različnimi funkciami, ter obliko, ki nudi večjo oporo med delom, ter večjim, varnejšim in stabilnejšim prenosom moči."},
"english":{"des":"Multifunctional electrician`s pliers"},
"srbsko":{"des":"Klešta električarska višenamenska"}
};

var text8 = {
"slovensko":{"des":"Pregibna dvosmerna raglja z 1/2 štirikotom omogoča vijačenje s pregibom ročaja. Prav tako pa ima raglja varnostni sistem zaklepanja, ki preprečuje izpad nasadnega ključa s štirikota."},
"english":{"des":"Flexible reversible ratchet 1/2" +'"'},
"srbsko":{"des":"Čegrtaljka dvosmerna, savitljiva, prihvat 1/2" +'"'}
};

var text9 = {
"slovensko":{"des":"Kolesarsko stojalo Bikegator+ je enostavno za uporabo, vsebuje dve podporni nogi, ki sta zložljivi po višini, ter namensko vpenjalno roko za vpenjanje kolesa. Prednost zložljivega stojala je lažje skladiščenje oz. transport na terenu."},
"english":{"des":"BikeGator+ repair stand, auto adjustable"},
"srbsko":{"des":"BikeGator+ stalak za servisiranje bicikala, auto-podesivi"}
};

var text10 = {
"slovensko":{"des":"Izvijač ploščati z trikomponentnim ročajem je namenjem profesionalnim in amaterskim uporabnikom za učinkovito vijačenje vijakov."},
"english":{"des":"Flat screwdriver TBI"},
"srbsko":{"des":"Odvijač TBI pljosnati"}
};

var text11 = {
"slovensko":{"des":"Viličasti ključ omogoča vijačenje vijakov in matic."},
"english":{"des":"Open end wrench"},
"srbsko":{"des":"Ključ viljuškasti"}
};

var text12 = {
"slovensko":{"des":"Garnitura nasadnih ključev z dimenzijami od 10 do 32 mm nudi velik nabor nastavkov za vijačenje vijakov in matic v različnih industrijah in servisih."},
"english":{"des":"Socket set 1/2" + '"' + "&nbsp;" + "in metal box"},
"srbsko":{"des":"Ključevi nasadni, prihvat 1/2" + '",' + "&nbsp;" + "u metalnoj kutiji"}
};

var text13 = {
"slovensko":{"des":"Kombinirane klešče so namenjene za prijemanje in ščipanje predmetov dela. Predstavljajo osnovne klešče za večnamensko uporabo."},
"english":{"des":"Combination pliers"},
"srbsko":{"des":"Klešta kombinovana"}
};

var text14 = {
"slovensko":{"des":"Ključavničarsko kladivo je eno izmed osnovnih orodij v vsaki delavnici, servisu ali gospodinjstvu s katerim lahko udarjamo zabijamo žeblje ali v kombinaciji z drugimi orodji opravimo najrazličnejša dela montaže in demontaže."},
"english":{"des":"Locksmiths` hammer"},
"srbsko":{"des":"Čekić bravarski"}
};

var text15 = {
"slovensko":{"des":"Trokraki snemalec je namenjen zunanjemu snemanju ležajev."},
"english":{"des":"Puller with three adjustable arms"},
"srbsko":{"des":"Izvlakač trokraki"}
};

var text16 = {
"slovensko":{"des":"Modualrni delovni pult v delavnici predstavlja nepogrešljivo delovno površino, predalnike za shranjevanje orodja in peeforirano ozadje z dodatki za obešanje in odlaganje orodja."},
"english":{"des":"Delovni pult - modul A1"},
"srbsko":{"des":"Modularni radni sto - modul A1"}
};


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


		 var languageSet = localStorage.getItem("languageSet");


      var setSlo0 = text0.slovensko.des;
			var setSlo1 = text1.slovensko.des;
			var setSlo2 = text2.slovensko.des;
			var setSlo3 = text3.slovensko.des;
			var setSlo4 = text4.slovensko.des;
			var setSlo5 = text5.slovensko.des;
			var setSlo6 = text6.slovensko.des;
			var setSlo7 = text7.slovensko.des;
			var setSlo8 = text8.slovensko.des;
			var setSlo9 = text9.slovensko.des;
			var setSlo10 = text10.slovensko.des;
			var setSlo11 = text11.slovensko.des;
			var setSlo12 = text12.slovensko.des;
			var setSlo13 = text13.slovensko.des;
			var setSlo14 = text14.slovensko.des;
			var setSlo15 = text15.slovensko.des;
			var setSlo16 = text16.slovensko.des;

      var setEng0 = text0.english.des;

			var setEng1 = text1.english.des;
			let reE1 = "<a href='https://uniortools.com/eng/product/920PLUS1-tool-carriage-europlus#63295' target='_blank'>" + setEng1 + "</a>";

		  var setEng2 = text2.english.des;
			let reE2 = "<a href='https://uniortools.com/eng/product/721-6-irongator-engineer-s-vice#128659' target='_blank'>" + setEng2 + "</a>";

			var setEng3 = text3.english.des;
			let reE3 = "<a href='https://uniortools.com/eng/product/129-1-combination-wrench-ibex#3752' target='_blank'>" + setEng3 + "</a>";

			var setEng4 = text4.english.des;
			let reE4 = "<a href='https://uniortools.com/eng/product/531-4P-tower-pincers#10058' target='_blank'>" + setEng4 + "</a>";

			var setEng5 = text5.english.des;
			let reE5 = "<a href='https://uniortools.com/eng/product/442-1HYPO-variable-joint-hypo-pliers#9705' target='_blank'>" + setEng5 + "</a>";

			var setEng6 = text6.english.des;
			let reE6 = "<a href='https://uniortools.com/eng/product/819A-dead-blow-hammer#15267' target='_blank'>" + setEng6 + "</a>";

			var setEng7 = text7.english.des;
			let reE7 = "<a href='https://uniortools.com/eng/product/514-1BI-multifunctional-electrician-s-pliers#8488' target='_blank'>" + setEng7 + "</a>";

			var setEng8 = text8.english.des;
			let reE8 = "<a href='https://uniortools.com/eng/product/190-1-1FBI-flexible-reversible-ratchet-1-2#69751' target='_blank'>" + setEng8 + "</a>";

			var setEng9 = text9.english.des;
			let reE9 = "<a href='https://uniortools.com/eng/product/1693A-bikegator-repair-stand-auto-adjustable#129256' target='_blank'>" + setEng9 + "</a>";

			var setEng10 = text10.english.des;
			let reE10 = "<a href='https://uniortools.com/eng/product/605TBI-flat-screwdriver-tbi#13651' target='_blank'>" + setEng10 + "</a>";

			var setEng11 = text11.english.des;
			let reE11 = "<a href='https://uniortools.com/eng/product/110-1-open-end-wrench#3568' target='_blank'>" + setEng11 + "</a>";

			var setEng12 = text12.english.des;
			let reE12 = "<a href='https://uniortools.com/eng/product/190BI6P24-611939-socket-set-1-2-in-metal-box#21346' target='_blank'>" + setEng12 + "</a>";

			var setEng13 = text13.english.des;
			let reE13 = "<a href='https://uniortools.com/eng/product/406-1BI-combination-pliers#8150' target='_blank'>" + setEng13 + "</a>";

			var setEng14 = text14.english.des;
			let reE14 = "<a href='https://uniortools.com/eng/product/812-locksmiths-hammer#14933' target='_blank'>" + setEng14 + "</a>";

			var setEng15 = text15.english.des;
			let reE15 = "<a href='https://uniortools.com/eng/product/682-2-puller-with-three-adjustable-arms#15558' target='_blank'>" + setEng15 + "</a>";

			var setEng16 = text16.english.des;
			let reE16 = "<a href='https://uniortools.com/slo/product/990MA1-625751-delovni-pult-modul-a1#855994' target='_blank'>" + setEng16 + "</a>";

////////////////////srb

			var setSrb0 = text0.srbsko.des;

			var setSrb1 = text1.srbsko.des;
			let reSr1 = "<a href='https://uniortools.com/sr/product/?id=63295' target='_blank'>" + setSrb1 + "</a>";

			var setSrb2 = text2.srbsko.des;
			let reSr2 = "<a href='https://uniortools.com/sr/product/?id=128659' target='_blank'>" + setSrb2 + "</a>";

			var setSrb3 = text3.srbsko.des;
			let reSr3 = "<a href='https://uniortools.com/sr/product/?id=3752' target='_blank'>" + setSrb3 + "</a>";

			var setSrb4 = text4.srbsko.des;
			let reSr4 = "<a href='https://uniortools.com/sr/product/?id=10039' target='_blank'>" + setSrb4 + "</a>";

			var setSrb5 = text5.srbsko.des;
			let reSr5 = "<a href='https://uniortools.com/sr/product/?id=9705' target='_blank'>" + setSrb5 + "</a>";

			var setSrb6 = text6.srbsko.des;
			let reSr6 = "<a href='https://uniortools.com/sr/product/?id=15267' target='_blank'>" + setSrb6 + "</a>";

			var setSrb7 = text7.srbsko.des;
			let reSr7 = "<a href='https://uniortools.com/sr/product/?id=8488' target='_blank'>" + setSrb7 + "</a>";

			var setSrb8 = text8.srbsko.des;
			let reSr8 = "<a href='https://uniortools.com/sr/product/?id=69751' target='_blank'>" + setSrb8 + "</a>";

			var setSrb9 = text9.srbsko.des;
			let reSr9 = "<a href='https://uniortools.com/sr/product/?id=129256' target='_blank'>" + setSrb9 + "</a>";

			var setSrb10 = text10.srbsko.des;
			let reSr10 = "<a href='https://uniortools.com/sr/product/?id=13651' target='_blank'>" + setSrb10 + "</a>";

			var setSrb11 = text11.srbsko.des;
			let reSr11 = "<a href='https://uniortools.com/sr/product/?id=3568' target='_blank'>" + setSrb11 + "</a>";

			var setSrb12 = text12.srbsko.des;
			let reSr12 = "<a href='https://uniortools.com/sr/product/?id=21346' target='_blank'>" + setSrb12 + "</a>";

			var setSrb13 = text13.srbsko.des;
			let reSr13 = "<a href='https://uniortools.com/sr/product/?id=8150' target='_blank'>" + setSrb13 + "</a>";

			var setSrb14 = text14.srbsko.des;
			let reSr14 = "<a href='https://uniortools.com/sr/product/?id=14933'>" + setSrb14 + "</a>";

			var setSrb15 = text15.srbsko.des;
			let reSr15 = "<a href='https://uniortools.com/sr/product/?id=15558' target='_blank'>" + setSrb15 + "</a>";

			var setSrb16 = text16.srbsko.des;
			let reSr16 = "<a href='https://uniortools.com/sr/product/?id=855994' target='_blank'>" + setSrb16 + "</a>";




		 function img0() {
			 description.classList.add('center');
			 description.classList.remove('center2');
			 languageSet = localStorage.getItem("languageSet");

			 if (languageSet == 'slovensko' ){
						description.textContent = setSlo0;
			 };
			 if (languageSet == 'english' ){
						description.textContent = setEng0;
			 };
			 if (languageSet == 'srbsko' ){
						description.textContent = setSrb0;
			 };
			 if (languageSet == null ){
						description.textContent = setEng0;
			 };

			link.forEach(el => {
			el.addEventListener('click', () =>{
			const attr = el.getAttribute('language');
			 description.textContent = text0[attr].des;
			 });
			});

			link[0].addEventListener('click', () =>{
			description.textContent = setEng0;
			});

			link[1].addEventListener('click', () =>{
			 description.textContent = setSlo0;
			});

			link[2].addEventListener('click', () =>{
			description.textContent = setSrb0;
			});

		 }


				function img1() {
          description.classList.remove('center');
					languageSet = localStorage.getItem("languageSet");

					if (languageSet == 'slovensko' ){
					     description.textContent = setSlo1;
							 description.classList.remove('center2');
					};
					if (languageSet == 'english' ){
							 description.classList.add('center2');
							 description.innerHTML = reE1;
					};
					if (languageSet == 'srbsko' ){
							 description.classList.add('center2');
							 description.innerHTML = reSr1;
					};
					if (languageSet == null ){
						description.classList.add('center2');
						description.innerHTML = reE1;
					};

		     link.forEach(el => {
				 el.addEventListener('click', () =>{
				 const attr = el.getAttribute('language');
					description.textContent = text1[attr].des;
				  });
			   });

				 link[0].addEventListener('click', () =>{
					 description.innerHTML = reE1;
				   description.classList.add('center2');
				 });

				 link[1].addEventListener('click', () =>{
					description.classList.remove('center2');
				 });

				 link[2].addEventListener('click', () =>{
					 description.innerHTML = reSr1;
				   description.classList.add('center2');
				 });

				}

		 function img2() {
      description.classList.remove('center');
      languageSet = localStorage.getItem("languageSet");

			if (languageSet == 'slovensko' ){
					 description.textContent = setSlo2;
					 description.classList.remove('center2');
			};
			if (languageSet == 'english' ){
					 description.classList.add('center2');
					 description.innerHTML = reE2;
			};
			if (languageSet == 'srbsko' ){
					 description.classList.add('center2');
					 description.innerHTML = reSr2;
			};
			if (languageSet == null ){
				description.classList.add('center2');
				description.innerHTML = reE2;
			};

			link.forEach(el => {
			el.addEventListener('click', () =>{
			const attr = el.getAttribute('language');
			 description.textContent = text2[attr].des;
			 });
			});

			link[0].addEventListener('click', () =>{
				description.innerHTML = reE2;
				description.classList.add('center2');
			});
			link[1].addEventListener('click', () =>{
			 description.classList.remove('center2');
			});
			link[2].addEventListener('click', () =>{
				description.innerHTML = reSr2;
				description.classList.add('center2');
			});
				}

			function img3() {
        description.classList.remove('center');
				languageSet = localStorage.getItem("languageSet");

				if (languageSet == 'slovensko' ){
						 description.textContent = setSlo3;
						 description.classList.remove('center2');
				};
				if (languageSet == 'english' ){
						 description.classList.add('center2');
						 description.innerHTML = reE3;
				};
				if (languageSet == 'srbsko' ){
						 description.classList.add('center2');
						 description.innerHTML = reSr3;
				};
				if (languageSet == null ){
					description.classList.add('center2');
					description.innerHTML = reE3;
				};

			 link.forEach(el => {
			 el.addEventListener('click', () =>{
			 const attr = el.getAttribute('language');
				description.textContent = text3[attr].des;
				});
			 });;

			 link[0].addEventListener('click', () =>{
  				description.innerHTML = reE3;
  				description.classList.add('center2');
  			});
			 link[1].addEventListener('click', () =>{
 			 description.classList.remove('center2');
 			});
 			link[2].addEventListener('click', () =>{
 				description.innerHTML = reSr3;
 				description.classList.add('center2');
 			});
				}

		  function img4() {
       description.classList.remove('center');
			 languageSet = localStorage.getItem("languageSet");

			 if (languageSet == 'slovensko' ){
						description.textContent = setSlo4;
						description.classList.remove('center2');
			 };
			 if (languageSet == 'english' ){
						description.classList.add('center2');
						description.innerHTML = reE4;
			 };
			 if (languageSet == 'srbsko' ){
						description.classList.add('center2');
						description.innerHTML = reSr4;
			 };
			 if (languageSet == null ){
				 description.classList.add('center2');
				 description.innerHTML = reE4;
			 };

			link.forEach(el => {
			el.addEventListener('click', () =>{
			const attr = el.getAttribute('language');
			 description.textContent = text4[attr].des;
			 });
			});;

			link[0].addEventListener('click', () =>{
 			 description.innerHTML = reE4;
 			 description.classList.add('center2');
 		 });
			link[1].addEventListener('click', () =>{
			description.classList.remove('center2');
		 });
		 link[2].addEventListener('click', () =>{
			 description.innerHTML = reSr4;
			 description.classList.add('center2');
		 });
	 		 	}

	 		function img5() {
        description.classList.remove('center');
				languageSet = localStorage.getItem("languageSet");

				if (languageSet == 'slovensko' ){
 						description.textContent = setSlo5;
 						description.classList.remove('center2');
 			 };
 			 if (languageSet == 'english' ){
 						description.classList.add('center2');
 						description.innerHTML = reE5;
 			 };
			 if (languageSet == 'srbsko' ){
					 description.classList.add('center2');
					 description.innerHTML = reSr5;
			};
 			 if (languageSet == null ){
				 description.classList.add('center2');
				 description.innerHTML = reE5;
 			 };

			 link.forEach(el => {
			 el.addEventListener('click', () =>{
			 const attr = el.getAttribute('language');
				description.textContent = text5[attr].des;
				});
			 });;

			 link[0].addEventListener('click', () =>{
   			 description.innerHTML = reE5;
   			 description.classList.add('center2');
   		 });
			 link[1].addEventListener('click', () =>{
 			description.classList.remove('center2');
 		 });
 		 link[2].addEventListener('click', () =>{
 			 description.innerHTML = reSr5;
 			 description.classList.add('center2');
 		 });
	 			}

	 		function img6() {
        description.classList.remove('center');
				languageSet = localStorage.getItem("languageSet");

				if (languageSet == 'slovensko' ){
 						description.textContent = setSlo6;
 						description.classList.remove('center2');
 			 };
 			 if (languageSet == 'english' ){
 						description.classList.add('center2');
 						description.innerHTML = reE6;
 			 };
			 if (languageSet == 'srbsko' ){
					description.classList.add('center2');
					description.innerHTML = reSr6;
		 };
 			 if (languageSet == null ){
				 description.classList.add('center2');
				 description.innerHTML = reE6;
 			 };

			 link.forEach(el => {
			 el.addEventListener('click', () =>{
			 const attr = el.getAttribute('language');
				description.textContent = text6[attr].des;
				});
			 });;

			 link[0].addEventListener('click', () =>{
 				description.innerHTML = reE6;
 				description.classList.add('center2');
 			});
			 link[1].addEventListener('click', () =>{
			 description.classList.remove('center2');
			});
			link[2].addEventListener('click', () =>{
				description.innerHTML = reSr6;
				description.classList.add('center2');
			});
	 			}

	 		function img7() {
        description.classList.remove('center');
				languageSet = localStorage.getItem("languageSet");

				if (languageSet == 'slovensko' ){
						description.textContent = setSlo7;
						description.classList.remove('center2');
			 };
			 if (languageSet == 'english' ){
						description.classList.add('center2');
						description.innerHTML = reE7;
			 };
			 if (languageSet == 'srbsko' ){
				 description.classList.add('center2');
				 description.innerHTML = reSr7;
		   };
			 if (languageSet == null ){
				 description.classList.add('center2');
				 description.innerHTML = reE7;
			 };

			 link.forEach(el => {
			 el.addEventListener('click', () =>{
			 const attr = el.getAttribute('language');
				description.textContent = text7[attr].des;
				});
			 });;

			 link[0].addEventListener('click', () =>{
  			 description.innerHTML = reE7;
  			 description.classList.add('center2');
  		 });
			 link[1].addEventListener('click', () =>{
			description.classList.remove('center2');
		 });
		 link[2].addEventListener('click', () =>{
			 description.innerHTML = reSr7;
			 description.classList.add('center2');
		 });
	 			}

			function img8() {
        description.classList.remove('center');
				languageSet = localStorage.getItem("languageSet");

				if (languageSet == 'slovensko' ){
						description.textContent = setSlo8;
						description.classList.remove('center2');
			 };
			 if (languageSet == 'english' ){
						description.classList.add('center2');
						description.innerHTML = reE8;
			 };
			 if (languageSet == 'srbsko' ){
				 description.classList.add('center2');
				 description.innerHTML = reSr8;
		   };
			 if (languageSet == null ){
				 description.classList.add('center2');
				 description.innerHTML = reE8;
			 };

			 link.forEach(el => {
			 el.addEventListener('click', () =>{
			 const attr = el.getAttribute('language');
				description.textContent = text8[attr].des;
				});
			 });;

			 link[0].addEventListener('click', () =>{
  			 description.innerHTML = reE8;
  			 description.classList.add('center2');
  		 });
			 link[1].addEventListener('click', () =>{
			description.classList.remove('center2');
		 });
		 link[2].addEventListener('click', () =>{
			 description.innerHTML = reSr8;
			 description.classList.add('center2');
		 });
	 		 	}

	 		 function img9() {
         description.classList.remove('center');
				 languageSet = localStorage.getItem("languageSet");

				 if (languageSet == 'slovensko' ){
 						description.textContent = setSlo9;
 						description.classList.remove('center2');
 			 };
 			 if (languageSet == 'english' ){
 						description.classList.add('center2');
 						description.innerHTML = reE9;
 			 };
			 if (languageSet == 'srbsko' ){
				 description.classList.add('center2');
				 description.innerHTML = reSr9;
		   };
 			 if (languageSet == null ){
				 description.classList.add('center2');
				 description.innerHTML = reE9;
 			 };

				link.forEach(el => {
				el.addEventListener('click', () =>{
				const attr = el.getAttribute('language');
				 description.textContent = text9[attr].des;
				 });
				});;

				link[0].addEventListener('click', () =>{
	  			 description.innerHTML = reE9;
	  			 description.classList.add('center2');
	  		 });
				link[1].addEventListener('click', () =>{
 			description.classList.remove('center2');
 		 });
 		 link[2].addEventListener('click', () =>{
 			 description.innerHTML = reSr9;
 			 description.classList.add('center2');
 		 });
	 			}

	 		 function img10() {
         description.classList.remove('center');
				 languageSet = localStorage.getItem("languageSet");

				 if (languageSet == 'slovensko' ){
 						description.textContent = setSlo10;
 						description.classList.remove('center2');
 			 };
 			 if (languageSet == 'english' ){
 						description.classList.add('center2');
 						description.innerHTML = reE10;
 			 };
			 if (languageSet == 'srbsko' ){
				 description.classList.add('center2');
				 description.innerHTML = reSr10;
		   };
 			 if (languageSet == null ){
				 description.classList.add('center2');
				 description.innerHTML = reE10;
 			 };

				link.forEach(el => {
				el.addEventListener('click', () =>{
				const attr = el.getAttribute('language');
				 description.textContent = text10[attr].des;
				 });
				});;

				link[0].addEventListener('click', () =>{
	  			 description.innerHTML = reE10;
	  			 description.classList.add('center2');
	  		 });
				link[1].addEventListener('click', () =>{
 			description.classList.remove('center2');
 		 });
 		 link[2].addEventListener('click', () =>{
 			 description.innerHTML = reSr10;
 			 description.classList.add('center2');
 		 });
	 			}

	 		function img11() {
        description.classList.remove('center');
				languageSet = localStorage.getItem("languageSet");

				if (languageSet == 'slovensko' ){
					 description.textContent = setSlo11;
					 description.classList.remove('center2');
			};
			if (languageSet == 'english' ){
					 description.classList.add('center2');
					 description.innerHTML = reE11;
			};
			if (languageSet == 'srbsko' ){
				description.classList.add('center2');
				description.innerHTML = reSr11;
			};
			if (languageSet == null ){
				description.classList.add('center2');
				description.innerHTML = reE11;
			};

			 link.forEach(el => {
			 el.addEventListener('click', () =>{
			 const attr = el.getAttribute('language');
				description.textContent = text11[attr].des;
				});
			 });;

			 link[0].addEventListener('click', () =>{
	 			description.innerHTML = reE11;
	 			description.classList.add('center2');
	 		});
			 link[1].addEventListener('click', () =>{
		 description.classList.remove('center2');
		});
		link[2].addEventListener('click', () =>{
			description.innerHTML = reSr11;
			description.classList.add('center2');
		});
	 			}

	 		 function img12() {
         description.classList.remove('center');
				 languageSet = localStorage.getItem("languageSet");

				 if (languageSet == 'slovensko' ){
 					 description.textContent = setSlo12;
 					 description.classList.remove('center2');
 			};
 			if (languageSet == 'english' ){
 					 description.classList.add('center2');
 					 description.innerHTML = reE12;
 			};
			if (languageSet == 'srbsko' ){
				description.classList.add('center2');
				description.innerHTML = reSr12;
			};
 			if (languageSet == null ){
				description.classList.add('center2');
				description.innerHTML = reE12;
 			};

				link.forEach(el => {
				el.addEventListener('click', () =>{
				const attr = el.getAttribute('language');
				 description.textContent = text12[attr].des;
				 });
				});;

				link[0].addEventListener('click', () =>{
		 			description.innerHTML = reE12;
		 			description.classList.add('center2');
		 		});
				link[1].addEventListener('click', () =>{
 		 description.classList.remove('center2');
 		});
 		link[2].addEventListener('click', () =>{
 			description.innerHTML = reSr12;
 			description.classList.add('center2');
 		});
	 	 		 }

	 	 	function img13() {
        description.classList.remove('center');
				languageSet = localStorage.getItem("languageSet");

				if (languageSet == 'slovensko' ){
					description.textContent = setSlo13;
					description.classList.remove('center2');
		 };
		 if (languageSet == 'english' ){
					description.classList.add('center2');
					description.innerHTML = reE13;
		 };
		 if (languageSet == 'srbsko' ){
			 description.classList.add('center2');
			 description.innerHTML = reSr13;
		 };
		 if (languageSet == null ){
			 description.classList.add('center2');
			 description.innerHTML = reE13;
		 };

			 link.forEach(el => {
			 el.addEventListener('click', () =>{
			 const attr = el.getAttribute('language');
				description.textContent = text13[attr].des;
				});
			 });;

			 link[0].addEventListener('click', () =>{
	  		 description.innerHTML = reE13;
	  		 description.classList.add('center2');
	  	 });
			 link[1].addEventListener('click', () =>{
		description.classList.remove('center2');
	 });
	 link[2].addEventListener('click', () =>{
		 description.innerHTML = reSr13;
		 description.classList.add('center2');
	 });
	 	 		}

	 	 	function img14() {
        description.classList.remove('center');
				languageSet = localStorage.getItem("languageSet");

				if (languageSet == 'slovensko' ){
					description.textContent = setSlo14;
					description.classList.remove('center2');
		 };
		 if (languageSet == 'english' ){
					description.classList.add('center2');
					description.innerHTML = reE14;
		 };
		 if (languageSet == 'srbsko' ){
			 description.classList.add('center2');
			 description.innerHTML = reSr14;
		 };
		 if (languageSet == null ){
			 description.classList.add('center2');
			 description.innerHTML = reE14;
		 };

			 link.forEach(el => {
			 el.addEventListener('click', () =>{
			 const attr = el.getAttribute('language');
				description.textContent = text14[attr].des;
				});
			 });;

			 link[0].addEventListener('click', () =>{
				 description.innerHTML = reE14;
				 description.classList.add('center2');
			 });
			 link[1].addEventListener('click', () =>{
		description.classList.remove('center2');
	 });
	 link[2].addEventListener('click', () =>{
		 description.innerHTML = reSr14;
		 description.classList.add('center2');
	 });
	 	 		}

	 	 	function img15() {
        description.classList.remove('center');
				languageSet = localStorage.getItem("languageSet");

				if (languageSet == 'slovensko' ){
					description.textContent = setSlo15;
					description.classList.remove('center2');
		 };
		 if (languageSet == 'english' ){
					description.classList.add('center2');
					description.innerHTML = reE15;
		 };
		 if (languageSet == 'srbsko' ){
			 description.classList.add('center2');
			 description.innerHTML = reSr15;
		 };
		 if (languageSet == null ){
			 description.classList.add('center2');
			 description.innerHTML = reE15;
		 };

			 link.forEach(el => {
			 el.addEventListener('click', () =>{
			 const attr = el.getAttribute('language');
				description.textContent = text15[attr].des;
				});
			 });;

			 link[0].addEventListener('click', () =>{
	  		 description.innerHTML = reE15;
	  		 description.classList.add('center2');
	  	 });
			 link[1].addEventListener('click', () =>{
		description.classList.remove('center2');
	 });
	 link[2].addEventListener('click', () =>{
		 description.innerHTML = reSr15;
		 description.classList.add('center2');
	 });
	 	 		}

			function img16() {
        description.classList.remove('center');
				languageSet = localStorage.getItem("languageSet");

				if (languageSet == 'slovensko' ){
					description.textContent = setSlo16;
					description.classList.remove('center2');
		 };
		 if (languageSet == 'english' ){
					description.classList.add('center2');
					description.innerHTML = reE16;
		 };
		 if (languageSet == 'srbsko' ){
			 description.classList.add('center2');
			 description.innerHTML = reSr16;
		 };
		 if (languageSet == null ){
			 description.classList.add('center2');
			 description.innerHTML = reSr16;
		 };

			 link.forEach(el => {
			 el.addEventListener('click', () =>{
			 const attr = el.getAttribute('language');
				description.textContent = text16[attr].des;
				});
			 });;

			 link[0].addEventListener('click', () =>{
			 	description.innerHTML = reE16;
			 	description.classList.add('center2');
			 });
			 link[1].addEventListener('click', () =>{
		description.classList.remove('center2');
	 });
	 link[2].addEventListener('click', () =>{
		 description.innerHTML = reSr16;
		 description.classList.add('center2');
	 });
		 	 	}

				languageColor();
				  function languageColor() {

				    var languageColor = localStorage.getItem("languageSet");

				    if (languageColor == 'slovensko' ){
				       slo.classList.add('red');
				       eng.classList.remove('red');
							 srb.classList.remove('red');
				    };
				    if (languageColor == 'english' ){
				       eng.classList.add('red');
				       slo.classList.remove('red');
							 srb.classList.remove('red');
				    };
						if (languageColor == 'srbsko' ){
				       srb.classList.add('red');
				       slo.classList.remove('red');
							 eng.classList.remove('red');
				    };
				    if (languageColor == null ){
				      eng.classList.add('red');
				      slo.classList.remove('red');
							srb.classList.remove('red');
				    };
				  }

					link[0].addEventListener('click', () =>{
				  //description.classList.add('center');
					description.textContent = setEng0;
						eng.classList.add('red');
			      slo.classList.remove('red');
						srb.classList.remove('red');
			 		localStorage.languageSet = ("english");
			 		});
				link[1].addEventListener('click', () =>{
         description.textContent = setSlo0;
					slo.classList.add('red');
	        eng.classList.remove('red');
					srb.classList.remove('red');
		 		localStorage.languageSet = ("slovensko");
		 		});
				link[2].addEventListener('click', () =>{
			  //description.classList.add('center');
				description.textContent = setSrb0;
					srb.classList.add('red');
		      slo.classList.remove('red');
					eng.classList.remove('red');
		 		localStorage.languageSet = ("srbsko");
		 		});


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
