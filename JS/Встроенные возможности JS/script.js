// // Напишите функцию, которая создаёт и возвращает массив длиной 20 элементов, каждый из которых – случайное число от 1 до 50.
// function getRandomArray() {
// 	let arr = [];
// 	for (let i = 0; i < 20; i++)
// 		arr[i] = Math.floor((Math.random() * 50 + 1));
// 	return arr;
// }
// console.log(getRandomArray());

// Перепишите функцию из задачи 1, так, чтобы она принимала три аргумента:
// длину нужного массива, минимальное и максимальное значения элементов.
// function getRandomArray(length, min, max) {
// 	let arr = [];
// 	for (let i = min; i < length; i++)
// 		arr[i] = Math.floor((Math.random() * max + 1));
// 	return arr;
// }
// console.log(getRandomArray(20, 0, 50));

// Напишите функцию, которая проверяет, начинается ли строка на https:// и заканчивается
//  ли она на .html. Если оба условия выполнены, функция возвращает true, в ином случае – false.
// function checkString(str){
// if(str.slice(0, 8) == 'https://' && str.slice(-5) == '.html'){
// 	return true;
// } else {
// 	return false;
// }
// }
// console.log(checkString('https://adukaritfrontend.html'));

// // Напишите функцию, которая считает, сколько раз определённый символ встречается в строке.
// function getSumSim(str, x){
// 	let sum = 0;
// 	for(let i = 0; i < str.length; i++){
// 		if(str.charAt(i) == x){
// 			sum++;
// 		}
// 	}
// 	return sum;
// }
// console.log(getSumSim('Lorem ipsum dolor sit amet, consectetur adipisicing elit', 'i'));

// Перепишите функцию из задачи 4 так, чтобы она считала большие и маленькие буквы одним и тем же символом
//  (например, 'A' == 'a').
// function getSumSim(str, x){
// 	let sum = 0;
// 	for(let i = 0; i < str.length; i++){
// 		/*добавляем .toLowerCase()*/
// 		if(str.charAt(i).toLowerCase() == x){
// 			sum++;
// 		}
// 	}
// 	return sum;
// }
// console.log(getSumSim('Lorem ipsum dolor sIt amet, consectetur adipisicing elit', 'i'));

// // Напишите функцию, которая выводит в консоль текущие дату, месяц и год в формате «24 января 2019».
// function getDate(){
// 	let today = new Date();
// 	let months = ["Января", "Февраля", "Мара", "Апреля", "Мая", "Июня", 
// 	            "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"];
// 	console.log('"' + today.getDate(), months[today.getMonth()], today.getFullYear() + '"');
// }
// getDate();

// // Напишите функцию, которая выводит в консоль количество секунд, прошедших с начала текущего дня.
// function getSecunds(){
// 	let today = new Date();
// 	console.log(Date.parse(today));
// }
// getSecunds();

// Напишите функцию, которая принимает от пользователя строку. Если эта строка не содержит буквы «ф», сгенерируйте собственную
//  ошибку. Вызовите функцию так, чтобы при возникновении «поймать» ошибку в try/catch.
// function catchMistake(str){
// 	try {
// 	for(let i = 0; i <= str.length; i++){
// 		if (i != 'ф') {
//     		throw new Error("Буква Ф отсутствует");
//   		}
// 	}
// 	} catch (err) {
// 	  console.log("Извините, в данных ошибка" );
// 	  console.log(err.stack);
// 	} finally {
// 	console.log('Продолжаем работать без буквы Ф');
// }
// }
// catchMistake('это строка без буквы в условии');


// //3 - Напишите функцию, которая определяет, является ли строка палиндромом.
// function getRes(str){
// 	let LowerStr = str.toLowerCase();
// 	let newStr = LowerStr.split('').reverse().join('');
// 	console.log(newStr);
// if(LowerStr == newStr){
// 	return true;
// } else {
// 	return false;
// }
// }
// console.log(getRes('Шабаш'));
// console.log(getRes('Лось'));


// 4 - Напишите функцию, которая принимает строку и возвращает символ, который встречается в ней
//  чаще всего. Если таких символов несколько, функция должна возвращать строку из этих символов.
// function charCheck(Str){
// 	let str = Str.toLowerCase();
// 	let arr = "";
// for(let i = 0; i < str.length; i++) {
//    if (str.split(str[i]).length-1 > 1) {
//     arr = arr + str[i];
//    }  
//   }
//   return arr;
// } 
// console.log(charCheck("Понедельник в буквы п"));


// 5-Напишите функцию, которая получает в аргументы три строки – str, search, replace. Функция ищет 
// ВСЕ вхождения search в str, заменяет каждую подстроку search на подстроку replace и возвращает результат.
// function getResultAllEntries(str, search, replace) {
// 	let arr = str.split(" ");
// for(let i = 0; i < arr.length; i++){
// 	if(arr[i] == search){
// 		arr[i] = replace;
// 	}
// }
// return arr.join(" ");
// }
// console.log(getResultAllEntries("Я - современный браузер!", "современный", "устаревший"));

