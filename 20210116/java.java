/*


8 concentric circles. 
A circle moves around each circle. 
A point on each of these circles represents the key for each circle. 
Pairs of key points are joined 
  if the centres of their circles 
  are less than max_dist apart

There is quite a lot of control over the image
r - reverse even circles
p - shorter persistence of the image
o - longer persistence of the image
c - more circles (up to 20)
v - fewer circles (down to 3)
m - increase interaction range for lines (max_dist)
n - decrease interaction range for lines (max_dist)
e - show the construction circles
w - hide the construction circles
s - make circles bigger
a - make circles smaller
1 - save image and settings
    - a text file will be saved containing
            max_dist
            circleDisp
            inner_circle_size
            persistence
            reverse
b - bezier
l - (letter l) line
j - curve
*/

int noCircles;
int circleDisp;

  float [] x;
  float [] y;
  float [] x1;
  float [] y1;
  float [] x2;
  float [] y2;
  float [] r;
  float [] angle;
  float [] speed;
  float [] r_inner;
  float [] angle_inner;
  float [] speed_inner;
  float max_dist;
  float min_dist;
  float inner_circle_size;
  int persistence;
  int reverse = -1;
  float r_diff;
  boolean bDrawEllipse = false;
  String pLineType;
  
void setup() {
  size(800, 800);
  background(0);
  rectMode(CENTER);
  ellipseMode(CENTER);
  noFill();
  
  noCircles = 20;
  circleDisp = 8;
  max_dist = 150; 
  min_dist=800;  
  persistence = 7;
  inner_circle_size = 70;
  pLineType = "bezier2";
  
  
  x = new float[noCircles];
  y = new float[noCircles];
  x1 = new float[noCircles];
  y1 = new float[noCircles];
  x2 = new float[noCircles];
  y2 = new float [noCircles];
  r = new float[noCircles];
  angle = new float[noCircles];
  speed = new float[noCircles];
  r_inner = new float[noCircles];
  angle_inner = new float[noCircles];
  speed_inner = new float[noCircles];
  
  r_diff = (height/2)/circleDisp;
  
  for (int i=0; i<noCircles; i++) {
    x[i] = height/2;
    y[i] = width/2;
    r[i] = r_diff * (i+1);
    angle[i] = i;
    speed[i] = random(3,12)/12;
    angle_inner[i] = i;
    r_inner[i] = inner_circle_size;
    speed_inner[i] = random(3,12)/24;
  }
   background (0);
   rectMode(CORNER);
}

