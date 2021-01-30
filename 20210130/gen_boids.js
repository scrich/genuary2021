class Gen_boid extends Boid {
    constructor() {
        super();
        this.wave = new p5.Oscillator();
        // this.env = new p5.Env();
        // this.env.setADSR(1,2,0.3,3);
        // this.env.setRange(0.8,0);
        this.fillCol = colors[floor(random(colors.length))];
    }

    show() {
        super.show();
        noFill();
        fill(this.fillCol);
        strokeWeight(2);
        // noStroke();
        square(this.pos.x, this.pos.y, 10*this.vel.mag());
    }

    startsing() {
        this.wave.start();
        this.wave.amp(0.1);
        this.wave.freq(220);
    }

    sing() {
        // let freq = map(this.vel.mag(), 0, this.maxSpeed, 110, 440);
        // let freq = map(this.vel.mag(), 0, this.maxSpeed, 110, 440);
        let bin = floor(this.vel.mag())%this.maxSpeed;
        let freq = 110 + (3/2 * bin);
        switch (bin) {
            case 0:
                freq = 440/2;
                break;
            case 1: 
                freq = 495/2;
                break;
            case 2: 
                freq = 556.875/2;
                break;
            case 3: 
                freq = 660/2;
                break;
            case 4: 
                freq = 742.5/2;
                break;            
        }
        // console.log(bin,freq);
        // console.log(freq);
        // this.wave.start()
        this.wave.amp(0.05);
        // this.wave.freq(map(this.vel.mag(),0,this.maxSpeed,110,440,));
        this.wave.freq(freq);
        
    }
}