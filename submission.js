a.width = 64;
a.height = 64;
var values = [];
var imageData = c.getImageData(0,0,64,64);
var pixelData = imageData.data;
setInterval(function(){
	var newValues = [];
	for (var i=64*64; i--; ){
		var x = i % 64;
		var yCoeff = 1 + x / 64 * 2;
		newValues[i] = (
			values[i] * 5 + // self
			values[i+64] * yCoeff + // bottom
			values[i-64] * (4 - yCoeff) + // top
			values[i-1] * 3 // left
		) / (11.5 + Math.random()) || 0;
		if (x == 0 && i > 15 * 64 && i < 25 * 64){
			if (!window.off){
				newValues[i] = 255;
			}
		}
		if (x == 63){
			newValues[i] = 0;
		}
		pixelData[i*4] = newValues[i];
		pixelData[i*4+1] = newValues[i] * 2 - 256;
		pixelData[i*4+2] = 0;
		pixelData[i*4 + 3] = 255;
	}
	values = newValues;
	c.putImageData(imageData, 0, 0);
}, 40);