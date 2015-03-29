$(document).ready(function() {
    
	polyglot = new Polyglot();
	localStorage.setItem("lastname", "Smith");
	console.log(localStorage.getItem("lastname"));

	var url = '<script src="js/i18n/en.js"></script>'; 
	$('head').append(url);

	/*polyglot.extend({
 		"hello": "Hello World!!!",
 		"bye": "Bye World"
	});*/

    $('#container').html(polyglot.t("hello"));

});

var _zoomLevel = 100;

function ChangeZoomLevel(diff) {
    _zoomLevel += diff;
    var oDiv = document.getElementById("Contents");
    if (typeof oDiv.style.MozTransform == "string")
        oDiv.style.MozTransform = "scale(" + (_zoomLevel / 100) + ")";
    else if (typeof oDiv.style.zoom == "string")
        oDiv.style.zoom = _zoomLevel  + "%";
}