let shape = [];
let shapeconfig = [];

/*

colors

burnt umber 8a3324
raw umber 826644
yellow ochre c69d06
yellow cadmium deep fff600
titanium buff f0dc82
mars black 424746

*/

// let colors = ["#8a3324", "#826644", "#c69d06", "#fff600", "#f0dc82", "#424746"]
let colors = ["#264653","#2a9d8f","#e9c46a","#f4a261","#e76f51"];

let scl = 100;

function setup() {
  let can = createCanvas(500, 500);
  can.class("reduced");
  can.parent("canvas");
  fill(colors[floor(random(colors.length))])
  background(colors[floor(random(colors.length))]);


  let rows = width / scl;
  let cols = height / scl;

  for (let c = 0; c < 5; c++) {
    for (let d = 0; d < 5; d++) {
      shapeconfig.push({ circ: c, dir: d });

      // shape.push(new Roof_e(scl*d, c*scl, scl*.8, floor(random(4)),floor(random(5))));
    }

    // shuffle array
    // much easier to shuffle the config first

    for (let i = 0; i < shapeconfig.length; i++) {
      let j = floor(random(shapeconfig.length));
      if (i == j) {
        continue;
      }
      const temp = shapeconfig[i];
      shapeconfig[i] = shapeconfig[j];
      shapeconfig[j] = temp;
    }
  }

  // now populate the shapes[] array
  let i = 0;
  for (let c = 0; c < 5; c++) {
    for (let d = 0; d < 5; d++) {
      shape.push(new Roof_e(scl*d, c*scl, scl, shapeconfig[i].circ,shapeconfig[i].dir));
      i++;
    }
    
  }

}

function draw() {
  for (s of shape) {
    s.render();
  }
}