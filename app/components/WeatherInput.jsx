var React = require('react');

var WeatherInput = React.createClass({

    onFormSubmit: function (event) {
        event.preventDefault();

        var location = this.refs.location.value;
        if( location.length > 0){
            this.refs.location.value = '';
            this.props.onSearch(location);
        }
    },

    render: function () {
        return (
            <form onSubmit={this.onFormSubmit}>
                <input ref="location" type="text" placeholder="Enter city name"/><br/>
                <button>Get Weather</button>
            </form>
        );
    }
});


module.exports = WeatherInput;