// 6 - Напишите функцию, которая замяняет первую букву каждого слова в строке на такую же большую.
// function getBigFirstLetter(str){
// 	let arr = str.split(" ");
// 	for(let i = 0; i < arr.length; i++){
// 		if(arr[i].charCodeAt(0) > 1071){
// 			arr[i] = arr[i].replace(arr[i][0], arr[i][0].toUpperCase());
// 		};
// 	}
// 	return arr.join(" ");
// }
// console.log(getBigFirstLetter("Бешеный ёж напал на жителя Лепеля"));

// 7 - Напишите функцию, которая заменяет все повторяющиеся символы в строке на звёздочки. Например, 
// строка "я учусь программированию" должна преобразоваться в "я уч*сь прог*ам*и**в*н*ю".
// function charCheck(Str){
// 	let str = Str.toLowerCase();
// 	let arr = "";
// for(let i = 0; i < str.length; i++) {
//    if (arr.includes(str[i])) {
// 		arr += "*";
//    }  else {
//    		arr += str[i];
//    }
//   }
//   return arr;
// } 
// console.log(charCheck("Я учусь программированию"));

// // 8-Напишите функцию, которая возвращает текущий день недели на русском языке.
// function getDay(){
// 	let today = new Date();
// 	let days = ["Воскресение", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", 
// 	            "Суббота"];
// 	return days[today.getDay()]; 
// }
// console.log(getDay());

// 9 - Напишите функцию, которая принимает у пользователя дату в формате "ДД-ММ-ГГГГ" и, 
// используя функцию из задачи 8, выдаёт в консоль день недели для этой даты.
// function getDate(date){
// 	let today = new Date(date.replace(/-/g, " ").split(" ").reverse());
// 	let days = ["Воскресение", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", 
// 	            "Суббота"];
// 	return days[today.getDay()]; 
// }
// console.log(getDate("06-06-2019"));

// 10 - Примите у пользователя день его рождения в формате "ДД-ММ-ГГГГ". Напишите функцию, 
// которая выводит в консоль количество дней, оставшихся до его дня рождения. Напишите функцию, 
// которая возвращает дату, в которую пользователь отметит ближайший 1000-дневный юбилей (например, 11000 дней).
function getHappyDay(date){
	let dateArr = date.replace(/-/g, " ").split(" ").reverse();

	let nowYear = new Date().getFullYear();
	let nowYearArr = [nowYear];
	let newdateArr = date.replace(dateArr[0], nowYearArr).replace(/-/g, " ").split(" ").reverse();
	let birthday = new Date(newdateArr);

	let today = new Date();

	birthday.setFullYear(today.getFullYear());
	if (today > birthday) {
  		birthday.setFullYear(birthday.getFullYear() + 1);
	}
	let db =  Math.floor((birthday - today) / (1000*60*60*24));  /*подсчет дней до др*/

	let oday = new Date(dateArr);
let day = Math.round((today.getTime() - oday.getTime()) / (1000*60*60*24));/*подсчет дней до тысячного юбилея*/

let sumDay=0;
let i = 0; 
do{
	i += 1000;
}while(i < day);
sumDay = i - day;

 return "Дней до ДР осталось - " + db + "." + " Дней до тысячного юбилея осталось - " + sumDay;
}
console.log(getHappyDay("10-05-1988"));

//11 - Напишите функцию, которая принимает число, проверяет, является ли оно квадратом целого числа. Если это так,
//  функция возвращает квадратный корень исходного числа; в ином случае генерирует ошибку. Используя задачу 2 из
//  рактики, создайте массив целых чисел. Вызовите написанную функцию для каждого элемента, отлавливая ошибки и 
//  ыводя в консоль сообщения и о них, и об успешных результатах. Массив должен быть пройден до конца, несмотря 
//  на ошибки!
function getSquareNum(num) {
  let sqrtNum = Math.sqrt(num);

  if ((sqrtNum ^ 0) === sqrtNum) {
    return "Целое число";
  }
  throw new Error('Это число не является квадратом целого числа!');
  return sqrtNum;
}

function getRandomArray(length, min, max) {
  let arr = [];
  for (let i = min; i < length; i++)
    arr[i] = Math.floor((Math.random() * max + 1));
  return arr;
}

function getCheckArr (arr){
  for(let i = 0; i < arr.length; i++){
      try {
      console.log(getSquareNum(arr[i]));
    } catch (e) {
      console.log(e.message);
    }
  }
}
getCheckArr(getRandomArray(20, 0, 50));
