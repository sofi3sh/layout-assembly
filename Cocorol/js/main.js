$(function(){
    
    $('.gallery__item-inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
		responsive: [
			{
			  breakpoint: 941,
			  settings: {
				slidesToShow: 2,
			  }
			},
			{
			  breakpoint: 641,
			  settings: {
				slidesToShow: 1,
			  }
			},
		]
    });

    $('.gallery__item-inner').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});