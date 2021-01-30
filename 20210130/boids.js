// https://www.youtube.com/watch?v=mhjuuHl6qHM
// https://www.red3d.com/cwr/boids/

class Boid {
    constructor() {
        this.pos = createVector(random(width), random(height));
        this.vel = p5.Vector.random2D()
        this.vel.setMag(random(2,4));
        this.acc = createVector();
        this.maxForce = 1;
        this.maxSpeed = 5;
    } 

    flock(boids) {
        this.acc.mult(0);
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

        alignment.mult(sliderAlign.value());
        cohesion.mult(sliderCohesion.value());
        separation.mult(sliderSeparation.value());

        this.acc.add(alignment);
        this.acc.add(cohesion);
        this.acc.add(separation);
    }

    edges() {
        if (this.pos.x > width) {
            this.pos.x = 0;
        } else if (this.pos.x < 0) {
            this.pos.x = width;
        }
        if (this.pos.y > height) {
            this.pos.y = 0;
        } else if (this.pos.y < 0) {
            this.pos.y = height;
        }
    }

    align(boids) {
        let perceptionRadius = 50;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
            if (other != this && d < perceptionRadius) {
                steering.add(other.vel);
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.vel);
            steering.limit(this.maxForce);
        }
        // console.log(steering);
        return steering;
    }

    separation(boids) {
        let perceptionRadius = 50;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
            if (other != this && d < perceptionRadius) {
                // get a vector pointing away from the local flock
                let diff = p5.Vector.sub(this.pos, other.pos);
                diff.div(d); // inversely proportional to distance
                steering.add(diff); 
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            // steering.sub(this.pos); // take away this position
            steering.setMag(this.maxSpeed);
            steering.sub(this.vel);
            steering.limit(this.maxForce);
        }
        // console.log(steering);
        return steering;
    }

    cohesion(boids) {
        let perceptionRadius = 50;
        let steering = createVector();
        let total = 0;
        for (let other of boids) {
            let d = dist(this.pos.x, this.pos.y, other.pos.x, other.pos.y);
            if (other != this && d < perceptionRadius) {
                // this is different from align - 
                // position is added, not velocity
                steering.add(other.pos); 
                total++;
            }
        }
        if (total > 0) {
            steering.div(total);
            steering.sub(this.pos); // take away this position
            steering.setMag(this.maxSpeed);
            steering.sub(this.vel);
            steering.limit(this.maxForce);
        }
        // console.log(steering);
        return steering;
    }

    update() {
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.vel.limit(this.maxSpeed);
    }

    show() {
        strokeWeight(8);
        stroke(255);
        point(this.pos.x, this.pos.y)
    }
}