function setup() {
  createCanvas(400, 400);
  stroke(0);
  strokeWeight(1);
  noFill();
}

let angle = 0;
let count = 10;

function draw() {
  background(220);
  translate(200, 200);
  let s = sin(angle);
  let c = cos(angle);
  for (let i = -count; i <= count; ++i) {
    let x = 100 * s * i / count;
    let h = 200 * ((i - count * 1.3)/(2 * count))**2;
    let w = h * c;
    ellipse(x, 0, w, h);
  }
  angle += 0.05;
}