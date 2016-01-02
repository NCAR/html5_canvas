var Ball = function(ballContext, x, y, ballRadius, ballColors, ballFillStyle) {
	var _x = x;
	var _y = y;
	var _radius = ballRadius;
	var _ballColors = ballColors;
	var _context = ballContext;
	var _ballFillStyle = ballFillStyle;
	
	// Single color for solid fill, gradient object for linear or radial gradient fill
	var _fill; 
	
	return {
		drawBall : function() {
			_context.beginPath();
			_context.arc(_x, _y, _radius, 0, Math.PI*2, true);
			
			switch (_ballFillStyle) {
				case 'radial': // Radial gradient fill
					_fill = _context.createRadialGradient(_x, _y, 0, _x, _y, _radius);
					_fill.addColorStop(0, _ballColors[0]);
					_fill.addColorStop(1, _ballColors[1]);
					break;
				case 'linear': // Linear (horizontal or side-to-side) gradient fill
					_fill = _context.createLinearGradient(_x - _radius, _y, _x + _radius, _y);
					_fill.addColorStop(0, _ballColors[0]);
					_fill.addColorStop(1, _ballColors[1]);
					break;
				default: // Solid color fill (no gradient)
					_fill = _ballColors;
			}
			
			_context.fillStyle = _fill;
			_context.fill();
		},
		set radius(ballRadius){
			_radius = ballRadius;
		},
		set ballColors(colors){
			_ballColors = colors;
		}
	};
}