$(document).ready(function() {
    
	var polyglot = new Polyglot();


	var url = '<script src="js/i18n/en.js"></script>'; 
	$('head').append(url);

    $('#container').html(polyglot.t("hello"));
});