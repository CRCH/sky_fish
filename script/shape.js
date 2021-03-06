//---------------------------------------------------------------------------------------------------------------------------------------------------
function tShape(params) {	
	this.r = 0;
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.a = 0;

	this.oldX = 0;
	this.oldY = 0;
		
	this.id     = getId();
	this.type   = 'shape';
	this.group  = 'none';
	this.status = 'norm';
	this.color  = 'blue';
	
	this.setParam(params);
}
//--------------------------------------------------------------------------------------------------------------------------------------------------
tShape.prototype.setParam = function(params) {
	params = params || {};	
		
	for (var key in params) eval("this." + key + " = " + params[key]);  			
}
//---------------------------------------------------------------------------------------------------------------------------------------------------	
tShape.prototype.getParam = function() {
		var mas = {};
		var i, n = arguments.length;
		var key;
			
		for(i = 0; i < arguments.length; i++)  {	        
				key = arguments[i];
				mas[key] = this[key];				
		}	
		
		return mas;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tShape.prototype.hide = function() {  
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tShape.prototype.enjane = function() {
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tShape.prototype.show = function() {
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tShape.prototype.destroy = function() {
	this.status = 'delete'; 
}
//---------------------------------------------------------------------------------------------------------------------------------------------------

