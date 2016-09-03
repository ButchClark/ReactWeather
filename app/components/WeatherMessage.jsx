var React = require('react');

var WeatherMessage = (props) => <p>It is {props.temp} in {props.location}</p>;

module.exports=WeatherMessage;