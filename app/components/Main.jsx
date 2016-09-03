var React = require('react');
var Weather = require('Weather');
var Nav = require('Nav');

var Main = (props) =>{
        return(
            <div>
                <Nav/>
                {props.children}
            </div>
        );
};

module.exports=Main;