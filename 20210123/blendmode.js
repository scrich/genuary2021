function keyTyped() {
    switch(key) {
        case 's':
            blendMode(SCREEN);
            break;
        case 'm':
            blendMode(MULTIPLY);
            break;
        case 'b':
            blendMode(BLEND);
            break;
        case 'a':
            blendMode(ADD);
            break;
        case 'd':
            blendMode(DARKEST);
            break;
        case 'f':
            blendMode(DIFFERENCE);
            break;
        case 'e':
            blendMode(EXCLUSION);
            break;
        case 'l':
            blendMode(LIGHTEST);
            break;
        case 'r':
            blendMode(REPLACE);
            break;
        case 'o':
            blendMode(OVERLAY);
            break;
        case 'g':
            blendMode(DODGE);
            break;
        case 'u':
            blendMode(BURN);
            break;
        case 'z':
            blendMode(HARD_LIGHT);
            break;
        case 'x':
            blendMode(SOFT_LIGHT);
            break;
    }
   
    clear();
    background(bg);
    redraw();
    return false; // prevent default
  }