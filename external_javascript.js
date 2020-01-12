//this function hides container with the game when the webpage is loaded
function hideContainer() {
    document.getElementById("container").style.display = "none";
}
window.onload = hideContainer;

// preload rollover image by creating new Image object
// and setting its src property to the pathname of the rollover GIF image
var rollover_img = new Image();
rollover_img.src = "img/rollover.gif";

var imgStart = document.getElementById("imgStart");

var pickachuBoo  =  function() {
    imgStart.src = rollover_img.src;
    imgStart.style.cursor = "pointer";   // change cursor while rolling over
};

var welcomeIMG = function() {
    imgStart.src = "img/sit.gif";
};

//event occurs when the mouse pointer is moved onto an element
imgStart.onmouseover = pickachuBoo;
imgStart.onmouseout = welcomeIMG;

//when the button is hit, one of the containers disappears and the second container appears
function demoDisplay() {
    document.getElementById("container1").style.display = "none";
    document.getElementById("container").style.display = "block";

}
