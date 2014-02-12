/**
 * BREATH
 * js1k interactive demo
 * subzey, 2014
**/

// Let canvas be positioned absolutely.
// Its position is already (0, 0), so we don't need to set left/top
a.style.position = 'absolute';
// Set <body> background to black. Not actually needed, but it looks better
// while loading or after resize
b.bgColor = '#000000';
// Define newData to something falsy
var newData = null;
// Clone canvas element. It already have position: absolute
clonedCanvas = a.cloneNode();
// Append it to body. Now we have two layers for drawing
b.appendChild(clonedCanvas);
// Get its context
clonedCanvasContext = clonedCanvas.getContext('2d');

// Function to draw dragon.
// It colud be done inside setTimeout, but this approach is more performant
// and allows intro text
var drawDragon = function() {
	// Set width to canvas. It act like a reset
	clonedCanvas.width = clonedCanvas.width;
	// Set proper scale, so we can use absolute values for drawing.
	// Context width stays the same, so we get smooth curves
	clonedCanvasContext.scale(clonedCanvas.width / 200, clonedCanvas.height / 200);
	// Outline color, depending on flame throwing state
	clonedCanvasContext.strokeStyle = fireDisabled ? '#333333' : '#443300';
	// Fill color
	clonedCanvasContext.fillStyle = fireDisabled ? '#000000' : '#110000';

	// Draw background wing
	clonedCanvasContext.beginPath();
	clonedCanvasContext.moveTo(0, 145);
	clonedCanvasContext.bezierCurveTo(25, 70, 30, 60, 39, 300);
	clonedCanvasContext.fill();
	clonedCanvasContext.stroke();

	// Draw head and belly (filled)
	clonedCanvasContext.beginPath();
	clonedCanvasContext.moveTo(52, 56);
	clonedCanvasContext.bezierCurveTo(24, 0, -50, -50, 0, 240);
	clonedCanvasContext.bezierCurveTo(60, 125, 0, 120, 23, 76);
	clonedCanvasContext.bezierCurveTo(49, 91, 36, 60, 36, 55);

	// Draw eyebrow
	clonedCanvasContext.moveTo(26, 44);
	clonedCanvasContext.bezierCurveTo(26, 40, 28, 40, 16, 35);

	// Fill entire body
	clonedCanvasContext.fill();

	// Draw foreground wing. We don't need to fill it
	clonedCanvasContext.moveTo(0, 99);
	clonedCanvasContext.bezierCurveTo(0, 99, 20, 70, 10, 300);

	// Draw outlines: head, belly, eyebrow, fg wing
	// Now we have plenty of garbage near mouth
	clonedCanvasContext.stroke();

	// Draw mouth
	clonedCanvasContext.beginPath();
	clonedCanvasContext.moveTo(40, 56);
	clonedCanvasContext.bezierCurveTo(52, 116, -24, 38, 52, 56);
	if (fireDisabled) {
		// Outline mouth if not flamethrowing.
		// Looks not good, but it's better than empty hole
		// Fill color stays the same, black
		clonedCanvasContext.stroke();
	} else {
		// Flamethrowing, change fill color to yellow
		clonedCanvasContext.fillStyle = '#FFFF00';
	}
	// Fill
	clonedCanvasContext.fill();

	// Draw and fill an eye
	clonedCanvasContext.fillStyle = '#AA7700';
	clonedCanvasContext.beginPath();
	clonedCanvasContext.moveTo(24, 39);
	clonedCanvasContext.bezierCurveTo(24, 43, 22, 43, 22, 38);
	clonedCanvasContext.fill();

	// If setTimeout'ed function never started yet, show help
	if (!newData) {
		clonedCanvasContext.fillText('HOLD MOUSE BUTTON', 45, 9);
	}
};

// Global flamethrowing state
fireDisabled = true;

// Change context size while keeping canvas size
// Flame would be shown stretched
a.width = 150;
a.height = 60;

// Get image data. We don't need actual pixel data, it will be used for
// rendering
imageData = c.getImageData(0, 0, a.width, a.height);
// Get reference to array with channel RGBA data
pixelChannelValues = imageData.data;


// Initialize intensity array. It's empty, we can think of it as full of
// undefineds
intensityData = [];

// Draw dragon for the first time
drawDragon();

// Every 40 ms...
setInterval(function() {
	// new values
	var newData = [];
	for (var i = 0; i < a.width * a.height; i++) {
		// x coordinate
		var x = i % a.width;
		// y coefficient. FLames should move down at the left side of the
		// screen and up at the right
		var yCoefficient = 1 + x / 60;
		// Intensity for pixel
		var rand = Math.random();
		var L;
		if (
			(i!= 3179 || rand) && // small "idle" flame
			(x !== 29 || i < 16 * a.width || i > 22 * a.width || fireDisabled)
		) {
			// Normal pixels. Use matrix convolution
			L = (
				// x3 from self
				intensityData[i] * 3 +
				// x(1..3.5) from bottom pixel
				intensityData[i + a.width] * yCoefficient +
				// x(3.5..1) from top pixel
				intensityData[i - a.width] * (5 - yCoefficient) +
				// x(4.7..5) from left pixel. Flames should move slightly
				// slower closed to the right edge
				// Flame will wrap around the screen, that's okay
				intensityData[i - 1] * (5 - x / 500)
			) / (
				// Carefully picked number
				12.37 +
				// Randomness! This thing makes flame fuzzy
				rand
			) || 0;
		} else {
			// Row of "iginition" pixels. Located in mounth of dragon
			L = 255;
		}
		// Save
		newData[i] = L;
		// Get offset (R,G,B,A for each pixel)
		var offset = i * 4;
		// Red. Equals intensity
		pixelChannelValues[offset] = L;
		// Green. 0 for values 0..127, then goes up to 255 at 255
		// Flame becomes yellow at high intensity
		pixelChannelValues[offset + 1] = L * 2 - 255;
		// Blue. Just vertical gradient. Values are small compared to
		// R and G, so it have almost no effect on flame
		pixelChannelValues[offset + 2] = i / 150;
		// Transparency. Always opaque.
		pixelChannelValues[offset + 3] = 255;
	}
	// Replace the data. It would be used for calculation at next "tick"
	intensityData = newData;
	// Draw flames on canvas
	c.putImageData(imageData, 0, 0);
}, 40);
// Toggle state and re-render dragon
b.onmousedown = b.onmouseup = function() {
	fireDisabled = !fireDisabled;
	drawDragon();
};