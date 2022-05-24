// Set the height of all images equal to the width.
function setEqualHeightWidth(element) {

    var widest = 0;
    element.each(function () {
        currentWidth = $(this).width();
        if (currentWidth > widest) {
            widest = currentWidth
        }
    });

    element.css('height', widest);
}
// Execute when page loads 
$(document).ready(function () {
    setEqualHeightWidth($(".card-img-top"));
})
// Execute when the browser resize
$(window).resize(function () {
    setEqualHeightWidth($('.card-img-top'));
});


// Navigation
jQuery(function($) {
    $(window).on('scroll', function() {
		if ($(this).scrollTop() >= 200) {
			$('.navbar').addClass('fixed-top');
		} else if ($(this).scrollTop() == 0) {
			$('.navbar').removeClass('fixed-top');
		}
	});
	
	function adjustNav() {
		var winWidth = $(window).width(),
			dropdown = $('.dropdown'),
			dropdownMenu = $('.dropdown-menu');
		
		if (winWidth >= 768) {
			dropdown.on('mouseenter', function() {
				$(this).addClass('show')
					.children(dropdownMenu).addClass('show');
			});
			
			dropdown.on('mouseleave', function() {
				$(this).removeClass('show')
					.children(dropdownMenu).removeClass('show');
			});
		} else {
			dropdown.off('mouseenter mouseleave');
		}
	}
	
	$(window).on('resize', adjustNav);
	
	adjustNav();
});