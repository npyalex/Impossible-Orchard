var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth, windowHeight);
  capture.hide();
  background(255, 0, 200);
}

function windowResized() {
    resizeCanvas(innerWidth, innerHeight);
}
function draw() {
  background(255);
  image(capture, 0, 0, windowWidth, windowHeight);
    //BLUR filter has an effect I want but it kills the speed of the page
 // filter(BLUR,10);

}