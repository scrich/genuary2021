const DEBUG = false;
let p = [];
let count = 100;


function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");
  
  // for (let i = 0; i < count; i++) {
  //   p.push(new Popper()); 
  // }


}

function draw() {
  background(220); 
  
  p.push(new Popper());

  for (let i = 0; i < p.length; i++) {
    const element = p[i];
    if (element.isDead()) {
      // remove from the array
      p.splice(i,1);
    }
    element.update();
    element.show();
    
  }

}

class Popper {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.age = 0;
    this.size = 0;
  }

  update() {
    this.age++;
    this.size++;
  }

  isDead() {
    if (this.size > 200) {
      return true;
  } else {
    return false;
  }
}

  show() {
    noStroke();
    if (this.size > 196) {
      stroke(color("red"));
      strokeWeight(200-this.size);
    } 
    fill(255-this.size);
    circle(this.x, this.y, this.size/2);
  }
}