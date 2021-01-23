class Todesfabrik {

  constructor(x, y, w, col) {
    this.x = x;
    this.y = y;
    this.w = w; //width
    this.h = w * 2 / 3; //height
    this.col = col;
  }

  render() {
    let x = this.x;
    let y = this.y;
    let w = this.w;
    let h = this.h;

    fill(this.col);
    noStroke();

    beginShape()
    this.draw_body(x, y, w, h);
    endShape(CLOSE);
  }

  draw_body(x, y, w, h) {
    this.draw_body1(x, y, w, h, 0.2, 0.6);
    this.draw_roof(x, y, w, h, 0.6);
    this.draw_body2(x, y, w, h, 0.2, 0.6);
    this.draw_contours(x, y, w, h, 0.2, 0.6);
  }

  draw_contours(x,y,w,h,cw,ch) {
    // draw window
    this.draw_window_contour(x+w*.4,y+h*.85,w/2,h/8);

    // draw roof windows
    let rw = w*.25;
    this.draw_roof_contour(x+w*0.25, y+h*ch, rw);
    this.draw_roof_contour(x+w*0.5, y+h*ch, rw);
    this.draw_roof_contour(x+w*0.75, y+h*ch, rw);
  }

  draw_window_contour(x,y,w,h) {
    beginContour();
      vertex(x,y);
      vertex(x+w,y);
      vertex(x+w,y-h);
      vertex(x,y-h);
    endContour();
  }

  draw_roof(x, y, w, h, ch) {
    // 3 roof parts
    // each is 1/4 of w
    let rw = w*.25;
    this.draw_roof_part(x+w*0.25, y+h*ch, rw);
    this.draw_roof_part(x+w*0.5, y+h*ch, rw);
    this.draw_roof_part(x+w*0.75, y+h*ch, rw);
  }

  draw_roof_part(x, y, rw) {
    vertex(x,     y);
    vertex(x+rw,  y-rw);
    vertex(x+rw,  y);
    
  }

  draw_roof_contour(x,y,rw) {
    let cx = x+rw*.7;
    let cy = y-rw*.3;
    let r = rw/6;
    beginContour();
    for (let t = 0; t<TAU; t+=0.1) {
      vertex(cx+r*sin(t), cy+r*cos(t));
    }
    endContour();
  }

  draw_body1(x, y, w, h, cw, ch) {
    //
    // cw chimney width
    // ch chimney height
    vertex(x, y + h);
    vertex(x, y);
    vertex(x + w * cw, y);
    vertex(x + w * cw, y + h * ch);
    vertex(x + w * 0.25, y+h*ch);
  }

  draw_body2(x, y, w, h, cw, ch) {
    // cw chimney width
    // ch chimney height
    vertex(x + w, y + h * ch);
    vertex(x + w, y + h);
    vertex(x+w*.25, y+h);
    this.draw_door(x+w*.25,y+h,w*.125,h*.2);
    vertex(x, y + h);
  }

  draw_door(x,y,w,h) {
    // draw door anticlockwise
    vertex(x, y);
    vertex(x,y-h);
    this.draw_door_arch(x-w/2, y-h, w/2);
    vertex(x-w,y-h);
    vertex(x-w,y);
  }

  draw_door_arch(x,y,r) {
    for (let t = 0; t<PI; t+=0.1) {
      vertex(x+r*cos(t), y-r*sin(t));
    }
  }
}





