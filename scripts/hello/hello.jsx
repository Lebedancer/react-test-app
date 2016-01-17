import React from 'react';
import Input from './input.jsx';
import Text from './text.jsx';

export default React.createClass({
    displayName: 'HelloReact',
    getInitialState: function() {
        return {
            someName: 'state'
        }
    },
    getDefaultProps: function() {
        return {
            someName: 'sdfdsf',
            cat: 234
        }
    },
    propTypes: {
        someName: React.PropTypes.string,
        cat: React.PropTypes.number.isRequired
    },
    update: function() {
        this.setState({
            red: this.refs.red.getDOMNode().value,
            green: this.refs.green.getDOMNode().value,
            blue: this.refs.blue.getDOMNode().value
        })
    },
    render: function() {
        return  <div>
            <Input ref='red' update={this.update} />
            <Input ref='green' update={this.update} />
            <Input ref='blue' update={this.update} />
            <Text colors={this.state} />
        </div>
    }
});