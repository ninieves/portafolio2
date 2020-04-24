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



//boton bajar
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});



