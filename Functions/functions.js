// // Напишите функцию, которая получает три числа и возвращает их сумму.
// function getNumbers(a, b, c) {
//     return a + b + c;
// }
// console.log(getNumbers(2, 2, 2));

// // Напишите функцию, которая подсчитывает сумму чисел от 1 до заданного X.
// function sumNumbers(x) {
//  return x * (x + 1)/2;
// }
// console.log(sumNumbers(10));

// // Напишите функцию, которая подсчитывает сумму цифр числа.
// function sumAllNubers(num) {
// 	let sum = 0;
// 	while(num > 0){
// let x = num % 10;
// sum += x;
// num = (num - x)/10;
// 	}
// 	return sum;
// }
// console.log(sumAllNubers(2222));

// // Напишите функцию, которая считает факториал числа.
// function factorial (x) {
// 	let a = 1;
// 	for (var i = 1; i <= x; i++) {
// 		a = a*i;
// 	}
// 	return a;
// }
// console.log(factorial(6));


// //Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.
// function getSmallNumber(a, b, c){
// 	if (a < b && a < c) {
// 		console.log(a);
// 	} else if (b < a && b < c) {
// 		console.log(b);
// 	} else {
// 		console.log(c);
// 	}
// 	return;
// }
// getSmallNumber(2, 4, 6);


//Создайте функцию, которая получает в качестве аргументов значения суток, часов и минут, а возвращает
// соответствующее им количество секунд.
// function getSeconds(a, b, c) {
// 	let second = c * 60 + b * 3600 + a * 86400;
// 	return second;
// }
// console.log(getSeconds(3, 3, 3));

// //Напишите рекурсивную функцию для подсчёта факториала числа.
// function factorial(x){
// 	if (x == 1) {
// 		return 1;
// 	} else {
// 		return x * factorial(x - 1);
// 	}
// }
// console.log(factorial(6));

//Напишите рекурсивную функцию, которая разворачивает введённое число задом наперёд.
//  Например, если на вход функция получает 1234, вернуть она должна 4321.
// function getReverse(num) {
// 	if (num < 10) {
// 		return num;
// 	}
// 	let x = num % 10;  
// 	num = (num -x) / 10;
// 	for (let i = num; i >= 1; i /= 10) {
// 		x *= 10;
// 	}
// 	return x + getReverse(num);
// }
// console.log(getReverse(123456));
