$('#ribbon a').on ('click', function (e) {
	e.preventDefault();	
	var id = $(this).attr('class');
	$('.bec_container').slideUp();
	$('#'+id).slideToggle();
})
$('.mobile-menu').on('click', function () {
	$('#ribbon').slideToggle();
})