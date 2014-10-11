chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		//console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------

/*function bossbutton(){
	if ($("#undefined-sticky-wrapper").is(":visible") == true){
		$("undefined-sticky-wrapper").hide();
		$(".toolbar-wallet").hide();
		$(".rewards").hide();
	} else {
		$("undefined-sticky-wrapper").show();
		$(".toolbar-wallet").show();
		$(".rewards").show();
	}
}*/

$("<li id=\"bossbutton\">boss button</li>" ).insertAfter( $( ".toolbar-settings" ) );
$("#bossbutton").click(
	function() {
		if ($("#undefined-sticky-wrapper").is(":visible") == true){
			$("#undefined-sticky-wrapper").hide();
			$(".toolbar-wallet").hide();
			$(".rewards").hide();
		} else {
			$("#undefined-sticky-wrapper").show();
			$(".toolbar-wallet").show();
			$(".rewards").show();
		}
	}
)
	}
}, 10);
});
