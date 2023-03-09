function changeImage() {
    let img = document.getElementById("changingimage");
    (img.src.match("feature3.png")) ? img.src = "21532461_6491439.jpg" : img.src = "feature3.png";
}

function changeImage2() {
    let img = document.getElementById("changingimage");
    (img.src.match("feature3.png")) ? img.src = "12085296_20944119.jpg" : img.src = "feature3.png";
}


$(function () {
    $("#menu").menu();
});
$(function () {
    $("#tabs").tabs();
});


function gotocourselist() {
    location.href = "courses.html";
}
function gotohtml() {
    location.href = "coursehtmlcss.html";
}
function gotojs() {
    location.href = "coursejavascript.html";
}
function gotojava() {
    location.href = "coursejava.html";
}
function gotooffice() {
    location.href = "courseoffice.html";
}


