'use strict';

let datePassport = {
	number: "07BC00000",
	name: "Anne",
	surename: "Specimen",
	birthday: "1973-07-12",
	barthplace: "Perpignan"
}
let jsonDatePassport = JSON.stringify(datePassport);
console.log(jsonDatePassport);



let linkObj = {
	pass: datePassport,
	name: "post name"
}
let linkDatePassport = JSON.stringify(linkObj);
let revlinkDatePassport = JSON.parse(linkDatePassport);

console.log(revlinkDatePassport);




let url = "https://api.instagram.com/v1/users/2093101329/media/recent/?access_token=2093101329.0e4abd3.d017a21b3e6e45408126e42cf0940d79";

let xhr = new XMLHttpRequest();

xhr.open('GET', url, true);

xhr.send();

xhr.addEventListener('readystatechange', function() {
if(xhr.readyState == 4 && xhr.status == 200){

	try {
	  let obj = JSON.parse(xhr.response);
	  obj.data.forEach(function(el){
	    let url = el.images.low_resolution.url;
	    
	    let img = document.createElement('img');
	    img.addEventListener('load', function(){
	      let anch = document.createElement('a');
	      anch.href = el.link;
	      anch.appendChild(this);
	      document.body.appendChild(anch);
	    });
	    img.src = url;
	  })
	} catch(e){}
} 
})