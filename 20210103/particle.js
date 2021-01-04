function Particle() {
    // this.pos = createVector(random(width),random(height));
    this.pos = createVector(random(-30,30), random(-30,30));
    this.vel = createVector(0,0);
    this.acc = createVector(0,0);
    this.maxspeed = 2;
    this.prevPos = this.pos.copy();


    this.update = function() {
        this.vel.add(this.acc);
        this.vel.limit(this.maxspeed);
        this.pos.add(this.vel);
        this.acc.mult(0);
        
    }

    this.applyForce = function(force) {
        this.acc.add(force);
    }
    
    this.show_ = function() {
        stroke(0,5);
        strokeWeight(1);
        point(this.pos.x, this.pos.y);
        line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
        this.prevPos = this.pos.copy();
    }

    this.show = function(col) {
        stroke(col);
        strokeWeight(1);
        point(width/2+this.pos.x, height/2+this.pos.y);
        line(width/2+this.pos.x, height/2+this.pos.y, width/2+this.prevPos.x, height/2+this.prevPos.y);
        this.prevPos = this.pos.copy();

        // circle(this.pos.x, this.pos.y, 10);
    }

    this.prevReset = function() {
        this.prevPos = this.pos.copy();
    }

    this.edges = function() {
        let x = (this.pos.x);
        let y = (this.pos.y);
        // console.log(x,y);
        // calc polar coord for particle
        //let angle = atan(y/x);
        let r = sqrt(x*x+y*y)

        if (r > layers * scl) {
            this.pos.x = random(-30,30);
            this.pos.y = random(-30,30);
            this.prevReset();
        }

        // if (this.pos.x > width) {
        //     this.pos.x = 0;
        //     this.prevReset();
        // }
        // if (this.pos.x < 0) {
        //     this.pos.x = width;
        //     this.prevReset();
        // }
        // if (this.pos.y > height) {
        //     this.pos.y = 0;
        //     this.prevReset();
        // }
        // if (this.pos.y < 0) {
        //     this.pos.y = height;
        //     this.prevReset();
        // }
    }

    this.follow_ = function(vectors) {
        let x = floor(this.pos.x/scl);
        let y = floor(this.pos.y/scl);
        var index = x + y * cols;
        var force = vectors[index];
        this.applyForce(force);
    }

    this.follow = function(vectors) {
        let x = this.pos.x;
        let y = this.pos.y;
        // calc polar coord for particle
        let angle = createVector(1,0).angleBetween(this.pos);
        // console.log("angle " + angle)
        let calcangle;
        if (angle < 0) {
            calcangle = TAU + angle;
            // console.log("neg angle" + angle  + "-> " + calcangle);
        } else {
            calcangle = angle;
        }
        
        // console.log("calcangle " + calcangle);
        let r = sqrt(x*x+y*y)
        // console.log("r " + r);

        // console.log(angle,r);
        let segi = floor((calcangle/TAU) * segs);
        let layi = floor(r/scl);
        // console.log(layi);
        var force = vectors[segi][layi];
        this.applyForce(force);
    }
}