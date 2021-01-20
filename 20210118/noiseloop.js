class NoiseLoop {
  
    // thanks to Coding Train
    //https://www.youtube.com/watch?v=ZI1dmHv3MeM

   constructor (diameter, min, max) {
       // diameter of the perlin noise space
       // greater diamter will give more variance in the values

       // min, max values for the noise value returned
      this.diameter = diameter;
      this.min = min;
      this.max = max;
      this.cx = random(1000);
      this.cy = random(1000);
    }
    
    value(a) {
     
      let xoff = map(cos(a), -1, 1, this.cx, this.cx+this.diameter);
      let yoff = map(sin(a), -1, 1, this.cy, this.cy+this.diameter);
      let r = noise(xoff, yoff);
      return map(r, 0, 1, this.min, this.max);
  
    }
  }