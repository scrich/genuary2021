class Gen_boid extends Boid {
    constructor() {
        super();
        this.wave = new p5.Oscillator();
    }

    show() {
        super.show();
        noFill();
        strokeWeight(2);
        square(this.pos.x, this.pos.y, 10*this.vel.mag());
    }

    startsing() {
        this.wave.start();
        this.wave.amp(0.1);
        this.wave.freq(220);
    }

    sing() {
        // let freq = map(this.vel.mag(), 0, this.maxSpeed, 110, 440);
        let freq = map(this.vel.mag(), 0, this.maxSpeed, 110, 440);
        // console.log(freq);
        // this.wave.start()
        this.wave.amp(0.1);
        // this.wave.freq(map(this.vel.mag(),0,this.maxSpeed,110,440,));
        this.wave.freq(freq);
        
    }
}