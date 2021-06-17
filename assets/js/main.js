
$(document).ready(function () {

  $('.header-navbar__hamburger').on('click', function () {
    $(this).toggleClass('active');
    $('.header-navbar__list').toggleClass('active');
  });

});

$(document).ready(function(){
	$('.header-navbar_btn').on('click', function(){
		$(this).toggleClass('header-navbar_btn--active');
    $('.header-navbar_list').toggleClass('header-navbar_list--active');
	});
});