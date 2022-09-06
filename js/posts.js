export default class Posts {
  constructor() {
    this.canvasSetup()
  }

  canvasSetup() {
    "use strict";
    let canvas;
    let context;

    window.onload = init;

    function init(){
        // Get a reference to the canvas
        canvas = document.getElementById('post-canvas-setup');
        if (!canvas) return
        context = canvas.getContext('2d');
        draw();
    }

    function draw(){
      // Get a random color, red or blue
      let randomColor = Math.random() > 0.5? '#ff8080' : '#0099b0';

      // Draw a rectangle
      context.fillStyle = randomColor;
      context.fillRect(100, 50, 200, 175);
    }
  }
}