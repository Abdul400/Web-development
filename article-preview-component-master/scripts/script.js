/*
 1.definition of variables
 2.getting width of screen
 3.adding resize eventlistener to the window to check whether it is a mobile or desktop
 4.adding event listener to the share button to toggle hidden content
 5.creating a toucharea for mobile and enabling interaction via an eventlistener
*/


//definition of variables
let hiddenContent = document.getElementById('hide'),// selecting the hidden content
    touchArea = document.getElementById('toucharea'),//selecting the toucharea on mobile
    myCont= document.getElementById('myCont'),//selecting the main container
    share = document.getElementById('share-btn');//selecting the share button

//getting width of the screen to differentiate between mobile and desktop
function getwidth () {
    return window.innerWidth;//returns innerwidth of window
}

//getting height of screen 
function getheight () {
    return window.innerHeight;//returns innerwidth of window
}

//running getwidth & getheight function on screen load
window.onload = getwidth();
window.onload =getheight;

//adding eventlistener to the window to check for resize. This is to allow it to be responsive
window.addEventListener('resize', ()=> {
    getwidth();
   if (getwidth() < 450) // check if its a mobile screen (450px and below)
    { 
        touchArea.style.display = ('block');//adding block display to toucharea if condition is met
    }
})

//adding eventing listener to the share button.
share.addEventListener('click', function(event){
    if (!hiddenContent.classList.contains('visible')) // if hidden content is not visible
    {
        hiddenContent.classList.add('visible'); //make it visible
        if (getwidth() < 450 && hiddenContent.classList.contains('visible')) // if its a mobile and hidden content is visible
            {
            //touchArea.classList.add('visible')-- did not work for some reason.
            touchArea.style.display= 'block'; //adding toucharea for interaction 
            }
        else if (getheight() > 1024 && hiddenContent.classList.contains('visible')) 
            {
                    touchArea.style.display= 'block'; //adding toucharea for interaction
            }
    }
    else if (hiddenContent.classList.contains('visible')) { // hide toggle for desktops
            hiddenContent.classList.remove('visible');
    }
    
})

//adding event listener to the created toucharea
touchArea.addEventListener('click', ()=> {
    if (hiddenContent.classList.contains('visible')) //if the hidden content is visible
    {
        hiddenContent.classList.remove('visible'); // hiden content
        touchArea.style.display=('none'); //remove itself to allow for interaction with text
    }
})

window.addEventListener('orientationchange', ()=> {
    window.location.reload();
})