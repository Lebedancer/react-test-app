import React from 'react'
import actions from '../../actions/app-actions';

export default React.createClass({
    handleClick: function() {
        actions.increaseItem(this.props.index);
    },
    render: function() {
        return <button onClick={this.handleClick}>+</button>
    },
})