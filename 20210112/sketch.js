const DEBUG = false;



var pos = {};
var data;
let boxsize;
let poslatmin, poslatmax, poslongmin, poslongmax;
let t;
let sensors = [];
let maxtemp;
let maxp1;
let maxp2;
let temps;
let p1s;
let p2s;

function preload() {

  boxsize = 0.2;
  // pos = { lat: 50.7588, long: -1.2623 }; //IOW
  
  pos = { lat: 50.8520, long: -0.1403 }; // home
  // 50.8520494
  // -0.1403778

  // 50.7588/-1.2623 IOW

  // 50.2520494,-0.7403778,51.4520494,0.4596222

  poslatmin = pos.lat - boxsize;
  poslatmax = pos.lat + boxsize;
  poslongmin = pos.long - boxsize;
  poslongmax = pos.long + boxsize;

  let query = poslatmin + "," + poslongmin + "," + poslatmax + "," + poslongmax;
  console.log(query);
  let url =
    'https://data.sensor.community/airrohr/v1/filter/box=' + query;
  console.log(url);
  data = loadJSON(url);
}

function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");

  for (let i = 0; i < Object.keys(data).length; i++) {
    const element = data[i];
    let lat = map(element.location.latitude, poslatmin, poslatmax, 0, width);
    let long = map(element.location.longitude, poslongmin, poslongmax, 0, height);
    let alt = element.location.altitude;

    sensor = new Sensor(lat, long, alt);


    for (let j = 0; j < Object.keys(element.sensordatavalues).length; j++) {
      const dataval = element.sensordatavalues[j];
      console.log(dataval);
      if (dataval.value_type == "P1") {
        if (sensor.P1 < 100) {
          sensor.P1 = parseInt(dataval.value);
        }
      }
      if (dataval.value_type == "P2") {
        if (sensor.P2 < 100) {
        sensor.P2 = parseInt(dataval.value);
        }
      }
      if (dataval.value_type == "temperature") {
        sensor.temp = parseInt(dataval.value);
      }
    }
    sensors.push(sensor);
  }

  temps = new Set();
  p1s = new Set();
  p2s = new Set();
  
  for (const sensor of sensors) {
    temps.add(sensor.temp);
    p1s.add(sensor.P1);
    p2s.add(sensor.P2);
  }
  
  maxtemp = Math.max(...temps);
  maxp1 = Math.max(...p1s);
  maxp2 = Math.max(...p2s);

for (const sensor of sensors) {
  sensor.setColors();
}

let reds = new Set();
for (const sensor of sensors) {
  reds.add(sensor.red);
}
console.log(reds);

}



function draw() {
  background(220);
  // fill(51, 51, 51, 10);
  // rect(0, 0, width, height);

  stroke(255);
  noFill();

  // for (const sensor of sensors) {
  //   sensor.show();
  // }

  for (let i = 0; i < sensors.length; i++) {
    // 
  // for (let i = 0; i < 2; i++) {
    sensors[i].show();
    
  }
}


function showPosition(position) {
  pos.lat = position.coords.latitude;
  pos.long = position.coords.longitude;
}

class Sensor {
  constructor(lat, long, alt) {
    this.lat = lat;
    this.long = long;
    this.alt = alt;
    this.P1 = null;
    this.P2 = null;
    this.temp = null; 
    this.red = 127;
    this.green = 127;
    this.blue = 127;
  }

  setColors() {
    if (this.temp != null) {
      // console.log(this.P1);
      this.red = floor((255/maxtemp)*parseInt(this.temp));
    } else {
      this.red = 128;
    }
    if (this.p1 != null) {
      // console.log(this.P1);
      this.green = floor((255/maxp1)*parseInt(this.P1));
    } else {
      this.green = 128;
    }
    if (this.p2 != null) {
      // console.log(this.P1);
      this.blue = floor((255/maxp2)*parseInt(this.P2));
    } else {
      this.blue = 128;
    }
  }

  show() {
    
    fill(this.red,this.green,this.blue,100);
      ellipse(this.long, height - this.lat, this.alt);
  }
}
