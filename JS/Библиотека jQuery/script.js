$('body').append("<form id='nameForm' action='#' ></form>");
let $newForm = $("#nameForm");
$newForm.append('<input type="text" name="name" id="name" placeholder="Ivan"/>');
$newForm.append('<span id="span_name"></span>');
$newForm.append('<input type="email" id="email" name="email" placeholder="name@name.com"/>');
$newForm.append('<span id="span_email"></span>');
$newForm.append('<input type="tel" name="tel" id="tel" placeholder="222-22-22"/>');
$newForm.append('<span id="span_tel"></span>');
$newForm.append('<textarea cols="21" rows="4" name="comment" placeholder="Ваш замечательный текст" id="comment"></textarea>');
$newForm.append('<span id="span_text"></span>');
$newForm.append('<input type="submit" value="Отправить">');

addEventListener('click', function () {
 let reName = /.{2,1000}/i;
 let reTel = /^\d[\d\(\)\ -]{4,14}\d$/;
 let reEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
 let reText = /.{10,1000}/i;

 let valName  = $('#name').val();
 let valTel = $('#tel').val();
 let valEmail = $('#email').val();
 let valText  = $('#comment').val();

 getGreenSpan(reName, valName, '#span_name');
 getGreenSpan(reTel, valTel, '#span_tel');
 getGreenSpan(reEmail, valEmail, '#span_email');
 getGreenSpan(reText, valText, '#span_text');
}, true);

$('#nameForm').submit(function(e) {
getTag($('#span_name'), 'Имя', e);
getTag($('#span_email'), 'Email', e);
getTag($('#span_tel'), 'Номер телефона',e);
getTag($('#span_text'), 'Комментарий',e);
});

function getTag(nameTag, alName, e){
  if(nameTag.css('background-color') != 'rgb(53, 197, 53)'){
    alert("Заполните поле " + alName + "!");
    return e.preventDefault(); 
  }
};

function getGreenSpan(reg, val, span){
  if(reg.test(val)){
     $(span).css('background-color', '#35c535');
 }
};