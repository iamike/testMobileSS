(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 10,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.Juice_one_00011 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00013 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.testSS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Juice_one_00013();
	this.instance.setTransform(-8,-320);

	this.instance_1 = new lib.Juice_one_00011();
	this.instance_1.setTransform(-8,-320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(267,-120,640,1078);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;