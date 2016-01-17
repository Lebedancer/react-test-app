import React from 'react'
import actions from '../../actions/app-actions';

export default React.createClass({
    handleClick: function() {
        actions.decreaseItem(this.props.index);
    },
    render: function() {
        return <button onClick={this.handleClick}>-</button>
    },
})