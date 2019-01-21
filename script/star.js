//---------------------------------------------------------------------------------------------------------------------------------------------------
extend(tStar, tShape);
//---------------------------------------------------------------------------------------------------------------------------------------------------	
function tStar() {
	this.type = 'star';
	this.status = 'norm'
	this.color = '#AAAAFF';
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tStar.prototype.enjane = function() {
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tStar.prototype.shadow = function(x, y, color) {
	ctx.beginPath();
	ctx.arc(x, y, 3, 0, 2 * Math.PI);
	ctx.fillStyle = color;
	ctx.fill();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tStar.prototype.shablon = function(x, y, color) {
	ctx.beginPath();
	ctx.arc(x, y, 1, 0, 2 * Math.PI);
	ctx.fillStyle = color;
	ctx.fill();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tStar.prototype.show = function() {
	var x = (this.x - sceneX)/this.z;
	var y = (this.y - sceneY)/this.z;
	
	this.shadow(this.oldX, this.oldY, '#000000');
	this.shablon(x, y, this.color);
	this.oldX = x; this.oldY = y;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tStar.prototype.hide = function() {
	this.shadow(this.oldX, this.oldY, '#000000');
}
//--------------------------------------------------------------------------------------------------------------------------------------------------

