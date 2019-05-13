//1 - Создайте функцию, которая принимает три числа: два первых должны быть длиной
//  сторон катетов прямоугольного треугольника, а третье – длиной гипотенузы. 
//  Функция возвращает true, если такой прямоугольный треугольник возможен,
//   и false, если нет.
// function catet(a, b, c){
// 	// let a, b, c;
// 	if (c**2 == a**2 + b**2) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(catet(5, 12, 13));

//2 - Создайте функцию repeat(str, n), которая возвращает строку, 
// состоящую из n повторений строки str. По умолчанию n=2, str — пустая строка.
// function repeat(str, n){
// 	let res = "";
// 	for (let i = 0; i < n; i++){
// 		res += str;
// 	}
// 	return str;
// }
// console.log(repeat("a", 5));

// //3 - Создайте функцию, которая принимает два аргумента – количество
// //  учеников в классе и количество парт в кабинете. Функция возвращает
// //   строку вида «не хватает 2 парт» / «1 лишняя парта».
// function sumDesk(a, b) {
// 	let x = Math.ceil(a/2);
// 	if (x == b) {
// 		return "Парт столько, сколько нужно";
// 	} else if (x < b) {
// 		return "Парт лишних - " + (b - x);
// 	} else if (x > b) {
// 		return "Парт нехватает - " + (x - b);
// 	}
// } 
// console.log(sumDesk(40, 20));

// //4 - Создайте функцию, которая получает в качестве аргумента оценку 
// // по 10-балльной шкале. Для ошибочных аргументов (0, «B») функция 
// // возвращает текстовую ошибку, для верных – их текстовое описание: 
// function showGradingScale(x) {
// 	switch(x) {
// 		case 1:
// 		case 2:
// 			return 'Low';
// 			break;
// 		case 3:
// 		case 4:
// 			return 'Satisfactory';
// 			break;
// 		case 5:
// 		case 6:
// 			return 'Average';
// 			break;
// 		case 7:
// 		case 8:
// 			return 'Good';
// 			break;
// 		case 9:
// 		case 10:
// 			return 'High';
// 			break;
// 		default:
//     		return 'Incorrect value';
// 	}
// }
// showGradingScale(10);

// //5 - Используя цикл do..while, создайте функцию, которая принимает числа через prompt(), 
// // пока не будет введено число 0.
// function getNumber() {
// 	let x;
// 	do {
// 		x = +prompt('Input number');
// 	} while (x != 0);
// }
// getNumber();

// //6 - Перепишите функцию из задачи 5 так, чтобы она принимала числа, 
// // пока их сумма остаётся меньше 100, выводила эту сумму в консоль, 
// // а возвращала количество введённых чисел.
// function getSumNumber() {
// 	let x, sum = 0, i = 0;
// 	do {
// 		x = +prompt('Input number');
// 		sum += x;
// 		console.log(sum);
// 		i++;
// 	} while (sum < 100);
// 	return i;
// }
// getSumNumber();

// //7 - Создайте функцию, которая принимает число в качестве аргумента и проверяет, является ли это число простым.
// function checkSimpleNumber(x) {
// 	if (x == 2) {
// 		return 'It`s simple number';
// 	} else if (x % 2 == 0) {
// 		return 'It isn`t simple number';
// 	} else {
// 		return 'It`s simple number';
// 	}
// }
// console.log(checkSimpleNumber(4));

// //8 - Создайте функцию, которая принимает в качестве аргумента целое число, 
// // соответствующее порядковому номеру месяца. Если месяц с таким номером 
// // существует, функция возвращает имя сезона (лето, осень, зима, весна), 
// // к которому относится месяц. Если нет –сообщение об ошибке.
// function getSeason(x) {
// 	switch(x){
// 		case 12: case 1: case 2:
// 		return 'Winter';
// 		case 3: case 4: case 5:
// 		return 'Spring';
// 		case 6: case 7: case 8:
// 		return 'Summer';
// 		case 9: case 10: case 11:
// 		return 'Autumn';
// 		default:
// 		return 'Error';
// 	}
// }
// console.log(getSeason(13));

// //9 - Создайте функцию, которая выводит в консоль числа от 10 до 99, 
// // заканчивающиеся на 7 или делящиеся на 7 (в убывающем порядке).
// function showSeven() {
// 	for (let i = 99; i >= 10; i--) {
// 		if (i % 7 == 0 || i % 10 == 7) {
// 		console.log(i);
// 		}
// 	}
// }
// console.log(showSeven());


// //10 - Создайте функцию, которая для чисел от 2 до 20 выводит в консоль все их делители.
// //11 - Решите задачу 10 в общем виде: вместо 2 и 20 – аргументы x и y.
// function getDividers(a, b) {
// 	for (var i = a; i <= b; i++) {
// 			for (var j = a; j <= i; j++) {
// 				if (i % j == 0) {
// 				console.log(j);
// 				}
// 			}  
// 	}
// }
// getDividers(1, 10);


// // 12 - Создайте функцию с параметрами size (число) и unit (строка).
// //  В unit передаются единицы измерения информации («Кб», «Мб», «Гб»), 
// //  в size – количество таких единиц. Функция возвращает количество байт в size.
// function byte(size, unit) {
// 	if (unit == 'Кб') {
// 		size = size * 1024;
// 	} else if (unit == 'Мб') {
// 		size = size * 2 ** 20;
// 	} else if (unit == 'Гб') {
// 		size = size * 2 ** 30;
// 	} else {
// 		return 'Введены неверные данные';
// 	}
// 	return size;
// }
// console.log(byte(20, 'Тб'));

// //13 - Создайте функцию, которая ищет наибольший общий делитель двух чисел.
// function getBigDivider(a, b) {
// 	let i = 1;
// 	let x = 0;
// 	while (i <= a) {
// 		if(a % i == 0 && b % i == 0) {
// 			x = i;
// 		}
// 		i++;
// 	}
// 	console.log(x);
// }
// getBigDivider(40,12);

// 14 - Решите задачу 13 через рекурсию.
// function getBigDivider(a, b) {
// if (a == 0) {
// 	return b;
// } else {
// 	return getBigDivider(b%a, a);
// }
// }
// console.log(getBigDivider(12, 36));

// // 15 - Создайте функцию words(),  которая в зависимости от переданного 
// // в нее целого числа n, будет выводить слово «карандаш» в правильной 
// // форме («12 карандашей», но «22 карандаша»).
// function words(n) {
// 	if (n > 6 && n < 21 || n%10 == 0 || n == 0 || n%10 > 4 && n%10 <= 9) {
// 	return n + ' карандашей';
// } else if (n > 1 && n < 5 || n%10 < 5 && n%10 >1) {
// 	return n + ' карандаша';
// } else if (n == 1 || n%10 == 1) {
// 	return n + ' карандаш';
// }
// }
// console.log(words(22));

// // 16 - Создайте функцию, которая проверяет, можно ли представить число в виде
// //  суммы квадратов двух целых однозначных чисел.
// function getSum(n) {
//     for(let i = 1; i < n; i++ ){
//         for(let j = n; j >= i; j--){
//             if(i * i + j * j == n){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(getSum(1620));