song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song=loadSound("music.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video-createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Pose Net is Initialized');
}

function gotPoses(results){
    if(results.lenght>0){
        scoreRightWrist=results[0].pose.keypoints[10].score;
        scoreLeftWrist=results[0].pose.keypoints[9].score;
        console.log("scoreRightWrist= " + scoreRightWrist + "scoreLeftWrist= " + scoreLeftWrist);

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX= " + leftWristX + "leftWristY= " + leftWristY);

        rigthWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX= " + rightWristX + "rightWristY= " + rightWristY);
    }
}

function draw(){
    image(video, 0, 0, 600, 500);
}