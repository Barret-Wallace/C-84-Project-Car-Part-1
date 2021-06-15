var car1x = 10;
var car1y = 10;
var car1height = 70;
var car1width = 120;
var car2x = 10;
var car2y = 100;
var car2height = 70;
var car2width = 120;
var car1_image,car2_image;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var canvas_image;
function add(){
    car1_image = new Image();
    car1_image.onload = first_car;
    car1_image.src = "car1.png";
    car2_image = new Image();
    car2_image.onload = second_car;
    car2_image.src = "car2 (1).png";
    canvas_image = new Image();
    canvas_image.onload = canvasUpload;
    canvas_image.src = "racing_background_canvas";
}
function first_car(){
    ctx.drawImage(car1_image,car1x,car1y,car1width,car1height);
}
function second_car(){
    ctx.drawImage(car2_image,car2x,car2y,car2width,car2height);
}
function canvasUpload(){
    ctx.drawImage(canvas_image,0,0,canvas.width,canvas.height);
}
canvas.addEventListener("keydown", down_key);
function down_key(){
    if(e.keyCode == '38'){
        car1Up();
    }
    if(e.keyCode == '40'){
        car2Down();
    }
    if(e.keyCode == '37'){
        car1Left();
    }
    if(e.keyCode == '39'){
        car1Right();
    }
    if(e.keyCode == '87'){
        car2Up();
    }
    if(e.keyCode == '65'){
        car2Left();
    }
    if(e.keyCode == '68'){
        car2Right();
    }
    if(e.keyCode == '83'){
        car2Down()
    }
}