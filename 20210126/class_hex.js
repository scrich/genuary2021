class Hex {
    constructor(q, r, size) {
        this.q = q;     // column
        this.r = r;     // row
        this.size = size;
        this.pos = createVector(
            q * size * sqrt(3) / 2,
            (2 * r) * size * 3 / 4
        )
        this.health = 1;
        this.count = 100;
        this.infected = false;
        this.risk = 0;
        this.immune = false;
    }

    render() {
        // fill(255 * (1 - this.health), 255 * this.health, 0);
        fill(127 * (1 - this.health), 127 * this.health, 0);
        
        // stroke(255);
        noStroke();

        beginShape();
        for (let t = 0; t < 360; t += 60) {
            vertex(
                this.pos.x + this.size * sin(t),
                this.pos.y + this.size * cos(t));
        }
        endShape(CLOSE);


        fill(0);
        // text(
        //     this.q + ", " + this.r, 
        //     this.pos.x - this.size * .6, 
        //     this.pos.y);
        // text(
        //     round(this.health,1), 
        //     this.pos.x - this.size * .1, 
        //     this.pos.y + this.size * 0.6);

        }

    infect() {
        this.health = 0;
        this.infected = true;
    }

    heal() {
        if (this.health < 1) {
            this.health += heal_rate;
        } else {
            this.infected = false;
            // this.immune = true;
            this.count = 100;
        }
    }

    check_neighbours() {
        if (this.immune && this.count > 0) {
            // console.log(this.q, this.r, this.immune);
            this.count--;
            return;
        }
        let neighbour_refs = [
            { q: -1, r: -1 },
            { q: +1, r: -1 },
            { q: +2, r: 0 },
            { q: +1, r: +1 },
            { q: -1, r: +1 },
            { q: -2, r: +0 }
        ];
        let neighbour_array = [];
        // console.log(neighbour_array);
        for (const neighbour of neighbour_refs) {
            let qref = this.q + neighbour.q;
            let rref = this.r + neighbour.r;
            
            // console.log(qref,rref);
            // check this hex exists
            if (qref < 0 || rref < 0 || qref > qols-1 || rref > rows-1) {
                continue;
            }
            neighbour_array.push(hexes[qref][rref].infected);

            // console.log(neighbour_array.length);
            // console.log(neighbour_array);
        }
            this.risk = neighbour_array.reduce(function (acc, item) {
                if (item) {
                    acc++;
                }
                return acc;
            }, 0)
                / neighbour_array.length;
                
                fill(0);
                // text(
                //     round(this.risk,2),
                //     this.pos.x - this.size * .6, 
                //     this.pos.y + this.size * .6);

        return this.risk;

    }

    assess_risk() {
        if (this.risk > 0 && this.infected == false) {
            // console.log(this.q, this.r, this.risk);
            let myRand = random();
            // console.log(round(myRand,2), round(myRand * R,2));
            if (this.risk < (myRand*R/6)) {
                this.infect();
            }
        }
    }

    infect_neighbours() {
        let neighbour_refs = [
            { q: -1, r: -1 },
            { q: +1, r: -1 },
            { q: +2, r: 0 },
            { q: +1, r: +1 },
            { q: -1, r: +1 },
            { q: -2, r: +0 }
        ];
        for (const neighbour of neighbour_refs) {
            let qref = this.q + neighbour.q;
            let rref = this.r + neighbour.r;
            // check this hex exists

            if (qref < 0 || rref < 0 || qref > qols || rref > rows) {
                continue;
            }
            hexes[qref][rref].infect();
        }
    }
}



// function _drawHex(q, r, size) {
//     // q - column
//     // r - row

//     /**
//      * draw the centre
//      * could just have circles in a hexagonal grid
//      * - don't need to draw as hexagons
//      */

//     let x = q * size * sqrt(3) / 2;
//     let y = (2 * r) * size * 3 / 4;

//     console.log(q, q % 2);

//     noFill();
//     stroke(255);

//     beginShape();
//     for (let t = 0; t < 360; t += 60) {
//         vertex(x + size * sin(t), y + size * cos(t));
//     }
//     endShape(CLOSE);

    // text(q + ", " + r, x - size * .6, y);
// }quick