var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./components/App.js');
var rootElement = document.body;

console.log('ReactDOM is rendering! Yatta!');

ReactDOM.render(
  <App />,
  rootElement
);
