/**
* Function that, given time as an hour and minute as integers, returns 
* the acute angle that the hands form on an analog clock.
*
*/

module.exports = function(hr, min){
	
	var angle =  Math.abs((0.5*(((hr%12)*60)+min)) - 6*min);
	return angle>180?180-angle%180:angle;

};
