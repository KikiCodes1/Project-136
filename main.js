status = "";

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}

function start(){
    objectDetection = ml5.objectDetector('cocossd', ModelLoaded);
    document.getElementById("status").innerHTML = "Status : Detection Objects";
    name = document.getElementById("TEXT").value;
}

function ModelLoaded(){
    console.log("Model has been loaded!");
    status = true;
}

function draw(){
    image(video, 0, 0, 480, 380);
}