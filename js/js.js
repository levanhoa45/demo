$(function(){
    $('.project-list-item').click(function(){
		$(this).addClass('active-item').siblings().removeClass('active-item');
	});
    $('.project-list-item').click(function(){
		let value = $(this).attr('data-filter');
		if( value === 'all'){
			$('.filter').show(600);
		}else{
			$('.filter').not('.'+value).hide(300);
			$('.filter').filter('.'+value).show(600);
		}
	});
	
	$('.slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2,
		autoplay: true
	});
})    