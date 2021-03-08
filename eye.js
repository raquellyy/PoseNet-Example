let video;
let poseNet;
let noseX = 0;
let noseY = 0;

let noseX2 = 0;
let noseY2 = 0;
let noseX3 = 0;
let noseY3 = 0;
let noseX4 = 0;
let noseY4 = 0;
//let noseX5 = 0;
//let noseY5 = 0;

let eyelX = 0;
let eyelY = 0;
let eyerX = 0;
let eyerY = 0;

let eyelX2 = 0;
let eyelY2 = 0;
let eyerX2 = 0;
let eyerY2 = 0;
//var img;
//var poses;
let earrX = 0;
let earrY = 0;
let earlX = 0;
let earlY = 0;

let earrX2 = 0;
let earrY2 = 0;
let earlX2 = 0;
let earlY2 = 0;


function setup() {
    createCanvas(640, 480);
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelReady);
    poseNet.on('pose', gotPoses);

    //img = loadImage('rglasses.png');
}

function gotPoses(poses) {
    console.log(poses);
    if (poses.length > 0) {
        let nX = poses[0].pose.keypoints[0].position.x;
        let nY = poses[0].pose.keypoints[0].position.y;

        let nX2 = poses[0].pose.keypoints[0].position.x - 65;
        let nY2 = poses[0].pose.keypoints[0].position.y;

        let nX3 = poses[0].pose.keypoints[0].position.x + 65;
        let nY3 = poses[0].pose.keypoints[0].position.y;

        let nX4 = poses[0].pose.keypoints[0].position.x;
        let nY4 = poses[0].pose.keypoints[0].position.y - 20;

        //let nX5 = poses[0].pose.keypoints[0].position.x;
        //let nY5 = poses[0].pose.keypoints[0].position.y + 60;

        let elX = poses[0].pose.keypoints[1].position.x;
        let elY = poses[0].pose.keypoints[1].position.y;
        let erX = poses[0].pose.keypoints[2].position.x;
        let erY = poses[0].pose.keypoints[2].position.y;

        let elX2 = poses[0].pose.keypoints[1].position.x;
        let elY2 = poses[0].pose.keypoints[1].position.y;
        let erX2 = poses[0].pose.keypoints[2].position.x;
        let erY2 = poses[0].pose.keypoints[2].position.y;


        let eelX = poses[0].pose.keypoints[3].position.x;
        let eelY = poses[0].pose.keypoints[3].position.y + 35; 
        let eerX = poses[0].pose.keypoints[4].position.x;
        let eerY = poses[0].pose.keypoints[4].position.y + 35;

        let eelX2 = poses[0].pose.keypoints[3].position.x;
        let eelY2 = poses[0].pose.keypoints[3].position.y-180; 
        let eerX2 = poses[0].pose.keypoints[4].position.x-20;
        let eerY2 = poses[0].pose.keypoints[4].position.y-180;

        noseX = lerp(noseX, nX, 0.2);
        noseY = lerp(noseY, nY, 0.2);

        noseX2 = lerp(noseX2, nX2, 0.2);
        noseY2 = lerp(noseY2, nY2, 0.2);

        noseX3 = lerp(noseX3, nX3, 0.2);
        noseY3 = lerp(noseY3, nY3, 0.2);

        noseX4 = lerp(noseX4, nX4, 0.2);
        noseY4 = lerp(noseY4, nY4, 0.2);

        //noseX5 = lerp(noseX5, nX5, 0.2);
        //noseY5 = lerp(noseY5, nY5, 0.2);

        
        eyelX = lerp(eyelX, elX, 0.2);
        eyelY = lerp(eyelY, elY, 0.2);
        eyerX = lerp(eyerX, erX, 0.2);
        eyerY = lerp(eyerY, erY, 0.2);

        eyelX2 = lerp(eyelX, elX2, 0.2);
        eyelY2 = lerp(eyelY, elY2, 0.2);
        eyerX2 = lerp(eyerX, erX2, 0.2);
        eyerY2 = lerp(eyerY, erY2, 0.2);



        earlX = lerp(earlX, eelX, 0.2);
        earlY = lerp (earlY, eelY, 0.2);
        earrX = lerp(earrX, eerX, 0.2);
        earrY = lerp (earrY, eerY, 0.2);

        earlX2 = lerp(earlX2, eelX2, 0.2);
        earlY2 = lerp (earlY2, eelY2, 0.2);
        earrX2 = lerp(earrX2, eerX2, 0.2);
        earrY2 = lerp (earrY2, eerY2, 0.2);
    }
    
}

function modelReady() {
    console.log('model ready');
}

function draw() {
    image(video, 0, 0);

    let d = dist(noseX, noseY, eyelX, eyelY);

    fill(255, 0, 0);
    ellipse(noseX, noseY, d)

    noStroke();
    fill(235,163,201, 100);
    ellipse(noseX2, noseY2, 40, 20);

    noStroke();
    fill(235,163,201, 100);
    ellipse(noseX3, noseY3, 40, 20);

    noStroke();
    fill(255,255,255);
    ellipse(noseX4, noseY4, 20, 10);

    //noStroke();
    //fill(135,0,76,100);
    //ellipse(noseX5, noseY5, 30, 20);

    //ellipse(noseX, noseY, 50);
    //fill (0,0,255);
    noFill();
    ellipse(eyelX, eyelY, d);

    
    //circle with no fill or a cirlce with line thru for glasses
    noFill();
    ellipse(eyerX, eyerY, d);


    fill(64,180,215,191);
    ellipse(eyelX2, eyelY2, 12);

    fill(64,180,215,191);
    ellipse(eyerX2, eyerY2, 12);



    fill(255,51,255);
    ellipse(earlX, earlY, 10);

    fill(255,51,255);
    ellipse(earrX, earrY, 10);

    fill(1,0,0);
    ellipse(earlX2, earlY2, 110);

    fill(1,0,0);
    ellipse(earrX2, earrY2, 110);

  }

    //if (poses) {
       // image(img, poses.keypoints[0].position.x, poses.keypoints[0].position.y);
    //}

