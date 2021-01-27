class Roof_e {
    constructor(x, y, w, dir, circ, tcol=color("blue")) {
        
        this.x = x;
        this.y = y;
        this.w = w;
        this.cx = x + w / 2;
        this.cy = y + w / 2;
        this.r = w / 6;
        this.dir = dir;
        this.circ = circ; //0 to 4
        // 0 is central then
        // 1 2
        // 3 4 
        this.cx = this.cx + 0.2 * w * (circ == 2 || circ == 3) - 0.2 * w * (circ == 1 || circ == 4);

        this.cy = this.cy + 0.2 * w * (circ == 3 || circ == 4) - 0.2 * w * (circ == 1 || circ == 2);
        this.tcol = tcol;
    }

    render() {
        stroke(0);
        noStroke();
        // fill(this.tcol);
        beginShape();
        // some funky logical exclusion of one condition
        (this.dir != 1) && vertex(this.x, this.y);
        (this.dir != 2) && vertex(this.x + this.w, this.y);
        (this.dir != 3) && vertex(this.x + this.w, this.y + this.w);
        (this.dir != 4) && vertex(this.x, this.y + this.w);
        beginContour();
        for (let t = 0; t < TAU; t += 0.1) {
            vertex(this.cx + this.r * sin(t), this.cy + this.r * cos(t));
        }
        endContour(CLOSE);
        endShape(CLOSE);

    }
}