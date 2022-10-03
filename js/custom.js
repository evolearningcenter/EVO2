(function ($) {

  "use strict";

  // COLOR MODE
  $('.color-mode').click(function () {
    $('.color-mode-icon').toggleClass('active')
    $('body').toggleClass('dark-mode')
  })


  $('.owl-carousel').owlCarousel({
    items: 1,
    loop: true,
    margin: 10,
    nav: true
  });


  // SMOOTHSCROLL
  $(function () {
    $('.nav-link, .custom-btn-link').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 49
      }, 1000);
      event.preventDefault();
    });
  });


})(jQuery);
{
  const contact = document.querySelector('#contact'),
    register_btn = document.querySelector('.register__btn');
  let y = contact.getBoundingClientRect().y;
  window.addEventListener('scroll', (e) => {
    console.log(y, window.scrollY);
    if (y - contact.getBoundingClientRect().height < window.scrollY) {
      register_btn.classList.add('d-none');
    } else {
      register_btn.classList.remove('d-none');
    }
  })
}

