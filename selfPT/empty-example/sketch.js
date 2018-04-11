var random
function setup() {
  createCanvas(500, 500);
r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(220);
 ellipse(250, 250, 300, 400);


  
  strokeWeight(2);
  stroke(r, g, b);
  fill(r, g, b, 220);

rect(90, 170, 120, 100, 20);
rect(260, 170, 120,100, 20);
arc(250, 350, 150, 50, 0, HALF_PI);
arc(235, 215, 50, 40, PI, TWO_PI);
arc(235, 227, 50, 40,PI, TWO_PI);

}
function mousePressed() {
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
}

