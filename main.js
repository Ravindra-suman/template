function changeit() {
    //toggle the background color of the element with id "colorit" to random colors
    var colors = ["red", "green", "blue", "yellow", "purple"];
    var element = document.getElementById("colorit");
    element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
}