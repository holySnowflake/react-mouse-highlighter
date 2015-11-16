var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({

  // getDefaultProps: function(){
  //   var self = this;
  //   self.state.context.lineWidth = 5;
  //   self.state.context.strokeStyle = 'yellow';
  //   self.state.context.strokeOpacity = 0.5;
  // }

  getInitialState: function(){
    var mouse, last_mouse;
    return {
      last_mouse: {
        x: 0,
        y: 0
      },
    };
  },


//actual drawing function.
  paintOnCanvas: function(){
    var self = this;
    var context = self.state.context;
    if (self.state.context) {
      context.beginPath();
      context.moveTo(self.state.last_mouse.x, self.state.last_mouse.y);
      context.lineTo(self.state.mouse.x, self.state.mouse.y);
      context.stroke();
    }
  },

//when and while the mouseMoves,
  mouseMove: function(mouseMoveEvent) {
    var self = this;
    self.state.last_mouse.x = self.state.mouse.x;
    self.state.last_mouse.y = self.state.mouse.y;
    self.state.mouse.x = event.pageX - canvas.offsetLeft;
    self.state.mouse.y = event.pageY - canvas.offsetTop;
    this.paintOnCanvas();
  },

  componentDidMount: function(){
    var self = this;
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    self.state.context = context;

    window.onmousedown = function(event){
      if (!self.state.mouse) {
        self.setState({
          mouse:{
            x: event.pageX - canvas.offsetLeft,
            y: event.pageY - canvas.offsetTop
          }
        })
      };
      window.addEventListener("mousemove", self.mouseMove);
    };

    window.onmouseup = function(event){
      self.setState({
        mouse: null
      })
      window.removeEventListener("mousemove", self.mouseMove);
    };
  },

  render: function() {
    return (
      <canvas id='canvas' width='400' height='300'></canvas>
    )
  }
});

module.exports = App;
