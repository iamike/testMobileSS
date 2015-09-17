(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1078,
	fps: 16,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.c1 = function() {
	this.spriteSheet = ss["testSS_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.c2 = function() {
	this.spriteSheet = ss["testSS_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.c3 = function() {
	this.spriteSheet = ss["testSS_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00001 = function() {
	this.spriteSheet = ss["testSS_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00003 = function() {
	this.spriteSheet = ss["testSS_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00005 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00007 = function() {
	this.spriteSheet = ss["testSS_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00009 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00011 = function() {
	this.spriteSheet = ss["testSS_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00013 = function() {
	this.spriteSheet = ss["testSS_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00015 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00017 = function() {
	this.spriteSheet = ss["testSS_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00019 = function() {
	this.spriteSheet = ss["testSS_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00021 = function() {
	this.spriteSheet = ss["testSS_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00023 = function() {
	this.spriteSheet = ss["testSS_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00025 = function() {
	this.spriteSheet = ss["testSS_atlas_3"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00027 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00028 = function() {
	this.spriteSheet = ss["testSS_atlas_3"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00029 = function() {
	this.spriteSheet = ss["testSS_atlas_3"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00030 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00035 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00036 = function() {
	this.spriteSheet = ss["testSS_atlas_2"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00039 = function() {
	this.spriteSheet = ss["testSS_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00043 = function() {
	this.spriteSheet = ss["testSS_atlas_2"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Juice_one_00047 = function() {
	this.spriteSheet = ss["testSS_atlas_2"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.s1 = function() {
	this.spriteSheet = ss["testSS_atlas_4"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Tween4 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.s1();
	this.instance.setTransform(-79.5,-86.5,0.521,0.521);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-79.5,-86.5,159,173.1);


(lib.Tween3 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.c2();
	this.instance.setTransform(-124,-95);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-124,-95,248,190);


(lib.Tween2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.c3();
	this.instance.setTransform(-78.5,-97);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-78.5,-97,157,194);


(lib.Tween1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.c1();
	this.instance.setTransform(-77.5,-69.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-77.5,-69.5,155,139);


// stage content:
(lib.testSS = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// c1.png
	this.instance = new lib.Tween1("synched",0);
	this.instance.setTransform(60,379);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:146,y:531},21).wait(1));

	// c3.png
	this.instance_1 = new lib.Tween2("synched",0);
	this.instance_1.setTransform(561,424);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:540,y:528},21).wait(1));

	// c2.png
	this.instance_2 = new lib.Tween3("synched",0);
	this.instance_2.setTransform(139,152);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:275},21).wait(1));

	// s1.png
	this.instance_3 = new lib.Tween4("synched",0);
	this.instance_3.setTransform(518.5,208.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:565.5,y:287.4},21).wait(1));

	// Layer 1
	this.instance_4 = new lib.Juice_one_00001();
	this.instance_4.setTransform(94,77.4,0.587,0.587);

	this.instance_5 = new lib.Juice_one_00003();
	this.instance_5.setTransform(94,77.4,0.587,0.587);

	this.instance_6 = new lib.Juice_one_00005();
	this.instance_6.setTransform(94,77.4,0.587,0.587);

	this.instance_7 = new lib.Juice_one_00007();
	this.instance_7.setTransform(94,77.4,0.587,0.587);

	this.instance_8 = new lib.Juice_one_00009();
	this.instance_8.setTransform(94,77.4,0.587,0.587);

	this.instance_9 = new lib.Juice_one_00011();
	this.instance_9.setTransform(94,77.4,0.587,0.587);

	this.instance_10 = new lib.Juice_one_00013();
	this.instance_10.setTransform(94,77.4,0.587,0.587);

	this.instance_11 = new lib.Juice_one_00015();
	this.instance_11.setTransform(94,77.4,0.587,0.587);

	this.instance_12 = new lib.Juice_one_00017();
	this.instance_12.setTransform(94,77.4,0.587,0.587);

	this.instance_13 = new lib.Juice_one_00019();
	this.instance_13.setTransform(94,77.4,0.587,0.587);

	this.instance_14 = new lib.Juice_one_00021();
	this.instance_14.setTransform(94,77.4,0.587,0.587);

	this.instance_15 = new lib.Juice_one_00023();
	this.instance_15.setTransform(94,77.4,0.587,0.587);

	this.instance_16 = new lib.Juice_one_00025();
	this.instance_16.setTransform(94,77.4,0.587,0.587);

	this.instance_17 = new lib.Juice_one_00027();
	this.instance_17.setTransform(94,77.4,0.587,0.587);

	this.instance_18 = new lib.Juice_one_00028();
	this.instance_18.setTransform(94,77.4,0.587,0.587);

	this.instance_19 = new lib.Juice_one_00029();
	this.instance_19.setTransform(94,77.4,0.587,0.587);

	this.instance_20 = new lib.Juice_one_00030();
	this.instance_20.setTransform(94,77.4,0.587,0.587);

	this.instance_21 = new lib.Juice_one_00035();
	this.instance_21.setTransform(94,77.4,0.587,0.587);

	this.instance_22 = new lib.Juice_one_00036();
	this.instance_22.setTransform(94,77.4,0.587,0.587);

	this.instance_23 = new lib.Juice_one_00039();
	this.instance_23.setTransform(94,77.4,0.587,0.587);

	this.instance_24 = new lib.Juice_one_00043();
	this.instance_24.setTransform(94,77.4,0.587,0.587);

	this.instance_25 = new lib.Juice_one_00047();
	this.instance_25.setTransform(94,77.4,0.587,0.587);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(302.5,596,657,653.7);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;