function setup() {
  createCanvas(800, 600);
                    background(100, 10, 256, 50);
}


function draw() {
                  colorMode(RGB);
                  strokeWeight(5);
  
                  stroke(250, 85, 130);
  
                  line(width/3, 400, width/3+300, 400 );
                  

                  noFill();
                  stroke(255, 150, 10);
                  rect(width/3, height/3, 300, 300);
                  

                  strokeWeight(7);
                  fill(100,256, 200, 30); 
                  ellipse(pmouseX, pmouseY, 60, 60);
                  
                }
