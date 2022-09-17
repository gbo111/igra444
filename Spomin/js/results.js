const results = document.getElementById('results');
const resultsAll = document.getElementById('resultsAll');
const resultsAllSrb = document.getElementById('resultsAllSrb');

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


window.onload = function() {
	getHSPart();
	async function getHSPart() {

		const responseHSeasy = await fetch('apiEasy1');
		const dataHSeasy = await responseHSeasy.json();
		const maxEhs = Math.max(...dataHSeasy.map((i) => i.timeStamp));
///////////////////////////////////////////////////////////////////////////////
		const responseEasyGet = await fetch('apiTSmaxEasy');
		const dataMaxGeasy = await responseEasyGet.json();
		const maxEts = Math.max(...dataMaxGeasy.map((i) => i.timeStamp));

		const easy_mode = dataHSeasy.filter((item) => item.timeStamp > maxEts || item.timeStamp == null);

	///////////////////////////////////////////////////////////////

		easy_mode.forEach((item) => {
		 (delete item.timeX);
		 (delete item._id);
		 item.timeStamp = JSON.stringify(new Date(JSON.parse(item.timeStamp * 1000)));
		});


		sortE();
		 function sortE() {
		 easy_mode.sort((a, b) => {
				if ((a.timeStamp) > (b.timeStamp))  {
					return 1
				} else {
					return -1
				}
			});
		 }
///////////////////////////////////////////////////////////////////////////////
const responseHSnormal = await fetch('apiNormal1');
const dataHSnormal = await responseHSnormal.json();
const maxNhs = Math.max(...dataHSnormal.map((i) => i.timeStamp));
///////////////////////////////////////////////////////////////////////////////
const responseNormalGet = await fetch('apiTSmaxNormal');
const dataMaxGnormal = await responseNormalGet.json();
const maxNts = Math.max(...dataMaxGnormal.map((i) => i.timeStamp));

const normal_mode = dataHSnormal.filter((item) => item.timeStamp > maxNts || item.timeStamp == null);

///////////////////////////////////////////////////////////////

normal_mode.forEach((item) => {
 (delete item.timeX);
 (delete item._id);
 item.timeStamp = JSON.stringify(new Date(JSON.parse(item.timeStamp * 1000)));
});


sortN();
 function sortN() {
 normal_mode.sort((a, b) => {
		if ((a.timeStamp) > (b.timeStamp))  {
			return 1
		} else {
			return -1
		}
	});
 }
 ///////////////////////////////////////////////////////////////////////////////
 const responseHShard = await fetch('apiHard1');
 const dataHShard = await responseHShard.json();
 const maxHhs = Math.max(...dataHShard.map((i) => i.timeStamp));
 ///////////////////////////////////////////////////////////////////////////////
 const responseHardGet = await fetch('apiTSmaxHard');
 const dataMaxGhard = await responseHardGet.json();
 const maxHts = Math.max(...dataMaxGhard.map((i) => i.timeStamp));

 const hard_mode = dataHShard.filter((item) => item.timeStamp > maxHts || item.timeStamp == null);

 ///////////////////////////////////////////////////////////////

 hard_mode.forEach((item) => {
  (delete item.timeX);
  (delete item._id);
  item.timeStamp = JSON.stringify(new Date(JSON.parse(item.timeStamp * 1000)));
 });


 sortH();
  function sortH() {
  hard_mode.sort((a, b) => {
 		if ((a.timeStamp) > (b.timeStamp))  {
 			return 1
 		} else {
 			return -1
 		}
 	});
  }

/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

	 results.addEventListener('click', () => {

	 	async function getHSAll() {

	  maxEts();
	 async function maxEts() {
		 const maxEt = {timeStamp: maxEhs}
	 		const optionsMaxE = {
	 			 method: 'POST',
	 			 headers: {
	 				 'Content-Type': 'application/json'
	 			 },
	 				 body: JSON.stringify(maxEt)
	 			};
	 			const responseTSeasy = await fetch('apiEasyTS', optionsMaxE);
	 			const dataTSeasy = await responseTSeasy.json();
	     }

			 maxNts();
	 	 async function maxNts() {
	 		 const maxNt = {timeStamp: maxNhs}
	 	 		const optionsMaxN = {
	 	 			 method: 'POST',
	 	 			 headers: {
	 	 				 'Content-Type': 'application/json'
	 	 			 },
	 	 				 body: JSON.stringify(maxNt)
	 	 			};
	 	 			const responseTSnormal = await fetch('apiNormalTS', optionsMaxN);
	 	 			const dataTSnormal = await responseTSnormal.json();
	 	     }

					 maxHts();
				async function maxHts() {
					const maxHt = {timeStamp: maxHhs}
					 const optionsMaxH = {
							method: 'POST',
							headers: {
								'Content-Type': 'application/json'
							},
								body: JSON.stringify(maxHt)
						 };
						 const responseTShard = await fetch('apiHardTS', optionsMaxH);
						 const dataTShard = await responseTShard.json();
						}

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

	 	downloadAsExcel();
	 	function downloadAsExcel() {
	 	//const alldelHS = Object.assign(delHSe, delHSn, delHSh);
	 	 const worksheet1 = XLSX.utils.json_to_sheet(easy_mode);
	 	 const worksheet2 = XLSX.utils.json_to_sheet(normal_mode);
	 	 const worksheet3 = XLSX.utils.json_to_sheet(hard_mode);
	 	 const workbook = {
	 		 Sheets:{
	 			 'easy_mode':worksheet1,
	 			 'normal_mode':worksheet2,
	 			 'hard_mode':worksheet3
	 		 },
	 		 SheetNames:['easy_mode', 'normal_mode', 'hard_mode']


	 	 };
	 	 const excelBuffer = XLSX.write(workbook,{bookType:'xlsx',type:'array'});
	 	 console.log(excelBuffer);
	 	 saveAsExcel(excelBuffer, 'Rezultati_delni')
	 	}

	 	function saveAsExcel(buffer, filename) {
	 	 const data = new Blob([buffer], {type: EXCEL_TYPE});
	 	 saveAs(data, filename + '_export_' + new Date() + EXCEL_EXTENSION);
	 	}
	 }
	 getHSAll();


	 });
  };
 }


 /////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////

 resultsAll.addEventListener('click', () => {

	async function getHSvsi() {

		const responseHSeasyAll = await fetch('apiEasy1');
		const easy_modeAll = await responseHSeasyAll.json();
///////////////////////////////////////////////////////////////////////////////

		easy_modeAll.forEach((item) => {
		 (delete item.timeX);
		 (delete item._id);
		 item.timeStamp = JSON.stringify(new Date(JSON.parse(item.timeStamp * 1000)));
		});


		sortEall();
		 function sortEall() {
		 easy_modeAll.sort((a, b) => {
				if ((a.timeStamp) > (b.timeStamp))  {
					return 1
				} else {
					return -1
				}
			});
		 }
///////////////////////////////////////////////////////////////////////////////
const responseHSnormalAll = await fetch('apiNormal1');
const normal_modeAll = await responseHSnormalAll.json();

///////////////////////////////////////////////////////////////

normal_modeAll.forEach((item) => {
 (delete item.timeX);
 (delete item._id);
 item.timeStamp = JSON.stringify(new Date(JSON.parse(item.timeStamp * 1000)));
});


sortNall();
 function sortNall() {
 normal_modeAll.sort((a, b) => {
		if ((a.timeStamp) > (b.timeStamp))  {
			return 1
		} else {
			return -1
		}
	});
 }
 ///////////////////////////////////////////////////////////////////////////////
 const responseHShardAll = await fetch('apiHard1');
 const hard_modeAll = await responseHShardAll.json();
 ///////////////////////////////////////////////////////////////

 hard_modeAll.forEach((item) => {
  (delete item.timeX);
  (delete item._id);
  item.timeStamp = JSON.stringify(new Date(JSON.parse(item.timeStamp * 1000)));
 });


 sortHall();
  function sortHall() {
  hard_modeAll.sort((a, b) => {
 		if ((a.timeStamp) > (b.timeStamp))  {
 			return 1
 		} else {
 			return -1
 		}
 	});
  }

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

	downloadAsExcel();
	function downloadAsExcel() {
	//const alldelHS = Object.assign(delHSe, delHSn, delHSh);
	 const worksheet1 = XLSX.utils.json_to_sheet(easy_modeAll);
	 const worksheet2 = XLSX.utils.json_to_sheet(normal_modeAll);
	 const worksheet3 = XLSX.utils.json_to_sheet(hard_modeAll);
	 const workbook = {
		 Sheets:{
			 'easy_mode_All':worksheet1,
			 'normal_mode_All':worksheet2,
			 'hard_mode_All':worksheet3
		 },
		 SheetNames:['easy_mode_All', 'normal_mode_All', 'hard_mode_All']


	 };
	 const excelBuffer = XLSX.write(workbook,{bookType:'xlsx',type:'array'});
	 console.log(excelBuffer);
	 saveAsExcel(excelBuffer, 'Rezultati_vsi')
	}

	function saveAsExcel(buffer, filename) {
	 const data = new Blob([buffer], {type: EXCEL_TYPE});
	 saveAs(data, filename + '_export_' + new Date() + EXCEL_EXTENSION);
	}
 }
 getHSvsi();


 });






 /////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////
 ///////////////////////////////////////////////////////////////

 resultsAllSrb.addEventListener('click', () => {

	async function getHSvsiSrb() {

		const responseHSeasyAllSrb = await fetch('apiEasy1');
		const easy_modeAllSrb = await responseHSeasyAllSrb.json();
///////////////////////////////////////////////////////////////////////////////


	 let easy_modeAllSrb1 = easy_modeAllSrb.filter(value => value.drzava === "Serbia");

		easy_modeAllSrb1.forEach((item) => {
		 (delete item.timeX);
		 (delete item._id);
		 item.timeStamp = JSON.stringify(new Date(JSON.parse(item.timeStamp * 1000)));
		});


		sortEallSrb();
		 function sortEallSrb() {
		 easy_modeAllSrb1.sort((a, b) => {
				if ((a.timeStamp) > (b.timeStamp))  {
					return 1
				} else {
					return -1
				}
			});
		 }
///////////////////////////////////////////////////////////////////////////////
const responseHSnormalAllSrb = await fetch('apiNormal1');
const normal_modeAllSrb = await responseHSnormalAllSrb.json();

///////////////////////////////////////////////////////////////

let normal_modeAllSrb1 = normal_modeAllSrb.filter(value => value.drzava === "Serbia");

normal_modeAllSrb1.forEach((item) => {
 (delete item.timeX);
 (delete item._id);
 item.timeStamp = JSON.stringify(new Date(JSON.parse(item.timeStamp * 1000)));
});


sortNallSrb();
 function sortNallSrb() {
 normal_modeAllSrb1.sort((a, b) => {
		if ((a.timeStamp) > (b.timeStamp))  {
			return 1
		} else {
			return -1
		}
	});
 }
 ///////////////////////////////////////////////////////////////////////////////
 const responseHShardAllSrb = await fetch('apiHard1');
 const hard_modeAllSrb = await responseHShardAllSrb.json();
 ///////////////////////////////////////////////////////////////

 let hard_modeAllSrb1 = hard_modeAllSrb.filter(value => value.drzava === "Serbia");

 hard_modeAllSrb1.forEach((item) => {
  (delete item.timeX);
  (delete item._id);
  item.timeStamp = JSON.stringify(new Date(JSON.parse(item.timeStamp * 1000)));
 });


 sortHallSrb();
  function sortHallSrb() {
  hard_modeAllSrb1.sort((a, b) => {
 		if ((a.timeStamp) > (b.timeStamp))  {
 			return 1
 		} else {
 			return -1
 		}
 	});
  }

//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////

	downloadAsExcel();
	function downloadAsExcel() {
	//const alldelHS = Object.assign(delHSe, delHSn, delHSh);
	 const worksheet1 = XLSX.utils.json_to_sheet(easy_modeAllSrb1);
	 const worksheet2 = XLSX.utils.json_to_sheet(normal_modeAllSrb1);
	 const worksheet3 = XLSX.utils.json_to_sheet(hard_modeAllSrb1);
	 const workbook = {
		 Sheets:{
			 'easy_mode_All_Srb':worksheet1,
			 'normal_mode_All_Srb':worksheet2,
			 'hard_mode_All_Srb':worksheet3
		 },
		 SheetNames:['easy_mode_All_Srb', 'normal_mode_All_Srb', 'hard_mode_All_Srb']


	 };
	 const excelBuffer = XLSX.write(workbook,{bookType:'xlsx',type:'array'});
	 console.log(excelBuffer);
	 saveAsExcel(excelBuffer, 'Rezultati_vsiSrb')
	}

	function saveAsExcel(buffer, filename) {
	 const data = new Blob([buffer], {type: EXCEL_TYPE});
	 saveAs(data, filename + '_export_' + new Date() + EXCEL_EXTENSION);
	}
 }
 getHSvsiSrb();


 });
