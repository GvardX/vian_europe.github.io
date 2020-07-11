$(document).ready(function(){
    $('.collapsible').collapsible({
      accordion: false
  });
  $(function() {
    $(".form__input-tel").mask("+7 (000) 000-00-00", {
      placeholder: "Номер телефона",
      clearIfNotMatch: true
    });
  });
  $('.collapsible-header').on('click', function(e) {
    let isActive = $(this).find('.services__close').hasClass('close-active')
    console.log(isActive)
    if(isActive) {
       $(this).find('.services__close').removeClass('close-active')
      console.log(1)
    } else {
      $(this).find('.services__close').addClass('close-active')
      console.log(2)
    }
  })
  $('.form__upload').change(function() {
    if ($(this).val() != '') $(this).prev().text('Загружено файлов: ' + $(this)[0].files.length);
    else $(this).prev().text('Добавить файлы');
});

function shineLinks(id){
  try{
      let el = document.getElementById(id).getElementsByTagName('a');
      let url = document.location.href;
      for (var i=0; i<el.length; i++){
        if (url == el[i].href){
              el[i].className += ' act';
          } else {
          };
      };
  }catch(e){}
};

shineLinks('navbar-act')
$('.dropdown-trigger').dropdown({
  coverTrigger: false,
  hover: true,
  inDuration: 300,
  outDuration: 300,
});

$('#form-main').validate({
    rules: {
      user_name: {
        required: true
      },
      user_phone: {
        required: true
      },
      user_text: {
        required: true
      },
      user_email: {
        required: true,
        email: true
      }
    },
    messages: {
      user_email: {
        required: 'Email обзателен для заполнения',
        email: 'Введите корректный email'
      },
      user_name: {
        required: 'Имя обязательно для заполнения'
      },
      user_text: {
        required: 'Задайте вопрос'
      },
      user_phone: {
        required: 'Телефон обязателен для заполнения'
      }
    }
});
});


