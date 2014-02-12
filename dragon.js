b.bgColor=0
var act = true;

c.scale(a.width/500, a.height/500);
c.moveTo(0,0);
c.lineTo(500,500);
c.moveTo(500,0);
c.lineTo(0,500);
c.stroke();

// Top
c.beginPath();
c.moveTo(130, 140);
c.strokeStyle=act?'#730':'#333';
c.lineWidth = 2.5;
c.fill();
c.bezierCurveTo(
	60, 0,
	-30, 20,
	-40, 90
);
c.lineTo(0, 600);
c.bezierCurveTo(
	210, 300,
	0, 300,
	60, 140
);
c.fillStyle = act?'#310':'#100';
c.stroke();
c.fill();

// Front



// Mouth
c.beginPath();
c.moveTo(100, 140);
c.bezierCurveTo(
	130, 290,
	-60, 90,
	130, 140
);
act && (c.fillStyle="#FF0");
c.fill();
