var nariz_x = 0;
var nariz_y = 0;

function preload()
{
    bigode = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup()
{
    canvas = createCanvas (300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("poseNet está ativado");
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        nariz_x = results[0].pose.nose.x-40;
        nariz_y = results[0].pose.nose.y;
    }
}

function draw()
{
    image(video, 0, 0, 300, 300);
    image(bigode, nariz_x, nariz_y, 80, 35);
}

function tirarfoto()
{
    save("tudebigode.png");
}