// Сделайте так, чтобы по нажатию на кнопку выводился alert
button.onclick = function(){
	alert('Пошла жара!');
}

// // Создайте кнопку с произвольным текстом, сделайте так, чтобы по нажатию текст изменялся на button
// замена текста value делается с помощью this
button1.onclick = function(){
	this.value="button";
}

// Создайте форму с полем для ввода и двумя кнопками, сделайте так, чтобы по нажатию на кнопку disable, 
// поле становилось неактивным, в случае с enable - наоборот
enable.onclick = function(){
	document.getElementsByName('comment')[0].focus();
}
disable.onclick = function(){
	document.getElementsByName('comment')[0].blur();
}

// Нужно создать документ с полем ввода, объектом произвольной формы и цвета. Сделайте так, чтобы в поле ввода 
// можно было вводить только числовые значения, а объект можно было двигать и узнавать его координаты на странице

let free = document.getElementById('free');
console.log(free);
free.onmousedown = function(e){
  free.style.position = 'absolute';
  moveAt(e);
	document.body.appendChild(free);
	free.style.zIndex = 1000; 
	  function moveAt(e) {
    free.style.left = e.pageX - free.offsetWidth / 2 + 'px';
    free.style.top = e.pageY - free.offsetHeight / 2 + 'px';
  }
  document.onmousemove = function(e) {
    moveAt(e);
  }
  free.onmouseup = function() {
    document.onmousemove = null;
    free.onmouseup = null;
  }
let object = document.getElementById('free');
let coords = object.getBoundingClientRect();
console.log(coords.top + ":" + coords.left);
}

// Выведите координаты мыши относительно блока в момент движения курсора мыши внутри блока. Координаты выводить под блоком.
document.querySelector('#box_coord').onmousemove = function(e){
  document.querySelector('#offx').innerHTML = e.offsetX;
  document.querySelector('#offy').innerHTML = e.offsetY;

}