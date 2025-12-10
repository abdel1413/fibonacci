function countRectangles(width, height) {
    //find the possible ways for horizontal size ahd vertical ones
    // 1 for horizontal: width * width+1/2 
    // 2 for vertical : height* height+1/2
    //3  multiply both
     return ((width*(width+1))*(height*(height +1)))/4;
 
}