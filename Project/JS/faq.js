$(document).ready( () => {
	
	// runs when one of the faq headers is clicked
    $("#faqs h2").click( evt => {
		const h2 = evt.currentTarget;

		$(h2).toggleClass("minus");

		if ($(h2).attr("class") != "minus") {
		   	$(h2).next().slideUp(1000);
	   	}
	   	else {
	        $(h2).next().slideDown(1000);
		   }
		   
		evt.preventDefault();
    }); // end click
    
}); // end ready
