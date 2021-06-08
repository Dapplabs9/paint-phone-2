var canvas = document.getElementById("canvas1");
var ctx = canvas.getContext("2d");

var lastX,lastY;
var lineWidth = 1;
var color = "black";
var keyEvent = null;
var width = screen.width;
var height = screen.height;

var new_height = height - 30;
var new_width = width - 70;

if (width < 992) {
    document.getElementById("canvas1").height = new_height;
    document.getElementById("canvas1").width = new_width;
}

canvas.addEventListener("mousedown",mouse_down);

function mouse_down(e){
    keyEvent = "mouseDown";
    lineWidth = document.getElementById("penWidth").value;
    color = document.getElementById("color").value;
}

addEventListener("mousemove",mouse_move);

function mouse_move(e){
    var currentX = e.clientX - canvas.offsetLeft;
    var currentY = e.clientY - canvas.offsetTop;
    if (keyEvent == "mouseDown") {
        ctx.beginPath();
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = color;
        ctx.moveTo(currentX,currentY);
        ctx.lineTo(lastX,lastY);
        ctx.stroke();
    }
    lastX = currentX;
    lastY = currentY;
}
canvas.addEventListener("mouseup",mouse_up);

function mouse_up(){
    keyEvent = "mouseUp";
}

canvas.addEventListener("touchstart",touch_start);

function touch_start(e){
    lastX = e.touches[0].clientX - canvas.offsetLeft;
    lastY = e.touches[0].clientY - canvas.offsetTop;
    lineWidth = document.getElementById("penWidth").value;
    color = document.getElementById("color").value;
}

canvas.addEventListener("touchmove",touch_move);

function touch_move(e){
    currentX = e.touches[0].clientX - canvas.offsetLeft;
    currentY = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.moveTo(lastX,lastY);
    ctx.lineTo(currentX,currentY);
    ctx.stroke();

    lastX = currentX;
    lastY = currentY;
}