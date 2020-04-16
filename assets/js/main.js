// GRILLA POR DEFECTO
var elem = document.querySelector('.grid');
var iso = new Isotope( elem, {
  itemSelector: '.grid-item',
  filter: '.uxui',
  layoutMode: 'fitRows'
});

// GRILLA CON FILTROS
var gridFilters = document.querySelectorAll('.grid-btn');
for(i = 0; i < gridFilters.length;i++) {
	gridFilters[i].addEventListener('click', function(e){
		var filterValue = this.dataset.filter;
		iso.arrange({ filter: filterValue });
		e.preventDefault();
	});
}

//navbar
$(document).on('click.nav','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).removeClass('in').addClass('collapse');
    }
});




$(".navbar-nav li a").click(function(event) { if (!$(this).parent().hasClass('dropdown')) $(".navbar-collapse").collapse('hide'); }); 

$(".navbar-toggle").click(function(event) { $(".navbar-collapse").toggle('in'); }); 

angular .module('yourAppModule') .directive('btnAutoCollapse', directive); function directive() { var dir = { restrict: 'A', scope: {}, link: link }; return dir; function link(scope, element, attrs) { element.on('click', function(event) { $(".navbar-collapse.in").collapse('hide'); }); } } 

jQuery('document').ready(function() { $(".navbar-header button").click(function(event) { if ($(".navbar-collapse").hasClass('in')) { $(".navbar-collapse").slideUp(); } });}) 

