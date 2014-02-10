a.width = 99;
a.height = 48;
var values = [];
var imageData = c.getImageData(0,0,99,48);
var pixelData = imageData.data;
setInterval(function(){
	var newValues = [];
	for (var i=99*48; i--; ){
		var x = i % 99;
		var xCoeff = (x/128/3);
		var yCoeff = 1 + x / 128 * 3;
		newValues[i] = (
			values[i] * 3 + // self
			values[i+99] * yCoeff + xCoeff * 2 + // bottom
			values[i-99] * (5 - yCoeff) + xCoeff * 2 + // top
			values[i-1] * (5 - xCoeff) // left
		) / (12.4 + Math.random()) || 0;
		if (x === 0 && i > 2 * 99 && i < 9 * 99){
			if (!window.off){
				newValues[i] = 255;
			}
		}
		pixelData[i*4] = newValues[i];
		pixelData[i*4+1] = newValues[i] * 2 - 256;
		pixelData[i*4+2] = i/(99*48)*60;
		pixelData[i*4 + 3] = 255;
	}
	values = newValues;
	c.putImageData(imageData, 0, 0);
}, 40);