void draw() {

    //blend the old frames into the background
  //blendMode(BLEND);
  noStroke();
  fill(0, persistence);
  rect(0, 0, width, height);
  
  
 //background(0);
  
  for (int i=0; i<circleDisp; i++) {
  //println (i);
    if (isEven(i)) {
    
  angle[i] = angle[i]+0.01*speed[i];
  angle_inner[i] = angle_inner[i] + 0.1*speed_inner[i];
  
    } else {
  angle[i] = angle[i]+reverse*0.01*speed[i];
  angle_inner[i] = angle_inner[i] + reverse*0.1*speed_inner[i]; 
      
    }
  
  stroke (#010101, 20);
  //ellipse (x[i],y[i],r[i]*2, r[i]*2);
  
  x1[i] = x[i]+r[i]*sin(angle[i]);
  y1[i] = y[i]+r[i]*cos(angle[i]);
  
  stroke (#00ff00);
  // plot the point on the circumference at angle
  //ellipse (x1[i], y1[i], 3,3);
  //drawCircle2 (x1[i], y1[i], r_inner[i], angle_inner[i]);
  
  stroke (#ffffff, 50);
  if (bDrawEllipse) {
    ellipse (x1[i],y1[i],r_inner[i]*2, r_inner[i]*2);
  }
  //// need x2 here
  x2[i] = x1[i]+r_inner[i]*sin(angle_inner[i]);
  y2[i] = y1[i]+r_inner[i]*cos(angle_inner[i]);
  
  stroke (#ff0000);
  // plot the point on the circumference at angle
  //ellipse (x2[i], y2[i], 3,3);
  
  }
    
  // let's find the circles that are close and far apart
  
    for (int i=0; i<circleDisp; i++) {
      for (int j=0; j<circleDisp; j++) {
        
        // check if the circle centres are less than r-diff apart
       
        float dist_1 = dist(x1[i],y1[i],x1[j],y1[j]);
        float dist_2 = dist(x2[i],y2[i],x2[j],y2[j]);

        if (dist_1 != 0 && dist_2!=0) {
        if (bCheckDistMax (x1[i],y1[i],x1[j],y1[j],max_dist)) {
          float color_r;
          float color_g;
          
          if (dist_2>dist_1) {
            color_r = map(
              dist_1,
              0,dist_2,
              0,255
              );
            color_g = map(
              dist_2, 
              0, dist_1, 
              0, 255);
            } else {
            color_r= map(
              dist_1,
              0, dist_2,
              0,255);
            color_g = map(
              dist_2, 
              0, dist_1, 
              0, 255);  
          }
          
          //println (color_r);
          stroke (color_r,color_g,0);
          
          switch (pLineType) {
            case "line":
              line(x2[i],y2[i],x2[j],y2[j]);
              break;
            case "bezier":
              // anchor, control, control, anchor
              // x2, y2, x1, y1 , x1,y1,  x2, y2
              bezier(
                    x2[i],y2[i],
                    x1[i],y1[i],
                    x1[j],y1[j],
                    x2[j],y2[j]
                    );
              break;
            case "bezier2":
              // anchor, control, control, anchor\
              // reversing control and anchor points
              // x2, y2, x1, y1 , x1,y1,  x2, y2
              bezier(
                    x1[i],y1[i],
                    x2[i],y2[i],
                    x2[j],y2[j],
                    x1[j],y1[j]
                    );
              break;
            case "curve":
              // control, point, point, control
              curve(
                    x1[i],y1[i],
                    x2[i],y2[i],
                    x2[j],y2[j],
                    x1[j],y1[j]
                    );
              break;
          }
          
        }
        }
        
    }
  }
  
  

  
} //end of draw

boolean bCheckDistMax (float x1, float y1, float x2, float y2, float max_dist) {
  // checks if (x1,y1) and (x2,y2) are less than max_dist apart
  
  return dist(x1,y1,x2,y2) < max_dist;

}

boolean bCheckDistMin (float x1, float y1, float x2, float y2, float min_dist) {
  // checks if (x1,y1) and (x2,y2) are greater than min_dist apart
  
  return dist(x1,y1,x2,y2) > min_dist;

}

boolean isEven (int n) {
  if (n%2 == 0) {return true;} else {return false;} 
}

void keyReleased() {
     
    switch (key) {
      case 'r':
        reverse = reverse * -1;
        println ("reverse: "+reverse);
        break;
      case 'p':
        persistence++;
        println("persistence: "+persistence);
        break;
      case 'o':
        persistence--;
        println("persistence: "+persistence);
        break;
      case 'c':
        if (circleDisp < noCircles) {
          circleDisp++;
          r_diff = (height/2)/circleDisp;
          for (int i=0; i<circleDisp; i++) {
            r[i] = r_diff * (i+1);
            r_inner[i] = inner_circle_size;
            println ("r_diff:" + r_diff);
          }  
      }
        println("circleDisp: "+ circleDisp);
        break;
      case 'v':
        if (circleDisp > 3) {
          circleDisp--;
          r_diff = (height/2)/circleDisp;
          for (int i=0; i<circleDisp; i++) {
            r[i] = r_diff * (i+1);
            r_inner[i] = inner_circle_size;
            println ("r_diff:" + r_diff);
          }  
        }
        println("circleDisp: "+ circleDisp);
        break;
      case 'm': 
        if (max_dist<width) {
          max_dist=max_dist+10;
        }
        println("max_dist"+ max_dist);
        break;
      case 'n':
        if (max_dist>20) {
          max_dist = max_dist-10;
        }
        println("max_dist"+ max_dist);
        break;
      case 'e':
        bDrawEllipse = true;
        break;
      case 'w': 
        bDrawEllipse = false;
        break;
      case 's': // make circles bigger
        inner_circle_size++;
        println("inner_circle_size: "+inner_circle_size);
        for (int i=0; i<circleDisp; i++) {
          r_inner[i] = inner_circle_size;
        }
         break;
        case 'a': // make circles smaller
        inner_circle_size--;
        println("inner_circle_size: "+inner_circle_size);
        for (int i=0; i<circleDisp; i++) {
          r_inner[i] = inner_circle_size;
        }
         break;
        case 'l': // letter l, line
          pLineType = "line";
          println (pLineType);
          break;
        case 'b':
          pLineType = "bezier";
          println (pLineType);
          break;
        case 'j': 
          pLineType = "curve";
          println (pLineType);
          break;
        case 'z':
          pLineType = "bezier2";
          println (pLineType);
          break;
        case '1': // dump settings
          String [] settings = {
            "max_dist", str(max_dist),
            "circleDisp",  str(circleDisp),
            "inner_circle_size", str(inner_circle_size),
            "persistence", str(persistence),
            "reverse", str(reverse),
            "pLineType", pLineType
          };
          saveStrings("settings_"+ hour() + minute() + second ()+".txt", settings);
          saveFrame("concentric8_"+ hour() + minute() + second ()+".jpg");
          break;
    }
}