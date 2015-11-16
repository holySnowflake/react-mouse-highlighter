var React = require('react');

var App = React.createClass({

  getInitialState: function(){
    var mouse, last_mouse;
    return {
      mouse: {
        x: 0,
        y: 0
      },
      last_mouse: {
        x: 0,
        y: 0
      },
    };
  },

    // context.lineWidth = 5;
    // context.strokeStyle = 'yellow';
    // context.strokeOpacity = 0.5;

  paintOnCanvas: function(){
    var self = this;
    var context = self.state.context;
    if (this.state.context) {
      context.beginPath();
      context.moveTo(self.state.last_mouse.x, self.state.last_mouse.y);
      context.lineTo(self.state.mouse.x, self.state.mouse.y);
      context.stroke();
    }
  },

  mouseMove: function(mouseMoveEvent) {
    var self = this;
    self.state.last_mouse.x = self.mouse.x;
    self.state.last_mouse.y = self.mouse.y;
    self.state.mouse.x = event.pageX - this.offsetLeft;
    self.state.mouse.y = event.pageY - this.offsetTop;
  },

  componentDidMount: function(){
    var self = this;
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    self.state.context = context;

    window.onmousedown = function(event){
      window.onmousemove = self.mouseMove;
    };

    window.onmouseup = function(event){
      window.detachEvent("onmousemove", self.mouseMove);
    };
  },

  render: function() {
    this.paintOnCanvas();
    return (
      <canvas id='canvas' width='400' height='300'></canvas>
    )
  }
});

module.exports = App;
