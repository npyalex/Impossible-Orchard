var capture;


function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
  background(255, 0, 200);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
function draw() {
  background(255);
  image(capture, 0, 0, windowWidth, windowHeight);
  //filter('INVERT');
}