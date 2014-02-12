V=[];
I=c.getImageData(0,0,a.width=150,a.height=60);P=I.data;
setInterval(function(){
	N=[];
	for(i=150*60;i--;){
		x=i%150;
		X=x/500;
		Y=1+x/60;
		N[i]=(x==30&&i>16*150&&i<24*150)?255:(V[i]*3+V[i+150]*Y+V[i-150]*(5-Y)+V[i-1]*(5-X))/(12.37+Math.random())||0;
		P[i*4]=N[i];
		P[i*4+1]=N[i]*2-256;
		P[i*4+2]=i/150;
		P[i*4+3]=255;
	}
	V=N;
	c.putImageData(I,0,0);
}, 40);