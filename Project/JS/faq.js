"use strict";

// the event handler for the click event of each h2 element
const toggle = evt => {
    const aElement = evt.currentTarget;                 // get the clicked a element
    const h2Element = aElement.parentNode;                  // get the clicked a element
    const divElement = h2Element.nextElementSibling;     // get h2's sibling div

    if (h2Element.hasAttribute("class")) {
        h2Element.removeAttribute("class")
    }
    else {
        h2Element.className="minus";
    }

    
    if (divElement.hasAttribute("class")) {
        divElement.removeAttribute("class")
    }
    else {
        divElement.className="open";
    }

    evt.preventDefault();
};

document.addEventListener("DOMContentLoaded", () => {
    // get the a tags
    const aElements = faqs.querySelectorAll("#faqs a");
    
    // attach event handler for each a tag	    
    for (let aElement of aElements) {
        aElement.addEventListener("click", toggle);
    }
    // set focus on first <a> tag
    aElements[0].focus();       
});