a.style.position='absolute';u=b.appendChild(y=a.cloneNode(h=b.bgColor=0)).getContext('2d');
setInterval(d=function(){
y.width+=0;
u.scale(y.width/200,y.height/200);
u.strokeStyle=s?'#333':'#430';
i=u.fillStyle=s?'#000':'#100';
u.beginPath();
u.moveTo(0,145);
u.bezierCurveTo(25,70,30,60,39,300);
u.fill();
u.stroke();
u.beginPath();
u.moveTo(52,56);
u.bezierCurveTo(54,35,34,35,25,22);
u.bezierCurveTo(25,23,-50,-50,0,240);
u.bezierCurveTo(60,125,0,120,23,77);
u.bezierCurveTo(49,91,36,60,36,55);
u.moveTo(26,44);
u.bezierCurveTo(26,40,28,40,16,35);
u.fill();
u.moveTo(0,99);
u.bezierCurveTo(0,99,20,70,10,300);
u.stroke();
u.beginPath();
u.moveTo(40,56);u.bezierCurveTo(52,116,-24,38,52,56);
u.moveTo(42,50);u.bezierCurveTo(38,47,38,46,37,49);
s?0:u.fillStyle='#FF0';
u.fill();
s?u.stroke():0;
if (true || h++>9){
	u.beginPath();
	u.moveTo(100,105);
	u.bezierCurveTo(110,105,115,105,115,130);
	u.bezierCurveTo(115,170,85,170,85,130);
	u.fill();
	u.bezierCurveTo(113,130,90,90,105,80);
	u.stroke();
	u.beginPath();
	u.moveTo(115,130);
	u.bezierCurveTo(115,131,85,131,85,130);
	u.bezierCurveTo(85,105,90,105,100,105);
	u.bezierCurveTo(100,131,100,131,100,131);
	h%2?u.fillStyle='#888':0;
	u.fill();
	u.stroke();
}
u.fillStyle=i;
u.beginPath();
u.moveTo(34,79);u.bezierCurveTo(34,69,34,69,32,78);
u.moveTo(39,76);u.bezierCurveTo(38,69,38,69,37,78);
u.moveTo(35,54);u.bezierCurveTo(35,66,35,66,37,54);
u.moveTo(43,55);u.bezierCurveTo(43,65,43,65,45,55);
u.fill();
u.fillStyle='#E70';
u.beginPath();
u.moveTo(24,39);
u.bezierCurveTo(24,43,22,43,22,38);
u.fill();
}, 800);
d(f=[m=c.getImageData(0,0,s=w=a.width=150,a.height=60)]);P=m.data;setInterval('n=[];for(i=9000;i--;P[O+1]=L*2-(P[O+3]=255),P[O+2]=i/w)x=i%w,Y=1+x/60,P[O=i*4]=L=n[i]=i^3179|(r=Math.random())>.2&&x^29|i<2300|i>3400|s?(f[i]*3+f[i+w]*Y+f[i-w]*(5-Y)+f[i-1]*(5-x/500))/(12.37+r)||0:255;f=n;c.putImageData(m,0,0)',40);
b.onmousedown=b.onmouseup=function(){d(s=!s,h=NaN)}