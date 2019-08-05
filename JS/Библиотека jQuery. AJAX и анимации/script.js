// Практика

$.get( "https://jsonplaceholder.typicode.com/users", function(data) {
$.each(data, function(key) {
  $('#db').append('<option value="' + key + '">' + data[key].name + '</option>');
});

  $("#btn").click(function(e) {
    let opSel = $('#db option:selected');
      $("#username").val(data[$(opSel).val()].username);
      $("#email").val(data[$(opSel).val()].email);
      $("#street").val(data[$(opSel).val()].address.street);
      $("#suite").val(data[$(opSel).val()].address.suite);
      $("#city").val(data[$(opSel).val()].address.city);
      $("#zipcode").val(data[$(opSel).val()].address.zipcode);
      $("#lat").val(data[$(opSel).val()].address.geo.lat);
      $("#lng").val(data[$(opSel).val()].address.geo.lng);
});

});

// Домашнее задание
$.get( "https://jsonplaceholder.typicode.com/albums", function(data) {
  let newData = data;
  $.each(newData, function(key) {
    $('#dbhw').append('<option value="' + newData[key].id + '">' + newData[key].title + '</option>');
  });

  $("#btn_hw").click(function(e){
console.log($('#dbhw option:selected'));
    let opSel = $('#dbhw option:selected').val();
    $('#album').empty();
    $.get( "https://jsonplaceholder.typicode.com/photos", function(data){
       $.each(data, function(key) {
         if(data[key].albumId == opSel){
          $('#album').append('<img src="' + data[key].thumbnailUrl + '"/>');
        }
      });
    });
  });
});


