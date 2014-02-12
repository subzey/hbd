b.bgColor=0;
var act = true;

c.scale(a.width/200,a.height/200);
c.beginPath();
c.moveTo(52,56);
c.strokeStyle=act?'#730':'#333';
c.bezierCurveTo(24,0,-50,-50,0,240);
c.bezierCurveTo(84,120,0,120,24,56);
c.stroke(c.fillStyle=act?'#310':'#100');
c.fill();
c.beginPath();
c.moveTo(40,56);
c.bezierCurveTo(52,116,-24,36,52,56);
act&&(c.fillStyle="#FF0");
c.fill();
