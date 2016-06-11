function overlappingrectangles(){
	var x11 = 3.45;
	var x12 = 2.45;
	var x22 = 4.50;
	var y11 = 5.70;
	var y21 = 4.76;
	var y22 = 3.56;

	var x_overlap = Math.max(0,Math.min(x12,x22)-Math.max(x11-x21));
	var y_overlap = Math.max(0,Math.min(y12,y22)- Math.max(y11-y21));

	var overlapArea = x_overlap * y_overlap;

	console.log(overlapArea);



}