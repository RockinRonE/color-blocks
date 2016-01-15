$(document).ready(function() {
	function colorRequest() {
	  var request = $.ajax({
	  	method: 'get', 
	  	url: "/colors",
	  	dataType: "json"
	  });
	  request.done(function(arrayOfHexes) {
	  	console.log(arrayOfHexes);
	  	$("div#box1").css("background-color", "#" + arrayOfHexes[0]);  
	  	$("div#box2").css("background-color", "#" + arrayOfHexes[1]);     
	    $("div#box3").css("background-color", "#" + arrayOfHexes[2]);     
	  	$("div#box4").css("background-color", "#" + arrayOfHexes[3]);     
	 		$("div#box5").css("background-color", "#" + arrayOfHexes[4]);
	 		$("div#box6").css("background-color", "#" + arrayOfHexes[5]);
	 		$("div#box7").css("background-color", "#" + arrayOfHexes[6]);
	 		$("div#box8").css("background-color", "#" + arrayOfHexes[7]);
	  });
	}
	setInterval(colorRequest, 3000);
	});


	// $( "div#box1" ).draggable();
	// $( "div#box1" ).draggable();
