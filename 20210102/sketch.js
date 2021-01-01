const DEBUG = false;

let arrlen = 40;
let numbers = new Array(arrlen);
let rmax = 100;

function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = floor(random(2));
  }


}
/**
 * we need an array of numbers for all the rows that fit on the screen
 * 
 * then loop - look another triple nested loop!
 */

function draw() {
  background(220);
  translate(width / 2, height / 2);
  for (let r = 50; r < 190; r+= 10) {
    for (let i = 0; i < numbers.length; i++) {
      let t = (i/numbers.length)*TAU
      console.log(i,t);
      const x = r * sin(t);
      const y = r * cos(t);
      fill(225*numbers[i]); // map this instead so it's less stark
      stroke(0);
      circle(x, y, TAU * r / numbers.length);
      // work out perimeter = TAU * r
    }
  }
  numbers.unshift(numbers.pop());
  // noLoop();
}