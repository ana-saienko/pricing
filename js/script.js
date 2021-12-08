// Меню бургер

const iconMenu = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');
const menuLink = document.querySelector('.header__menu-item');

if (iconMenu) {
	
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('burger-active');
		menuBody.classList.toggle('burger-active');
	});
}

// ---------------------------------------------
// Переключение
// ---------------------------------------------
/*
function totalIt() {
	var input = document.getElementsByName("product");
	var total = 0;
	for (var i = 0; i < input.length; i++) {
	  if (input[i].checked) {
		 total += parseFloat(input[i].value);
	  }
	}
	document.getElementById("basic").value = "$" + total.toFixed(2);
 }

const checkedAnnual = document.getElementById("annual");
const checkedMonth = document.getElementById("month");


const checkedBox = document.getElementsByClassName("switch__label");

let givenPercent = 20;
let twelveMoths = +basicMonth * 12;


function calcPercent() {
	let result = twelveMoths - ((twelveMoths * givenPercent) / 100); 
	return document.getElementById("basic").value = "$" +result.toFixed(0);
}



// сперва получаем значения цен в переменные
// для этого берем айди и вытаскиваем число из датасета

const basicMonth = document.getElementById("basic");
let basicMonthPrice = +basicMonth.dataset.basic;


const proMonth = document.getElementById("pro");
let proMonthPrice = +proMonth.dataset.basic;


const masterMonth = document.getElementById("master");
let masterMonthPrice = +masterMonth.dataset.basic;


// переменная, в которой хранится процент: 

let givenPercent = 5;

// теперь считаем стоимость каждого тарифа за 12 месяцев 

let twelveMothsBasic = basicMonthPrice * 12;
let twelveMothsPro = proMonthPrice * 12;
let twelveMothsmaster = masterMonthPrice * 12;
 
// теперь надо функция, которая покажет сумму минус процент и выведет текст в html

function calcPercentBasic() {
	let result = twelveMothsBasic - ((twelveMothsBasic * givenPercent) / 100); 
	return document.getElementById("basic").innerHTML = "$ " + result.toFixed(0);
}

function calcPercentPro() {
	let result = twelveMothsPro - ((twelveMothsPro * givenPercent) / 100); 
	return document.getElementById("pro").innerHTML = "$ " + result.toFixed(0);
}

function calcPercentMaster() {
	let result = twelveMothsmaster - ((twelveMothsmaster * givenPercent) / 100); 
	return document.getElementById("master").innerHTML = "$ " + result.toFixed(0);
}

// проверяем, нажат ползунок или нет

const checkedAnnual = document.getElementById("annual");
const checkedMonth = document.getElementById("month");

checkedAnnual.addEventListener('click', (e) => {
	calcPercentBasic();
	calcPercentPro();
	calcPercentMaster();
});

let givenPercent = 5;

function calcYearPrice() {
	const monthlyPrice = document.getElementById("basicMonth");
	let basicMonthPrice = +monthlyPrice.dataset.basic;
	let twelveMothsBasic = basicMonthPrice * 12;

	let result = twelveMothsBasic - ((twelveMothsBasic * givenPercent) / 100); 
	return document.getElementById("basicYear").innerHTML = "$ " + result.toFixed(0);
}
*/

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