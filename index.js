

// var cricle = document.getElementsById("circle");
// var upBtn = document.getElementsById("upBtn");
// var downBtn = document.getElementsById("downBtn");

// var rotateValue = cricle.style.t;
// var rotateSum;

// upBtn.onlick = function(){
//     rotateSum = rotateValue + "rotate(-90deg)";

//     cricle.style.transform = rotateSum;
//     rotateValue = rotateSum;
// } 

// Get elements by class name returns a collection, so you need to access them by index or loop through them.
var circle = document.getElementById("circle");
var upBtn = document.getElementById("upBtn");
var downBtn = document.getElementById("downBtn");

var rotateValue = 0; // Initial rotation value
var rotateSum;

upBtn.onclick = function () {
    rotateValue -= 90; // Decrement by 90 degrees on each click

    rotateSum = "rotate(" + rotateValue + "deg)";
    circle.style.transform = rotateSum;
};

downBtn.onclick = function () {
    rotateValue += 90; // Increment by 90 degrees on each click

    rotateSum = "rotate(" + rotateValue + "deg)";
    circle.style.transform = rotateSum;
};
