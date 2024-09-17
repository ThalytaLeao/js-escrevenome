function setup() {
    createCanvas(600, 600)
    background("rgb(14,13,13)");
  }
   
  function draw() {
  
    stroke("blue");
    fill("red");
  
    // console.log(mouseIsPressed);
  
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 25, 35);
    }
  }