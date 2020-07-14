let width = 500
let height = 500;
let w = 50;

var stage = new Konva.Stage({
	container: 'canvas_trigger',
	width: width,
	height: height,
});

var layer = new Konva.Layer();
var rectX = 0;
var rectY = 0;

var box = new Konva.Rect({
	x: rectX,
	y: rectY,
	width: w,
	height: w,
	fill: 'green',
	stroke: 'black',
	strokeWidth: 3,
	draggable: true,
});

box.on('mouseover', function () {
	document.body.style.cursor = 'pointer';
});

box.on('mouseout', function () {
	document.body.style.cursor = 'default';
});

layer.add(box);
stage.add(layer);
