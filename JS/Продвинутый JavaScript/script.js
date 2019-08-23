"use strict";

// Напишите функцию counterFactory(start, step), которая при вызове возвращает
//  другую функцию – счётчик tictoc(). start – стартовое значение счётчика,
//   step – его шаг. При каждом вызове tictoc увеличивает значение счётчика на step.
// function counterFactory(start, step){
//   function tictoc(){
//     return start += step;
//   }
//   return tictoc;
// }
// let res = counterFactory(0, 2);
// for(let i=0;i<3;i++){
//   console.log(res());
// }

// Напишите функцию take(tictoc, x), которая вызывает функцию tictoc заданное
//  число (x) раз и возвращает массив с результатами вызовов.
// let tictoc = function(start = 0, step = 2){
//   return function(){
//     return start += step;
//   }  
// }
// function take(tictoc, x){
//   let arr = [];
//   for(let i = 0; i < x; i++){
//     arr.push(tictoc());
//   }
//   return arr;
// }
// console.log(take(tictoc(), 3));

// Дан код:
// let obj = { greeting: "Привет" };
// function func(surname, name) {
// alert(this.greeting + ', ' + surname + ' ' + name);
// }
// func();  // тут должно вывести 'привет, Иванов Иван'
// Добавьте в последнюю строчку метод call() так, чтобы на экран вывелось
//  'Привет, Иванов Иван'. Слово 'привет' возьмите из свойства объекта obj,
//   а 'Иванов' и 'Иван' задайте как параметры функциями.
// let obj = { 
//   greeting: "Привет" 
//   };
// function func(surname, name) {
//   console.log(this.greeting + ', ' + surname + ' ' + name);
// }
// func.call(obj, 'pavlenko', 'sashsa');

// let obj = { 
//   greeting: "Привет" 
//   };
// let arr = ['pavlenko', 'sashsa'];
// function func(surname, name) {
//   console.log(this.greeting + ', ' + surname + ' ' + name);
// }
// func.apply(obj, arr);

// Домашка
// Напишите функцию, которая принимает в качестве параметра номер символа в таблице
//  Unicode. Подсчитайте количество таких символов во всех элементах массива, как в 
//  задаче 3 из первой части практики.
// let arr = ['которая', 'принимает', 'качестве', 'параметра', 'номер', 'символа'];
// function getSum(x){
//   let count = 0;
//   arr.forEach(function(elem){
//     let sim = String.fromCodePoint(x);
//     for(let i = 0; i < elem.length; i++){
//       if(elem[i] == sim){
//         count ++;
//       }
//     }
//   });
//   return count;
// }
// console.log(getSum(1072));
// // Напишите функцию, которая будет возвращать частичную функцию от функции из задачи 1, 
// // фиксируя искомый символ. Например:
// let countOfD = getSum(100);
// console.log(countOfD(["dad", "rod", "doctor"]));
// function getNewSum(x){
//   let count = 0;
//   return function(arr){
//     arr.forEach(function(elem){
//       let sim = String.fromCodePoint(x);
//       for(let i = 0; i < elem.length; i++){
//         if(elem[i] == sim){
//           count ++;
//         }
//       }
//     });
//     return count;
//   }
// }
// let countOfD = getNewSum(100);
// console.log(countOfD(["dad", "rod", "doctor"]));

