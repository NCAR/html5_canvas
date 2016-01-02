//var Box = function(boxContext, x, y, boxRadius, boxColors, boxFillStyle) {

var Box = function(boxContext, x, y, boxSize, boxColors) {
	var _x = x;
	var _y = y;
	var _size = boxSize;
	var _boxColors = boxColors;
	var _context = boxContext;
	//var _boxFillStyle = boxFillStyle;
	
	// Single color for solid fill, gradient object for linear or radial gradient fill
	var _fill; 
	
	return {
		drawBox : function() {
			//_context.beginPath();
			//_context.arc(_x, _y, _radius, 0, Math.PI*2, true);
			
			/*switch (_boxFillStyle) {
				case 'radial': // Radial gradient fill
					_fill = _context.createRadialGradient(_x, _y, 0, _x, _y, _radius);
					_fill.addColorStop(0, _boxColors[0]);
					_fill.addColorStop(1, _boxColors[1]);
					break;
				case 'linear': // Linear (horizontal or side-to-side) gradient fill
					_fill = _context.createLinearGradient(_x - _radius, _y, _x + _radius, _y);
					_fill.addColorStop(0, _boxColors[0]);
					_fill.addColorStop(1, _boxColors[1]);
					break;
				default: // Solid color fill (no gradient)
					_fill = _boxColors;
			}*/
			
			// Solid color fill (no gradient)
			_fill = _boxColors;
			
			_context.fillStyle = _fill;
			//_context.fill();
			
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