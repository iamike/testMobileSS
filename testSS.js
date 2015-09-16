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



(lib.Juice_one_00001 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00003 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00005 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00007 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00009 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00011 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00013 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



// stage content:
(lib.testSS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance = new lib.Juice_one_00013();
	this.instance.setTransform(-8,-320);

	this.instance_1 = new lib.Juice_one_00011();
	this.instance_1.setTransform(-8,-320);

	this.instance_2 = new lib.Juice_one_00009();
	this.instance_2.setTransform(-8,-320);

	this.instance_3 = new lib.Juice_one_00007();
	this.instance_3.setTransform(-8,-320);

	this.instance_4 = new lib.Juice_one_00005();
	this.instance_4.setTransform(-8,-320);

	this.instance_5 = new lib.Juice_one_00003();
	this.instance_5.setTransform(-8,-320);

	this.instance_6 = new lib.Juice_one_00001();
	this.instance_6.setTransform(-8,-320);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(267,-120,640,1078);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;