// let data = [
//     {
//         "city": "New York", 
//         "growth_from_2000_to_2013": "4.8%", 
//         "latitude": 40.7127837, 
//         "longitude": -74.0059413, 
//         "population": "8405837", 
//         "rank": "1", 
//         "state": "New York"
//     }, 
//     {
//         "city": "Los Angeles", 
//         "growth_from_2000_to_2013": "4.8%", 
//         "latitude": 34.0522342, 
//         "longitude": -118.2436849, 
//         "population": "3884307", 
//         "rank": "2", 
//         "state": "California"
//     }, 
//     {
//         "city": "Chicago", 
//         "growth_from_2000_to_2013": "-6.1%", 
//         "latitude": 41.8781136, 
//         "longitude": -87.6297982, 
//         "population": "2718782", 
//         "rank": "3", 
//         "state": "Illinois"
//     }, 
//     {
//         "city": "Houston", 
//         "growth_from_2000_to_2013": "11.0%", 
//         "latitude": 29.7604267, 
//         "longitude": -95.3698028, 
//         "population": "2195914", 
//         "rank": "4", 
//         "state": "Texas"
//     }, 
//     {
//         "city": "Philadelphia", 
//         "growth_from_2000_to_2013": "2.6%", 
//         "latitude": 39.9525839, 
//         "longitude": -75.1652215, 
//         "population": "1553165", 
//         "rank": "5", 
//         "state": "Pennsylvania"
//     }, 
//     {
//         "city": "Phoenix", 
//         "growth_from_2000_to_2013": "14.0%", 
//         "latitude": 33.4483771, 
//         "longitude": -112.0740373, 
//         "population": "1513367", 
//         "rank": "6", 
//         "state": "Arizona"
//     }, 
//     {
//         "city": "San Antonio", 
//         "growth_from_2000_to_2013": "21.0%", 
//         "latitude": 29.4241219, 
//         "longitude": -98.49362819999999, 
//         "population": "1409019", 
//         "rank": "7", 
//         "state": "Texas"
//     }, 
//     {
//         "city": "San Diego", 
//         "growth_from_2000_to_2013": "10.5%", 
//         "latitude": 32.715738, 
//         "longitude": -117.1610838, 
//         "population": "1355896", 
//         "rank": "8", 
//         "state": "California"
//     },
//     {
//         "city": "Boston", 
//         "growth_from_2000_to_2013": "9.4%", 
//         "latitude": 42.3600825, 
//         "longitude": -71.0588801, 
//         "population": "645966", 
//         "rank": "24", 
//         "state": "Massachusetts"
//     }, 
//     {
//         "city": "Nashville-Davidson", 
//         "growth_from_2000_to_2013": "16.2%", 
//         "latitude": 36.1626638, 
//         "longitude": -86.7816016, 
//         "population": "634464", 
//         "rank": "25", 
//         "state": "Tennessee"
//     }, 
//     {
//         "city": "Baltimore", 
//         "growth_from_2000_to_2013": "-4.0%", 
//         "latitude": 39.2903848, 
//         "longitude": -76.6121893, 
//         "population": "622104", 
//         "rank": "26", 
//         "state": "Maryland"
//     }];
// Отфильтруйте массив городов так, чтобы в нём остались только города 
// из штата Калифорния, которые с 2000 по 2013 выросли в населении.
// function getCity(nameState){
//   let city = data.filter(function(el){
//     if(el.state == nameState){
//       if(parseFloat(el.growth_from_2000_to_2013) > 0){
//         return true;
//       }
//     }
//   });
//   return city;
// }
// console.log(getCity("California"));

// Подсчитайте, сколько миллионов населения живёт во всех
//  городах на широте от 25 до 30 градусов.
// function getCity(min, max){
//   let count = 0;
//   let city = data.filter(function(el){
//     if(el.latitude >= min && el.latitude <= max){
//         count += parseFloat(el.population);
//     }
//   });
//   return count;
// }
// console.log(getCity(24, 30));

// Создайте массив только из тех городов, которые начинаются на букву D, 
// при этом отсортируйте элементы этого массива по названию города.
// function getCity(w){
//   let newCity = data.filter(function(el){
//     if(el.city[0] == w){
//         return true;
//     }
//   });
//   return newCity.sort(function(a, b) {
//      if (a.city > b.city) {
//        return 1;
//      } else {
//        return -1;
//      }
//    });           
// }
// console.log(getCity("B"));

// Преобразуйте представленный массив "Города" в объект "Штаты":
// для каждого штата – отдельное свойство объекта (ключ = название штата);
// значение каждого свойства – массив городов;
// каждый элемент массива – название города, население и место в общем рейтинге (rank).
// function getObj(){
//   let obj = {};
//   for(let i = 0; i<data.length; i++){
//     obj[data[i].state] = [];
//   }
//      for (let key in obj) {
//      for (let j = 0; j < data.length; j++) {
//        if (key == data[j].state) {
//         obj[data[j].state].push({
//         city: data[j].city,
//         population: data[j].population,
//         rank: data[j].rank});
//          }
//        }
//      }
//   return obj;
// }
// console.log(getObj());