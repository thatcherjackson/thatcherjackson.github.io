"use strict";
$(document).ready( () => {

    const slider = $("#image_list");      // slider = ul element

    // the click event handler for the right button
    $("#button_right").click( () => { 

        // gets value of left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determines new value of left property and creates a new left property
        let newLeftProperty = 0;
        if (leftProperty - 100 > -900) {
            newLeftProperty = leftProperty - 100;
        }
        
        // uses the animate function to change the new left property
        slider.animate({left: newLeftProperty}, 1000);    
    }); 
    
    // the click event handler for the left button
    $("#button_left").click( () => {
    
        // gets value of left property
        const leftProperty = parseInt(slider.css("left"));
        
        // determines new value of left property and creates a new left property
        let newLeftProperty = 0;
        if (leftProperty < 0) {
            newLeftProperty = leftProperty + 100;
        }
        else {
            newLeftProperty = -800;
        }
        
        // uses the animate function to change the left property
        slider.animate({left: newLeftProperty}, 1000);
    });

});