let firstHeading = document.getElementById("first-heading"); //get the element from the HTML by class



console.log(firstHeading.getBoundingClientRect()); //GetBoundingClientRect returns all the information about an element's position and values in space



//If the distance from the top of the element box to the viewport minus the innerheight is smaller than -400, the timeline elements appear
function isVisible(element) {
    let elementBox = element.getBoundingClientRect();
    let distanceFromTop = -400; 

    if(elementBox.top - window.innerHeight < distanceFromTop) {
        return true;
    } else {
        return false;
    }
}


function scanDocument() {
    let sectionList = document.querySelectorAll('.hidden');
    sectionList.forEach(function(section) {
        if(isVisible(section)) {
            section.classList.remove('hidden');
        };
    });

}


document.addEventListener("scroll", scanDocument);

