let img;
let detector;
let vid;

function preload() {
  img = loadImage('https://i.ibb.co/T1K5qvS/images-1.jpg');
  detector = ml5.objectDetector('cocossd');
};

function gotDetections(error, results) {
  if (error) {
    console.error(error);
  };
  console.log(results);
  for (let i = 0; i < results.length; i++) {
    let object = results[i];
    stroke(0, 255, 0);
    strokeWeight(4);
    noFill();
    rect(object.x, object.y, object.width, object.height);
    noStroke();
    fill(255);
    textSize(24);
    text(object.label, object.x + 10, object.y + 24);
  }
  
   detector.detect(vid, gotDetections);  

}

function setup() {
  createCanvas(innerWidth, innerHeight);
  // console.log(detector);
  vid = createCapture(VIDEO)
  vid.size(innerWidth,innerHeight)
  vid.hide() 
 // image(img, 0, 0);
 //console.log(results);
 detector.detect(vid, gotDetections);   
 
}

function draw(){
  background(255)
   image(vid, 0,0, innerWidth, innerHeight)
} 
