'use strict';
// Создайте регулярное выражение для поиска трёх точек.
// console.log("One. Two. T.".match(/[.]/g));

// Создайте regexp, который ищет все положительные числа, в том числе десятичные.
// '2, 11, 0, -6, 8, -1, 0.5'.split(/, /).forEach(function(element) {
//   if(element > 0)
//   console.log(element);

// });

// Создайте регулярку, которая ищет цвета в формате #eee, #eeeddd
// let arr = "#eee, #0006, #ffffff";
// console.log(arr.match(/#[a-f]{3,6}/gi));

// // Предложите строку, которая подойдет под выражение ^$
// let str = "#010101 ";
// // перед знаком $ стоит пробел как и в строке
// console.log(str.match(/^#\d+\ $/));

// Создайте HTML-форму регистрации с email и паролем. По клику
// провести валидацию пароля и email, где пароль должен содержать
// хотя бы одну цифру, один спецсимвол и одну букву, а так же быть
// длиннее 6 знаков. При прохождении валидации выводить приветственное
// сообщение, в противном случае - ошибку.
// let password = document.getElementById('password');
// password.addEventListener('change', function (evt) {
//   let pas = this.value
//   try{
//     if(pas.match(/^(?=.{6,})(?=.*\d)(?=.*[a-z])(?=.*[@#$%]).*$/)){
//       console.log('Задание выполнено!');
//     } else {
//     alert( user.name );}
//   } catch (e) {
//       throw new SyntaxError("В данных ошибка, попробуйте еще раз!" );
//     }
// });
// // 1 - Дана форма, напишите проверку: на правильность заполнения двух
// // текстовых полей: имя (id="name") и минут (id="minutes"). Используйте
// // проверку на оставление поля пустым ("") и правильного формата. заполнения
// // числового поля (isNaN)
// function placeOrder(){
// let name = document.getElementById('name');
// let minutes = document.getElementById('minutes');
//   if(name.value !== "" && minutes.value !== "" && !isNaN(minutes.value)){
//     console.log('Задание выполнено!');
//   } else {
//     console.log('Неверное значение!');
//   }
// }

// 2 - Создать страницу с текстовым полем и двумя кнопками. При нажатии одной из них
// происходит передача данных содержимого текстового поля по электронной почте
// (action="mailto:address@domen.domen"), при нажатии другой – происходит очистка текстового поля.

// let formSend = document.getElementById('formSend');
// formSend.addEventListener('click', function(e){
// 	formSend.setAttribute('action', "mailto:address@domen.domen");
// });

// function reset() {
//   document.getElementById("formSend").reset();
// };

// 3, 4 - Напишите универсальную функцию для прохождения по полям формы
// с возможностью проверки введенных данных, для тектовых полей -
// на текст, для имейла - на имейл и тд.
// function sendform(){
//   let elements = formCheck.getElementsByTagName('input')
//   let regEmail = /@/;
//   let regPassword = /^(?=.{4,})(?=.*\d)(?=.*[a-z])(?=.*[@#$%]).*$/;

//   for (let i = 0; i < elements.length; i++) {

//     // проверка всех элементов на заполненность
//     if (elements[i].value == "") {
//       console.log( "Пожалуйста заполните поле " + elements[i].name);
//         elements[i].focus();
//     }
//         // проверка на правильность пароля
//     if(elements[i].type == "password"){
//       if(regPassword.test(elements[i].value) == false){
//         alert(`Пароль должен содержать хотя бы одну цифру, один спецсимвол и одну букву,
//         а так же быть длиннее 6 знаков.`);
//         elements[i].focus();
//       }

//       }
//
// я понятия не имею как проверить на валидность и вывести сообщение)
//     return false;
// };


// 5 - Написать скрипт, которые заменяет слово «функция» в тексте на «функция», используя регулярные вырожения.
// let str = "В этой строке слово функция";
// document.getElementById('task5').setAttribute('value', str);
// document.getElementById('formTasck5').addEventListener('click', function (evt) {
// str = str.replace( /функция/g, "нефункция" );
//   document.getElementById('task5').setAttribute('value', str);
// });
// NB: не знаю в чем философия замены одного слова на аналогичное, поэтому для наглядности
// его немного изменил.

// 6 - С помощью test определите, что переданная строка является корректным
// временем вида '9.59 am', '12.30 pm'.
// function getAnswer() {
// let getData = document.getElementById('task6').value;
// if(getData.match(/^(([0,1][0-9])|(2[0-3]))[.][0-5][0-9]\s[am]|[pm]$/)){
//   document.getElementById('task6_answer').value = 'Верно';
// } else {
//   document.getElementById('task6_answer').value = 'Неверно';
// }
// return false;
// }

// 7 - Удалите одной регуляркой все повторяющиеся слова из строки, 
// например для 'dsf xxx xxx sd' должно вернуть 'dsf xxx sd'.
// let str = "dsf xxx xxx sd";
// console.log(str.replace(/((?:(?:\s|^)[a-zа-яё]+(?=\s))+?)\s?\1(?=\s|$)/gi,"$1"));


