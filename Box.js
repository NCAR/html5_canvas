var Box = function(boxContext, x, y, boxSize, boxColors, boxFillStyle) {
	var _x = x;
	var _y = y;
	var _size = boxSize;
	var _boxColors = boxColors;
	var _context = boxContext;
	var _boxFillStyle = boxFillStyle;
	
	// Single color for solid fill, gradient object for linear or radial gradient fill
	var _fill; 
	
	return {
		drawBox : function() {
			
			switch (_boxFillStyle) {
				case 'radial': // Radial gradient fill
					var xCenter = _x + 0.5*_size;
					var yCenter = _y + 0.5*_size;
					var gradientSize = 0.5 * Math.SQRT2 * _size;
					_fill = _context.createRadialGradient(xCenter, yCenter, 0, xCenter, yCenter, gradientSize);
					_fill.addColorStop(0, _boxColors[0]);
					_fill.addColorStop(1, _boxColors[1]);
					break;
				case 'linear': // Linear (horizontal or side-to-side) gradient fill
					_fill = _context.createLinearGradient(_x, _y, _x + _size, _y);
					_fill.addColorStop(0, _boxColors[0]);
					_fill.addColorStop(1, _boxColors[1]);
					break;
				default: // Solid color fill (no gradient)
					_fill = _boxColors;
			}
			
			_context.fillStyle = _fill;
			
			// Draw a rectangle (xPosition, yPos, width, height)
        	_context.fillRect (_x, _y, _size, _size);
		},
		set size(boxSize){
			_size = boxSize;
		},
		set boxColors(colors){
			_boxColors = colors;
		}
	};
}