var React = require('react');
var WeatherInput = require('WeatherInput');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function () {
        return ({isLoading: false});
    },

    handleSearch: function (location) {
        var that = this;

        debugger;
        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp
            })
        },function(errorMessage){
            that.setState({isLoading: false});
            alert(errorMessage);
        });
        this.setState({isLoading: false});
    },

    render: function () {
        var getWeather= function(that){
            console.log(">> Entering Weather.getWeather() function...");

            var {isLoading, location, temp} = that.state;
            if(isLoading){
                return(<h3>Getting weather...</h3>);
            }else if(location && temp){
                return(<WeatherMessage location={location} temp={temp}></WeatherMessage>);
            }
        };
        return (
            <div>
                <h2>Get Weather</h2>
                <WeatherInput onSearch={this.handleSearch}></WeatherInput><br/>
                {getWeather(this)}
            </div>
        );
    }
});

module.exports = Weather;