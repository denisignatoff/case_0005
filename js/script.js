$('.faq__switcher').on('click', function() {
  $(this).toggleClass('active')
  let prev = $(this).prev()
  if ($(prev).css('display') == 'none') {
    $(prev).show(300)
  } else {
    $(prev).hide(300)
  }
})

$('.partnership__btn').on('click', function() {
  $('.popUp__container').css('display', 'flex')
  $('body').css('overflow', 'hidden')
  return false;
})

$('.popUp__close').on('click', function() {
  $('.popUp__container').css('display', 'none')
  $('body').css('overflow', 'auto')
  return false;
})

$('.popUp__container').on('click', function(e) {
  if (e.target.className == 'popUp__container') {
    $('.popUp__container').css('display', 'none')
    $('body').css('overflow', 'auto')
  }
})

$("input[type=tel]").mask("+7 (999) 999-99-99")