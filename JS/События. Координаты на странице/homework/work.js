// 1- Дан инпут. Дана кнопка. По нажатию на кнопку клонируйте этот инпут.
btn.onclick = function(){
let parent = document.getElementById('for_clone');
let elem = document.querySelector('.btn');
let clone = elem.cloneNode(true);
parent.appendChild(clone);
}

// 2 - Добавьте на страницу таблицу в стандартном оформлении. При клике на таблице
//  добавьте ей класс bordered, при втором клике удалите класс bordered и добавьте
//  класс striped, при третьем клике удалите класс striped и добавьте класс highlight.

 // добавление бордер
let count=0;
 task_2.onclick = function(){
 	count++;
 	let bordered = document.querySelector('table');
 	let striped = document.getElementsByTagName('tr');
 	if(count > 3){
 	 	count=1;
 	 }
 	if(count == 1){
 		bordered.classList.remove('highlight');
 		bordered.classList.add('bordered');
 	} else if (count == 2){
		bordered.classList.remove('bordered');
		for(let i = 0; i < striped.length; i++){
			striped[i].classList.add('striped');
		}
 	} else if (count == 3){
 			for(let i = 0; i < striped.length; i++){
			striped[i].classList.remove('striped');
		}
		bordered.classList.add('highlight');

 	} 
 }
// 3 - Модифицируйте задачу 2. Добавьте три radiobutton. При выборе первого включается класс bordered, 
// при выборе второго отключается bordered и включается striped, при выборе третьего включается 
// highlight и отключается striped.
	 	let bordered = document.querySelector('table');
 		let striped = document.getElementsByTagName('tr');
function fun1() {
 		bordered.classList.remove('highlight');
 		bordered.classList.add('bordered');
}
function fun2() {
 		bordered.classList.remove('bordered');
 		bordered.classList.remove('highlight');
 		for(let i = 0; i < striped.length; i++){
			striped[i].classList.add('striped');
		}
}
function fun3(){
 		 for(let i = 0; i < striped.length; i++){
			striped[i].classList.remove('striped');
		}
		bordered.classList.add('highlight');
		bordered.classList.remove('bordered');
}

// 4 - Создайте кнопку. При нажатии на кнопку с помощью элемента this выведите содержащийся в тегах кнопки текст. 
// Вывод осуществлять с помощью alert. Создайте кнопку отключающую события на предыдущей кнопке.
btn2.onclick = function(){
	alert(this.value);
	}
btn3.onclick = function(){
	let o = document.getElementById('btn2');
	// o.disabled = true; /*этот вариант тоже работает, только визуально очевиднее*/
	o.onclick = null;
}

// 5 - Создайте элементы div, p, button, a. Используя target по клику выводите информацию о типе элемента по которому произошел клик.
let task_5 = document.querySelectorAll('.task_5');
for(let i = 0; i < task_5.length; i++) {
  task_5[i].onclick = function(event) {
  console.log(event.target.tagName);
}
}

// 6 - Добавьте в html код изображение. Добавьте скрипт, который будет выполнять следующие действия: при наведении мыши на картинку, 
// изображение будет заменяться другим изображением. При выходе мыши за пределы изображения, будет восстанавливаться первоначальное изображение.
let getHoverScript = function(imgTag){
	let imageTag = document.getElementById(imgTag);
	imageTag.onmouseover = function(event){
	let target = event.target;
	target.src = 'img/1_lcNltURmAyYaIpiF71EU8w.png';
	}
	imageTag.onmouseout = function(event){
	let target = event.target;
	target.src = 'img/9.png';
	}
}
getHoverScript('task_6_img');


// 7 - Используя событие onclick реализовать аналог fancybox. При клике – картинка увеличивается в размерах и всплывает над контентом.
 // Остальной контент затемняется. Для «всплывания» изображения используйте position:absolute.
 function getBigImg(){
 	let for_smallImg = document.querySelectorAll('#for_smallImg');

for(let i = 0; i < for_smallImg.length; i++) {
  for_smallImg[i].onclick = function(event) {

	 	let task_7_img = document.getElementById(event.target.id); /*copy ID*/

 		let copySrc = task_7_img.src;
 		console.log(copySrc);
 		let imgBig_null = document.getElementById('task_7_imgBig');
 		imgBig_null.src = copySrc;
 		imgBig_null.classList.remove('imgBig_null');
console.log(imgBig_null);
console.log(event.target.tagName);
}

 }
}
/*выход из большой картинки с помощь esc*/
 document.addEventListener('keydown', function (evt) {
 	let imgBig_null = document.getElementById('task_7_imgBig');
  if (evt.keyCode === 27) {
    imgBig_null.classList.add('imgBig_null');
  }
});