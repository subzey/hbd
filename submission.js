a.width=123;a.height=48;
V=[];
I=c.getImageData(0,0,123,48);P=I.data;
setInterval(function(){
	N=[];
	for(i=123*48;i--;){
		x=i%123;
		X=x/512;
		Y=1+x/64;
		N[i]=(x==24&&i>13*123&&i<18*123)?255:(V[i]*3+V[i+123]*Y+X*2+V[i-123]*(5-Y)+X*2+V[i-1]*(5-X))/(12.4+Math.random())||0;
		P[i*4]=N[i];
		P[i*4+1]=N[i]*2-256;
		P[i*4+2]=i/(123*48)*60;
		P[i*4+3]=255;
	}
	V=N;
	c.putImageData(I,0,0);
}, 40);