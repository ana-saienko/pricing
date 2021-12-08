// функция показывает цену за месяц или за год

function myFunction() {
	var x = document.querySelectorAll('.annual');
	var y = document.querySelectorAll('.month');
	for (var i = 0; i < x.length; i++) {
	  if (document.getElementById("toggle").checked == true) {
		 x[i].classList.add('hidden');
		 y[i].classList.remove('hidden');
	  } else {
		 x[i].classList.remove('hidden');
		 y[i].classList.add('hidden');
	  }
	}
 }

// процент &dollar;199.99

let givenPercent = 20;

function calcYearPriceBasic() {
	const monthlyPrice = document.getElementById("basicMonth");
	let basicMonthPrice = +monthlyPrice.dataset.basic;
	let twelveMothsBasic = basicMonthPrice * 12;

	let result = twelveMothsBasic - ((twelveMothsBasic * givenPercent) / 100); 
	return document.getElementById("basicYear").innerHTML = "$ " + result.toFixed(0);
}

function calcYearPricePro() {
	const monthlyPrice = document.getElementById("proMonth");
	let proMonthPrice = +monthlyPrice.dataset.pro;
	let twelveMothsPro = proMonthPrice * 12;

	let result = twelveMothsPro - ((twelveMothsPro * givenPercent) / 100); 
	return document.getElementById("proYear").innerHTML = "$ " + result.toFixed(0);
}


function calcYearPriceMaster() {
	const monthlyPrice = document.getElementById("masterMonth");
	let masterMonthPrice = +monthlyPrice.dataset.master;
	let twelveMothsMaster = masterMonthPrice * 12;

	let result = twelveMothsMaster - ((twelveMothsMaster * givenPercent) / 100); 
	return document.getElementById("masterYear").innerHTML = "$ " + result.toFixed(0);
}


calcYearPriceBasic();
calcYearPricePro();
calcYearPriceMaster();