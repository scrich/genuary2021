const DEBUG = false;



var pos = {};
let data;
let boxsize;
let poslatmin,poslatmax,poslongmin,poslongmax;
let store;




function setup() {
  let can = createCanvas(400, 400);
  can.parent("canvas");

  boxsize = 0.1;

  //navigator.geolocation.getCurrentPosition(showPosition)
  

  //getLocation();
  //console.log(pos);

  pos = {lat:50.8520494, long:-0.1403778 };
  // 50.8520494
  // -0.1403778

poslatmin = pos.lat - boxsize;
poslatmax = pos.lat + boxsize;
poslongmin = pos.long - boxsize;
poslongmax = pos.long + boxsize;

  let query = poslatmin+","+poslongmin+","+poslatmax+","+poslongmax;
  console.log(query);

  // fetch('https://data.sensor.community/airrohr/v1/filter/box=52.1,13.0,53.5,13.5')
  fetch(`https://data.sensor.community/airrohr/v1/filter/box=${poslatmin},${poslongmin},${poslatmax},${poslongmax}`)
  .then(response => response.json())
  .then(data => savethedata(data));



}

function savethedata(data) {
  console.log(data);
  store = data;
  console.log(store);
}

function draw() {
  background(220);
  console.log("Draw with the store ");
  console.log(store);

  noLoop();
}


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  pos.lat = position.coords.latitude;
  pos.long = position.coords.longitude;
}
