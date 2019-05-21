// let obj = {
// 	a: 1,
// 	b: 2,
// 	c: 3
// }
// console.log(obj['c']);
// console.log(obj.c);

// let city = {}
// city.name = 'Minsk';
// city.population = 2000;

// let cityV = {}
// cityV.name = 'Vitebsk';
// cityV.population = 300;

// let cityGr = {}
// cityGr.name = 'Grodno';
// cityGr.population = 310;

// let cityMog = {}
// cityMog.name = 'Mogilev';
// cityMog.population = 320;

// let cityGom = {}
// cityGom.name = 'Gomel';
// cityGom.population = 330;

// let cityB = {}
// cityB.name = 'Brest';
// cityB.population = 340;

// let cities = [city, cityV, cityGr, cityMog, cityGom, cityB];

// function getInfo(){
// 	return 'Город ' + this.name + ', население ' + this.population;
// }

// for (let i = 0; i < cities.length; i++) {
// 	cities[i].getInfo = getInfo;
// }

// function getMassive(cities) {
// 	for (let i = 0; i < cities.length; i++) {
// 		console.log(cities[i].getInfo());
// 	}
// }
// getMassive(cities);

// let Me = {
// 	name: 'Sasha',
// 	lastName: 'Pavlenko',
// 	hobbi: 'drink',
// 	getInfo: function(){
// 		console.log('My name is ' + this.name + this.lastName + '. ' + 'My like hobbi ' + this.hobbi);
// 	}
// }
// Me.getInfo();


// // Напишите функцию, которая получает в качестве аргументов объект и строку и проверяет, 
// // есть ли в этом объекте свойство с именем, равным этой строке.
// let someObj = {
// 	name: 'someName'
// }
// function checkName(obj, string){
// 	if(string in obj){
// 		return true;
// 	}
// 	else{
// 		return false;
// 	}		
// }
// console.log(checkName(someObj, 'name'));

// // Создайте объект для хранения своего любимого кулинарного рецепта. Он должен содержать название, 
// // ингредиенты и их необходимое количество (в виде вложенного объекта), а также количество порций (больше 1). 
// // Напишите функцию, которая получает "рецепт", подсчитывает, сколько каждого ингредиента нужно на одну порцию, 
// // и выводит информацию об этом в консоль.
// let myRecipe = {
// 	name: 'Драники',
// 	ingredients: {
// 		potato: 6,
// 		egg: 1,
// 		flour: 2
// 	},
// 	portions: 3
// }
// function getOnePortion(recipe){
// let OnePortions = {};
// 	for(let key in myRecipe.ingredients){
// 		OnePortions[key] = myRecipe.ingredients[key] / myRecipe.portions;
// 	}
// 	 console.log('На одну порцию блюда ' + myRecipe.name + ' необходимо ', OnePortions);
// }
// getOnePortion(myRecipe);

// // Создайте объект "Цилиндр" (свойства – радиус и высота). Добавьте в него метод, который считает объём цилиндра (используя this).
// let cylinder = {
// 	radius: 2,
// 	height: 5,
// 	getVolume: function(){
// 		return Math.PI*this.radius*this.height;
// 	}
// }
// console.log(cylinder.getVolume());

// Выберите пингвина из списка вымышленных пингвинов на Википедии и опишите его в виде объекта (не менее трёх полей; например, имя, 
// создатель и источник). Добавьте этому объекту свойство canFly. Добавьте два метода: sayHello, который выводит в консоль приветствие 
// и представление вашего пингвина, и fly, который в зависимости от значения свойства canFly (true или false) определяет, может 
// ли пингвин летать, и сообщает об этом в консоль.
let penguin = {
  name:'Opus',
  creator: 'Berkeley Breathed',
  source: 'Opus',
  canFly: false,
  sayHello: function() {
    return 'Hi! This is penguin ' + this.name + '.';
  },
  fly: function() {
    if (this.canFly == false){
      return 'It does not fly';
    } else {
      return 'He flies';
    }
  }
}
console.log(penguin.sayHello(), penguin.fly());