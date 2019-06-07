// console.log(document.getElementsByTagName('label'));
// console.log( document.querySelector('td'));

// let forms = document.getElementsByTagName('form');
// console.log(forms[1]);

// let search = document.body.childNodes[1];
// console.log(search);
// console.log(document.search.querySelector('input'));

// let info = document.getElementsByTagName('td');
// let infoNew = info[3];
// console.log(infoNew.childNodes[1]);



// let allINeed = document.querySelector('[name="search-person"]');
// console.log(allINeed.querySelector('[name="info[0]"]'));


let elems = document.querySelectorAll('[href^="http://"]');
for(let i = 0; i < elems.length; i++) {
    elems[i].style.color = 'red';
}

let li = document.querySelectorAll('li');
let a = li[0];
let b = li[1];
let c = a.cloneNode(true);
  a.parentNode.replaceChild(c, b);
