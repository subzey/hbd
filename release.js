a.style.position='absolute';z=b.appendChild(y=a.cloneNode()).getContext('2d');A=b.bgColor=0;
d=function(){
y.width=y.width;
z.scale(y.width/200,y.height/200);
z.beginPath();
z.moveTo(52,56);
z.strokeStyle=A?'#430':'#333';
z.bezierCurveTo(24,0,-50,-50,0,240);
z.bezierCurveTo(84,120,0,120,24,56);
z.stroke(z.fillStyle=A?'#100':'#000');
z.fill();
z.beginPath();
z.moveTo(40,56);
z.bezierCurveTo(52,116,-24,36,52,56);
A&&(z.fillStyle="#FF0");
z.fill();
};d();
V=[I=c.getImageData(0,0,w=a.width=150,a.height=60)];P=I.data;setInterval('N=[];for(i=9000;i--;P[O+1]=L*2-(P[O+3]=255),P[O+2]=i/w)x=i%w,Y=1+x/60,P[O=i*4]=L=N[i]=(x^29|i<2300|i>3400|!A)?(V[i]*3+V[i+w]*Y+V[i-w]*(5-Y)+V[i-1]*(5-x/500))/(12.37+Math.random())||0:255;V=N;c.putImageData(I,0,0)',40);
b.onkeydown=function(){d(A=1)};b.onkeyup=function(){d(A=0)};