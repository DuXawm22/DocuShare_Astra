$('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
  if (!$(this).next().hasClass('show')) {
    $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
  }
  var $subMenu = $(this).next(".dropdown-menu");
  $subMenu.toggleClass('show');


  $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
    $('.dropdown-submenu .show').removeClass("show");
  });


  return false;
});
var myNav = document.getElementById('mynav');
window.onscroll = function () { 
    "use strict";
    if (document.body.scrollTop >= 200 ) {
        myNav.classList.add("top-bar-colored");
        myNav.classList.remove("top-bar-transparent");
    } 
    else {
        myNav.classList.add("top-bar-transparent");
        myNav.classList.remove("top-bar-colored");
    }
};
// $(function () {
//   $(document).scroll(function () {
// 	  var $nav = $(".navbar-dark.scrolled");
// 	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
// 	});
// });