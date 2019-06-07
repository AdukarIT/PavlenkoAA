// //1 -  Дан элемент #elem. Добавьте ему класс "www".
// let list = document.getElementById('elem');
// list.classList.add('www');
// console.log(list);

// // 2 - Дан элемент #elem. Проверьте наличие у него класса "www", если есть - удалите класс
// let cl = document.getElementsByClassName('www');
// list.classList.remove('www');
// console.log(cl);

// 3 - Напишите функцию поиска recursiveSearchTags, которая принимает на вход document и имя тега, 
// а возвращает массив из всех элементов соответствующих этому тегу. Поиск идет в теге body
// function recursiveSearchTags(document, tagName){
// 	let mas = document.body.getElementsByTagName(tagName);
// 	return mas = [].slice.call(mas);
// }
// console.log(recursiveSearchTags(document, 'div'));

// 4 - Дан ul. Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый элемент стоял в своем li. 
// Сделайте так, чтобы четные позиции имели красный фон.
// let arr = ["Атлант", "расправил", "плечи"];
// let list = document.querySelector('ul');
// console.log(list);
// for(let i = 0; i < arr.length; i++){
// let elementLi = document.createElement('li');
// list.appendChild(elementLi);
// elementLi.textContent = arr[i];
// if(i%2==0 || i==0){
// elementLi.style.backgroundColor = 'red';
// }
// }

// 5 - Дан элемент #elem. Найдите его соседа сверху и добавьте ему в конец текст '!'
//  let list = document.getElementById('elem').previousElementSibling;
// list.innerHTML = '!';
//  console.log(list);

// 6 - Реализуйте функцию wrapInParagraph, которая находит текст (дочерние текстовые ноды)
//  внутри элемента div и оборачивает текст в параграф
function wrapInParagraph() {
  let arrDiv = document.querySelectorAll('div');
  for (var i = 0; i < arrDiv.length; i++) {
    let tempDiv = arrDiv[i];
    for (var j = 0; j < tempDiv.childNodes.length; j++) {
    	console.log(tempDiv.childNodes[i]);
      if (tempDiv.childNodes[j].nodeType === 3) {
        let tempText = tempDiv.replaceChild(document.createElement('p'), tempDiv.childNodes[j]);
        tempDiv.childNodes[j].appendChild(tempText);
      }
    }
  }
}

wrapInParagraph();
