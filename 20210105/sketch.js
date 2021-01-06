//#genuary Day 5 #genuary2021 code golf #つぶやきProcessing
// moire black satin noise interference
n=2e-3,z=0;
draw=_=>{can=createCanvas(w=400,w),stroke(0),noFill()
  can.parent("canvas")
for(let y=-20;y<w;y++){
beginShape()
for(let x=0;x<w;x++){
v=40*noise(x*n, y*n,z),vertex(x,y+v)}
endShape()}
z+=0.01}