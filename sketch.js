/*
Parting
by Amy Cheng
2013
*/
var _width = window.innerWidth;
var _height = window.innerHeight;
var factor = 300;
var linesCount = 100;
var lines = [];


function ln (seed,start){
  var _this = this;
  this.seed = seed;
  this.start = start;
  this.render = function(){
    beginShape();
    vertex(0,_this.start);
    vertex(_width,_this.start+_this.seed);
    endShape(CLOSE);
  };
  this.animate = function(){
    if ((Math.floor(seed))%3!==0) {
      if ((Math.floor(seed))%2===0) {
        _this.seed++;
        _this.start++;
      }else{
        _this.seed--;
        _this.start--;
      }
    }
  };
}

function setup() {
  createCanvas(_width, _height);
  for (var i = 0; i < linesCount; i++) {
    lines[i] = new ln(random(-factor,factor),random(0,_height));
    lines[i].render();
  }
}


function mouseMoved(){
  background(255,50);
  for (var i = 0; i < linesCount; i++) {
    lines[i].animate();
    lines[i].render();
  }
}

function mouseClicked(){
   background(255,170);
  for (var i = 0; i < linesCount; i++) {
    lines[i].animate();
    lines[i].render();
  }
}