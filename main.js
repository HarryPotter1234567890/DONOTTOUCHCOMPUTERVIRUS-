leftWrist = 0;
rightWrist = 0;
differenceisequealltonull = 0;




























function preload(){

}

function draw(){
background("teal");
textSize(differenceisequealltonull);
fill("#C2B078");
text("Peter Rabbit is gone :(", 50, 400);

}

function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);

    canvas = createCanvas(500, 500);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPose);
    
}

function gotPose(results){
    if(results.length >0){
        console.log(results);
        leftWrist = results[0].pose.leftWrist.x;
rightWrist = results[0].pose.rightWrist.x;
differenceisequealltonull = floor(leftWrist - rightWrist);
    }

}

function modelLoaded(){
    console.log("I miss Peter Rabbit");
}