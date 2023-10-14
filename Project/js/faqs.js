"use strict";

$(document).ready( () => 
    $("#accordion").accordion({ 
        event: "click",
        heightStyle: "content",
        collapsible: true,
        active: false
    })
)

$(document).ready( () => 
    $("#accordion").tooltip({ 
        track: true
    })
)

$(document).ready( () => 
    $("#dialog").dialog({ 
        title: "Jeffrey",
        draggable: false,
        resizable: false,
        closeOnEscape: false
    })
)