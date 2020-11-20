let video;
let poseNet;
let pose;

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.hide();
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  video.size(width, height);
}

function gotPoses(poses) {
  console.log(poses);
  if (poses.length > 0) {
    pose = poses[0].pose;
    skeleton = poses[0].skeleton;
  }
}


function modelLoaded() {
  console.log('poseNet ready');
}

function draw() {
  image(video, 0, 0, width, height);
  
  if (pose) {
  
  let eyeR = pose.rightEye;
  let eyeL = pose.leftEye;
  let d = dist(eyeR.x, eyeR.y, eyeL.x, eyeL.y);
    
  fill(255,0,0);
  ellipse(pose.nose.x, pose.nose.y, d);
    
  fill(0,0,255);
  ellipse(pose.rightWrist.x, pose.rightWrist.y, 32);
  ellipse(pose.leftWrist.x, pose.rightWrist.y, 32);
    
  for (let i = 0; i < pose.keypoints.length; i++) {
    let x = pose.keypoints[i].position.x;
    let y = pose.keypoints[i].position.y;
    let keypoint = pose.keypoints[i];
    if (keypoint.score > 0.2) {
        fill(0,255,0);
        ellipse(x,y,16,16);
        noStroke();
        if (pose.keypoints[0].position.y > 400) {
            document.getElementById('placeholder').innerHTML = "DON'T SLOUCH";
        }
        else {
            document.getElementById('placeholder').innerHTML = "Good";
        }
        if (pose.keypoints[0].position.y < 0) {
            document.getElementById('placeholder').innerHTML = "SIT DOWN";
        }
        if (pose.keypoints[6].position.y < 0) {
            document.getElementById('placeholder2').innerHTML = "MOVE SHOULDERS DOWN";
        }
        else if (pose.keypoints[6].position.y > 500) {
            document.getElementById('placeholder2').innerHTML = "MOVE SHOULDERS UP";
        }
        else {
            document.getElementById('placeholder2').innerHTML = "Shoulders: Good";
        }
    }
  }
    
  for (let i = 0; i < skeleton.length; i++) {
    let a = skeleton[i][0];
    let b = skeleton[i][1];
    strokeWeight(2);
    stroke(255);
    line(a.position.x, a.position.y, b.position.x, b.position.y);
    
  }
}
}

