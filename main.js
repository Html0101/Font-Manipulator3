difference = 0

function setup()  
{ 
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(40, 200)

    canvas = createCanvas(550, 550);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() 
{ 
    console.log("Model Loaded!");
}



function gotPoses(results) 
{ 
    if(results.length > 0) 
    { 
        console.log(results)
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
    
        difference = floor(leftWristX - rightWristX);
    }
}

function draw() 
{ 
    background("#0000ff");
    fill("#0000ff");
    textSize(difference);
    text('This is text', 10, 30);
}

function preload()  
{ 

}




