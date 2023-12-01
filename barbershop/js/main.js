$(document).ready(function($) {
  $('.testimonials__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,

    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-left.png" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-right.png" alt=""></button>',

    responsive: [
      {
        breakpoint: 1130,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 870,
        settings: {
          slidesToShow: 1
        }
      },
    ]

  });

  $('#menuList .menu__item .menu__link').on('click', function() {
    // console.log('Працює');
    $('#menuList .menu__item').find('.active').removeClass('active');
    $(this).addClass('active');
  });

  // Бургер меню
  $('.menu__btn').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  });

  // POPUP

  $('body').on('click', '[data-popup]', popupShow);

  function popupShow(evt) {
    evt.preventDefault(); //Анулювання виконання функції
    let a = $($(this).data('popup')); // #newsletter
    a.fadeIn(600);
  }

  $('.popup-close').on('click', function () {
    $(this).closest('.popup-wrapper').fadeOut(400);
  });



  let userPhone = $('#user-phone');
  console.log(userPhone);
  $('#user-phone').mask("(999)-999-99-99"); //Маска під яку потрібно щоб підходив телефон

  $('#contact-form').submit(function(e) {
    e.preventDefault();

    let userPhone = $('#user-phone');
    let userEmail = $('#user-email');

    if(userPhone.val().length < 10) {
      userPhone.addClass('invalid');
      return false;
    } else {
      userPhone.removeClass('invalid');
    }

    if(userEmail.val().length < 7) {
      userEmail.addClass('invalid');
      return false;
    } else {
      userEmail.removeClass('invalid');
    }

    $('#thanks-contact h3').text(`Дякую ${userEmail.val()}`);
    $('#thanks-contact .content').text('Дякую за повідомлення');
    
    $('#contact-btn').attr('data-popup', '#thanks-contact');
    $('#contact-btn').click();
    
  });
  // =====
});