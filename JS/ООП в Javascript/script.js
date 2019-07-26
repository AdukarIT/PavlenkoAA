'use strict';
// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: 
// name (имя), surname (фамилия), rate (ставка за день работы), days
// (количество отработанных дней). Также класс должен иметь метод getSalary(),
// который будет выводить зарплату работника. Зарплата - это произведение
// (умножение) ставки rate на количество отработанных дней days.
// function Worker(name, surname, rate, days){
//   this.name = name;
//   this.surname = surname;
//   this.rate = rate;
//   this.days = days;
  
//   this.getSalary = function(){
//     return this.rate * this.days;
//   };
// }
// let sashka = new Worker('Александр', 'Павленко', 200, 24);
//   console.log(sashka.surname + ' ' + sashka.name + ': ЗП в его мечтах - '+ sashka.getSalary());

// Реализуйте класс Student (Студент), который будет наследовать от класса User. 
// Этот класс должен иметь следующие свойства: name (имя, наследуется от User), 
// surname (фамилия, наследуется от User), year (год поступления в вуз).
// Класс должен иметь метод getFullName() (наследуется от User), с помощью 
// которого можно вывести одновременно имя и фамилию студента. Также класс 
// должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год 
// получите самостоятельно.
// function User(name, surname) {
//   this.name = name;
//   this.surname = surname;

//   this.getFullName = function(){
//     return this.name + ' ' + this.surname;
//   }
// }

// function Student(start, thisYear, name, surname){
//   User.call(this, name, surname);
//   this.start = start;
//   this.thisYear = thisYear;
  
//   this.getCourse = function(){
//     return this.getFullName() + ' ' + '- ' + (thisYear - start) + ' курс';
//   }
// }
// let ne = new  Student(2009, 2013, 'Александр', 'Павленко');
// console.log(ne.getCourse());

// Напишите программу, расчиытвающую стоимость и калорийность гамбургеров
// (чисбургер, бигмак и тд), используя ООП подход
// function Sandvich(bread, cheese, beef, onion, salad, sauce, cucumber, name){
//     let calories = {
//     calBread: bread * 25,
//     calCheese: cheese * 15,
//     calBeef: beef * 100,
//     calOnion: onion * 2,
//     calSalad: salad * 4,
//     calSauce: sauce * 20,
//     calCucumber: cucumber * 3
//   }
//   this.name = name;
//   this.getCal = function() {
//     let sumCalories = 0;
//     for (let key in calories) {
//       sumCalories += calories[key];
//     }
//     return this.name + ' -' + sumCalories + ' каллорий. ';
//   }

//   let cost = {
//   costBread: bread * 0.15,
//   costCheese: cheese * 0.25,
//   costBeef: beef * 1.10,
//   costOnion: onion * 0.10,
//   costSalad: salad * 0.10,
//   costSauce: sauce * 0.30,
//   costCucumber: cucumber * 0.50
//   }
//   this.getResult = function(){
//     let sum = 0;
//     for(let key in cost){
//       sum += cost[key];
//     }
//     return this.getCal() + 'Стоимость - ' + sum.toFixed(2) + ' руб.'
//   }
// }
// let gamb = new Sandvich(1,1,1,1,1,1,1, 'Гамбургер');
// console.log(gamb.getResult());

// Реализуйте на ООП программу-напоминалку. Как она должна работать: 
// вы записываете в специальное поле какие-то события, о которых вам нужно
// напомнить и в нужное время вкладка браузера с этой программой должна напомнить 
// об этом событии звуком (погуглите работу с аудио на js).
let clock = function(h, m, event){
	let date = new Date();
	let hours = date.getHours();
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();
	if(hours < 10)
		hours = "0" + hours;
	if(minutes < 10)
		minutes = "0" + minutes;
	if(seconds < 10)
		seconds = "0" + seconds;
	document.getElementById("hour").innerHTML = hours;
	document.getElementById("minut").innerHTML = minutes;
	document.getElementById("secon").innerHTML = seconds;
	setTimeout(clock, 1000);
}
clock();

function GetSec(){
	this.h = 17;
	this.m = 0;
	this.event = 'Get up!';
	let hou = document.getElementById('hour').innerHTML;
	let min = document.getElementById('minut').innerHTML;
	let sec = document.getElementById('secon').innerHTML;

	if(hou==this.h && min==this.m && sec == 0){
  	let bell = new Audio('https://zvukipro.com/uploads/files/2018-12/1543852412_u_edomlenie-9.mp3');
		
		function playClip(bel) {
  			bel.play();
		}
		playClip(bell);
		console.log(event);
	}
	setTimeout(GetSec, 1000);
}
let time = new GetSec();
// задача до конца не выполнена, т.к. не передаются параметры