// Написать валидацию для формы заказа товара, содержащей следующие поля:
// Фамилия и имя (не менее 3 символов, обязательное поле)
// Номер телефона после кода страны (только цифры, обязательное поле)
// E-mail (корректный email, обязательное поле)
// Способ доставки (обязательное поле):
// Самовывоз со склада
// Курьером по Минску
// Почтой
// Комментарий к заказу
// Чекбокс "Я прочитал и согласен с условиями доставки" (обязательное поле)
// Кнопка "Подтвердить заказ"
// $('#commentForm').validate({
// 	rules: {
//     name: {
//       minlength: 3
//     },
//     phone: {
//       digits: true
//     },
//     email: {
//       email: true
//     },
//     delivery: {
//       required: true
//     }
//   },
//   messages: {
//     name: {
//       required: "Введите имя, под которым вы зарегистрированы"
//     },
//     phone: {
//       required: "Введите номер телефона после кода страны",
//       digits: "Вводите только цифры"
//     },
//     email: {
//       required: "Введите ваш email",
//       email: "Введите в формате name@name.com"
//     },
//     delivery: {
//       required: "Выберите способ доставки"
//     },
//     agree: {
//       required: "Подтвердите свое согласие"
//     }
//   }
// });

// домашняя работа

// красивая дата
$( "#datepicker" ).datepicker();

// добавляем selectable
$( ".ui-widget>tbody" ).selectable({filter: 'tr'});

// диалоговое окно для удаления строки
$( function() {
  $( "#dialog-confirm" ).dialog({
    autoOpen: false
  });
  $( "#delete-comment" ).button().on( "click", function() {
  $( "#dialog-confirm" ).dialog( "open" );
});
  $( "#dialog-confirm" ).dialog({
    resizable: false,
    height: "auto",
    width: 400,
    modal: true,
    buttons: {
      "Delete all items": function() {
        $( this ).dialog( "close" );
        $('#users').find(".ui-selected", this).remove();
      },
      Cancel: function() {
        $( this ).dialog( "close" );
      }
    }
  });
});

$('#new_comment').validate({
  rules: {
    name: {
      minlength: 3
    },
    tel: {
      digits: true
    },
    comment:{
      minlength: 6
    }
  },
  messages: {
    name: {
      required: "Введите ваше имя"
    },
    tel: {
      required: "Введите номер телефона после кода страны",
      digits: "Вводите только цифры"
    },
    datepicker: {
      required: "Введите ваш email"
    },
    comment: {
      required: "Введите тип обращения"
    }
  }
});

function addUser() {
  $('#new_comment').submit();
    $( "#users tbody" ).append( "<tr>" +
    "<td>" + $( "#name" ).val() + "</td>" +
    "<td>" + $( "#tel" ).val() + "</td>" +
    "<td>" + $( "#datepicker" ).val() + "</td>" +
    "<td>" + $( "#comment" ).val() + "</td>" +
    "</tr>" );
    dialog.dialog( "close" );
}


let dialog = $( "#form_comment" ).dialog({
      autoOpen: false,
      height: 425,
      width: 350,
      modal: true,
      buttons: {
        "Сохранить": addUser,
        "Отмена": function() {
          dialog.dialog( "close" );
        }
      },
      close: function() {
        form[ 0 ].reset();
      }
    });

let form = dialog.find( "form" ).on( "submit", function( event ) {
  event.preventDefault();
  addUser();
});

$( "#add-comment" ).button().on( "click", function() {
  dialog.dialog( "open" );
});
