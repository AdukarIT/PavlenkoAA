// Используя встроенную функцию Math.random(), напишите собственную функцию getRandomArray(len), 
// которая возвращает массив случайных чисел длиной len.
function getRandomArray(len) {
	let randomNum = [];
	for (let i = 0; i < len; i++) {
		randomNum[i] = Math.random();
	}
	return randomNum;
}
let randomArr = getRandomArray(6);
let randomArrSecond = getRandomArray(6);
console.log(randomArr);
console.log(randomArrSecond);

// Выведите в консоль элементы массива, которые больше среднего арифметического всех элементов.
function getBigNum(arr){
	let sum = 0;
	for(let i = 0; i < arr.length; i++){
		sum += arr[i];
	}
	let aver = sum / arr.length;
	for(let j = 0; j < arr.length; j++){
		if(arr[j] > aver){
			console.log(arr[j]);
		}
	}
}
getBigNum(randomArr);

// Найдите два наименьших элемента массива.
function getLittleNum(arr){
	let LittleNum = 0;
	let minValue = arr[LittleNum];
	for(let i = LittleNum; i < arr.length; i++){
		if(arr[i] < minValue){
			minValue = arr[i];
			let swap = arr[LittleNum];
			arr[LittleNum] = minValue;
			arr[i] = swap;
		}
	}

	LittleNum = 1;
	minValue = arr[LittleNum];
	for(let i = LittleNum; i < arr.length; i++){
		if(arr[i] < minValue){
			minValue = arr[i];
			let swap = arr[LittleNum];
			arr[LittleNum] = minValue;
			arr[i] = swap;
		}
	}

	console.log(arr[0] + ' ' + arr[1]);
}
getLittleNum(randomArr);

// Удалите из массива все элементы, меньшие 0.3. Сдвиньте все оставшиеся элементы вперёд, 
// а на освободившиеся места вставьте нули.
function deleteNum(arr){
	for(let i = 0; i < arr.length; i++){
		if(arr[i] < 0.3){
			arr.splice(i, 1);
			arr.unshift(0);
		}
	}
	console.log(arr);
}
deleteNum(randomArr);

// Попарно сложите элементы двух массивов равной длины: первый массива 1 с последним массива 2, 
// второй массива 1 с предпоследним массива 2 и так далее. Верните массив с результатами сложения.
function getSumArr(arr1, arr2) {
	for(let i = 0; i < arr1.length; i++){
		arr1[i];
		arr2[i];
	}
	arr2.reverse();
	let sumArr = [];
	for(let i = 0; i < arr1.length; i++){
		sumArr[i] = arr1[i] + arr2[i];
	}
	return sumArr;
}
console.log(getSumArr(randomArr, randomArrSecond));

//Отсортируйте массив методом пузырька.
// var array = new Array(8, 4, 2, 3, 6);

function gerSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  for(let i = 0; i < arr.length; i++)
  	{
		arr[i];
	}
	return arr;
}
console.log(gerSort(randomArr));