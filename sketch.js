
// give movableShape a nice, descriptive name to work with here
// (i.e., replace the variable name myShape with something more descriptive (e.g., myCar, myRocket).)
var myCar = movableShape;

// Redefine drawShape() by putting your moving shape in here
// (Basically, you can copy and paste your code from last time, although you may wish to refactor it so that it's more readable.)
// That said, you may wish to try putting your unrefactored, raw drawing code from week 1 in here
myCar.drawShape = function () {
  ellipse(270, 460, 400, 100); // body of car
	fill(0); // black
  ellipse(160, 515, 60, 60); // back wheel
  ellipse(375, 515, 60, 60); // front wheel
	fill(300);//white
  ellipse(160, 515, 30, 30);//back wheel white
  ellipse(375, 515, 30, 30);//front wheel white
  ellipse(200, 400, 50, 100);//back seat
  ellipse(325, 400, 50, 100);//front seat
	fill(0);//black steering wheel
  ellipse(400, 415, 50, 50);//outer steering wheel
	fill(300);//white
  ellipse(400, 415, 30, 30);//inner steering wheel
};

setup = function() {
	createCanvas(600, 600);
	myCar.speed.x *= 0.5;

};

draw = function() {
  background(100); // refresh the background
  myCar.display(); // display myShape
  myCar.update(); // and then update it
};
