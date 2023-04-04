x_rightwrist = "";
y_rightwrist = "";
x_leftwrist = "";
y_leftwrist = "";
scoreLeftWrist = "";
statusLeftWrist = "";

song_peter_pan = "";
peter_pan_song = "";
harry_potter_theme_song= "";

function setup(){
    canvas = createCanvas(600,600);
    canvas.position(650,250);

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function draw(){
    image(video,0,0,600,600);
    fill("#FFFF00");
    stroke("#FFFF00");

    song_peter_pan = peter_pan_song.isplaying();
    console.log(song_peter_pan);

    if(scoreLeftWrist > 0.2){
        circle(x_leftwrist , y_leftwrist , 20);
        harry_potter_theme_song.stop();

        if(song_peter_pan == false){
            peter_pan_song.paly();
        }
        else{
            document.getElementById("").innerHTML = "song name : peter pan song";
        }
    }
}

function preload(){
    peter_pan_song = loadSound("music2.mp3");
    harry_potter_theme_song = loadSound("music.mp3");
}

function modelLoaded(){
    console.log('pose net is initialized!')
}

function gotposes(results){
if(results.length > 0){
    console.log(results);
    scoreLeftWrist = results[0].pose.keypoints[9].score;
    console.log(scoreLeftWrist);

    x_leftwrist = results[0].pose.leftwrist.x;
    y_leftwrist = results[0].pose.leftwrist.y;
    console.log("x_leftwrist =" + x_leftwrist + "y_leftwrist =" + y_leftwrist);

    x_rightwrist = results[0].pose.rightwrist.x;
    y_rightwrist = results[0].pose.rightwrist.y;
    console.log("x_rightwrist =" + x_rightwrist + "y_rightwrist =" + y_rightwrist);
}
}