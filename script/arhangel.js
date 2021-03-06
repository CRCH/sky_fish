//---------------------------------------------------------------------------------------------------------------------------------------------------
extend(tArhAngel, tAngel);
//---------------------------------------------------------------------------------------------------------------------------------------------------
function tArhAngel(params) {
	this.type =   'arhAngel';
	this.group =  'physical';
	this.status = 'norm';

	this.color = '#8888FF';

	this.r = 10;
	this.x = 600;
	this.y = 600;
	this.dx = 0;	
	this.dy = 0;
	this.a = -2.0;
	this.da = 0;	

	this.m = 150.0;

	this.maxSpeed = 4.0;
	this.maxPower = 0.01;

	this.leftPower = false;
	this.rightPower = false;	

	this.leftPowerValue = 0;
	this.rightPowerValue = 0;

	this.oldLeftPowerValue = 0; 
	this.oldRightPowerValue = 0;

	this.maxCooldownGun = 30.0;
	this.cooldownGun = 0.0;

	this.shield = true;
	this.cooldownShield = 0.0;
	this.radiusGun = 500.0;	
	this.maxCooldownShield = 5.0;
	
	this.score = 30;	
	
	this.setParam(params);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tArhAngel.prototype.enjaneExtended = function() {
	if (!this.shield) {
		this.maxCooldownShield
		this.cooldownShield -= 0.1;
		if (this.cooldownShield < 0) this.shield = true;
       }
	
	this.cooldownGun -= 0.1;
	if (this.cooldownGun < 0) this.cooldownGun = 0;
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tArhAngel.prototype.shadow = function(x, y, a, leftValue, rightValue) {
	var x1, y1;	

	ctx.lineWidth = 1;
	ctx.strokeStyle = "#000000";
	ctx.fillStyle = "#000000";
       
	// body	
	ctx.beginPath();	
	ctx.arc(x, y, this.r + 8, 0, 2 * Math.PI);	
	ctx.fill();	

	// tail
	this.shadowTail(x, y, a, leftValue, rightValue);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tArhAngel.prototype.shablon = function(x, y, a, leftValue, rightValue) {
	var x1, y1;	

	ctx.lineWidth = 1;
	ctx.strokeStyle = this.color;
       
	// body			
	ctx.beginPath();	
	ctx.arc(x, y, this.r, 0, 2 * Math.PI);	
	ctx.stroke();

	// shield
	if (this.shield) {
		ctx.lineWidth = 3;
		ctx.strokeStyle = "#444466";

		ctx.beginPath();	
		ctx.arc(x, y, this.r + 6, 0, 2 * Math.PI);	
		ctx.stroke();
	}
	
	// tail
	this.shablonTail(x, y, a, leftValue, rightValue);
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tArhAngel.prototype.hit = function(plazmaDx, plazmaDy) {
	var i, dx, dy;

	if (this.shield) {
		this.hitShield(plazmaDx, plazmaDy);		
		this.cooldownShield = this.maxCooldownShield;
		return;
	}
		
	for (i = 0; i < this.r; i++) {
		dx = Math.random() * 3.0 - 1.5 + plazmaDx / 3.0;
		dy = Math.random() * 3.0 - 1.5 + plazmaDy / 3.0;
		scene.add(new tMineral({ x: this.x, y: this.y, dx: dx, dy: dy, score: this.score, color: "'#CC8844'" }));
	}
	
	this.destroy();
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
tArhAngel.prototype.hitShield  = function(plazmaDx, plazmaDy) {
	var i, dx, dy;
	
	this.shield = false;

	for (i = 0; i < 5; i++) {
		dx = Math.random() * 5.0 - 1.5 + plazmaDx / 5.0;
		dy = Math.random() * 5.0 - 1.5 + plazmaDy / 5.0;

		scene.add(new tMineral({ x: this.x, y: this.y, 
					 dx: -dx,   dy: -dy,
					 r: 1.0,	
					 t: 2.0,	
					 lockT: 0.5,					
					 score: 1, 
					 color: "'#88FF88'" }));
	}
}
//---------------------------------------------------------------------------------------------------------------------------------------------------
